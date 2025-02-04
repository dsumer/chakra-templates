import {
  Box,
  Button,
  Container,
  DarkMode,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Head from "next/head";

import { HeaderBackground } from "./HeaderBackground";

export const Header = () => {
  return (
    <DarkMode>
      <Head>
        <title>
          Chakra Templates - A collection of responsive Chakra UI Templates
        </title>
        <meta
          name={"description"}
          content={
            "A collection of responsive Chakra UI Templates ready to drop into your React project"
          }
        />
      </Head>
      <Box
        color={"white"}
        bgGradient="linear(to-r, gray.900, teal.900)"
        borderBottom={3}
        borderStyle={"solid"}
        borderColor={"teal.100"}
        position={"relative"}
        overflow={"hidden"}
      >
        <Box
          as={HeaderBackground}
          position={"absolute"}
          left={"50%"}
          transform={"translateX(-50%)"}
          bottom={0}
          zIndex={0}
        />
        <Stack
          position={"relative"}
          zIndex={1}
          as={Container}
          maxW={"6xl"}
          spacing={10}
          py={12}
          px={8}
        >
          <Box>
            <Link href={"/"} passHref>
              <Box as={"a"}>
                <Heading display={"inline"} as={"h1"} size={"2xl"}>
                  Chakra Templates
                </Heading>
              </Box>
            </Link>
          </Box>
          <Text
            color={"gray.100"}
            maxW={"2xl"}
            lineHeight={1.8}
            fontSize={"lg"}
          >
            A growing collection of{" "}
            <strong>responsive Chakra UI Templates</strong> ready to drop into
            your React project. <br /> Don't waste your time, building the same
            templates over and over again. Just copy and paste the code, and you
            are ready to go ✌️
          </Text>
          <Box>
            <Stack spacing={6} direction={{ base: "column", sm: "row" }}>
              <Link href={"/#components"} passHref>
                <Button
                  variant="outline"
                  colorScheme={"teal"}
                  leftIcon={<ArrowDownIcon />}
                  as={"a"}
                >
                  Browse Components
                </Button>
              </Link>
              <Button
                variant="ghost"
                colorScheme={"teal"}
                as={"a"}
                href={
                  "https://github.com/hauptrolle/chakra-templates/issues/new/choose"
                }
              >
                Suggest Template
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </DarkMode>
  );
};
