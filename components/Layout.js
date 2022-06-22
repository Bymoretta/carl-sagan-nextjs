import Navbar from "./navbar"
import Head from "next/head"

const layout = ({ children }) => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>
            <Navbar />
            {children}
        </>
    )
}
export default layout