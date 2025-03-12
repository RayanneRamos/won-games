import * as S from './styles'

export function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/images/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/images/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  )
}
