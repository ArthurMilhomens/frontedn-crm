import { Flex, Icon, IconButton, useBreakpointValue, Image } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
import Logo from "../../../public/logo.svg"

export default function Header() {
    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            {!isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
            )}
            {isWideVersion && <Image maxH="8" src={Logo.src} />}
            <SearchBox />
            <Flex align="center" ml="auto">
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}