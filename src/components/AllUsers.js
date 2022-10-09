import React from 'react'
import { useLoaderData } from 'react-router-dom'

const AllUsers = () => {

    const allUsers = useLoaderData()
    return (
        <div className="container mx-auto px-4">
            <div class="grid grid-cols-2 gap-4">
            {
                allUsers.map(user => <div className="card lg:card-side bg-base-100 shadow-xl mb-8 border">
                    <figure><img src={`https://i.pravatar.cc/300?u=${user.id}`} alt={user.name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mb-5 text-primary">{user.name}</h2>
                        <p> <span className="text-primary" >Username: </span>{user.username}</p>
                        <p> <span className="text-primary" >Email: </span>{user.email}</p>
                        {/* <p> <span className="text-primary" >Address: </span> City: {address.city} | Street :{address.street} | Zipcode {address.zipcode}</p> */}
                        <p> <span className="text-primary" >Phone: </span>{user.phone}</p>
                        <p> <span className="text-primary" >Website: </span>{user.website}</p>
                    </div>
                </div>)
            }
            </div>
        </div>
    )
}

export default AllUsers