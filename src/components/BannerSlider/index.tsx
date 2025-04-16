import Banner, { BannerProps } from '../Banner'
import Slider, { SliderSettings } from '../Slider'
import * as S from './styles'

export type BannerSlideProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSlideProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => {
        return <Banner key={item.title} {...item} />
      })}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
