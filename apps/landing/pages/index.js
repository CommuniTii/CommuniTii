import React from "react"
import { Flex, Text, Image } from "rebass"
import styled from "styled-components"

import GlobalStyle from "../lib/GlobalStyle"

const Container = styled.div`
  height: 100%;
`
const LandingPage = () => (
  <>
    <GlobalStyle />
    <Container>
      <Flex
        py={[1, 3, 5]}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Image width={[1 / 3, 1 / 4]} src="/static/logo.png" borderRadius={8} />
        <Text fontSize={[6, 7, 8]} fontWeight="bold">
          CommuniTii
        </Text>
        <Text fontSize={[2, 3, 4]}>The Game of Life is Better Together</Text>
        <Text fontSize={[3, 4, 5]}>Coming Soon...</Text>

        <Text fontSize={[1]}>
          Got questions? Email us hello@communitiiapp.com
        </Text>
      </Flex>
    </Container>
  </>
)

export default LandingPage
