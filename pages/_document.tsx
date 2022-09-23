import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en-us">
            <Head>
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
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
