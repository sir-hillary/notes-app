import React from 'react'

const ConfirmModal = () => {
  return (
    <div>
        <div>
            <h2>Delete this note ?</h2>
            <p>This action cannot be undone.</p>
            <div>
                <button>
                    Cancel
                </button>
                <button>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmModal
