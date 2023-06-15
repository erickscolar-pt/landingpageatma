import { AppProps } from "next/app"
import '../../styles/globals.scss'
import Head from "next/head"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>ATMA</title>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                />
                <link rel="icon" type="image/png" sizes="32-32" href="../../public/favicon.png" />
            </Head>

            <Component {...pageProps} />
            <ToastContainer autoClose={3000} />

        </>
    )
}

export default MyApp