import {useRouter} from "next/dist/client/router"
import Head from 'next/head'
import Layout from '../components/navigation/layout'
import '../styles/globals.css'
import '../styles/theme.scss'
import ReactGA from "react-ga4";

// used for google analytics
ReactGA.initialize("G-MJG19RWQDF");


export default function MyApp({Component, pageProps}) {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Anime &amp; Manga Enthusiasts</title>
                <meta name="description" content="Anime Club at UC San Diego"/>
                <link rel="icon" href={`${router.basePath}/favicon.ico`}/>
                <link rel="stylesheet" href={`${router.basePath}/fonts.css`}/>

            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
