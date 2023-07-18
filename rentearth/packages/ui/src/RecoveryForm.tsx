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

  import { email$, status$, tasker } from './library/Storage'
  import { useStore } from '@nanostores/react'

  
  export const RecoveryForm = () => {
  
    const $status = useStore(status$);
    const $email = useStore(email$);

    useEffect(() => {
      console.log(`Current Status: ${$status}`);
      if ($status === 'submitting') {
        const timer = setTimeout(() =>tasker(status$, undefined), 4000)
        return () => {
          clearTimeout(timer)
          console.log(`[DEBUG] : Status: ${$status}`)
        }
      }
    }, [$status])

    return (
      <YStack jc="center" ai="center" p="$4" space>
        <Button>
          <H3>Oh, no! You forgot?</H3>
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
            <SizableText fontSize={12} fontFamily="$body">
              {' '}
              Enter your email and we'll send you a link to change a new password!

            </SizableText>
  
            <XStack alignItems="center" space="$1">
              <Label htmlFor={'recover'} width={80} size={'$1'}>
                Recover:{' '}
              </Label>
              <Input
                id={'recover'}
                flex={1}
                size={'$4'}
                onChangeText={newText => tasker(email$, newText)}
                value={$email  ?? ''}
                placeholder="Your Email!"
              />
            </XStack>
         
  
            <Form.Trigger asChild disabled={$status !== undefined}>
              <Button
                icon={$status === 'submitting' ? () => <Spinner padding={'$1'} m="$1" /> : undefined}
              >
                Request Password
              </Button>
            </Form.Trigger>
            <H4>{$status  ?? ''}</H4>
          </Form>
        </XStack>
      </YStack>
    )
  }
  