import React, { useEffect, useState } from 'react'
import { FiTrash2 } from "react-icons/fi";
import { Button } from '../components/Button';
import Modal from '../components/Model';

export default function Home() {

  const [open, setOpen] = useState(false)
  const [workout, setWorkout] = useState([])

  useEffect(() => {
    const fetchWorkouts = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/workouts`)
        const json = await response.json()

        if (response.ok) {
          setWorkout(json)
        }
    }

    fetchWorkouts()
  }, [])
  

  return (
    <>
      <div className='pt-[120px] px-[20px] sm:px-[120px] min-h-[100vh] flex flex-col-reverse sm:flex-row gap-[20px] sm:gap-[70px]'>
        <div className="flex-[5]">

          {workout?.map(()=> (
            <div className="w-full h-[120px] rounded-[5px] bg-white flex flex-row justify-between p-[15px] min-w-[200px]">
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[14px] font-black text-green-600">Chinups</h1>
              <div className="flex flex-col gap-[4px]">
                <p className="text-[12px] font-semibold">Load(kg): 0</p>
                <p className="text-[12px] font-semibold">Number of Reps: 50</p>
                <p className="text-[12px]">3 Minutes ago</p>
              </div>
            </div>
            <div className="">
              <button className="p-[10px] rounded-[5px] hover:bg-gray-100 duration-[200]">
                <FiTrash2 />
              </button>
            </div>
          </div>
          ))}

        </div>
        <div className="smm:flex-[2.5]">
          <button className="bg-green-600 px-[15px] py-[5px] duration-200 font-semibold rounded-[5px] text-[13px] sm:hidden block text-white hover:bg-green-700 self-start"
          onClick={()=> {
            setOpen(true)
          }}
          >Add Workout</button>

          <div className="flex-col gap-[15px] hidden sm:flex">
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


        </div>
      </div>

      <Modal open={open} setOpen={setOpen}>
        <div className="flex-col gap-[15px] flex p-[20px]">
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
      </Modal>


    </>
  )
}
