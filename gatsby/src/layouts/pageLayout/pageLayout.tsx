import * as React from 'react'
import Helmet from 'react-helmet'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from './pageLayout.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

import { StaticQuery, graphql } from 'gatsby'

interface websiteQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

interface pageLayoutProps {
  children: any
  pageTitle: string
}

const PageLayout: React.FC<pageLayoutProps> = ({ children, pageTitle }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: websiteQueryProps) => (
      <>
        <Helmet
          title={`EmiliaPaz | ${pageTitle}`}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />

        <Container fluid className={styles.container}>
          <Row>
            <Col className={styles.sidebarCol} md={1}>
              <Sidebar />
            </Col>

            <Col className={styles.contentCol} md={11}>
              <Row>
                <Col md={12}>
                  <h2> {pageTitle} </h2>
                </Col>
              </Row>
              {children}
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default PageLayout
