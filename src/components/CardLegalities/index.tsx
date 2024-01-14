import { Badge, HStack, Stack, StackProps, Text } from "@chakra-ui/react";

interface CardLegalitiesProps extends StackProps {
  legalities: string[];
}

export default function CardLegalities({ legalities, ...props }: CardLegalitiesProps) {
  const col1 = [
    "Standard",
    "Pioneer",
    "Modern",
    "Legacy",
    "Vintage",
    "Commander",
    "Oathbreaker",
  ];
  const col2 = [
    "Alchemy",
    "Explorer",
    "Brawl",
    "Historic",
    "Timeless",
    "Pauper",
    "Penny",
  ];

  return (
    <HStack {...props}>
      <Stack spacing={1}>
        {col1.map((mode) => (
          <HStack>
            <Badge
              colorScheme={
                legalities.includes(mode.toLocaleLowerCase())
                  ? "green"
                  : "red"
              }
              fontSize="9"
              w="58px"
              textAlign="center"
            >
              {legalities.includes(mode.toLocaleLowerCase())
                ? "LEGAL"
                : "NOT LEGAL"}
            </Badge>
            <Text fontSize="12">{mode}</Text>
          </HStack>
        ))}
      </Stack>
      <Stack spacing={1}>
        {col2.map((mode) => (
          <HStack>
            <Badge
              colorScheme={
                legalities.includes(mode.toLocaleLowerCase())
                  ? "green"
                  : "red"
              }
              fontSize="9"
              w="58px"
              textAlign="center"
            >
              {legalities.includes(mode.toLocaleLowerCase())
                ? "LEGAL"
                : "NOT LEGAL"}
            </Badge>
            <Text fontSize="12">{mode}</Text>
          </HStack>
        ))}
      </Stack>
    </HStack>
  );
}
