import Header from '@/components/Header';
import { setUserData } from '@/redux/slices/user';
import { wrapper } from '@/redux/store';
import '@/styles/globals.scss';
import { theme } from '@/theme';
import { Api } from '@/utils/api';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { parseCookies } from 'nookies';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.getInitialProps = wrapper.getInitialAppProps(
  (store): any =>
    async ({ ctx, Component }: any) => {
      try {
        // const { access_token } = parseCookies(ctx);
        const data = await Api(ctx).user.getMe();
        store.dispatch(setUserData(data));
      } catch (error) {
        if (ctx.asPath === '/write') {
          ctx.res.writeHead(302, {
            Location: '/403',
          });
          ctx.res.end();
        }
      }
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps({ ...ctx, store })
          : {},
      };
    }
);

export default wrapper.withRedux(App);
