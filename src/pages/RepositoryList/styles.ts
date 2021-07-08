import styled from 'styled-components'

export const Section = styled.section`
  margin: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
   position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 1.5rem;
    border-radius: 0.8rem;

    color: var(--dark);
    box-shadow: 5px 5px 10px var(--dark-shadow),
      -5px -5px 10px var(--clear-shadow);
`

export const RepositoryList = styled.ul`
  list-style: none;
    position: absolute;
    top: 140px;
    padding: 0 0 20px 0;
    width: 100%;

    .descricao {
      display: flex;
      justify-content: center;
      padding: 150px;
    }
`