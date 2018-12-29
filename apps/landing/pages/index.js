import React from "react"
import { Flex, Text, Image } from "rebass"

const LandingPage = ({ classes }) => (
  <>
    <Flex
      style={{ height: "100vh" }}
      py={[1, 3, 5]}
      alignItems="center"
      flexDirection="column"
    >
      <Image
        width={[2 / 3, 2 / 3, 1 / 3, 1 / 7]}
        src="/static/logo.png"
        borderRadius={8}
      />
      <Text fontSize={[6, 7]} fontWeight="bold">
        CommuniTii
      </Text>
      <Text fontSize={[4, 3]}>The Game of Life is Better Together</Text>
      <Text fontSize={[5, 3]}>Coming Soon...</Text>

      <Text fontSize={[3]} style={{ paddingTop: "40vh" }}>
        Got questions? Email us hello@communitiiapp.com
      </Text>
    </Flex>
  </>
)

export default LandingPage
