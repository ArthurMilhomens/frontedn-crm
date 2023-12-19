import {
  AccordionItem,
  AccordionButton,
  HStack,
  Badge,
  AccordionIcon,
  AccordionPanel,
  SimpleGrid,
  Text,
  Image,
  useBreakpointValue,
  Box,
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@chakra-ui/react";

interface Card {
  qtd: number;
  card: CardDetail;
  image_uris: string;
}

interface CardDetail {
  name: string;
  image_uris: string;
}

interface Deck {
  id: string;
  name: string;
  colors: string[];
  cards: Card[];
}

interface DeckProps {
  deck: Deck;
  mark?: boolean;
}

export default function Deck({ deck, mark }: DeckProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <AccordionItem
      p={["4", "6"]}
      bg="gray.800"
      borderRadius={8}
      pb="4"
      border="none"
      my="4"
    >
      <AccordionButton>
        <HStack flex="1" textAlign="left" spacing="4">
          <HStack>
            <Text>{deck.name} -</Text>
            <HStack spacing="1">
              {deck.colors.map((color) => (
                <Image
                  key={color}
                  w="4"
                  h="4"
                  src={`mana/${color}.svg`}
                  alt="Mana"
                />
              ))}
            </HStack>
          </HStack>
          {isWideVersion && mark && (
            <Badge colorScheme="red">Most popular</Badge>
          )}
        </HStack>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        {!isWideVersion && mark && (
          <Badge colorScheme="red" mb="4">
            Most popular
          </Badge>
        )}
        <SimpleGrid columns={[1, 4]} spacing="2" w="100%">
          {deck.cards.map((cardObject, index) => (
            <Popover key={index}>
              <PopoverTrigger>
                <Box>
                  {cardObject.qtd} - {cardObject.card.name}
                </Box>
              </PopoverTrigger>
              <PopoverContent
                borderRadius="16px"
                bg="gray.700"
                borderColor="gray.700"
              >
                <Image
                  borderRadius="16px"
                  alt="card image"
                  src={cardObject.card.image_uris}
                />
                <p>Tiamat</p>
              </PopoverContent>
            </Popover>
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
}
