import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import BlogDetails from './BlogDetails';


const Blogs = () => {
 //consume
 const {posts,loading} = useContext(AppContext);
 
 
  return (
    <div className='flex flex-col gap-y-5 my-8'>
      {loading ? (
        <div className='min-h-[80vh] w-full flex justify-center items-center'>
        <p className='text-center font-bold text-3xl'>Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className='min-h-[80vh] w-full flex justify-center items-center'>
            <p className='text-center font-bold text-3xl my-[200px]'>No Post Found !</p>
           </div>
      ) : (
        posts.map( (post) => (
              <BlogDetails key = {post.id} post = {post} />
           ) )
         )}
    </div>
  );
}

export default Blogs;