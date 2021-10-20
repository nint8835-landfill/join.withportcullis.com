import React from "react";

import { Box, Center, VStack, Text, Code } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { currentUser } from "../State";

export default function HomePage() {
  const [user] = useAtom(currentUser);
  return (
    <Center w="100%" h="100%">
      <Box backgroundColor={"blackAlpha.400"} rounded={"xl"} padding={"10"}>
        <VStack>
          <Text>This is text</Text>
          <Text>This too, is text</Text>
          <Code>{JSON.stringify(user, null, 2)}</Code>
        </VStack>
      </Box>
    </Center>
  );
}
