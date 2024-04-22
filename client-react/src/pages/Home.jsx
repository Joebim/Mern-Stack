import React, { useEffect, useState } from 'react'
import { FiTrash2 } from "react-icons/fi";
import Modal from '../components/Model';
import CreateWorkout from '../components/CreateWorkout';

export default function Home() {

  const [open, setOpen] = useState(false)
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`/api/workouts`)
      const json = await response.json()

      if (response.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts()
  }, [])


  return (
    <>
      <div className='pt-[120px] px-[20px] sm:px-[120px] min-h-[100vh] flex flex-col-reverse sm:flex-row gap-[20px] sm:gap-[70px]'>
        <div className="flex-[5] flex flex-col gap-[20px]">

          {workouts?.map((workout, id) => (
            <div key={id} className="w-full h-[120px] rounded-[5px] bg-white flex flex-row justify-between p-[15px] min-w-[200px]">
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[14px] font-black text-green-600">{workout.title}</h1>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[12px] font-semibold">{workout.load}(kg): 0</p>
                  <p className="text-[12px] font-semibold">Number of Reps: {workout.reps}</p>
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
        <div className="sm:flex-[2.5]">
          <button className="bg-green-600 px-[15px] py-[5px] duration-200 font-semibold rounded-[5px] text-[13px] sm:hidden block text-white hover:bg-green-700 self-start"
            onClick={() => {
              setOpen(true)
            }}
          >Add Workout</button>
          <div className="hidden sm:block">
            <CreateWorkout />
          </div>
        </div>
      </div>

      <Modal open={open} setOpen={setOpen}>
        <div className="p-[20px]">
          <CreateWorkout />
        </div>

      </Modal>


    </>
  )
}
