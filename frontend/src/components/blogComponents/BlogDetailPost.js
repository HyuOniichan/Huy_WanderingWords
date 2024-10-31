import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetailPost() {

    const { id } = useParams();
    const [blog, setBlog] = useState();

    useEffect(() => {
        fetch(`http://localhost:8000/v1/blog/${id}`)
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
        <div className="col-md-8">
            <div className="mb-1 text-body-secondary">
                {blog ? blog.author.name : 'Anonymous'} {(blog && blog.createdAt)? ` - published on ${blog.createdAt}` : ``}
            </div>
            <h1>{blog ? blog.title : `Title`}</h1>
            <img src={blog ? blog.thumbnail : ``} alt="thumbnail" className="img-fluid my-4" />
            <div id="blogContent"></div>
        </div>
    )
}

export default BlogDetailPost; 
