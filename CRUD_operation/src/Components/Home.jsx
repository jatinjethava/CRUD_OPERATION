import React from 'react'
import { useState, useEffect } from 'react'
import { userUrl } from '../axiosUrl'
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export const Home = () => {

    const [users, setUsers] = useState([]);
    const GetUser = async () => {
        try {
            const response = await userUrl.get('/userList');
            setUsers(response.data.data);
            console.log(response.data);
        } catch (error) {
            console.log('Error fetching user list:', error);
        }
    }

    useEffect(() => {
        GetUser();
    }, []);

    const [data, setData] = useState({
        "name": "",
        "email": "",
        "mobile_no": "",
        "course": "",
        "fees": "",
        "id": ""
    });
    const [Updating, setUpdating] = useState(false);

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

            if (!Updating) {

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
                if (response.status === 201) {
                    alert('User created successfully');
                    setData({
                        name: "",
                        email: "",
                        mobile_no: "",
                        course: "",
                        fees: "",
                        id: ""
                    });
                    GetUser();
                }
            } else {
                const response = await userUrl.put(`/updateUser/${data.id}`, data);
                if (response.status === 200) {
                    alert('User updated successfully');
                    setData({
                        name: "",
                        email: "",
                        mobile_no: "",
                        course: "",
                        fees: "",
                        id: ""
                    });
                    setUpdating(false);
                    GetUser();
                }
            }

        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Failed to submit data. Please try again.');
        }
    };


    const UpdateUser = async (data) => {
        setData({
            name: data.name,
            email: data.email,
            mobile_no: data.mobile_no,
            course: data.course,
            fees: data.fees,
            id: data._id
        });
        setUpdating(true);
        GetUser();
    }


    const DeleteUser = async (id) => {
        try {
            const data = await userUrl.delete(`/deleteUser/${id}`);
            if (data.status === 200) {
                alert('User deleted successfully');
                GetUser();
            }
        } catch (error) {
            console.log('Error deleting user:', error);
        }
    }

    return (
        <>

            <div className='w-full px-5 min-[calc(100vh-60px)]'>
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


            <div className='w-full px-5 min-[calc(100vh-60px)]'>
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
                                <td className='tracking-wider px-6 py-3 text-left text-xs font-medium'>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.length > 0 ? (
                                users.map((user, index) => (
                                    <tr key={user._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {user.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {user.mobile_no}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {user.course}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {user.fees}
                                        </td>
                                        <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900 flex items-center">
                                            <div className='h-10 w-10 justify-evenly cursor-pointer items-start text-3xl ' onClick={() => DeleteUser(user._id)}>
                                                <span><MdDeleteForever /></span>
                                            </div>
                                            &nbsp;&nbsp;
                                            <div className='h-10 w-10 justify-evenly cursor-pointer items-end text-3xl ml-2' onClick={() => UpdateUser(user)}>
                                                <span><MdEdit /></span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-gray-500">
                                        No users found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
