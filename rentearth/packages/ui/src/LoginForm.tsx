import {
  H1,
  H2,
  Paragraph,
  Input,
  Label,
  Card,
  Image,
  Button,
  Form,
  Text,
  H3,
  H4,
  SizeTokens,
  SizableText,
  Spinner,
  XStack,
  YStack,
  YGroup,
  Separator,
  ListItem,
} from 'tamagui'
import { useLink } from 'solito/link'
import { Eye, UserPlus } from '@tamagui/lucide-icons'

import React, { useEffect, useState } from 'react'

import { email$, password$, flow$, status$, tasker } from './library/Storage'
import { FormField } from './library/Form'
import { useStore } from '@nanostores/react'

export const LoginForm = () => {

  const $status = useStore(status$)
  const $flow = useStore(flow$);
  const $email = useStore(email$);
  const $password = useStore(password$);


  useEffect(() => {
    console.log(`Current Status: ${$status}`);
    if ($status === 'submitting') {
      const timer = setTimeout(() =>tasker(status$, undefined), 4000)
      return () => {
        clearTimeout(timer)
        console.log(`[DEBUG] : Status: ${$status}`)
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

          <FormField data={"email"} storage={email$} />
          <FormField data={"password"} storage={password$} />
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
      <XStack alignItems="center" space="$1">
          <Button
            {...useLink({
              href: '/account/recover',
            })}
          >
            <H3>Forgot Password?</H3>
          </Button>
        </XStack>
        <XStack alignItems="center" space="$1">
          <Button
            {...useLink({
              href: '/account/register',
            })}
          >
            <H3>Don't have an account? Sign Up!</H3>
          </Button>
        </XStack>
    </YStack>
  )
}
