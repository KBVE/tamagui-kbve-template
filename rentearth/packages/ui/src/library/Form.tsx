//*     [IMPORTS]
import { Input, Label, Button, H3, XStack, Form, SizableText, H4, Spinner, Sheet } from 'tamagui'
import { Toast, useToastController, useToastState } from '@tamagui/toast'
import { ChevronDown, ChevronUp, LogIn } from '@tamagui/lucide-icons'
import React from 'react'
import { tasker, status$, toast$, error$, position$ } from './Storage'
import { useStore } from '@nanostores/react'
import { WritableAtom } from 'nanostores'
import { useLink } from 'solito/link'
//*     [DATA]
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
//?     [Form]:[Components]
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
      <Label htmlFor={props.data.concat(props.formId ?? '')} width={80} size={'$1'}>
        {`${props.data}:`}
      </Label>
      <Input
        id={props.data.concat(props.formId ?? '')}
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
//!     [FormForm]
export const FormForm = (props: FormConfig) => {
  const $status = useStore(status$) //* Status String
  const $error = useStore(error$) //* Error String
  const $toast = useStore(toast$) //* Toast Boolean State
  const $position = useStore(position$) //* Form Position State
  const toast = useToastController() //? Toast Controller
  return (
    <XStack space>
      <Form
        alignItems="center"
        minWidth={350}
        space
        onSubmit={() => {
          tasker(status$, 'submitting')
          tasker(toast$, true)
        }}
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
          </SizableText>
        )}
        {props.children}

        <Form.Trigger
          asChild
          disabled={$status !== undefined}
          onPress={() => console.log('Pressed!')}
        >
          <Button
            icon={$status === 'submitting' ? () => <Spinner padding={'$1'} m="$1" /> : undefined}
          >
            Log In
          </Button>
        </Form.Trigger>
        <H4>{$status ?? ''}</H4>
        <Sheet
          modal
          open={$toast ?? false}
          onOpenChange={(open) => tasker(toast$, open)}
          snapPoints={[80]}
          position={$position}
          onPositionChange={(position) => tasker(position$, position)}
          dismissOnSnapToBottom
        >
          <Sheet.Overlay />

          <Sheet.Frame ai="center" jc="center">
            <SizableText fontSize={12} fontFamily="$body">
              {$error ?? ''}
            </SizableText>
            <Sheet.Handle />
            <Button
              size="$6"
              circular
              icon={ChevronDown}
              onPress={() => {
                tasker(toast$, false)
                tasker(error$, undefined)
                toast.show('Vash! The liquor store was closed!', {
                  message: 'Swipe right to dismiss! Don"t Shoot...',
                })
              }}
            />
          </Sheet.Frame>
        </Sheet>
      </Form>
    </XStack>
  )
}
