import React from 'react'

const Comments = ({ allComments }) => {

    return (
        <>
            <div className="mt-10">
                {allComments.map(cm =>
                    <div key={cm.id} className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg mt-8">
                        <div className="relative flex gap-4">
                            <img src={`https://i.pravatar.cc/150?u=${cm.id}`} className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy" />
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between">
                                    <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{cm.email}</p>
                                    <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
                                </div>
                            </div>
                        </div>
                        <p className="-mt-4 text-gray-500">{cm.body}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Comments