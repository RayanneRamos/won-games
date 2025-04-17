import theme from '@/styles/theme'
import { Container } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = renderWithTheme(<Container></Container>)

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )
  })
})
