import React, { useState } from 'react'
import { Button } from './Button'

export default function CreateWorkout(props) {

    const [form, setForm] = useState({
        title:"",
        load:"",
        reps:"",
    })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.title]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError('')
            setForm({
                title:"",
                load:"",
                reps:"",
            })
            console.log("New Workout Added")
        }
    }

    return (


        <div className="flex flex-col gap-[15px]">
            <h1 className='font-bold text-[15px]'>Add a New Workout</h1>

            <form action="" className='flex flex-col gap-[20px]'  onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="" className='text-[12px] font-semibold'>Exercise Title</label>
                    <input title='title' value={form.title} className='w-full px-[15px] py-[5px] text-[12px] rounded-[3px]' type="text" onChange={handleChange}/>
                </div>

                <div className="">
                    <label htmlFor="" className='text-[12px] font-semibold'>Load (in kg)</label>
                    <input title='load' value={form.load} className='w-full px-[15px] py-[5px] text-[12px] rounded-[3px]' type="text" onChange={handleChange}/>
                </div>


                <div className="">
                    <label htmlFor="" className='text-[12px] font-semibold'>Number of Reps</label>
                    <input title='reps' value={form.reps} className='w-full px-[15px] py-[5px] text-[12px] rounded-[3px]' type="text" onChange={handleChange}/>
                </div>

                <button className="px-[15px] py-[5px] duration-200 font-semibold rounded-[5px] text-[13px] bg-green-600 text-white hover:bg-green-700 self-start" 
                onClick={()=> {
                    props.setOpen(error == "" ? true : false)
                }}
                >Add Workout</button>
                {error && <div className='w-full p-[20px] border-[2px] border-red-500 border-solid bg-red-100 text-red-600'>{error}</div>}
            </form>

        </div>



    )
}
