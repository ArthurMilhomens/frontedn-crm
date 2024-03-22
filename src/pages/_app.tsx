import { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../service/queryClient";
import { EdgeStoreProvider } from "../lib/edgestore";

function App({ Component, pageProps }: AppProps) {
  return (
    <EdgeStoreProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </EdgeStoreProvider>
  );
}

export default App;
