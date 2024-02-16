import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures of Art House Gardenia."
          />
          <meta property="og:site_name" content="arthousegardenia.com" />
          <meta
            property="og:description"
            content="See pictures of Art House Gardenia."
          />
          <meta property="og:title" content="Art House Gardenia" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Art House Gardenia" />
          <meta
            name="twitter:description"
            content="Fully furnished vacation summer house for rent located on the southern coast of the Black Sea. "
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
