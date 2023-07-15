import { Button, H2, Paragraph, Card, Image, XStack } from 'tamagui'

import { useLink } from 'solito/link'
import React from 'react'

interface ShopCardConfig {
  link: string
  title: string
  paragraph: string
  image: string
  width: number
  height: number
  stock: number
}

export const ShopCard = (props: ShopCardConfig) => {
  const [fade, setFade] = React.useState(0)

  React.useEffect(() => {
    if (props.stock < 1) {
      setFade(0.3)
    } else {
      setFade(0.9)
    }
  }, [props])

  return (
    <Card
      elevate
      size="$4"
      bordered
      animation="bouncy"
      backgroundColor="$background"
      width={props.width}
      height={props.height}
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
    >
      <Card.Header padded>
        <H2>{props.title}</H2>
        <Paragraph theme="alt2" color="#e879f9">
          {props.paragraph}
        </Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button
          borderRadius="$10"
          {...useLink({
            href: props.link,
          })}
        >
          Rent
        </Button>
      </Card.Footer>
      <Card.Background>
        <Image
          resizeMode="cover"
          alignSelf="center"
          source={{
            width: props.width,
            height: props.height,
            uri: props.image,
          }}
          opacity={fade}
          backgroundColor={'#f1f1f1'}
        />
      </Card.Background>
    </Card>
  )
}
