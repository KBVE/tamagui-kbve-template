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
import { useStore } from '@nanostores/react'

export const LoginForm = () => {
  const [status, setStatus] = useState<'ready' | 'submitting' | 'submitted'>('ready')

  const $status = useStore(status$)
  const $flow = useStore(flow$);
  const $email = useStore(email$);
  const $password = useStore(password$);


  useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('ready'), 4000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [status])
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
          onSubmit={() => setStatus('submitting')}
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

          <XStack alignItems="center" space="$1">
            <Label htmlFor={'email'} width={80} size={'$1'}>
              Email:{' '}
            </Label>
            <Input
              id={'email'}
              flex={1}
              size={'$4'}
              onChangeText={newText => tasker(email$, newText)}
              value={$email}
              defaultValue=""
              placeholder="Your Email!"
            />
          </XStack>
          <XStack alignItems="center" space="$1">
            <Label htmlFor={'password'} width={80} size={'$1'}>
              Password:{' '}
            </Label>
            <Input
              id={'password'}
              flex={1}
              size={'$4'}
              onChangeText={newText => tasker(password$, newText)}
              value={$password}
              secureTextEntry={true}
            />
          </XStack>

          <Form.Trigger asChild disabled={status !== 'ready'}>
            <Button
              icon={status === 'submitting' ? () => <Spinner padding={'$1'} m="$1" /> : undefined}
            >
              Log In
            </Button>
          </Form.Trigger>
          <H4>{status[0].toUpperCase() + status.slice(1)}</H4>
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
