import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const LearnMorePage = () => (
  <Layout>
    <div id="main">
      <Link to="/">
        <a href="#" className="button">
          Home
        </a>
      </Link>
      <h1>You just landed on learn more</h1>
    </div>
  </Layout>
)

export default LearnMorePage
