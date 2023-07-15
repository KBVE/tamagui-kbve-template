import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

/**
 * User Detail Screen : Boilerplate from the earlier template, will be replaced.
 * @returns 
 */
export function UserDetailScreen() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    <YStack f={1} jc="center" ai="center" space>
      
      <Paragraph ta="center" fow="700">{`User ID: ${id}`}</Paragraph>
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    
    </YStack>
  )
}

/**
 * 
 * 
 * 
const client = new Client();

client
    .setEndpoint('https://ap.kbve.com/v1')
    .setProject('6436a6dc9a6b48db802f');
 
 */