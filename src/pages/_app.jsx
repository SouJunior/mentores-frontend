import { theme } from '@/styles/theme';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<>
				<Head>
					<title>Sou Junior | Mentoria Online</title>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1'
					/>
					<meta
						name='description'
						content='Portal oficial da Sou Junior para a comunicação entre mentores e profissionais que estejam ingressando na área de tecnonologia'
					/>

					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Radio+Canada:wght@400;500;600;700&display=swap'
						rel='stylesheet'
					/>

					<link
						rel='icon'
						href='/public/favicon.ico'
					/>
				</Head>
				<GlobalStyle />
				<ChakraProvider>
				<Component {...pageProps} />
				</ChakraProvider>
			</>
		</ThemeProvider>
	);
}
