import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import WaitingPage from "../baseComponents/WaitingPage";

function BlogList() {

    const [blogs, setBlogs] = useState(); 

    useEffect(() => {
        fetch("http://localhost:8000/v1/blog")
            .then(res => res.json()) 
            .then(data => setBlogs(data)) 
            .catch(err => console.log(err)) 
    }, [])

    return (
        <div>
            <h1 className="m-4">Blogs</h1>
            <div className="row mb-2">
                {blogs? blogs.map((blog, index) => <BlogCard key={index} blog={blog} />) : <WaitingPage />}
            </div>
        </div>
    )
}

export default BlogList; 
