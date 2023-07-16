import { Button, Paragraph, YStack, RegisterForm, LoginForm, RecoveryForm, Form } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

const AccountRender = (props: { id?: string }) => {
  switch (props.id) {
    case 'register':
      return <RegisterForm />
    case 'login':
      return <LoginForm />
    case 'recover':
      return <RecoveryForm />
    default:
      return (
        <>
          <Paragraph ta="center" fow="700">{`Auth ID: ${props.id}`}</Paragraph>
        </>
      )
  }
}

export function Account() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    <YStack f={1} jc="center" ai="center" backgroundColor={"#000"} space>
      <AccountRender id={id} />
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
