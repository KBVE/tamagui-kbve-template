import { Button, Form, H3, H4, SizableText, Spinner, XStack, YStack } from 'tamagui'

import React, { useEffect, useState } from 'react'

import { email$, password$, flow$, status$, tasker, VE } from './library/Storage'
import { FormField, FormLink } from './library/Form'
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
        <Form
          alignItems="center"
          minWidth={350}
          space
          onSubmit={() => tasker(status$, 'submitting')}
          borderWidth={1}
          borderRadius="$4"
          backgroundColor="$background"
          borderColor="$borderColor"
          padding="$8"
        >
          <SizableText fontSize={12} fontFamily="$body">
            {' '}
            A more productive you is waiting inside this app. Please enter your details.
          </SizableText>

          <FormField data={'Email'} storage={email$} />
          <FormField data={'Password'} storage={password$} />
          <Form.Trigger asChild disabled={$status !== undefined}>
            <Button
              icon={$status === 'submitting' ? () => <Spinner padding={'$1'} m="$1" /> : undefined}
            >
              Log In
            </Button>
          </Form.Trigger>
          <H4>{$status ?? ''}</H4>
        </Form>
      </XStack>

      <FormLink data={'Forgot Password?'} link={'/account/recover'} />
      <FormLink data={"Don't have an account? Sign Up!"} link={'/account/register'} />
    </YStack>
  )
}
