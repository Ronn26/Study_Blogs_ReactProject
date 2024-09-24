import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

    const baseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        const url = `${baseUrl}?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
            }
        catch(error) {
            console.log("Error aa gya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        fetchRelatedBlogs(); 
    }, [location.pathname] );

  return (
    <div className='my-[100px]'>
        <Header/>
        <div className='w-11/12 mx-auto'>
            <div>
                <button className='border-2 border-gray-300 py-1 px-4 rounded-md mb-6'
                onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>
            
        </div>
        {
            loading ? 
            (<div>
                <p> Loading </p>
            </div>) :
            blog ?
            (<div> 
                <BlogDetails post={blog} />
                <h2 className='w-11/12 flex-wrap text-2xl font-bold align-text-top'>Related Blogs</h2>
                <div className='flex flex-col gap-y-8'> 
                {
                    relatedBlogs.map( (post) => (
                        <div key = {post.id}> 
                            <BlogDetails post={post} />
                        </div>
                    ))
                }
                </div>
            </div>
            ) : (
                <p>No Blog Found</p>
               )}
    </div>
  )
}

export default BlogPage;