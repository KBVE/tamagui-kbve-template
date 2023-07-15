import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
          headerStyle: { backgroundColor : '#343341'},
          headerShown: false,
          animation: "fade",
        }}
        
      />
      <HomeScreen />
    </>
  )
}
