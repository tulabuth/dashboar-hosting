import React from 'react';
import {AiOutlineHome,AiFillMail,AiFillCreditCard,AiFillBell} from 'react-icons/ai';
import {BsFillBarChartFill,BsFillArrowUpSquareFill} from 'react-icons/bs';
import {HiDocumentSearch} from 'react-icons/hi';
import {FaExternalLinkSquareAlt} from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className='bg-slate-800 flex-none w-14 sm:w-20 h-screen'>
        <div className='h-20 items-center flex'>
            <AiOutlineHome size={40} className="text-gray-300 left-3 sm:left-6 fixed"/>
        </div>
        <div className='fixed left-3 sm:left-6 top-[100px]'>
            <BsFillBarChartFill size={40} className='bg-gray-600 p-2 mb-4 rounded-lg text-gray-300'/>
            <HiDocumentSearch size={40} className='bg-gray-600 p-2 mb-4 rounded-lg text-gray-300'/>
            <AiFillMail size={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'/>
            <AiFillCreditCard size={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'/>
            <AiFillBell size={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'/>
        </div>

        <div className='bottom-4 sm:left-6 left-3 fixed'>
            <a href='#top'>
                <BsFillArrowUpSquareFill size={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'/>
            </a>
            <FaExternalLinkSquareAlt size={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300'/>
        
        </div>
    </div>
  )
}
