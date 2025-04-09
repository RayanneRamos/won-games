import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read Ded it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/read-dead-redemption-2'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
