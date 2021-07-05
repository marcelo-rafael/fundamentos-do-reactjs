import { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg';

import * as S from "./styles";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

export function Dashboard() {
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    // Adição de um novo repositório
    const response = await api.get<Repository>(`repos/${newRepo}`);
    // Consumir API do Github
    const repository = response.data
    // Salvar novo repositório no estado
    setRepositories([...repositories, repository])
    // deixar input vazio
    setNewRepo('')
  }

  return (
    <>
      <img src={logoImg} alt="Logo Github Explorer" />
      <S.Title>Explore repositórios no Github</S.Title>

      <S.Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={event => setNewRepo(event.target.value)}
          placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </S.Form>

      <S.Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}

      </S.Repositories>
    </>
  )
}