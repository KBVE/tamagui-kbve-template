import {
  Anchor,
  Button,
  H1,
  H2,
  Paragraph,
  Text,
  Separator,
  Theme,
  Sheet,
  useToastController,
  Card,
  CardProps,
  Image,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp, LogIn } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {

  const linkProps = useLink({
    href: '/user/guest',
  })
  const registerProps = useLink({
    href: '/auth/register',
  })


  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <XStack $sm={{ flexDirection: 'row' }} paddingHorizontal="$4" space>
        <EarthCard
          animation="bouncy"
          size="$4"
          width={200}
          height={250}
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        />
        <MoonCard
          animation="bouncy"
          size="$4"
          width={200}
          height={250}
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
        />
       
      </XStack>
      <YStack space="$4" maw={600}>
      
        <H1 ta="center">Welcome to RentEarth.com</H1>
        <Paragraph ta="center">
          Proof of concept of Tamagui based application for the website.
        </Paragraph>

        <Separator />
        
      </YStack>

      <XStack space="$2">
        <Button {...linkProps} size="$5" icon={LogIn} m="$1">
          Login
        </Button>
        <Button {...registerProps} size="$5" color="#e879f9" m="$1">
          Register
        </Button>
      </XStack>

      <HomeSheet>
      <Paragraph ta="center">
          Project Docs located{' '}
          <Anchor color="$color12" href="https://kbve.com/project/rentearth/" target="_blank">
            Rent Earth Project
          </Anchor>
          , and actively developed by{' '}
          <Anchor color="#e879f9" href="https://kbve.com/" target="_blank">
            Kilo Byte Virtual Enterprise.
          </Anchor>{' '}
        </Paragraph>
      </HomeSheet>
    </YStack>
  )
}

//?   [Cards]

function EarthCard(props: CardProps) {
 
  const earthProps = useLink({
    href: '/shop/earth',
  })

  return (
    <Card elevate size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>Earth</H2>
        <Paragraph theme="alt2" color="#e879f9">
          Unavailable
        </Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$10" {...earthProps}>Rent</Button>
      </Card.Footer>
      <Card.Background>
        <Image
          resizeMode="cover"
          alignSelf="center"
          source={{
            width: 300,
            height: 300,
            uri: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4',
          }}
          opacity={0.3}
          backgroundColor={'#f1f1f1'}
        />
      </Card.Background>
    </Card>
  )
}

function MoonCard(props: CardProps) {
  const moonProps = useLink({
    href: '/shop/moon',
  })

  return (
    <Card elevate size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>Moon</H2>
        <Paragraph theme="alt2" color="#e879f9">
          Now available
        </Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$10" {...moonProps}>Rent</Button>
      </Card.Footer>
      <Card.Background>
        <Image
          resizeMode="cover"
          alignSelf="center"
          source={{
            width: 300,
            height: 300,
            uri: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?&auto=format&fit=crop&w=300&q=80',
          }}
          opacity={0.9}
          loadingIndicatorSource={{}}
        />
      </Card.Background>
    </Card>
  )
}

//?

function HomeSheet({children}) {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        
        <Sheet.Frame ai="center" jc="center">
        {children}
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Swipe right to dismiss!...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
