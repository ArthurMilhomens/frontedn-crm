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
  const { data, isLoading, error, isFetching } = useDecks();

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