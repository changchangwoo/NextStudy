import Head from "next/head";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";

const Home = () => {
    return (
        <AppLayout>
        <Head>
            <title>NodeBird</title>
        </Head>
        <FollowList></FollowList>
        </AppLayout>
    )
}

export default Home;