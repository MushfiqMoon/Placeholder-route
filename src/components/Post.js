import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {

    const { title, body, id } = post
    return (
        <div className="card bg-base-300 shadow-xl" >
            <div className="card-body">
                <h2 className="card-title text-primary capitalize">{title}</h2>
                <p>{body}</p>
                <div className="card-actions justify-end">
                    <Link to={`post/${id}`} className="btn btn-primary">
                        View Post
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Post