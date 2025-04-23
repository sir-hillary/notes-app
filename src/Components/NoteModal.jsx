import React, { useState } from 'react'

const NoteModal = ({ onClose, onSave }) => {

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [tags,setTags] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newNote = {
            title,
            content,
            tags: tags.split(",").map(tag=>tag.trim()).filter(tag => tag)
        };

        onSave(newNote);
        onClose();
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex item-center justify-center z-50'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md'>
                <h2 className='text-xl font-bold mb-4'>New Note</h2>
                <form onSubmit={handleSubmit} className='space-y-2'>
                    <input
                        className='w-full p-2 rounded bg-gray-100 dark:bg-gray-700'
                        type="text"
                        placeholder='Title'
                        value={title}
                        required
                        onChange={(e)=> setTitle(e.target.value)}
                    />
                    <textarea
                        className='w-full p-2 rounded bg-gray-100 dark:bg-gray-700'
                        placeholder='content'
                        rows={4}
                        value={content}
                        required
                        onChange={(e)=>setContent(e.target.value)}
                    />
                    <input type="text"
                        className='w-full p-2 rounded bg-gray-100 dark:bg-gray-700'
                        placeholder='Tags (comma-separated)'
                        value={tags}
                        onChange={(e)=>setTags(e.target.value)}
                    />
                    <div className='flex justigy-end gap-2'>
                        <button
                            type='button'
                            className='px-4 py-2 bg-gray-600 dark:bg-gray-600 rounded'
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default NoteModal
