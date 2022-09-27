import { Box, CircularProgress, CircularProgressLabel, Flex, Heading, HStack } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function CurrentSeason() {
    return (
        <>
            <Head>
                <title>Season - CRM</title>
            </Head>
            <main>
                <Flex direction="column" h="100vh">
                    <Header />

                    <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                        <Sidebar />

                        <Box bg="gray.800" borderRadius={8} pb="4" w="100%">
                            <HStack p={['4', '6']} justifyContent="space-between" borderBottomColor="gray.700" borderBottomWidth={1}>
                                <Heading>Season 1</Heading>
                                <CircularProgress value={40} color='purple.400' trackColor="gray.700">
                                    <CircularProgressLabel>40%</CircularProgressLabel>
                                </CircularProgress>
                            </HStack>
                        </Box>
                    </Flex>
                </Flex>
            </main>
        </>
    )
}