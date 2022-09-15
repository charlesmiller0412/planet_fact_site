import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import starBG from "../assets/images/background-stars.svg";
import Navbar from "../components/navbar";
import Mercury from "../pages/sections/Mercury";

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
            <header>
                <Navbar />
            </header>
            <main
                style={{
                    backgroundImage: `url(${starBG.src})`,
                    width: "100vw",
                    height: "100vh",
                    backgroundPosition: "center",
                    backgroundRepeat: "none",
                    backgroundSize: "cover",
                }}
            >
                <Mercury />
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;
