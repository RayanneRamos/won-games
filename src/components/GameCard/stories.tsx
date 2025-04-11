import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'
import { backgrounds } from 'polished'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: '/images/population-zero.png',
    price: 'R$ 235,00'
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
