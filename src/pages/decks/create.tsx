import { Box, Button, Divider, Flex, FormLabel, Heading, HStack, SimpleGrid, Textarea, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function CreateDeck() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box as="form" onSubmit={() => console.log('Success')} flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">Criar deck</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8" alignItems="flex-start">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="50%">
                            <Input name="name" label="Nome do deck" />
                        </SimpleGrid>

                        <Flex direction="column" w="100%">
                            <FormLabel htmlFor="deck">Deck</FormLabel>
                            <Textarea
                                name="deck"
                                placeholder='Lista de cartas no formato MTG'
                                size='sm'
                                h="30vh"
                                resize="none"
                                focusBorderColor='purple.500'
                                bgColor='gray.900'
                                variant="filled"
                                _hover={{
                                    bgColor: 'gray.900'
                                }}
                            />
                        </Flex>

                        <Flex mt="8" justify="flex-end" w="100%">
                            <HStack spacing="4">
                                <Link href="/users" passHref>
                                    <Button as="a" variant="ghost" _hover={{ bgColor: 'gray.700' }}>Cancelar</Button>
                                </Link>
                                <Button type="submit" isLoading={false} colorScheme="purple">Salvar</Button>
                            </HStack>
                        </Flex>

                    </VStack>
                </Box>
            </Flex>
        </Box>
    );
}