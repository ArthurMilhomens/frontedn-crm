import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      <Avatar size="md" name="Arthur" src="https://github.com/ArthurMilhomens.png" />

      {showProfileData && <Box ml="4" textAlign="left">
        <Text>Arthur</Text>
        <Text color="gray.300" fontSize="small">
          arthur@email.com
        </Text>
      </Box>}
    </Flex>
  );
}