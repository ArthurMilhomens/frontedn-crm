import { Flex, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import RankedDeckList from "../components/RankedDeckList";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - MTGL</title>
      </Head>
      <main>
        <Flex direction="column" h="100vh">
          <Header />

          <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
            <Sidebar />

            <SimpleGrid flex="1" gap="4" minChildWidth="360px" alignItems="flex-start">
              <RankedDeckList />
            </SimpleGrid>
          </Flex>
        </Flex>
      </main>
    </>
  )
}