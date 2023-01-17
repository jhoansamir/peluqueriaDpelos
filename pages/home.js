import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../layout/layout_home'


import ServiceList from "../components/ServiceList";
import Featured from "../components/Featured";


export default function Home(){
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Pizza Restaurant in Newyork</title>
                    <meta name="description" content="Best pizza shop in town" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Featured/>
                <ServiceList/>
            </div>
        </Layout>
    );
}