import React from 'react'
import Card from '../components/card'

const IndexPage = () => (
  <div>
    <h1
      style={{
        fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontSize: 48,
        fontWeight: 900,
      }}
    >
      Cards
    </h1>
    <h2
      style={{
        fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontSize: 32,
        fontWeight: 700,
      }}
    >
      Tables
    </h2>
    <Card />
  </div>
)

export default IndexPage
