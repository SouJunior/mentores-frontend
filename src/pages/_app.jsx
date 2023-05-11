import Head from 'next/head';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';


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

				
				</Head>
				<Component {...pageProps} />
				<GlobalStyle />
			</>
		</ThemeProvider>

	);
}
