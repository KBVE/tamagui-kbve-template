import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

const ToDoRender = (props: { id?: string }) => {
  switch (props.id) {
    default:
      return (
        <>
          <Paragraph ta="center" fow="700">{`ToDo ID: ${props.id}`}</Paragraph>
        </>
      )
  }
}

export function ToDo() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    <YStack f={1} jc="center" ai="center" backgroundColor={"#000"} space>
      <ToDoRender id={id} />
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
