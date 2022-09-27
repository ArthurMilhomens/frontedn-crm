import { Box, Image, Flex, useBreakpointValue, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Badge, HStack, Text, ListItem, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Decks() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const list = [
    { qtd: 1, name: "Teneb, the Harvester" },
    { qtd: 4, name: "Lotus Cobra" },
    { qtd: 1, name: "Dragonlord Silumgar" },
    { qtd: 2, name: "Boros Charm" },
    { qtd: 2, name: "Inscription of Insight" },
    { qtd: 1, name: "Kolaghan, the Storm's Fury" },
    { qtd: 1, name: "Piru, the Volatile" },
    { qtd: 1, name: "Mirari's Wake" },
    { qtd: 2, name: "Cultivate" },
    { qtd: 1, name: "Tiamat" },
    { qtd: 1, name: "Inferno of the Star Mounts" },
    { qtd: 4, name: "The World Tree" },
    { qtd: 1, name: "Nicol Bolas, the Ravager" },
    { qtd: 1, name: "Nicol Bolas, Dragon-God" },
    { qtd: 1, name: "Sarkhan Unbroken" },
    { qtd: 1, name: "Wilderness Reclamation" },
    { qtd: 1, name: "Crux of Fate" },
    { qtd: 1, name: "Mountain" },
    { qtd: 1, name: "Azor's Gateway" },
    { qtd: 1, name: "The Kami War" },
    { qtd: 1, name: "Junji, the Midnight Sky" },
    { qtd: 1, name: "Velomachus Lorehold" },
    { qtd: 2, name: "Azusa, Lost but Seeking" },
    { qtd: 1, name: "Ancient Brass Dragon" },
    { qtd: 1, name: "Burgeoning" },
    { qtd: 1, name: "Thrakkus the Butcher" },
    { qtd: 1, name: "Shivan Devastator" },
    { qtd: 1, name: "Two-Headed Hellkite" },
    { qtd: 1, name: "Sivitri, Dragon Master" },
    { qtd: 1, name: "Rith, Liberated Primeval" },
    { qtd: 2, name: "Plains" },
    { qtd: 4, name: "Forest" },
    { qtd: 1, name: "Island" },
    { qtd: 2, name: "Swamp" },
    { qtd: 2, name: "Haven of the Spirit Dragon" },
    { qtd: 1, name: "Opulent Palace" },
    { qtd: 1, name: "Frontier Bivouac" },
    { qtd: 1, name: "Temple of Malady" },
    { qtd: 1, name: "Temple of Mystery" },
    { qtd: 1, name: "Temple of Abandon" },
    { qtd: 1, name: "Simic Growth Chamber" },
    { qtd: 1, name: "Temple Garden" },
    { qtd: 1, name: "Temple of the Dragon Queen" },
    { qtd: 1, name: "Primevals' Glorious Rebirth" },
  ]

  return (
    <>
      <Head>
        <title>Decks - CRM</title>
      </Head>
      <main>
        <Box>
          <Header />

          <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
            <Sidebar />

            <Accordion allowToggle flex="1" alignItems="flex-start">
              <AccordionItem p={["4", "6"]} bg="gray.800" borderRadius={8} pb="4" border="none" my="4">
                <h2>
                  <AccordionButton>
                    <HStack flex='1' textAlign='left' spacing="4">
                      <HStack>
                        <Text>5 Colors -</Text>
                        <HStack spacing="1">
                          <Image w="4" h="4" src='mana/W.svg' alt='White mana' />
                          <Image w="4" h="4" src='mana/U.svg' alt='Blue mana' />
                          <Image w="4" h="4" src='mana/B.svg' alt='Black mana' />
                          <Image w="4" h="4" src='mana/R.svg' alt='Red mana' />
                          <Image w="4" h="4" src='mana/G.svg' alt='Green mana' />
                        </HStack>
                      </HStack>
                      {isWideVersion && <Badge colorScheme='red' >Most popular</Badge>}
                    </HStack>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {!isWideVersion && <Badge colorScheme='red' mb="4">Most popular</Badge>}
                  <SimpleGrid columns={[1, 2]} spacing="2" w={["100%", "70%"]}>
                    {list.map((card, index) => (
                      <Box key={index}>
                        {card.qtd} - {card.name}
                      </Box>
                    ))}
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem p={["4", "6"]} bg="gray.800" borderRadius={8} pb="4" border="none">
                <h2>
                  <AccordionButton>
                    <HStack flex='1' textAlign='left' spacing="4">
                      <HStack>
                        <Text>Eldrazi -</Text>
                        <HStack spacing="1">
                          <Image w="4" h="4" src='mana/C.svg' alt='Coloress mana' />
                          <Image w="4" h="4" src='mana/U.svg' alt='Blue mana' />
                        </HStack>
                      </HStack>
                    </HStack>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
        </Box>
      </main>
    </>
  );
}