import { Button, H3, XStack, YStack } from 'tamagui'
import { email$, password$, error$, status$ } from './library/Storage'
import { FormField, FormLink, FormForm } from './library/Form'
import { minionLogin, v0id } from './library/appwrite'
import { useStore } from '@nanostores/react'

export const LoginForm = () => {
  if (useStore(status$) === 'submitting') minionLogin(email$, password$, status$, error$)
  return (
    <YStack jc="center" ai="center" p="$4" space>
      <Button>
        <H3>Hi! Welcome</H3>
      </Button>
      <XStack space>
        <FormForm
          data={'A more productive you is waiting inside this app. Please enter your details!'}
        >
          <FormField formId={'login'} data={'Email'} storage={email$} />
          <FormField formId={'login'} data={'Password'} storage={password$} secure={true} />
        </FormForm>
      </XStack>
      <FormLink data={'Forgot Password?'} link={'/account/recover'} />
      <FormLink data={"Don't have an account? Sign Up!"} link={'/account/register'} />
    </YStack>
  )
}
