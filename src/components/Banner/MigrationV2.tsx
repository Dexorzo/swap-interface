import React from 'react'
import { Text, Flex, Box, ErrorIcon } from '@pancakeswap-libs/uikit'
import Banner from './Banner'

const MigrationV2 = () => {
  return (
    <Banner
      title={
        <Flex alignItems="center">
          <ErrorIcon color="white" width="32px" mr="16px" />
          <Text color="white" fontSize="24px" bold>
            SWAP ON TESTNET!
          </Text>
        </Flex>
      }
    >
      <Box ml="48px">
        <Text color="warning" bold>
            Pancakeswap Testnet instance working with router addr
            &#39;0x4593Ec1218190DDDE6bC293bE3ba4c765dC7Fb0a&#39;.
        </Text>
      </Box>
    </Banner>
  )
}

export default MigrationV2
