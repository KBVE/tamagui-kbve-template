import { Auth } from 'app/features/auth/auth'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Auth',
          headerStyle: { backgroundColor : '#343341'},
          headerShown: false,
          animation: "slide_from_bottom",        }}
      />
      <Auth />
    </>
  )
}
