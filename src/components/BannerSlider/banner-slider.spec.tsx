import { render, screen } from '@testing-library/react'
import '../../../.jest/match-media-mock'

import BannerSlider from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const items = [
  {
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FsaWZvcm5pYXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    image:
      'https://images.unsplash.com/photo-1594365458706-6fab3472f681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FsaWZvcm5pYXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
    )
    expect(screen.getByRole('heading', { name: /defy death 2/i, hidden: true }))
  })
})
