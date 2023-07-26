import { ToDo } from 'app/features/todo/todo'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'User',
          headerStyle: { backgroundColor : '#343341'},
          headerShown: false,
          animation: "slide_from_bottom",        }}
      />
      <ToDo />
    </>
  )
}
