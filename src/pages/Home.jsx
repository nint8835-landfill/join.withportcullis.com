import React from "react";

import { Box, Center, VStack, Text, Code, Button } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { currentUser } from "../State";
import { FaDiscord } from "react-icons/fa";

export default function HomePage() {
  const [user] = useAtom(currentUser);
  return (
    <Center w="100%" h="100%">
      <Box backgroundColor={"blackAlpha.400"} rounded={"xl"} padding={"10"}>
        <VStack>
          {user ? (
            <Code>{JSON.stringify(user, null, 2)}</Code>
          ) : (
            <Button
              as="a"
              href="http://127.0.0.1:8787/oauth/discord/auth"
              colorScheme="green"
              leftIcon={<FaDiscord />}
            >
              Login with Discord
            </Button>
          )}
        </VStack>
      </Box>
    </Center>
  );
}
