import React from 'react'
import { Button } from '../components/Button'

export default function Signup() {
    return (
        <div className='w-full h-[100vh] flex justify-center items-start pt-[120px]'>
            <div className="w-[80%] sm:w-[30%] bg-white rounded-[10px] p-[20px] flex flex-col gap-[20px]">
                <h1 className='font-black text-[15px]'>Create an Account</h1>

                <form action="" className='flex flex-col gap-[15px]'>
                    <div className="">
                        <label htmlFor="" className='text-[12px] font-semibold'>First Name</label>
                        <input className='w-full px-[15px] py-[5px] text-[12px] rounded-[3px] bg-gray-50' type="text" />
                    </div>


                    <div className="">
                        <label htmlFor="" className='text-[12px] font-semibold'>Last Name</label>
                        <input className='w-full px-[15px] py-[5px] text-[12px] rounded-[3px] bg-gray-50' type="text" />
                    </div>


                    <div className="">
                        <label htmlFor="" className='text-[12px] font-semibold'>Email</label>
                        <input className='w-full px-[15px] py-[5px] text-[12px] rounded-[3px] bg-gray-50' type="text" />
                    </div>

                    <div className="">
                        <label htmlFor="" className='text-[12px] font-semibold'>Password</label>
                        <input className='w-full px-[15px] py-[5px] text-[12px] rounded-[3px] bg-gray-50' type="text" />
                    </div>

                    <Button className="bg-green-600 text-white hover:bg-green-700 self-start mt-[20px]">Sign Up</Button>
                </form>
            </div>
        </div>
    )
}
