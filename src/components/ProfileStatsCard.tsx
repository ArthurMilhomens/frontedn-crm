import { Center, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaMedal } from "react-icons/fa";

interface ProfileStatsCardProps {
    icon: IconType;
    label: string;
    value: string;
}

export default function ProfileStatsCard({ icon, label, value }: ProfileStatsCardProps) {
  return (
    <HStack bgColor="gray.700" w={{base: 200, sm: 250}} borderRadius={12} p={2}>
      <Center borderRadius={14} bgColor="gray.900" w={{base: 12, sm: 16}} h={{base: 12, sm: 16}}>
        <Icon as={icon} fontSize={{base: "xl", sm: "3xl"}} color="purple.400"/>
      </Center>
      <Stack spacing={0}>
        <Text fontSize={{base: "smaller", sm: "sm" }} letterSpacing="wide">{label}</Text>
        <Text lineHeight={{base: 6, sm: 10}} color="purple.400" fontSize={{base: "xl", sm: "3xl"}} fontWeight="bold">
          {value}
        </Text>
      </Stack>
    </HStack>
  );
}
