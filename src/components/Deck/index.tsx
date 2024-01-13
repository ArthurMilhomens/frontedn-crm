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
  Button,
  Icon,
  Stack,
} from "@chakra-ui/react";
import ThreeComponent from "../ThreeComponent";
import Link from "next/link";
import { RiPencilLine } from "react-icons/ri";
import { TypeDeck } from "../../models/deck";

interface Card {
  qtd: number;
  card: CardDetail;
  image_uris: string;
}

interface CardDetail {
  name: string;
  image_uris: string;
}

// interface Deck {
//   id: string;
//   name: string;
//   colors: string[];
//   cards: Card[];
// }

interface DeckProps {
  deck: TypeDeck;
  mark?: boolean;
}

export default function Deck({ deck, mark }: DeckProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const qtdCards = deck.cards.reduce((acc, card) => acc + Number(card.qtd), 0);

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
            <Text>{deck.name} - {qtdCards}</Text>
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
      <AccordionPanel pb={4} display="flex" flexDirection="column">
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
                as="div"
                borderRadius="16px"
                bg="gray.700"
                borderColor="gray.700"
                display="flex"
                flexDirection={isWideVersion ? "row" : "column"}
                w={[300, 600]}
                h={[600, 444]}
              >
                <Image
                  borderRadius="16px"
                  alt="card image"
                  src={cardObject.card.image_uris}
                  maxW={[300, 400]}
                />
                <Stack p={4}>
                  <Text fontWeight="semibold">{cardObject.card.name}</Text>
                  <Text fontSize={12}>{cardObject.card.oracle_text}</Text>
                </Stack>
              </PopoverContent>
            </Popover>
          ))}
        </SimpleGrid>
        <Link href={`/decks/edit/${deck.id}`} passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="purple"
            leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
            variant="outline"
            alignSelf="flex-end"
            _hover={{
              bgColor: "purple.500",
              color: "white",
            }}
          >
            Editar
          </Button>
        </Link>
      </AccordionPanel>
    </AccordionItem>
  );
}
