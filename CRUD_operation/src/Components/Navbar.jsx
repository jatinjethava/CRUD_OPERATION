import React from 'react'

export const Navbar = () => {
    return (
        <div className='w-full flex justify-between h-15 items-center bg-gray-200 shadow px-5'>
            <h1 className='text-2xl font-bold'>CRUD App</h1>

            <div className='w-[50%] h-full'>
                <ul className='w-full h-full flex gap-10 list-none items-center text-zinc-800 font-medium'>
                    <li className='cursor-pointer'>HOME</li>
                    <li className='cursor-pointer'>ABOUT</li>
                    <li className='cursor-pointer'>CONTACT</li>
                </ul>
            </div>

            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Add User</button>
        </div>

    )
}
