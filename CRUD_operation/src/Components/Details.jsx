import React from 'react'
import { useState } from 'react';
import { userUrl } from '../axiosUrl';

export const Details = () => {

    const [data, setData] = useState({
        "name": "",
        "email": "",
        "mobile_no": "",
        "course": "",
        "fees": ""
    });

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    // console.log(data);

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {

            if (!data.name) {
                alert('Please fill Name field');
                return;
            }
            if (!data.email) {
                alert('Please fill Email field');
                return;
            }
            if (!data.mobile_no) {
                alert('Please fill Mobile No field');
                return;
            }
            if (!data.course) {
                alert('Please fill Course field');
                return;
            }
            if (!data.fees) {
                alert('Please fill Fees field');
                return;
            }

            const response = await userUrl.post('/addUser', data);

            if (response.status === 200 || response.status === 201) {
                alert('Data submitted successfully');
                setData({
                    name: '',
                    email: '',
                    mobile_no: '',
                    course: '',
                    fees: ''
                });
            }
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Failed to submit data. Please try again.');
        }
    };

    const UpdateUser = async (e) => {
        e.preventDefault();
        try {
            const response = await userUrl.put('/updateUser/:id', data);
            if (response.status === 200) {
                alert('User updated successfully');
            }
        } catch (error) {
            console.log('Error updating user:', error);
        }
    }

    return (
        <div className='w-full px-5 min-[calc(100vh-60px)]:'>
            {/* <h1 className='text-3xl font-bold text-center mt-10'>User Details</h1>
            <p className='text-center mt-5 text-lg text-gray-600'>Here you can view the details of a specific user.</p> */}
            <br />
            <form onSubmit={HandleSubmit}>
                <div className='w-full grid grid-cols-5 gap-4'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="">User Name :</label>
                        <input type="text" placeholder='user name' className='w-full border-2 text-gray-800 border-gray-100 rounded-sm outline-1 outline-gray-50 h-8 px-2'
                            name="name" value={data.name} onChange={HandleChange}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="">Email :</label>
                        <input type="email" placeholder='Email address' className='w-full border-2 text-gray-800 border-gray-100 rounded-sm outline-1 outline-gray-50 h-8 px-2'
                            name="email" value={data.email} onChange={HandleChange}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="">Mobile No :</label>
                        <input type="text" placeholder='Mobile number' className='w-full border-2 text-gray-800 border-gray-100 rounded-sm outline-1 outline-gray-50 h-8 px-2'
                            name="mobile_no" value={data.mobile_no} onChange={HandleChange}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="">Course :</label>
                        <input type="text" placeholder='course' className='w-full border-2 text-gray-800 border-gray-100 rounded-sm outline-1 outline-gray-50 h-8 px-2'
                            name="course" value={data.course} onChange={HandleChange}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="">Fee :</label>
                        <input type="number" placeholder='Fees' className='w-full border-2 text-gray-800 border-gray-100 rounded-sm outline-1 outline-gray-50 h-8 px-2'
                            name="fees" value={data.fees} onChange={HandleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-gray-500 text-white h-10 w-30 border rounded-sm cursor-pointer mt-5 mb-6"
                    >
                        SUBMIT
                    </button>

                </div>
            </form>

        </div>
    )
}
