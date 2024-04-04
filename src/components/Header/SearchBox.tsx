import {
  Avatar,
  Button,
  Flex,
  Icon,
  Input,
  Popover,
  PopoverAnchor,
  PopoverBody,
  PopoverContent,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { useDebounce } from "use-debounce";
import { getUsers } from "../../service/hooks/useUsers";
import { useQuery } from "react-query";
import Link from "next/link";

export default function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 300);

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const { data } = useQuery({
    queryKey: ["users", debouncedValue],
    queryFn: () => getUsers({ search: debouncedValue }),
    enabled: debouncedValue!== "" && debouncedValue!== undefined
  });

  return (
    <Popover
      isLazy
      lazyBehavior="keepMounted"
      autoFocus={false}
      closeOnBlur={false}
      isOpen={debouncedValue.length > 0}
    >
      <PopoverAnchor>
        <Flex
          as="label"
          flex="1"
          py="4"
          px={["4", "8"]}
          ml="auto"
          maxW={400}
          alignSelf="center"
          color="gray.200"
          position="relative"
          bg="gray.800"
          borderRadius="full"
        >
          <Input
            color="gray.50"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Buscar na plataforma"
            _placeholder={{ color: "gray.400" }}
            onChange={handleInputChange}
            value={inputValue}
          />

          <PopoverContent border="none" bgColor="gray.800">
            <PopoverBody display="flex" flexDirection="column" p="0">
              {data?.users.map((user) => (
                <Link key={user.id} href={`/users/${user.id}`} passHref>
                  <Button
                    bgColor="transparent"
                    justifyContent="flex-start"
                    onClick={() => setInputValue("")}
                    py="6"
                    _hover={{
                      bgColor: "gray.700",
                    }}
                    _active={{
                      bgColor: "gray.700",
                    }}
                  >
                    <Avatar
                      size="sm"
                      name={user?.name}
                      bgColor="purple.500"
                      src={user?.profileImage}
                      mr="4"
                    />
                    <Text>{user?.name}</Text>
                    <Icon ml="auto" as={FaUserPlus} />
                  </Button>
                </Link>
              ))}
            </PopoverBody>
          </PopoverContent>
          <Icon as={RiSearchLine} fontSize="20" />
        </Flex>
      </PopoverAnchor>
    </Popover>
  );
}
