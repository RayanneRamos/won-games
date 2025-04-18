import Link from 'next/link'
import Heading from '../Heading'
import Logo from '../Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>
        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        <a href="#">+55 21 33283719</a>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-label="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" lineBottom lineColor="secondary" size="small">
          Links
        </Heading>
        <nav aria-label="footer resources">
          <Link href="/">Loja</Link>
          <Link href="/games">Explorar</Link>
          <Link href="/search">Buscar</Link>
          <Link href="/search">FAQ</Link>
        </nav>
      </S.Column>
      <S.Column aria-label="footer-contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Rua 7 de maio</span>
        <span>527 - 89020330</span>
        <span>Rio de Janeiro, Brasil</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 &copy; All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
