import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* External Stylesheets */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css"
          />
          <link
            rel="stylesheet"
            href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-thin.css"
          />
          <link
            rel="stylesheet"
            href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-solid.css"
          />
          <link
            rel="stylesheet"
            href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-regular.css"
          />
          <link
            rel="stylesheet"
            href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-light.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
