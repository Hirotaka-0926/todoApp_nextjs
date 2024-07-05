import React from 'react'
import "../app/globals.css"

const TodoList = () => {
  return (
    <div>
        <ul className='mx-auto'>
            <div className='flex bg-orange-100 rounded-md p-2 justify-between'>
                <li className='font-meium'>✅読書</li>
                <span className='cursor-pointer'>✖</span>
            </div>
        </ul>
    </div>
  )
}

export default TodoList