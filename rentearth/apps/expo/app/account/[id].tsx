import { Account } from 'app/features/account/account'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Account',
          headerStyle: { backgroundColor : '#343341'},
          headerShown: false,
          animation: "slide_from_bottom",        }}
      />
      <Account />
    </>
  )
}
