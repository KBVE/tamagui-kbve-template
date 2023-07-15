import { Button, Paragraph, YStack, RegisterForm, Form } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

const AuthRender = (props: { id?: string }) => {
  switch (props.id) {
    case 'register':
      return <RegisterForm />
    default:
      return (
        <>
          <Paragraph ta="center" fow="700">{`Auth ID: ${props.id}`}</Paragraph>
        </>
      )
  }
}

export function Auth() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    <YStack f={1} jc="center" ai="center" backgroundColor={"#000"} space>
      <AuthRender id={id} />
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
