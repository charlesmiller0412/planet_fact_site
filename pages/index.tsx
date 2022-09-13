import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/button";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="author" content="Charles Miller" />
                <meta
                    name="description"
                    content="Charles Miller | Planet Fact Site"
                />
                <meta property="og:image" content="/assets/favicon/logo.png" />
                <meta
                    property="og:description"
                    content="Digital Portfolio for Charles Miller - Web Developer, UX/UI Designer, Graphic Designer"
                />
                <meta
                    property="og:title"
                    content="Charles Miller | Web Developer, UX/UI Designer, &amp; Graphic Designer"
                />
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
