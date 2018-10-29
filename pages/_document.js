import React from 'react'
import Document, { Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="vi">
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js" />
        <script src="https://api.trello.com/1/client.js?key=be962f2b3d8d5d9767faa7be938423e0" />
      </html>
    )
  }
}
