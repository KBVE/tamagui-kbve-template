import { styled, YStack } from 'tamagui'

export const Earth = styled(YStack, {
  name: 'Earth',
  backgroundColor: '#343341',

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
    },
  } as const,
})
