import React, { useState } from 'react'
import { Button } from './Button'

export default function CreateWorkout() {

    const [form, setForm] = useState([])


    return (


        <div className="flex flex-col gap-[15px]">
            <h1 className='font-bold text-[15px]'>Add a New Workout</h1>

            <form action="" className='flex flex-col gap-[20px]'>
                <div className="">
                    <label htmlFor="" className='text-[12px] font-semibold'>Exercise Title</label>
                    <input className='w-full px-[15px] py-[5px] text-[12px] rounded-[3px]' type="text" />
                </div>

                <div className="">
                    <label htmlFor="" className='text-[12px] font-semibold'>Load (in kg)</label>
                    <input className='w-full px-[15px] py-[5px] text-[12px] rounded-[3px]' type="text" />
                </div>


                <div className="">
                    <label htmlFor="" className='text-[12px] font-semibold'>Number of Reps</label>
                    <input className='w-full px-[15px] py-[5px] text-[12px] rounded-[3px]' type="text" />
                </div>

                <Button className="bg-green-600 text-white hover:bg-green-700 self-start">Add Workout</Button>
            </form>

        </div>



    )
}
