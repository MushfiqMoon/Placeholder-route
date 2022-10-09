import React from 'react'
import { useLoaderData } from 'react-router-dom'

const User = () => {

  const userDetail = useLoaderData()
  console.log(userDetail)

  const { name, address, phone, username, website, email, id } = userDetail

  return (
    <div className="container mx-auto px-4">

      <div className="card lg:card-side bg-base-100 shadow-xl border ">
        <figure><img src={`https://i.pravatar.cc/300?u=${id}`} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title mb-5 text-primary">{name}</h2>
          <p> <span className="text-primary" >Username: </span>{username}</p>
          <p> <span className="text-primary" >Email: </span>{email}</p>
          <p> <span className="text-primary" >Address: </span> City: {address.city} | Street :{address.street} | Zipcode {address.zipcode}</p>
          <p> <span className="text-primary" >Phone: </span>{phone}</p>
          <p> <span className="text-primary" >Website: </span>{website}</p>
        </div>
      </div>
    </div>
  )
}

export default User