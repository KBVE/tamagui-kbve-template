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
  ListItem
} from 'tamagui'
import { useLink } from 'solito/link'
import { Eye, UserPlus } from '@tamagui/lucide-icons'

import React, { useEffect, useState } from 'react'

export const RegisterForm = () => {
  const [status, setStatus] = useState<'ready' | 'submitting' | 'submitted'>('ready')

  const [name, SetName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [hidePass, setHidePass] = useState(true)

  useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('ready'), 4000)
      return () => {
        clearTimeout(timer)
        console.log(email)
      }
    }
  }, [status])
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
          onSubmit={() => setStatus('submitting')}
          borderWidth={1}
          borderRadius="$4"
          backgroundColor="$background"
          borderColor="$borderColor"
          padding="$8"
        >
          <SizableText fontSize={20} fontFamily="$body" >
            {' '}
            Lets create an account
          </SizableText>
         
          <XStack alignItems="center" space="$1">
            <Label htmlFor={'username'} width={80} size={'$1'}>Username: </Label>
            <Input id={"username"} flex={1} size={'$4'} onChangeText={SetName} value={name} defaultValue='' placeholder='Your Username!'  />
          </XStack>
          <XStack alignItems="center" space="$1">
            <Label htmlFor={'email'} width={80} size={'$1'}>Email: </Label>
            <Input id={"email"} flex={1} size={'$4'} onChangeText={setEmail} value={email} defaultValue='' placeholder='Your Email!' />
          </XStack>
          <XStack alignItems="center" space="$1">
            <Label htmlFor={'password'}  width={80} size={'$1'}>Password: </Label>
            <Input
              id={"password"}
              flex={1}
              size={'$4'}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
          </XStack>
          <XStack alignItems="center" space="$1">
            <Label htmlFor={'password'}  width={80} size={'$1'}>Confirm: </Label>
            <Input
              flex={1}
              size={'$4'}
              onChangeText={setConfirm}
              value={confirm}
              secureTextEntry={hidePass ? true : false}
            />
          </XStack>
          <Form.Trigger asChild disabled={status !== 'ready'}>
            <Button
              icon={status === 'submitting' ? () => <Spinner padding={'$1'} m="$1" /> : undefined}
            >
              Submit
            </Button>
          </Form.Trigger>
          <H4>{status[0].toUpperCase() + status.slice(1)}</H4>
        </Form>
      </XStack>
    </YStack>
  )
}
