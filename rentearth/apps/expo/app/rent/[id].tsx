import { RentShopScreen } from 'app/features/rent/shop-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Rent',
          headerStyle: { backgroundColor : '#343341'},
          headerShown: false,
          animation: "slide_from_bottom",        }}
      />
      <RentShopScreen />
    </>
  )
}
