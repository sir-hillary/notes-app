import React from 'react'
import { LuNotebook } from 'react-icons/lu'

const Header = ({ toggleTheme, isDark }) => {
  return (
    <header className='w-full px-6 py-4 bg-white dark:bg-gray-800 shadow flex justify-between items-center'>
        <h1 className='text-2xl font-bold flex items-center justify-center gap-4' ><LuNotebook />Notes App</h1>
        <button onClick={toggleTheme}
        className='bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded hover:opacity-80'
        >
            {isDark ? "Light Mode":"Dark Mode"}
        </button>
    </header>
  )
}

export default Header
