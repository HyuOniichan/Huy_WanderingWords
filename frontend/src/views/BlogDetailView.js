import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetailView() {

    const { id } = useParams();
    const [blog, setBlog] = useState();

    useEffect(() => {
        fetch(`http://localhost:8000/v1/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
            .catch(err => console.log(err))
    }, [id])

    const blogContent = document.getElementById('blogContent'); 
    if (blogContent) blogContent.innerHTML = blog.content; 

    console.log(blog);

    return (
        <div>
            <div className="mb-1 text-body-secondary">
                {blog.author.name ? blog.author.name : 'Anonymous'} - pulished on {blog.createdAt ? blog.createdAt : ``}
            </div>
            <h1>{blog.title}</h1>
            <img src={blog.thumbnail} alt="thumbnail" />
            <div id="blogContent"></div>
        </div>
    )
}

export default BlogDetailView; 
