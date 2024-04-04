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
  Icon,
  Stack,
  IconButton,
  useDisclosure,
  Flex,
  Divider,
  AccordionItemProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiPencilLine } from "react-icons/ri";
import { TypeDeck } from "../../models/deck";
import { useState } from "react";
import CardLegalities from "../CardLegalities";

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

interface DeckProps extends AccordionItemProps {
  deck: TypeDeck;
  mark?: boolean;
}

export default function Deck({ deck, mark, ...props }: DeckProps) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [element, setElement] = useState<number | null>(null);
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const qtdCards = deck.cards.reduce((acc, card) => acc + Number(card.qtd), 0);

  const handleOpenCardDetails = (cardIndex: number) => {
    setElement(cardIndex);
    onToggle();
  };

  return (
    <AccordionItem
      p={["4", "6"]}
      bg="gray.800"
      borderRadius={8}
      pb="4"
      border="none"
      my="4"
      {...props}
    >
      <AccordionButton>
        <HStack flex="1" textAlign="left" spacing="4">
          <HStack spacing={4}>
            <Text fontSize="18">
              {deck.name}
            </Text>
            <Divider orientation="vertical" color="red" h="4" />
            <HStack spacing="1">
              {deck.colors.map((color) => (
                <Image
                  key={color}
                  w="4"
                  h="4"
                  src={`../mana/${color}.svg`}
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
        <HStack spacing="8" alignSelf="flex-end" marginY="4">
          <Badge colorScheme="whiteAlpha" fontSize="14" color="purple.200">
            {qtdCards} cartas
          </Badge>
          <Link href={`/decks/edit/${deck.id}`} passHref>
            <IconButton
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="purple"
              // leftIcon={}
              variant="solid"
              alignSelf="flex-end"
              aria-label="edit"
            >
              <Icon as={RiPencilLine} fontSize="20" />
            </IconButton>
          </Link>
        </HStack>
        <SimpleGrid columns={[1, 4]} spacing="2" w="100%">
          {deck.cards.map((cardObject, index) => (
            <Popover
              key={index}
              isOpen={element === index && isOpen}
              onClose={element === index && onClose}
            >
              <PopoverTrigger>
                <Box>
                  <Text
                    onMouseEnter={() => handleOpenCardDetails(index)}
                    onMouseLeave={onClose}
                    w="fit-content"
                    _hover={{
                      color: "purple.400"
                    }}
                  >
                    {cardObject.qtd} - {cardObject.card.name}
                  </Text>
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
                <Flex direction="column" p={4}>
                  <Text fontWeight="semibold">{cardObject.card.name}</Text>
                  <Text fontSize={12}>{cardObject.card.type_line}</Text>
                  <Text fontSize={12} mt="20px">{cardObject.card.oracle_text}</Text>
                  <CardLegalities legalities={cardObject.card.legalities} marginTop="auto" />
                </Flex>
              </PopoverContent>
            </Popover>
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
}
