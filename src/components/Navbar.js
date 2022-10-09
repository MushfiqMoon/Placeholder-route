import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar bg-base-content mb-8 sticky top-0 z-[100]">
            <div className="flex-1">
                <Link to="/" className="btn btn-primary normal-case text-xl">placeHolder</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 text-primary-content font-semibold">
                    <li><Link to='/'>All Posts</Link ></li>
                    <li><Link to='/all-users'>All Users</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar