import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import BlogCard from "./BlogCard";
import WaitingPage from "../../baseComponents/WaitingPage";

function BlogList() {

    const [blogs, setBlogs] = useState();

    const location = useLocation();
    function getQueryParams() {
        const searchParams = new URLSearchParams(location.search);
        return Array.from(searchParams.entries());
    }

    const queryParams = getQueryParams();
    const queryString = queryParams.map((queryParam, index) => `${index ? `&` : `?`}${queryParam[0]}=${queryParam[1]}`)
    
    useEffect(() => {
        fetch(`http://localhost:8000/v1/blog${queryString}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.log(err))
    }, [])

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
