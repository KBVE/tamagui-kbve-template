import { styled, YStack } from 'tamagui'

export const RegisterForm = styled(YStack, {
  name: 'Register',
  backgroundColor: '#343341',

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
    },
  } as const,
})
