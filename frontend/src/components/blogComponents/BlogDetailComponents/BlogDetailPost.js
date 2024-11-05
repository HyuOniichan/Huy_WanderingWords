import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendContext } from "../../../App";

function BlogDetailPost() {

    const backendLink = useContext(BackendContext); 

    const { id } = useParams();
    const [blog, setBlog] = useState();

    useEffect(() => {
        fetch(`${backendLink}/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
            .catch(err => console.log(err))
    }, [id])

    console.log(blog);

    const blogContent = document.getElementById('blogContent'); 
    if (blog && blogContent) blogContent.innerHTML = blog.content.map(section => `
        <h2>${section.heading}</h2>
        <div>${section.text}</div>   
    `) 


    return (
        <div className="col-md-8 pt-4">
            <div className="text-body-secondary">
                {blog ? blog.author.name : 'Anonymous'} {(blog && blog.createdAt)? ` - published on ${blog.createdAt}` : ``}
            </div>
            <h1>{blog ? blog.title : `Title`}</h1>
            <img src={blog ? blog.thumbnail : ``} alt="thumbnail" className="img-fluid my-4" />
            <div id="blogContent"></div>
        </div>
    )
}

export default BlogDetailPost; 
