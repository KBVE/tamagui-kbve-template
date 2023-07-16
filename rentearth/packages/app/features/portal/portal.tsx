import { Button, Paragraph, YStack, Form } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

const PortalRender = (props: { id?: string }) => {
  switch (props.id) {
    
    default:
      return (
        <>
          <Paragraph ta="center" fow="700">{`Auth ID: ${props.id}`}</Paragraph>
        </>
      )
  }
}

export function Portal() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    <YStack f={1} jc="center" ai="center" backgroundColor={"#000"} space>
      <PortalRender id={id} />
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}