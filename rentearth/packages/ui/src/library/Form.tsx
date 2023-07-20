import { Input, Label, Button, H3, XStack, Form, SizableText, H4, Spinner } from 'tamagui'
import { Toast, useToastController, useToastState } from '@tamagui/toast'

import { tasker, status$ } from './Storage'
import { useStore } from '@nanostores/react'
import { WritableAtom } from 'nanostores'

import { useLink } from 'solito/link'

interface FieldConfig {
  data: string
  storage: WritableAtom
  formId?: string
  secure?: boolean
}

interface LinkConfig {
  data: string
  link: string
  formId?: string
}

interface FormConfig {
  children: React.ReactNode
  data?: string

}

export const FormLink = (props: LinkConfig) => {
  return (
    <XStack alignItems="center" space="$1">
      <Button
        {...useLink({
          href: props.link,
        })}
      >
        <H3>{props.data}</H3>
      </Button>
    </XStack>
  )
}

export const FormField = (props: FieldConfig) => {
  return (
    <XStack alignItems="center" space="$1">
      <Label htmlFor={(props.data).concat(props.formId ?? '')} width={80} size={'$1'}>
        {`${props.data}:`}
      </Label>
      <Input
        id={(props.data).concat(props.formId ?? '')}
        flex={1}
        size={'$4'}
        onChangeText={(newText) => tasker(props.storage, newText)}
        value={useStore(props.storage) ?? ''}
        placeholder={`Your ${props.data}!`}
        secureTextEntry={props.secure ?? false}
      />
    </XStack>
  )
}

export const FormForm = (props: FormConfig) => {
  const $status = useStore(status$)
  return (
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
      {props.data && (

      <SizableText fontSize={12} fontFamily="$body">
        {' '}
        {props.data}
      </SizableText>)}
      {props.children}

      <Form.Trigger asChild disabled={$status !== undefined}>
        <Button
          icon={$status === 'submitting' ? () => <Spinner padding={'$1'} m="$1" /> : undefined}
        >
          Log In
        </Button>
      </Form.Trigger>
      <H4>{$status ?? ''}</H4>
    </Form>
  </XStack>
  )
}
export const FormToast = () => {

}
