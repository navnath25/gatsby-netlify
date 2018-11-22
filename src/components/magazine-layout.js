import React from 'react'
import PageCSS from '../components/page.min.css'
import StyleCSS from '../components/styles.css'
import PageMINJS from '../js/page.min.js'
import ScriptJS from '../js/script.js'
import BlogPost from './blog-post'



export default ({posts }) => (

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
)
