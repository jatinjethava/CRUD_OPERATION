import React from 'react'

export const Details = () => {
    return (
        <div className='w-full px-5 min-[calc(100vh-60px)]:'>
            {/* <h1 className='text-3xl font-bold text-center mt-10'>User Details</h1>
            <p className='text-center mt-5 text-lg text-gray-600'>Here you can view the details of a specific user.</p> */}
            <br />
            <div className='w-full grid grid-cols-5 gap-4'>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">User Name :</label>
                    <input type="text" placeholder='user name' className='w-full border-2 text-gray-800 border-gray-100 rounded-sm outline-1 outline-gray-50 h-8 px-2' required />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Email :</label>
                    <input type="email" placeholder='Email address' className='w-full border-2 text-gray-800 border-gray-100 rounded-sm outline-1 outline-gray-50 h-8 px-2' required />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Mobile No :</label>
                    <input type="text" placeholder='Mobile number' className='w-full border-2 text-gray-800 border-gray-100 rounded-sm outline-1 outline-gray-50 h-8 px-2' required />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Course :</label>
                    <input type="text" placeholder='course' className='w-full border-2 text-gray-800 border-gray-100 rounded-sm outline-1 outline-gray-50 h-8 px-2' required />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Fee :</label>
                    <input type="number" placeholder='Fees' className='w-full border-2 text-gray-800 border-gray-100 rounded-sm outline-1 outline-gray-50 h-8 px-2' required />
                </div>
            </div>

        </div>
    )
}
