import React from 'react';

function Footer() {
  return (
    <>
      <div className='px-1 md:px-8 h-auto flex justify-center'>
        <footer className='bg-[#2a2c30] w-full rounded-t-lg px-6 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-[600px_1fr_1fr] gap-8'>

            {/* Left Column (Fixed Width: 600px) */}
            <div className='w-auto md:w-[600px]'>
              <div className='border-2 py-1 md:px-2 md:py-1 border-black w-[150px] md:w-[180px] flex justify-center items-center gap-2 tracking-wider my-4'>
                <span className='uppercase bg-blue-500 font-bold text-white text-sm md:text-base'>Quantum</span>
                <span className='uppercase text-blue-500 font-bold text-sm md:text-base'>Store</span>
              </div>
              <p className='my-6 text-gray-300 md:text-base text-xs tracking-wider md:tracking-normal'>
                Welcome to Quantum EcomStore, your ultimate destination for cutting-edge gadgets!
              </p>
              <img src="cards.png" alt="Payment Cards" className='w-[180px] h-auto' />
            </div>

            <div className='flex justify-between md:flex-none'>

              {/* Center Column */}
              <div className='flex flex-col gap-4'>
                <h1 className='uppercase text-white text-xl'>Shopping</h1>
                <ul className='text-gray-300 flex flex-col space-y-2'>
                  <li className='hover:text-white cursor-pointer'>Computer Store</li>
                  <li className='hover:text-white cursor-pointer'>Laptop Store</li>
                  <li className='hover:text-white cursor-pointer'>Accessories</li>
                  <li className='hover:text-white cursor-pointer'>Sales & Discount</li>
                </ul>
              </div>

              {/* Right Column */}
              <div className='flex flex-col gap-4'>
                <h1 className='uppercase text-white text-xl'>Company</h1>
                <ul className='text-gray-300 flex flex-col space-y-2'>
                  <li className='hover:text-white cursor-pointer'>About Us</li>
                  <li className='hover:text-white cursor-pointer'>Careers</li>
                  <li className='hover:text-white cursor-pointer'>Contact Us</li>
                  <li className='hover:text-white cursor-pointer'>Privacy Policy</li>
                </ul>
              </div>
            </div>

          </div>
          <div className='mt-10 text-center text-gray-500'>
            <p>&copy; 2024 Quantum Store. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
