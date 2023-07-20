import { Button, Form, H3, H4, SizableText, Spinner, XStack, YStack } from 'tamagui'

import React, { useEffect, useState } from 'react'

import { email$, password$, flow$, status$, tasker, VE } from './library/Storage'
import { FormField, FormLink, FormForm } from './library/Form'
import { useStore } from '@nanostores/react'

export const LoginForm = () => {
  const $status = useStore(status$)

  useEffect(() => {
    if ($status === 'submitting') {
      const timer = setTimeout(() => tasker(status$, undefined), 4000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [$status])
  return (
    <YStack jc="center" ai="center" p="$4" space>
      <Button>
        <H3>Hi! Welcome</H3>
      </Button>
      <XStack space>
        <FormForm data={'A more productive you is waiting inside this app. Please enter your details!'}>

          <FormField formId={'login'} data={'Email'} storage={email$} />
          <FormField formId={'login'} data={'Password'} storage={password$} secure={true} />
        
        </FormForm>
          
      </XStack>

      <FormLink data={'Forgot Password?'} link={'/account/recover'} />
      <FormLink data={"Don't have an account? Sign Up!"} link={'/account/register'} />
    </YStack>
  )
}
