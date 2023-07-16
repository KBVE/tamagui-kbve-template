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
  
  export const RecoveryForm = () => {
    const [status, setStatus] = useState<'ready' | 'submitting' | 'submitted'>('ready')
  
    const [recover, setRecover] = useState('')

    useEffect(() => {
      if (status === 'submitting') {
        const timer = setTimeout(() => setStatus('ready'), 4000)
        return () => {
          clearTimeout(timer)
          console.log(recover)
        }
      }
    }, [status])
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
            onSubmit={() => setStatus('submitting')}
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
                onChangeText={setRecover}
                value={recover}
                placeholder="Your Email!"
              />
            </XStack>
         
  
            <Form.Trigger asChild disabled={status !== 'ready'}>
              <Button
                icon={status === 'submitting' ? () => <Spinner padding={'$1'} m="$1" /> : undefined}
              >
                Request Password
              </Button>
            </Form.Trigger>
            <H4>{status[0].toUpperCase() + status.slice(1)}</H4>
          </Form>
        </XStack>
      </YStack>
    )
  }
  