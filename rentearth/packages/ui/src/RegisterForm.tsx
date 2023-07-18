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

import { email$, password$, flow$, status$, user$, tasker } from './library/Storage'
import { useStore } from '@nanostores/react'

export const RegisterForm = () => {

  const [confirm, setConfirm] = useState('')
  const [hidePass, setHidePass] = useState(true)

  const $status = useStore(status$)
  const $user = useStore(user$)
  const $email = useStore(email$)
  const $password = useStore(password$)

  useEffect(() => {
    console.log(`Current Status: ${$status}`)
    if ($status === 'submitting') {
      const timer = setTimeout(() => tasker(status$, undefined), 4000)
      return () => {
        clearTimeout(timer)
        console.log(`[DEBUG] : Status: ${$status}`)
      }
    }
  }, [$status])

  return (
    <YStack jc="center" ai="center" p="$4" space>
      <Button>
        <H3>Welcome on board!</H3>
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
          <SizableText fontSize={20} fontFamily="$body">
            {' '}
            Lets create an account
          </SizableText>

          <XStack alignItems="center" space="$1">
            <Label htmlFor={'registerUsername'} width={80} size={'$1'}>
              Username:{' '}
            </Label>
            <Input
              id={'registerUsername'}
              flex={1}
              size={'$4'}
              onChangeText={newText => tasker(user$, newText)}
              value={$user  ?? ''}
              placeholder="Your Username!"
            />
          </XStack>
          <XStack alignItems="center" space="$1">
            <Label htmlFor={'registerEmail'} width={80} size={'$1'}>
              Email:{' '}
            </Label>
            <Input
              id={'registerEmail'}
              flex={1}
              size={'$4'}
              onChangeText={newText => tasker(email$, newText)}
              value={$email  ?? ''}
              placeholder="Your Email!"
            />
          </XStack>
          <XStack alignItems="center" space="$1">
            <Label htmlFor={'registerPassword'} width={80} size={'$1'}>
              Password:{' '}
            </Label>
            <Input
              id={'registerPassword'}
              flex={1}
              size={'$4'}
              onChangeText={newText => tasker(password$, newText)}
              value={$password ?? ''}
              secureTextEntry={true}
            />
          </XStack>
          <XStack alignItems="center" space="$1">
            <Label htmlFor={'confirm'} width={80} size={'$1'}>
              Confirm:{' '}
            </Label>
            <Input
              id={'confirm'}
              flex={1}
              size={'$4'}
              onChangeText={setConfirm}
              value={confirm ?? ''}
              secureTextEntry={hidePass ? true : false}
            />
          </XStack>
          <Form.Trigger asChild disabled={$status !== undefined}>
            <Button
              icon={$status === 'submitting' ? () => <Spinner padding={'$1'} m="$1" /> : undefined}
            >
              Register
            </Button>
          </Form.Trigger>
          <H4>{$status ?? ''}</H4>
        </Form>
      </XStack>
    </YStack>
  )
}
