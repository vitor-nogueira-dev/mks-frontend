import React from 'react'
import { ToastContainer } from 'react-toastify'

function ToastComponent() {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  )
}

export default ToastComponent