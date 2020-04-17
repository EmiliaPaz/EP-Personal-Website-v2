'use strict'

module.exports = {
  siteMetadata: {
    title: 'Emilia Paz',
    description: 'Personal website of Emilia Paz',
    keywords: 'emiliapaz, softwarenegineer, computerscience',
    siteUrl: 'https://emiliapaz.github.io',
    author: {
      name: 'Emilia Paz',
      url: 'https://emiliapaz.github.io',
      email: 'emipazojeda@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Karla`,
            variants: [`400`, `400i`, `700`, `700i`]
          },
          {
            family: `Rubik`,
            variants: [`400`, `400i`, `700`, `700i`]
          },
          {
            family: `Roboto`,
            variants: [`400`, `400i`, `700`, `700i`]
          },
          {
            family: `Cabin`,
            variants: [`400`, `400i`, `700`, `700i`]
          },
          {
            family: `Ruda`,
            variants: [`400`, `400i`, `700`, `700i`]
          },
          {
            family: `Roboto Slab`,
            variants: [`400`, `400i`, `700`, `700i`]
          }
        ]
      }
    }
  ]
}
