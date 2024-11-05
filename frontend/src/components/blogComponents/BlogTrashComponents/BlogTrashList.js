import { useContext, useEffect, useState } from "react";
import BlogTrashCard from "./BlogTrashCard";
import { BackendContext } from "../../../App";

function BlogTrashList() {

    const backendLink = useContext(BackendContext); 

    const [deletedBlogs, setDeletedBlogs] = useState();

    useEffect(() => {
        fetch(`${backendLink}/blog/deleted`)
            .then(res => res.json())
            .then(data => setDeletedBlogs(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1 className="m-4">Trash</h1>
            <div className="row mb-2">
                {deletedBlogs && deletedBlogs.length ? deletedBlogs.map((deletedBlog, index) => <BlogTrashCard
                    key={index}
                    deletedBlog={deletedBlog}
                    setDeletedBlogs={setDeletedBlogs}
                />) : "Clean!"}
            </div>
        </div>
    )
}

export default BlogTrashList; 
