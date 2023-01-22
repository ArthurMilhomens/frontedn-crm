import { Flex, Stack, Collapse, Button, Divider, useDisclosure, Text, Avatar, HStack, Tooltip, AvatarBadge } from "@chakra-ui/react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from './Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UseMutationResult } from "react-query";
import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

type SignInFormData = {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
    profileImage?: Blob;
}

interface FormProps {
    handleSignIn: UseMutationResult<any, unknown, SignInFormData, unknown>;
    handleCreateAccount: UseMutationResult<any, unknown, SignInFormData, unknown>;
}

// const reader = new FileReader();

export default function FormLogin({
    handleSignIn,
    handleCreateAccount,
}: FormProps) {
    const { isOpen, onToggle } = useDisclosure();
    const [image, setImage] = useState<string>();
    const [imageBlob, setImageBlob] = useState<Blob>();

    const signInFormSchema = yup.object({
        email: yup.string().required('E-mail obrigatório').email("E-mail inválido"),
        password: yup.string().required('Senha obrigatória'),
    }).required()

    const createAccountFormSchema = yup.object({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().required('E-mail obrigatório').email("E-mail inválido"),
        password: yup.string().required('Senha obrigatória'),
        passwordConfirmation: yup.string().required('Confirmação de senha obrigatória').oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
    }).required()

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(isOpen ? createAccountFormSchema : signInFormSchema)
    });

    const changeImage = (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        setImageBlob(blob);
        setImage(url);
    }

    const handleFormSubmit: SubmitHandler<SignInFormData> = async (data) => {
        isOpen
            ? await handleCreateAccount.mutateAsync({ ...data, profileImage: imageBlob })
            : await handleSignIn.mutateAsync(data);
    };

    return (
        <Flex
            as="form"
            w="100%"
            maxW={360}
            bg="white.200"
            backdropFilter="blur(8px)"
            p="8"
            borderRadius={8}
            flexDir="column"
            onSubmit={handleSubmit(handleFormSubmit)}
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        >
            <Collapse in={isOpen} animateOpacity>
                <HStack justify='center' mb="8">
                    <label htmlFor="avatar">
                        <Avatar
                            bg='purple.500'
                            size='lg'
                            src={image}
                            _hover={{
                                opacity: 0.8,
                                cursor: 'pointer',
                            }}
                        >
                            <AvatarBadge bgColor="purple.500" borderColor="purple.500">
                                <MdOutlineFileUpload fontSize="1rem" />
                            </AvatarBadge>
                        </Avatar>
                    </label>
                    <input id="avatar" hidden type="file" onChange={async (e) => changeImage(new Blob([e.target.files[0]], { type: e.target.files[0].type }))} />
                </HStack>
            </Collapse>
            <Stack spacing="4">
                <Collapse in={isOpen} animateOpacity>
                    <Input name="name" label="Nome" type="text" error={errors.name} {...register('name')} />
                </Collapse>
                <Input name="email" label="E-mail" type="email" error={errors.email} {...register('email')} />
                <Input name="password" label="Senha" type="password" error={errors.password} {...register('password')} />
                <Collapse in={isOpen} animateOpacity>
                    <Input name="passwordConfirmation" label="Confirmar senha" type="password" error={errors.passwordConfirmation} {...register('passwordConfirmation')} />
                </Collapse>
            </Stack>

            <Button isLoading={isSubmitting} type="submit" mt="6" colorScheme="purple">{isOpen ? "Criar conta" : "Entrar"}</Button>

            <Flex
                py="4"
                align="center"
                justify="space-between"
                w="100%"
            >
                <Divider />
                <Text color="gray.500" marginX="2">ou</Text>
                <Divider />
            </Flex>

            <Button variant="link" colorScheme="purple" onClick={onToggle}>{!isOpen ? "Criar conta" : "Fazer login"}</Button>
        </Flex>
    );
}