import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Post from './Post'

const AllPost = () => {

    const allPosts = useLoaderData()
    // console.log(allPosts)
    return (
        <>
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-3 gap-4">
                    {
                        allPosts.map(post => <Post key={post.id} post={post}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default AllPost