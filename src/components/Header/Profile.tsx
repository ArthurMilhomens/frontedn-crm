import { Flex, Avatar, Box, Text } from "@chakra-ui/react";
import Cookies from "universal-cookie";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  const cookies = new Cookies();
  const user = cookies.get("user");

  return (
    <Flex align="center">
      <Avatar size="md" name={user?.name} bgColor="purple.500" src={user?.profileImage} />
      {showProfileData && <Box ml="4" textAlign="left">
        <Text>{user?.name}</Text>
        <Text color="gray.300" fontSize="small">
          {user?.email}
        </Text>
      </Box>}
    </Flex>
  );
}