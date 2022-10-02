import { AccordionItem, AccordionButton, HStack, Badge, AccordionIcon, AccordionPanel, SimpleGrid, Text, Image, useBreakpointValue, Box } from "@chakra-ui/react";

interface Card {
    qtd: number;
    name: string;
}

interface Deck {
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
        lg: true
    })

    return (
        <AccordionItem p={["4", "6"]} bg="gray.800" borderRadius={8} pb="4" border="none" my="4">
            <AccordionButton>
                <HStack flex='1' textAlign='left' spacing="4">
                    <HStack>
                        <Text>{deck.name} -</Text>
                        <HStack spacing="1">
                            {deck.colors.map((color) => (
                                <Image key={color} w="4" h="4" src={`mana/${color}.svg`} alt='Mana' />
                            ))}
                        </HStack>
                    </HStack>
                    {isWideVersion && (mark && <Badge colorScheme='red' >Most popular</Badge>)}
                </HStack>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                {!isWideVersion && (mark && <Badge colorScheme='red' mb="4">Most popular</Badge>)}
                <SimpleGrid columns={[1, 4]} spacing="2" w="100%">
                    {deck.cards.map((card, index) => (
                        <Box key={index}>
                            {card.qtd} - {card.name}
                        </Box>
                    ))}
                </SimpleGrid>
            </AccordionPanel>
        </AccordionItem>
    )
}