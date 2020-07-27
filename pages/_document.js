import Document, { Html, Head, Main, NextScript } from 'next/document'
// https://nextjs.org/docs/advanced-features/custom-document
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <title>Culturee</title>
        <Head>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="../public/static/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../public/static/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../public/static/favicon-16x16.png"/> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument