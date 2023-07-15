import { H2, Paragraph, Card, Image,  Button, Form, H4, SizeTokens, Spinner, XStack, YStack} from 'tamagui'
import { useLink } from 'solito/link'
import React,{ useEffect, useState} from 'react'

export const RegisterForm = () => {
  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off')

  useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('off'), 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [status])
  return (
    <XStack space>
    <Form
      alignItems="center"
      minWidth={300}
      space
      onSubmit={() => setStatus('submitting')}
      borderWidth={1}
      borderRadius="$4"
      backgroundColor="$background"
      borderColor="$borderColor"
      padding="$8"
    >
      <H4>{status[0].toUpperCase() + status.slice(1)}</H4>

      <Form.Trigger asChild disabled={status !== 'off'}>
        <Button icon={status === 'submitting' ? () => <Spinner /> : undefined}>
          Submit
        </Button>
      </Form.Trigger>
    </Form>

    </XStack>
  )
}