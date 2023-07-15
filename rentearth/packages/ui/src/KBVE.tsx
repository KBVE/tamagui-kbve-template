import { styled, YStack } from 'tamagui'

export const KBVE = styled(YStack, {
  name: 'KBVE',
  backgroundColor: '#343341',

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
    },
  } as const,
})
