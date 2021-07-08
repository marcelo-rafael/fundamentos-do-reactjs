import styled from 'styled-components'

export const List = styled.li`
  border-radius: 0.8rem;
  padding: 15px;
  box-shadow: inset 2px 2px 10px var(--dark-shadow),
    inset -2px -2px 10px var(--clear-shadow);

  & + li {
    margin-top: 20px;
  }
`

export const Paragraph = styled.p`
  font-size: 14px;
  color: #444;
  margin-top: 8px;
  opacity: 70%;
`

export const Link = styled.a`
  display: inline-block;
  margin-top: 16px;
  text-decoration: none;
  color: var(--dark);
  font-size: 90%;
  font-weight: 400;

  a:hover {
    font-weight: 600;
  }
`
