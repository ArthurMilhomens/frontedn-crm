import { Box, Flex, Accordion, Button, Icon } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import Deck from "../../components/Deck";
import { useDecks } from "../../service/hooks/useDeck";

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

export default function Decks() {
  const [decks, setDecks] = useState<Deck[]>([]);
  const { data, isLoading, error, isFetching } = useDecks();

  // const list = [
  //   { qtd: 1, name: "Teneb, the Harvester" },
  //   { qtd: 4, name: "Lotus Cobra" },
  //   { qtd: 1, name: "Dragonlord Silumgar" },
  //   { qtd: 2, name: "Boros Charm" },
  //   { qtd: 2, name: "Inscription of Insight" },
  //   { qtd: 1, name: "Kolaghan, the Storm's Fury" },
  //   { qtd: 1, name: "Piru, the Volatile" },
  //   { qtd: 1, name: "Mirari's Wake" },
  //   { qtd: 2, name: "Cultivate" },
  //   { qtd: 1, name: "Tiamat" },
  //   { qtd: 1, name: "Inferno of the Star Mounts" },
  //   { qtd: 4, name: "The World Tree" },
  //   { qtd: 1, name: "Nicol Bolas, the Ravager" },
  //   { qtd: 1, name: "Nicol Bolas, Dragon-God" },
  //   { qtd: 1, name: "Sarkhan Unbroken" },
  //   { qtd: 1, name: "Wilderness Reclamation" },
  //   { qtd: 1, name: "Crux of Fate" },
  //   { qtd: 1, name: "Mountain" },
  //   { qtd: 1, name: "Azor's Gateway" },
  //   { qtd: 1, name: "The Kami War" },
  //   { qtd: 1, name: "Junji, the Midnight Sky" },
  //   { qtd: 1, name: "Velomachus Lorehold" },
  //   { qtd: 2, name: "Azusa, Lost but Seeking" },
  //   { qtd: 1, name: "Ancient Brass Dragon" },
  //   { qtd: 1, name: "Burgeoning" },
  //   { qtd: 1, name: "Thrakkus the Butcher" },
  //   { qtd: 1, name: "Shivan Devastator" },
  //   { qtd: 1, name: "Two-Headed Hellkite" },
  //   { qtd: 1, name: "Sivitri, Dragon Master" },
  //   { qtd: 1, name: "Rith, Liberated Primeval" },
  //   { qtd: 2, name: "Plains" },
  //   { qtd: 4, name: "Forest" },
  //   { qtd: 1, name: "Island" },
  //   { qtd: 2, name: "Swamp" },
  //   { qtd: 2, name: "Haven of the Spirit Dragon" },
  //   { qtd: 1, name: "Opulent Palace" },
  //   { qtd: 1, name: "Frontier Bivouac" },
  //   { qtd: 1, name: "Temple of Malady" },
  //   { qtd: 1, name: "Temple of Mystery" },
  //   { qtd: 1, name: "Temple of Abandon" },
  //   { qtd: 1, name: "Simic Growth Chamber" },
  //   { qtd: 1, name: "Temple Garden" },
  //   { qtd: 1, name: "Temple of the Dragon Queen" },
  //   { qtd: 1, name: "Primevals' Glorious Rebirth" },
  // ];

  // const decks = [
  //   { name: '5 Colors', colors: ['W', 'G', 'R', 'B', 'U'], cards: list },
  //   { name: 'Eldrazi', colors: ['C', 'U'], cards: list }
  // ]

  // const getDecks = async () => {
  //   await api.get('/decks')
  //     .then((response) => {
  //       setDecks(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // };

  // useEffect(() => {
  //   getDecks();
  // }, [])

  return (
    <>
      <Head>
        <title>Decks - MTGL</title>
      </Head>
      <main>
        <Box>
          <Header />
          <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
            <Sidebar />

            <Flex alignItems="flex-end" direction="column" w="100%">
              <Link href="/decks/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar deck
                </Button>
              </Link>
              <Accordion allowToggle flex="1" alignItems="flex-start" w="100%">
                {data?.decks.map((deck) => (
                  <Deck key={deck.id} deck={deck} mark={deck.name === '5 Colors'} />
                ))}
              </Accordion>
            </Flex>

          </Flex>
        </Box>
      </main>
    </>
  );
}