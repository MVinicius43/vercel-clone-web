import {
  Box,
  Button,
  Flex,
  Img,
  Text
} from '@chakra-ui/react'

import { CgArrowsScrollV } from 'react-icons/cg'

import profile from '../assets/profile.jfif'
import icon from '../assets/icon.png'
import bar from '../assets/bar.png'
import btn from '../assets/button.png'

export const NavBar = () => {

  return (
    <Flex
      width="100%"
    >
      <Flex
        position="relative"
        flexDirection="row"
        padding="0 150px"
        maxWidth="calc(var(1200px) + calc(2 * var(24px)))"
        margin="auto"
        height="64px"
        background="#000000"
        width="100%"
        justifyContent="space-between"
      >
        <Flex
          flexDirection="row"
          paddingRight="24px"
          alignItems="center"
          minWidth="0"
          margin="0"
          padding="0"
        >
          <Img
            src={icon}
            width="32px"
            height="32px"
          />

          <Img
            src={bar}
            width="32px"
            height="32px"
            margin="0 8px"
          />

          <Img
            src={profile}
            width="32px"
            height="32px"
            borderRadius="100%"
            border="1px solid gray"
          />

          <Text
            color="#ffffff"
            fontFamily="Inter"
            fontWeight="500"
            fontSize="14px"
            lineHeight="20px"
            padding="0 8px"
          >
            mvinicius43
          </Text>

          <Flex
            alignItems="center"
            justifyContent="center"
            color="#0a0a0a"
            fontFamily="Inter"
            fontWeight="500"
            fontSize="12px"
            lineHeight="12px"
            backgroundColor="#a3a3a3"
            paddingLeft="0.5rem"
            paddingRight="0.5rem"
            borderRadius="20px"
            height="1.25rem"
          >
            Hobby
          </Flex>

          <Button
            marginLeft="4px"
            flexShrink="0"
            padding="0px 8px"
            width="2px"
            backgroundColor="rgba(0,0,0,.75)"
            _hover={{
              bg: "#666",
              marginLeft: "8px"
            }}
          >
            <CgArrowsScrollV
              color="#fff"
            />
          </Button>
        </Flex>

        <Flex
          flexDirection="row"
          paddingRight="24px"
          alignItems="center"
          minWidth="0"
          margin="0"
          padding="0"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontFamily="Inter"
            fontWeight="400"
            fontSize="14px"
            lineHeight="21px"
            color="#888"
            bg="#transparent"
            border="1px solid #333"
            borderRadius="5px"
            width="90px"
            height="32px"
            cursor="pointer"
            _hover={{
              border: "1px solid #ffffff",
              transition: "1s"
            }}
          >
            Feedback
          </Box>

            <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontFamily="Inter"
            fontWeight="400"
            fontSize="14px"
            lineHeight="21px"
            color="#888"
            bg="#transparent"
            borderRadius="5px"
            marginLeft="20px"
            height="32px"
            cursor="pointer"
            _hover={{
              color: "#ffffff",
              transition: ".8s"
            }}
          >
            Changelog
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontFamily="Inter"
            fontWeight="400"
            fontSize="14px"
            lineHeight="21px"
            color="#888"
            bg="#transparent"
            borderRadius="5px"
            height="32px"
            cursor="pointer"
            marginLeft="20px"
            _hover={{
              color: "#ffffff",
              transition: ".8s"
            }}
          >
            Help
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontFamily="Inter"
            fontWeight="400"
            fontSize="14px"
            lineHeight="21px"
            color="#888"
            borderRadius="5px"
            cursor="pointer"
            bg="#transparent"
            marginLeft="20px"
            _hover={{
              color: "#ffffff",
              transition: ".8s"
            }}
          >
            Docs
          </Box>

          <Img
            src={profile}
            width="32px"
            height="32px"
            marginLeft="20px"
            borderRadius="100%"
            border="1px solid gray"
            cursor="pointer"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}