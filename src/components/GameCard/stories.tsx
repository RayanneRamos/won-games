import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: '/images/population-zero.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFavorite: {
      action: 'clicked'
    },
    ribbon: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
