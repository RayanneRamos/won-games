import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src/styles/global'
import theme from '../src/styles/theme'
import React from 'react'
import { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'won-dark', value: theme.colors.mainBg },
        { name: 'won-light', value: theme.colors.white }
      ],
      default: 'won-dark'
    }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBackground />
      <Story />
    </ThemeProvider>
  )
]

export default preview
