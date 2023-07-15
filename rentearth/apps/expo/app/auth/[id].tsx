import { Register } from 'app/features/auth/register'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Register',
          headerStyle: { backgroundColor : '#343341'},
          headerShown: true,
          animation: "slide_from_bottom",        }}
      />
      <Register />
    </>
  )
}
