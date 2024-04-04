import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  useBreakpointValue,
  Image,
  Avatar,
  HStack,
  Text,
  IconButton,
  Stack,
  SimpleGrid,
  Wrap,
  Accordion,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getUserDetails } from "../../service/hooks/useUsers";
import { useEffect, useState } from "react";
import { UserDetails } from "../../models/user";
import { FaCheck, FaMedal, FaUserPlus } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import Cookies from "universal-cookie";
import ProfileStatsCard from "../../components/ProfileStatsCard";
import { AiOutlinePercentage } from "react-icons/ai";
import { HiOutlineInbox } from "react-icons/hi";
import { FiUserCheck } from "react-icons/fi";
import Deck from "../../components/Deck";
import HistoryTable from "../../components/HistoryTable";

export default function User() {
  const router = useRouter();
  const cookies = new Cookies();
  const user = cookies.get("user");
  const userId = user?.id;
  const isBaseVersion = useBreakpointValue({
    base: true,
    lg: false,
  });
  const [id, setId] = useState("");
  const isFollowing = false;

  useEffect(() => {
    setId(router.query.id?.toString());
  }, [router.query.id?.toString()]);

  const { data } = useQuery({
    queryKey: ["user-details", id],
    queryFn: () => getUserDetails(id),
    enabled: id !== "" && id !== undefined,
  });

  return (
    <>
      <Head>
        <title>Perfil - MTGL</title>
      </Head>
      <main>
        <Box>
          <Header />

          <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
            <Sidebar />

            <Box flex="1" borderRadius={8} bg="gray.800">
              <Image
                fit="cover"
                borderRadius={8}
                w="full"
                h="32"
                alt="background"
                src="https://cdn.openart.ai/stable_diffusion/665802ffcbba15368f3b24ba100cf30bd9da5a00_2000x2000.webp"
              />
              <HStack
                alignItems="flex-end"
                mt="-40px"
                spacing={{ base: 1, sm: 4 }}
              >
                {data?.user && (
                  <Avatar
                    size="xl"
                    border="8px solid"
                    borderColor="gray.800"
                    color="gray.800"
                    ml={{ base: "20px", sm: "60px", md: "80px" }}
                    name={data?.user?.name}
                    bgColor="purple.500"
                    src={data?.user.profileImage}
                  />
                )}
                <Stack spacing={0} pb={2}>
                  <Text lineHeight="1.5rem" fontSize="2xl">
                    {data?.user.name}
                  </Text>
                  <HStack spacing={1}>
                    <Text
                      fontSize={{ base: "10px", sm: "smaller" }}
                      textAlign="center"
                      color="gray.200"
                    >
                      Segue 45
                    </Text>
                    <Icon as={BsDot} color="gray.200" />
                    <Text
                      fontSize={{ base: "10px", sm: "smaller" }}
                      textAlign="center"
                      color="gray.200"
                    >
                      Seguidores 45
                    </Text>
                  </HStack>
                </Stack>
                {data?.user.id !== userId &&
                  (isBaseVersion ? (
                    <IconButton
                      aria-label="friend-status"
                      icon={
                        <Icon as={isFollowing ? FiUserCheck : FaUserPlus} />
                      }
                      colorScheme={isFollowing ? "green" : "blackAlpha"}
                      ml="auto !important"
                      mr={{
                        base: "20px !important",
                        md: "80px !important",
                        sm: "60px !important",
                      }}
                    />
                  ) : (
                    <Button
                      aria-label="friend-status"
                      rightIcon={
                        isBaseVersion ? (
                          <Icon as={isFollowing ? FiUserCheck : FaUserPlus} />
                        ) : (
                          <Icon as={isFollowing ? FaCheck : FaUserPlus} />
                        )
                      }
                      colorScheme={isFollowing ? "green" : "blackAlpha"}
                      ml="auto !important"
                      mr={{
                        base: "20px !important",
                        md: "80px !important",
                        sm: "60px !important",
                      }}
                    >
                      {isFollowing ? "Seguindo" : "Seguir"}
                    </Button>
                  ))}
              </HStack>
              <Stack maxW="800px" mx="auto">
                <Wrap mt="8" justify="center" alignItems="center" px={2}>
                  <ProfileStatsCard
                    icon={FaMedal}
                    label="Partidas vencidas"
                    value="20"
                  />
                  <ProfileStatsCard
                    icon={AiOutlinePercentage}
                    label="Vitórias/Derrotas"
                    value="50%"
                  />
                  <ProfileStatsCard
                    icon={HiOutlineInbox}
                    label="Decks"
                    value={data?.user.decks.length.toString()}
                  />
                </Wrap>
              </Stack>
              <Text
                fontSize="3xl"
                fontWeight="bold"
                color="gray.100"
                px={{ base: "20px", sm: "60px", md: "80px" }}
                my={4}
              >
                Histórico
              </Text>
              <Box px={{ base: "20px", sm: "60px", md: "80px" }}>
                <HistoryTable />
              </Box>
              <Text
                fontSize="3xl"
                fontWeight="bold"
                color="gray.100"
                px={{ base: "20px", sm: "60px", md: "80px" }}
                my={4}
              >
                Decks
              </Text>
              <Accordion
                allowToggle
                flex="1"
                alignItems="flex-start"
                w="100%"
                px={{ base: "20px", sm: "60px", md: "80px" }}
              >
                {data?.user.decks.map((deck) => (
                  <Deck
                    bgColor="gray.700"
                    key={deck.id}
                    deck={deck}
                    mark={deck.name === "5 Colors"}
                  />
                ))}
              </Accordion>
            </Box>
          </Flex>
        </Box>
      </main>
    </>
  );
}
