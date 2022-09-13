import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
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
                {/* google font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Antonio:wght@500;700&family=League+Spartan:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                {/* FAVICON */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="%PUBLIC_URL%/assets/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="%PUBLIC_URL%/assets/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="%PUBLIC_URL%/assets/favicon/favicon-16x16.png"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
