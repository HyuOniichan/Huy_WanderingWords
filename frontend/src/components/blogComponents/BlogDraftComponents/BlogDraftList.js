import { useContext, useEffect, useState } from "react";
import BlogDraftCard from "./BlogDraftCard";
import { BackendContext } from "../../../App";

function BlogDraftList() {

    const backendLink = useContext(BackendContext); 

    const [draftBlogs, setDraftBlogs] = useState();

    useEffect(() => {
        fetch(`${backendLink}/blog/draft`)
            .then(res => res.json())
            .then(data => setDraftBlogs(data))
            .catch(err => console.log(err))
            
    }, [backendLink])

    return (
        <div>
            <h1 className="m-4">Draft</h1>
            <div className="row mb-2">
                {draftBlogs && draftBlogs.length ? draftBlogs.map((draftBlog, index) => <BlogDraftCard
                    key={index}
                    draftBlog={draftBlog}
                />) : "All published!"}
            </div>
        </div>
    )
}

export default BlogDraftList; 
