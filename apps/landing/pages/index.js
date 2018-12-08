import React from "react"
import { Box, Text, Image } from "rebass"

const LandingPage = () => (
  <Box>
    <Image width={[1 / 3, 1 / 4]} src="/static/logo.png" borderRadius={8} />
    <Text fontSize={[6, 7, 8]} fontWeight="bold">
      CommuniTii
    </Text>
    <Text fontSize={[2, 3, 4]}>The Game of Life is Better Together</Text>
    <Text fontSize={[3, 4, 5]}>Coming Soon...</Text>

    <Text fontSize={[1]}>
      Got a question? Lets chat hello@communitiiapp.com
    </Text>
  </Box>
)

export default LandingPage
