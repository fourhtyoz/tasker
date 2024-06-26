'use client';

import React from 'react';
import Image from 'next/image';
import { MagnifyingGlassCircleIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Avatar from 'react-avatar';
import { useBoardStore } from '@/store/BoardStore';

function Header() {
    const [searchString, setSearchString] = useBoardStore(state => [
        state.searchString,
        state.setSearchString
    ])
  return (
    <header>
        {/* bg */}
        <div className='
            absolute 
            top-0 
            left-0 
            w-full 
            h-96
            bg-gradient-to-br 
            from-pink-400 
            to-[#0055D1] 
            rounded-md 
            filter 
            blur-3xl 
            opacity-50 
            -z-50'>
        </div>
        <div className='
            flex 
            flex-col 
            md:flex-row 
            items-center 
            p-5 
            bg-gray-500/10 
            rounded-b-2xl'
        >
            <Image 
                src='https://cdn.worldvectorlogo.com/logos/trello.svg' 
                alt='Logo' 
                width={100} 
                height={100} 
                className='md:pb-0 object-contain'
            />

            <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
                <form className='flex items-center space-x-5 bg-white rounded-md shadow-md flex-1 md:flex-initial'>
                    <MagnifyingGlassCircleIcon className='h-6 w-6 text-gray-400' />
                    <input 
                        type='text' 
                        placeholder='Search' 
                        className='flex-1 outline-none p-2'
                        onChange={e => setSearchString(e.target.value)}
                    />
                    <button 
                        type='submit' 
                        hidden
                    >
                        Search
                    </button>
                </form>

                <Avatar name='Mr Stitch' round color='#0055D1' size='50' />
            </div>
        </div>

        <div className='flex items-center justify-center px-5 py-2 md:py-5'>
            <p className='flex items-center text-sm px-5 bg-white rounded-xl w-fit font-light pr-5 shadow-xl italic max-w-3xl text-[#0055D1]'>
                <UserCircleIcon className='inline-block h-20 w-10 text-[#0055D1] mr-1' />
                GPT is summarizing your tasks for the day...
            </p>
        </div>
    </header>
  )
}


export default Header