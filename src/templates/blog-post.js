import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
render() {
const post = get(this.props, 'data.contentfulBlogPost')
const siteTitle = get(this.props, 'data.site.siteMetadata.title')

return (
<div class="main-content">

<div>
<Helmet title={`${post.title} | ${siteTitle}`} />

<div class="section">
<div class="container">

<div class="text-center mt-8">
<h2>{post.title}</h2>
<p>{post.publishDate} in <a href="#">{post.category}</a></p>
</div>

<div className={heroStyles.hero}>
<Img className={heroStyles.heroImage} alt={post.title} sizes={post.heroImage.sizes} />
</div>

<div
dangerouslySetInnerHTML={{
__html: post.body.childMarkdownRemark.html,
}}
/>

{post.tags}
</div>
</div>

</div>
</div>
)
}
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
contentfulBlogPost(slug: { eq: $slug }) {
title
publishDate(formatString: "MMMM Do, YYYY")
category
tags
heroImage {
sizes(maxWidth: 1180, background: "rgb:000000") {
...GatsbyContentfulSizes_tracedSVG
}
}
body {
childMarkdownRemark {
html
}
}
}
}
`