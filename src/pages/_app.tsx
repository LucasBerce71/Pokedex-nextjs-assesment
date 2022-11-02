import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../theme/chakra.custom.theme';
import { GlobalProvider } from '../contexts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </GlobalProvider>
  )
}
