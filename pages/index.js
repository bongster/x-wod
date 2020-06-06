import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import Card from "../components/Card"
import theme from "../theme";

export default function Home({ }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Container>
          <a href="/api/auth/google">Sign In with Google</a>
          <Card />
        </Container>
      </Layout>
    </ThemeProvider>
  )
}
