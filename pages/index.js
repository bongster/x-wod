import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import Card from "../components/Card"
import theme from "../theme";
import cookies from "next-cookies"

export default function Home({ token, profile }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Container>
          {token} {profile.displayName}
          <a href="/api/auth/google">Sign In with Google</a>
          <Card />
        </Container>
      </Layout>
    </ThemeProvider>
  )
}

Home.getInitialProps = async (ctx) => {
  const allCookies = cookies(ctx);
  const {token, profile } = allCookies;
  return {
    token,
    profile,
  }
}