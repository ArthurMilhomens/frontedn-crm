import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - CRM</title>
      </Head>
      <main>
        <Flex direction="column" h="100vh">
          <Header />

          <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
            <Sidebar />

            {/* <SimpleGrid flex="1" gap="4" minChildWidth="360px" alignItems="flex-start">
                    <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
                    <Text fontSize="large" mb="4">Inscritos da semana</Text>
                    <Chart type="area" options={options} series={series} height={160} />
                    </Box>
                    <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
                    <Text fontSize="large" mb="4">Taxa de abertura</Text>
                    <Chart type="area" options={options} series={series} height={160} />
                    </Box>
                  </SimpleGrid> */}
          </Flex>
        </Flex>
      </main>
    </>
  )
}