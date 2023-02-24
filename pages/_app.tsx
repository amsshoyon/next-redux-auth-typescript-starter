import '@/styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { getSession, SessionProvider } from "next-auth/react"
import { NextPage } from 'next';
import { LayoutTypes } from '@/types';
import ClientLayout from '@/components/client/layouts/ClientLayout';
import AdminLayout from '@/components/admin/layouts/AdminLayout';
import { ThemeProvider } from '@mui/material';
import { Theme } from '../muiTheme';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from '@/utils/notistack';
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Head from 'next/head';
import { Fragment, ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

const BlankLayout = ({ children }: { children: ReactNode }) => <Fragment>{children}</Fragment>

const layouts = {
	client: ClientLayout,
	blank: BlankLayout,
	admin: AdminLayout
};

export type NextPageWithLayout = NextPage & {
	layout?: LayoutTypes,
	requireAuth?: boolean
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout,
	isAdminPage?: boolean,
	session: any
}

const App = ({ Component, pageProps, isAdminPage, session }: AppPropsWithLayout) => {
	const layout = Component.layout ? Component.layout : isAdminPage ? 'admin' : 'client'
	const PageLayout = layouts[layout]

	return (
		<SessionProvider session={session}>
			<Provider store={store}>
				<AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
					<ThemeProvider theme={Theme}>
						<StyledEngineProvider injectFirst>
							<SnackbarProvider maxSnack={6} anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}>
								<SnackbarUtilsConfigurator />
								<PageLayout>
									<Head>
										<title>NextJs + NextAuth + Redux</title>
									</Head>
									<Component {...pageProps} />
								</PageLayout>
							</SnackbarProvider>
						</StyledEngineProvider>
					</ThemeProvider>
				</AnimatePresence>
			</Provider>
		</SessionProvider>
	)
}

App.getInitialProps = async (context: AppContext) => {
	const isAdminPage = context.router.pathname.startsWith('/admin') || false
	const session = await getSession(context.ctx)
	return { isAdminPage, session }
}

export default App
