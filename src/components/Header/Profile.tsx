import { Flex, Avatar, Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  const cookies = new Cookies();
  const user = cookies.get("user");
  const userAvatar = user?.profileImage;

  const [clientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true);
  },[]);

  return (
    <Flex align="center">
      {clientSide && <Avatar size="md" name={user?.name} bgColor="purple.500" color="gray.800" src={userAvatar} />}
      {showProfileData && <Box ml="4" textAlign="left">
        <Text>{user?.name}</Text>
        <Text color="gray.300" fontSize="small">
          {user?.email}
        </Text>
      </Box>}
    </Flex>
  );
}