import React, { useEffect, useState } from 'react'
import { LuNotebookPen } from "react-icons/lu";
import Header from './Components/Header';
import NoteModal from './Components/NoteModal';
import { MdAutoDelete } from "react-icons/md";
import ConfirmModal from './Components/ConfirmModal';

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });


  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const[showConfirm, setShowConfirm] = useState(false);
  const[deletIndex,setDeleteIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };


  


  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);




  const deleteNote = (indexToDelete)=>{
    setNotes((prevNotes)=> prevNotes.filter((_, index) => index !==indexToDelete))
  }

  return (
    <div className='flex flex-col min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'>

      <Header toggleTheme={toggleTheme} isDark={isDark} />


      <div className='flex flex-1'>
        {/*this is the sidebar am designing */}

        <aside className='w-64 bg-white dark:bg-gray-800 shadow-lg'>
          <h2 className='text-2xl font-bold mb-6'>Tags</h2>

          <ul className='space-y-2'>
            <li className='cursor-pointer hover:text-blue-500'># Work</li>
            <li className='cursor-pointer hover:text-blue-500'># Personal</li>
            <li className='cursor-pointer hover:text-blue-500'># Ideas</li>
          </ul>
          <button className='mt-6 text-blue-600 hover:underline'>+ Add Tag</button>
        </aside>

        {/* this is the main content am  developing now */}

        <main className='flex-1 p-6 overflow-y-auto'>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-3xl font-bold'>My Notes</h1>
            <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700' onClick={() => setIsModalOpen(true)}>+ New Note</button>
          </div>


          {/* This is the notes grid placeholder */}


          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {
              notes.length > 0 ? (
               notes.map((note, index) => (
                <div key={index} className='p-4 bg-white dark:bg-gray-700 rounded space-y-2 relative'>
                  <h2 className='text-xl font-semibold'>{note.title}</h2>
                  <p>{note.content}</p>
                  <div className='flex flex-wrap gap-1'>
                    {
                      note.tags.map((tag, i) => (
                        <span
                          key={i}
                          className='text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 py-0.5 rounded'
                        >
                          #{tag}
                        </span>
                      ))
                    }
                  </div>
                  <button
                  onClick={()=>deleteNote(index)}
                  className='absolute bottom-2 right-2 text-red-500 hover:text-red-700'
                  title='Delete Note'
                  >
                    <MdAutoDelete className='text-2xl' />
                  </button>
                </div>
              ))
            ) : (<p className='text-gray-500 text-center'>No Notes yet.</p>)
            }
            

          </div>
        </main>
      </div>
      {
    isModalOpen && (
      <NoteModal 
      onClose={()=> setIsModalOpen(false)}
      onSave={addNote}
      />
    )
  }
    </div>
  )
 
}

export default App
