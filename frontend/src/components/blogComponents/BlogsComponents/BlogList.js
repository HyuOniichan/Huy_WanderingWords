import { useContext, useEffect, useState } from "react";

import BlogCard from "./BlogCard";
import WaitingPage from "../../baseComponents/WaitingPage";
import { BackendContext } from "../../../App";

function BlogList() {

    const backendLink = useContext(BackendContext); 

    const [blogs, setBlogs] = useState();
    
    useEffect(() => {
        fetch(`${backendLink}/blog`)
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.log(err))
    }, [backendLink])

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
