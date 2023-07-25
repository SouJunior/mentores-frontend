import { GlobalStyle } from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ThemeProvider } from "styled-components";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Sou Junior | Mentoria Online</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Portal oficial da Sou Junior para a comunicação entre mentores e profissionais que estejam ingressando na área de tecnologia"
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

export default App;
