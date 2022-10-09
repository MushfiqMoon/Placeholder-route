import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import Comments from './Comments'

const PostDetails = () => {

    const [allComments, setAllComments] = useState([])
    const [user, setUser] = useState({})

    const singlePost = useLoaderData()
    const { title, body, id, userId } = singlePost

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data))


    }, [])


    const loadData = (id) => {

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setAllComments(data))

    }

    return (
        <div className="container mx-auto px-4">

            <div className="card bg-base-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary capitalize">{title}</h2>
                    <p>Posted By : <Link to={`/user/${user.id}`} className="text-primary" > <i>- {user.name}</i> </Link></p>
                    <p>{body}</p>
                </div>
            </div>
            <div className="flex justify-end">
                <button className='btn btn-primary mt-5' onClick={() => loadData(id)}>View Comments</button>
            </div>

            {allComments.length > 0 && <Comments allComments={allComments} />}





        </div>
    )
}

export default PostDetails