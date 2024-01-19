import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Heading,
  HStack,
  SimpleGrid,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import * as yup from "yup";
import Head from "next/head";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { api } from "../../service/api";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { queryClient } from "../../service/queryClient";
import router from "next/router";

type Card = {
  qtd: string;
  name: string;
};

type CreateDeckFormData = {
  name: string;
  deck: string;
};

type SubmitDeckFormData = {
  name: string;
  cards: Card[];
};

export default function CreateDeck() {
  const toast = useToast();

  const createDeckFormSchema = yup
    .object({
      name: yup
        .string()
        .required("Nome obrigatório"),
      deck: yup.string().required("Senha obrigatória"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(createDeckFormSchema),
  });

  const handleSubmitDeck = useMutation(
    async (data: SubmitDeckFormData) => {
      const response = await api.post("/decks/create", data);
    },
    {
      onSuccess: () => {
        toast({
            title: 'Deck cadastrado.',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top-right'
          })
        queryClient.invalidateQueries("decks/user");
        router.push("/decks");
      },
    }
  );

  const convertListCardsInArray: SubmitHandler<CreateDeckFormData> = async (
    data
  ) => {
    let cards = data.deck.split("\n").map((card) => card.trim());
    const cardsToSubmit = cards.map((line) => {
      let elements = line
        .split(" ")
        .map((card) => card.trim())
        .filter((line) => line !== "");
      const quantity = elements[0];
      elements = elements.slice(1);
      const cardName = elements.join(" ").trim();
      return {
        qtd: quantity,
        name: cardName,
      };
    });

    await handleSubmitDeck.mutateAsync({
      name: data.name,
      cards: cardsToSubmit,
    });
  };

  return (
    <>
      <Head>
        <title>Criar Deck - MTGL</title>
      </Head>
      <Box>
        <Header />

        <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
          <Sidebar />

          <Box
            as="form"
            onSubmit={handleSubmit(convertListCardsInArray)}
            flex="1"
            borderRadius={8}
            bg="gray.800"
            p={["6", "8"]}
          >
            <Heading size="lg" fontWeight="normal">
              Criar deck
            </Heading>

            <Divider my="6" borderColor="gray.700" />

            <VStack spacing="8" alignItems="flex-start">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="50%">
                <Input
                  name="name"
                  label="Nome"
                  type="text"
                  error={errors.name}
                  {...register("name")}
                />
              </SimpleGrid>

              <Flex direction="column" w="100%">
                <FormLabel htmlFor="deck">Deck</FormLabel>
                <Textarea
                  name="deck"
                  placeholder="Lista de cartas no formato MTG"
                  size="sm"
                  h="30vh"
                  resize="none"
                  focusBorderColor="purple.500"
                  bgColor="gray.900"
                  variant="filled"
                  {...register("deck")}
                  _hover={{
                    bgColor: "gray.900",
                  }}
                />
              </Flex>

              <Flex mt="8" justify="flex-end" w="100%">
                <HStack spacing="4">
                  <Link href="/decks" passHref>
                    <Button
                      as="a"
                      variant="ghost"
                      _hover={{ bgColor: "gray.700" }}
                      disabled={isSubmitting}
                    >
                      Cancelar
                    </Button>
                  </Link>
                  <Button type="submit" isLoading={isSubmitting} colorScheme="purple" disabled={isSubmitting}>
                    Salvar
                  </Button>
                </HStack>
              </Flex>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
