import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="PrairieLearn is an online assessment and learning system that empowers instructors to create robust educational resources for students."
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="PrairieLearn" />
          <meta property="og:image" content="/api/og" />
          <meta
            property="og:description"
            content="PrairieLearn is an online assessment and learning system that empowers instructors to create robust educational resources for students."
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
