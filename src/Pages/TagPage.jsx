import React from 'react'
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const TagPage = () => {

const navigation = useNavigate();
const location = useLocation();
const tag= location.pathname.split("/").at(-1);
  return (
    <div className='mt-[100px]'>
        <Header/>
        <div className='max-w-2xl mx-auto flex items-center space-x-2 w-11/12 mb-[50px]'>
            <button className='border-2 border-gray-300 py-1 px-4 rounded-md '
            onClick={() => navigation(-1)}
            >
                back
            </button>
            <h2 className='font-bold text-xl'>
                Blogs Tagged <span className='undeline text-blue-700'>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default TagPage;