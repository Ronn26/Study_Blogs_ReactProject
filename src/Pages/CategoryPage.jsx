import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import Header from '../components/Header'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {

  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div>
        <Header/>
        <div className='mt-[100px] mb-[50px] max-w-2xl mx-auto flex items-center space-x-2 w-11/12'>
            <button className='border-2 border-gray-300 py-1 px-4 rounded-md '
            onClick={() => navigation(-1)}
            >
                Back                 
            </button>

            <h2 className='font-bold text-xl'>
              Blogs Tagged<span className='underline text-blue-700 '>{category}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage;