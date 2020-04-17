import * as React from 'react'
import { Link } from 'gatsby'

import PageLayout from '../layouts/pageLayout/pageLayout'

const NotFoundPage = () => (
  <PageLayout>
    <h1>404: Page not found.</h1>
    <p>
      You've hit the void. <Link to="/">Go back.</Link>
    </p>
  </PageLayout>
)

export default NotFoundPage
