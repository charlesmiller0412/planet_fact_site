import type { NextPage } from "next";
import Head from "next/head";
import starBG from "../public/assets/images/background-stars.svg";
import Navbar from "../components/navbar";
import dynamic from "next/dynamic";
import MobileNav from "../components/MobileNav";
import Planets from "./Planets";

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
                    content="Planet Fact Site challenge from frontendmentor.com"
                />
                <meta property="og:image" content="/assets/favicon/logo.png" />
                <meta
                    property="og:description"
                    content="Planet Fact Site challenge from frontendmentor.com"
                />
                <meta
                    property="og:title"
                    content="Charles Miller | Web Developer, UX/UI Designer, &amp; Graphic Designer"
                />
                <title>Charles Miller | Planet Fact Site</title>
            </Head>
            <header>
                <Navbar />
                <MobileNav />
            </header>
            <main
                style={{
                    backgroundImage: `url(${starBG.src})`,
                    width: "100%",
                    height: "100%",
                    minHeight: "100vh",
                    backgroundPosition: "center",
                    backgroundRepeat: "none",
                    backgroundSize: "cover",
                    overflowX: "hidden",
                }}
            >
                <Planets />
            </main>
        </div>
    );
};

export default Home;
