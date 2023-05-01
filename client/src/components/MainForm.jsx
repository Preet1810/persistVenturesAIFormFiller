import react, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../state/index";
import axios from 'axios'
import config from '../config'
const MainForm=() => {
    const dispatch=useDispatch();
    const token=useSelector((state) => state.token);
    const [formData, setFormData]=useState({
        fullname: '',
        role: '',
        email: '',
        contactNo: '',
        linkedin: '',
        experience: '',
        companyName: '',
        website: '',
        companyBrief: '',
        startingYear: '',
        funding: '',
        revenueGeneration: '',
        clientNo: '',
        accomplishments: '',
        address: '',
        city: '',
        state: '',
        country: ''
    });


    const handleFormChange=(e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit=async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${config.API_BASE_URL}/form/`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }).then((response) => {
                console.log(response)
                // setLoad(false)
            })

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='py-10 px-0 md:py-10 md:px-20'>
            <div className="flex flex-col justify-center  bg-gray-50 ">
                <div className='flex flex-row p-10'>
                    <div className='mx-auto '>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900 ">
                            Personal Info
                        </h2>
                    </div>
                    <div className=''>
                        <button
                            type="submit"
                            onClick={() => dispatch(setLogout())}
                            className="w-20 flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >Logout</button>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='w-full  mx-auto px-16'>
                    <div className='flex flex-row'>
                        <div className='px-3 w-full'>
                            <label htmlFor="fullname" className=''>Full Name</label>
                            <input
                                id="fullname"
                                name="fullname"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Full Name"
                                value={formData.fullname}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='px-3 w-full'>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="email@gmail.com"
                                value={formData.email}
                                onChange={handleFormChange}
                            />
                        </div>

                    </div>
                    <div className='flex flex-row mt-3'>
                        <div className='px-3 w-full'>
                            <label htmlFor="contactNo">Contact No</label>
                            <input
                                id="contactNo"
                                name="contactNo"
                                type="number"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="91929292929"
                                value={formData.contactNo}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='px-3 w-full'>
                            <label htmlFor="role">What is Your Role?</label>
                            <input
                                id="role"
                                name="role"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Founder"
                                value={formData.role}
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>
                    <div className='flex flex-row mt-3'>
                        <div className='px-3 w-full '>
                            <label htmlFor="experience">Experience & Accomplishments</label>
                            <textarea
                                name="experience"
                                id="experience"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Showcase experiece and accomplishments"
                                value={formData.experience}
                                onChange={handleFormChange}
                                cols="60" rows="5"
                            />
                        </div>
                        <div className='px-3 w-full '>
                            <label htmlFor="linkedin">Linkedin Profile</label>
                            <input
                                id="linkedin"
                                name="linkedin"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="linkedin.com"
                                value={formData.linkedin}
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900 p-10">
                            Business Info
                        </h2>
                    </div>

                    <div className='flex flex-row'>
                        <div className='px-3 w-full'>
                            <label htmlFor="companyName" className=''>Company Name</label>
                            <input
                                id="companyName"
                                name="companyName"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Company LLC"
                                value={formData.companyName}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='px-3 w-full'>
                            <label htmlFor="website">Website</label>
                            <input
                                id="website"
                                name="website"
                                type="website"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="website.com"
                                value={formData.website}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='px-3 w-full'>
                            <label htmlFor="funding">How Much Funding are you seeking</label>
                            <input
                                id="funding"
                                name="funding"
                                type="number"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder=""
                                value={formData.funding}
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>
                    <div className='flex flex-row mt-3'>

                        <div className='px-3 w-full'>
                            <label htmlFor="startingYear">Founded Year</label>
                            <input
                                id="startingYear"
                                name="startingYear"
                                type="number"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="2019"
                                value={formData.startingYear}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='px-3 w-full'>
                            <label htmlFor="clientNo">No of Clients/Users/Customers</label>
                            <input
                                id="clientNo"
                                name="clientNo"
                                type="number"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder=""
                                value={formData.clientNo}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='px-3 w-full'>
                            <label htmlFor="address">Address</label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder=""
                                value={formData.address}
                                onChange={handleFormChange}
                            />
                        </div>

                    </div>

                    <div className='flex flex-row mt-3'>

                        <div className='px-3 w-full'>
                            <label htmlFor="city">City</label>
                            <input
                                id="city"
                                name="city"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder=""
                                value={formData.city}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='px-3 w-full'>
                            <label htmlFor="state">State</label>
                            <input
                                id="state"
                                name="state"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder=""
                                value={formData.state}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='px-3 w-full'>
                            <label htmlFor="country">Country</label>
                            <input
                                id="country"
                                name="country"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder=""
                                value={formData.country}
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>

                    <div className='flex flex-row mt-3'>
                        <div className='px-3 w-full '>
                            <label htmlFor="companyBrief">Describe Your Company/Product</label>
                            <textarea
                                name="companyBrief"
                                id="companyBrief"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Describe Your Company/Product"
                                value={formData.companyBrief}
                                onChange={handleFormChange}
                                cols="60" rows="5"
                            />
                        </div>
                        <div className='px-3 w-full'>
                            <label htmlFor="revenueGeneration">How Your Company Generates or Will Generate Revenue</label>
                            <textarea
                                id="revenueGeneration"
                                name="revenueGeneration"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder=""
                                cols="60" rows="5"
                                value={formData.revenueGeneration}
                                onChange={handleFormChange}
                            />
                        </div>

                    </div>
                    <div className='flex flex-row mt-3'>
                        <div className='px-3 w-2/3'>
                            <label htmlFor="accomplishments">Company's Accomplishments/Social Proof/ Press releases</label>
                            <textarea
                                id="accomplishments"
                                name="accomplishments"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder=""
                                cols="60" rows="5"
                                value={formData.accomplishments}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='flex justify-center w-1/3 py-10'>
                            <button
                                type="submit"
                                className=" group relative w-2/4  flex justify-center py-6  border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </form>
            </div>
            {/* <button onClick={() => dispatch(setLogout())}>Logout</button> */}
        </div>
    )
}

export default MainForm