import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%"
  }
  return (
    <div className='bg-dark text-light py-3' style={footerStyle}>
      <footer className='text-center'>
        Copyright &copy; MyTodosList.com
      </footer>
    </div>
  )
}

export default Footer
