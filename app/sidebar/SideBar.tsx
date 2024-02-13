import React from 'react'
import Link from 'next/link'
const SideBar = () => {
  return (
    <div>
        <div className="w-[300px] flex flex-col justifiy-center items-center gap-[50px] h-[100vh] bg-emerald-950">
              <i className='text-white text-[30px] mt-[90px] mb-[20px]'>Choose options</i>
            <Link className='p-[10px] bg-white rounded-xl hover:bg-emerald-800  transition-all'href="/options">Option-1</Link>
            <Link className='p-[10px] bg-white rounded-xl hover:bg-emerald-800  transition-all' href="/option_2">Option-2</Link>
            <Link className='p-[10px] bg-white rounded-xl hover:bg-emerald-800  transition-all' href="/option_3">Option-3</Link>
            <Link className='p-[10px] bg-white rounded-xl hover:bg-emerald-800  transition-all' href="/option_4">Option-4</Link>
            <Link className='p-[10px] bg-white rounded-xl hover:bg-emerald-800  transition-all' href="/option_5">Option-5</Link>
        </div>
    </div>
  )
}

export default SideBar