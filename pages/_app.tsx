
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic';

import { NextUIProvider, createTheme } from '@nextui-org/react';
import { useState } from "react";
import { Box } from "../components/Box";
import Navbar from '../components/NavbarComponent';


const App = dynamic(
  async () => {
    return import('../async-pages/_app');
  },
  {
    ssr: false,
  },
);


import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const createApolloClient = () => {
  const link = new HttpLink({
    uri: "/api/graphql",
  });

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};

const darkTheme = createTheme({type:"light"});

function MyApp({Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
    <ApolloProvider client={createApolloClient()}>      
      <NextUIProvider theme={darkTheme}>
        <Navbar/>
        <Box css={{ px: "$12", py: "$15", mt: "$12", "@xsMax": {px: "$10"}, maxWidth: "800px", margin: "0 auto" }}>
        <Component {...pageProps} />
        </Box>
      </NextUIProvider>
    </ApolloProvider>
  );
}

export default MyApp;