import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Text,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/guest',
  })
  const registerProps = useLink({
    href: '/auth/register',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center" color="#F8F8F8">Welcome to RentEarth.com</H1>
        <Paragraph ta="center">
          Proof of concept of Tamagui based application for the website.
        </Paragraph>

        <Separator />
        <Paragraph ta="center">
          Project Docs located {' '}
          <Anchor color="$color12" href="https://kbve.com/project/rentearth/" target="_blank">
            Rent Earth Project
          </Anchor>
          ,{' '} and actively developed by <Anchor color="#e879f9" href="https://kbve.com/" target="_blank">
            Kilo Byte Virtual Enterprise.
          </Anchor>{' '}
         
        </Paragraph>
      </YStack>

      <XStack space="$2">
        <Button {...linkProps} size="$5"  m="$1">Login</Button>
        <Button {...registerProps}  size="$5"  color="#e879f9" m="$1" >Register</Button>
      </XStack>

      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
