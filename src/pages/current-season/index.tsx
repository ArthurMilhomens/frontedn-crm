import { Box, CircularProgress, CircularProgressLabel, Divider, Flex, Heading, HStack } from "@chakra-ui/react";
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

                        <Box p={['4', '6']} bg="gray.800" borderRadius={8} pb="4" w="100%">
                            <HStack justifyContent="space-between">
                                <Heading>Season 1</Heading>
                                <CircularProgress value={40} color='purple.400' trackColor="gray.700">
                                    <CircularProgressLabel>40%</CircularProgressLabel>
                                </CircularProgress>
                            </HStack>

                            <Divider my="6" borderColor="gray.700" />
                        </Box>
                    </Flex>
                </Flex>
            </main>
        </>
    )
}