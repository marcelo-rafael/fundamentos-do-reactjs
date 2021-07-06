import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import * as S from './styles'

interface RepositoryParams {
  repository: string;
}

export function Repository() {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <S.Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </S.Header>

      <S.RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/29902777?v=4"
            alt="Marcelo Rafael Gonçalves" />
          <div>
            <strong>\Marcelo</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1000</strong>
            <span>Star</span>
          </li>
          <li>
            <strong>1000</strong>
            <span>Star</span>
          </li>
          <li>
            <strong>1000</strong>
            <span>Star</span>
          </li>
        </ul>
      </S.RepositoryInfo>

      <S.Issues>
        <Link to="jajajajaja">

          <div>
            <strong>hhahahaha</strong>
            <p>jjajajajaja</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </S.Issues>
    </>
  )
}