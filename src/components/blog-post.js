import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ post }) => (

   <article className="my-8">
    <header className="text-center mb-7">
        <a className="small-4 text-lighter text-uppercase ls-2 fw-600" href="#">{post.slug}</a>
        <h3><a>{post.title}</a></h3>
    </header>
    <Img className="rounded-md" sizes={post.heroImage.sizes} alt="..." />
    <p className="text-justify" dangerouslySetInnerHTML={{ __html: post.description.childMarkdownRemark.html, }} />
    <p className="text-center mt-7">
      <Link to={`/blog/${post.slug}`} className="btn btn-primary btn-round">Read more</Link>
    </p>
  </article>
    )