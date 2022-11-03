import { useEffect, useRef, useState } from 'react';

import { Box, Button, Divider, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';

import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import CELLS from 'vanta/dist/vanta.cells.min';
// import * as THREE from 'three';

import { GoogleLogin } from 'react-google-login';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object({
  email: yup.string().required('E-mail obrigatório').email("E-mail inválido"),
  password: yup.string().required('Senha obrigatória'),
}).required()

export default function SignIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  // const [vantaEffect, setVantaEffect] = useState(null)
  // const myRef = useRef(null)

  // const handleSignIn: SubmitHandler<SignInFormData> = (data) => {
  //   console.log(data)
  // }

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(CELLS({
  //       el: myRef.current,
  //       THREE: THREE,
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 200.00,
  //       minWidth: 200.00,
  //       scale: 1.00,
  //       color1: 0x39008c,
  //       color2: 0x5500a2,
  //       size: 0.20,
  //       speed: 0.00
  //     }))
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy()
  //   }
  // }, [vantaEffect])

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <>
      <Head>
        <title>Login - CRM</title>
      </Head>
      <main>
        <Flex
          w="100vw"
          h="100vh"
          align="center"
          justify="space-between"
          direction="column"
          backgroundImage="url('/Fundo.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          p="20"
        // ref={myRef}
        >
          <Heading
            bgGradient='linear(to-l, #a0a0a0, #f7f7f7)'
            bgClip='text'
            fontSize='8xl'
            fontFamily="Kanit"
            p="2"
          >
            CRM
          </Heading>
          {/* <Flex
            as="form"
            w="100%"
            maxW={360}
            bg="white.200"
            backdropFilter="blur(2px)"
            p="8"
            borderRadius={8}
            flexDir="column"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <Stack spacing="4">
              <Input name="email" label="E-mail" type="email" error={errors.email} {...register('email')} />
              <Input name="password" label="Senha" type="password" error={errors.password} {...register('password')} />
            </Stack>

            <Button isLoading={isSubmitting} type="submit" mt="6" colorScheme="purple">Entrar</Button>

            <Flex
              py="4"
              align="center"
              justify="space-between"
              w="100%"
            >
              <Divider />
              <Text color="gray.500" marginX="2">or</Text>
              <Divider />
            </Flex>

          </Flex> */}
          <GoogleLogin
            clientId="796908931521-a50ujrl2fpmnu9n2peuppg7ni94hnpkr.apps.googleusercontent.com"
            // buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            scope="email"
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
              <Button isLoading={isSubmitting} mb="20" colorScheme="purple">Google</Button>
            )}
          />
        </Flex>
      </main>
    </>
  )
}
