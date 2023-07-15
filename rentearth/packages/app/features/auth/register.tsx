import { Button, Paragraph, YStack, RegisterForm, Form } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()


export function Register() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    <RegisterForm f={1} jc="center" ai="center" space>
      
      <Paragraph ta="center" fow="700">{`Register: ${id}`}</Paragraph>
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    
    </RegisterForm>
  )
}
