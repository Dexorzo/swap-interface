import React from 'react'
import styled from 'styled-components'
import { Text, Button, HelpIcon, Link } from '@pancakeswap-libs/uikit'
// import { Text, ButtonMenu, ButtonMenuItem, Button, HelpIcon, Link } from '@pancakeswap-libs/uikit'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 16px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 240px;
  }
`

const VersionBar = () => {
  return (
    <Wrapper>
      <Text bold mr="16px">
      Pancake-Swap on BSC Testnet - Powered by DEXORZO
      </Text>
      {/* <ButtonMenu variant="primary" scale="sm" activeIndex={1}>
        <ButtonMenuItem as="a" href="https://exchange.pancakeswap.finance/">
          V2
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://v1exchange.pancakeswap.finance/#/">
          V1 (old)
        </ButtonMenuItem>
      </ButtonMenu> */}
      <Button
        variant="subtle"
        as={Link}
        href="https://github.com/Dexorzo/pancake-swap"
        endIcon={<HelpIcon color="white" />}
        scale="sm"
        ml="16px"
      >
        Github Source
      </Button>
    </Wrapper>
  )
}

export default VersionBar
