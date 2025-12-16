import React from 'react'

export const Home = () => {
    return (
        <div className='w-full px-5 min-[calc(100vh-60px)]:'>
            {/* <h1 className='text-3xl font-bold text-center mt-10'>Welcome to the CRUD Operation App</h1>
            <p className='text-center mt-5 text-lg text-gray-600'>This is a simple application to demonstrate Create, Read, Update, and Delete operations using React.</p> */}

            <div className='w-full'>
                <table className='w-full bg-white divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <td className='tracking-wider px-6 py-3 text-left text-xs font-medium'>User Name</td>
                            <td className='tracking-wider px-6 py-3 text-left text-xs font-medium'>Email</td>
                            <td className='tracking-wider px-6 py-3 text-left text-xs font-medium'>Mobile No</td>
                            <td className='tracking-wider px-6 py-3 text-left text-xs font-medium'>Course</td>
                            <td className='tracking-wider px-6 py-3 text-left text-xs font-medium'>Fee</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>John Doe</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>jatin@gmail.com</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>8160082638</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>BCA</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>37,500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
