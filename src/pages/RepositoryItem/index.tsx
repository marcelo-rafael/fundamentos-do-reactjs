import * as S from './styles'

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <S.List>
      <strong>{props.repository.name}</strong>
      <S.Paragraph>{props.repository.description}</S.Paragraph>

      <S.Link
        href={props.repository.html_url}>
        Acessar repositório
      </S.Link>
    </S.List>
  )
}