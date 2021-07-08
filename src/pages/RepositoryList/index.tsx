import { useState, useEffect } from 'react';
import { RepositoryItem } from "../RepositoryItem";

import * as S from './styles'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/marcelo-rafael/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <S.Section>
      <S.Title>Github Explorer</S.Title>

      <S.RepositoryList>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}

      </S.RepositoryList>
    </S.Section>
  )
}