import Navbar from "./navbar";
import Head from "next/head";

const layout = ({ children }) => {
    return (
        <>
            <Head>
               
            </Head>
            <Navbar />
            {children}
        </>
    )
}
export default layout