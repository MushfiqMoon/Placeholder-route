import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar bg-base-content mb-8">
            <div className="flex-1">
                <Link to="/" className="btn btn-primary normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 text-primary-content font-semibold">
                    <li><Link to='/'>All Posts</Link ></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar