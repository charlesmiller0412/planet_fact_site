import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/button";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Charles Miller | Planet Fact Site</title>
            </Head>

            <main>
                <h1>Hello</h1>
                <Button />
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;
