import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import BlogPost from '../components/blog-post'
import Page from '../components/page.min.css'
import Style from '../components/styles.css'
import NavBar from '../components/navbar.js'
import Header from '../components/header'


class MagazineComponent extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
   
    return (
    <div>
    <NavBar />
    <Header />
    <div className="main-content">
        <section className="section p-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-xl-6 mx-auto">
                        {posts.map(({ node }) => { return (
                        <div key={node.slug}>
                            <BlogPost post={node} />
                        </div>
                        ) })}
                      </div>
                  </div>
              </div>
          </section>
         </div>
        </div>
    )
  }
}

export default MagazineComponent

export const pageQuery = graphql`
  query MagazineQuery {
    allContentfulBlogPost {
      edges {
        node {
          slug
          title
          category
          description{
           childMarkdownRemark {
          html
        }
          }
           heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_tracedSVG
            }
          }
           
        }
      }
    }
  }
`
