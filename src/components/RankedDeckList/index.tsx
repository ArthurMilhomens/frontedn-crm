import { Box, Heading, Stat, StatArrow, StatHelpText, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export default function RankedDeckList() {
    return (
        <Stat borderRadius={8} bg="gray.800" p="6" w="35%">
            <Heading>Wins</Heading>
            <Table variant='unstyle' w="100%" maxH={400}>
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td w="45%" color="gray.200">5 Colors</Td>
                        <Td color="gray.200">22</Td>
                        <StatHelpText as="td">
                            36.19%
                            <StatArrow ml="4" type='increase' />
                        </StatHelpText>
                    </Tr>
                    <Tr>
                        <Td color="gray.200">Eldrazi</Td>
                        <Td color="gray.200">20</Td>
                        <StatHelpText as="td">
                            35.79%
                            <StatArrow ml="4" type='decrease' />
                        </StatHelpText>
                    </Tr>
                    <Tr>
                        <Td color="gray.200">Hidra</Td>
                        <Td color="gray.200">5</Td>
                        <StatHelpText as="td">
                            14.66%
                        </StatHelpText>
                    </Tr>
                </Tbody>
            </Table>
        </Stat>
    )
}