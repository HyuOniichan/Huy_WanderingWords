import { useContext, useEffect, useState } from "react";

import BlogCard from "./BlogCard";
import WaitingPage from "../../baseComponents/WaitingPage";
import { BackendContext } from "../../../App";
import { useLocation } from "react-router-dom";

function BlogList() {

    const backendLink = useContext(BackendContext); 
    const location = useLocation(); 

    const [blogs, setBlogs] = useState();
    
    // get blogs
    useEffect(() => {
        const searchQuery = new URLSearchParams(location.search);
        const queryArr = ['title']; 

        // build query string 
        const queryFetch = searchQuery && queryArr.map(q => 
            (searchQuery.get(q) !== null) && `${q}=${searchQuery.get(q)}`
        ).join('&'); 
        
        // get blogs (based on query params optional)
        fetch(`${backendLink}/blog${queryFetch && `?${queryFetch}`}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.log(err))
    }, [backendLink, location.search])

    return (
        <div>
            <h1 className="m-4">Blogs</h1>
            <div className="row mb-2">
                {blogs ? blogs.map((blog, index) => <BlogCard key={index} blog={blog} />) : <WaitingPage />}
            </div>
        </div>
    )
}

export default BlogList; 
