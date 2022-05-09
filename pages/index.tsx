import type {NextPage} from 'next'
import Head from 'next/head'
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

const styles = {
    main: `lg:max-w-6xl mx-auto max-h-screen overflow-hidden`,
    wrap:`grid grid-cols-9`
}


const Home: NextPage = () => {
    return (
        <div className={styles.main}>
            <Head>ter justify-cen
                <title>Educational project - React</title>
                <link rel="icon" href="/faviconV.ico"/>
            </Head>

            <main className={styles.wrap}>

                {/*SIDEBAR*/}
                <Sidebar/>


                {/*FEED*/}
                <Feed/>

                {/*WIDJET*/}
                <Widgets/>

            </main>

        </div>
    )
}

export default Home
