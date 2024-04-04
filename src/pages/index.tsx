import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';
import FormLogin from '../components/Form';
import Cookies from 'universal-cookie';
import { api } from '../service/api';
import { useMutation } from 'react-query';
import { queryClient } from '../service/queryClient';
import router from 'next/router';
import axios from 'axios';
import { useEdgeStore } from '../lib/edgestore';

type SignInFormData = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  profileImage?: string;
}

export default function SignIn() {
  const cookies = new Cookies();
  const { edgestore } = useEdgeStore();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const handleSignIn = useMutation(async (data: SignInFormData) => {
    const response = await api.post('users/login', {
      email: data.email,
      password: data.password,
    });
    cookies.set('user', response.data, { path: '/' })

    api.defaults.headers.common['Authorization'] = `${response.data.accessToken}`

    return response.data
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      router.push('/dashboard');
    }
  });

  const handleCreateAccount = useMutation(async (data: SignInFormData) => {
    await edgestore.publicImages.confirmUpload({
      url: data.profileImage
    });

    const submitData = {
      email: data.email,
      name: data.name,
      password: data.password,
      profileImage: data.profileImage
    };

    const response = await api.post('users/create', submitData);

    cookies.set('user', response.data, { path: '/' });

    return response.data
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      router.push('/dashboard');
    }
  });

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
          justify="space-around"
          direction="row"
          backgroundImage="url('/Fundo.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          p="20"
        >
          {isWideVersion && <Heading
            bgGradient='linear(to-l, #a0a0a0, #f7f7f7)'
            bgClip='text'
            fontSize='8xl'
            fontFamily="Kanit"
            p="2"
          >
            MTG League
          </Heading>}
          <FormLogin
            handleSignIn={handleSignIn}
            handleCreateAccount={handleCreateAccount}
          />
        </Flex>
      </main>
    </>
  )
}
