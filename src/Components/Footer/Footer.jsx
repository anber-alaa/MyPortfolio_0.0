import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='text-xs text-gray-300 '>
        <hr className='border-gray-300 mt-8 px-8' />
        <div className='flex gap-3 px-8 items-center justify-between py-5'>
          <p>© {new Date().getFullYear()} • Anber Alaa — Creative Web Solutions • Crafted with lots of coffee</p>
          <ul className='flex items-center gap-4'>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        
      </footer>
    </>
  )
}
