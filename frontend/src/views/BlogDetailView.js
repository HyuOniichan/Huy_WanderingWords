import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendContext, UserContext } from "../App";
import { BackBtn, BlogDetailOption, BlogDetailPost, BlogDetailRelated } from "../components/";

function BlogDetailView() {

    // Check if the current user is equal to the author of this blog 
    
    const currentUser = useContext(UserContext); 
    const currentUsername = currentUser && currentUser[0].username; 
    const backendLink = useContext(BackendContext);
    const { id } = useParams();
    const [blog, setBlog] = useState();
    const [isMe, setIsMe] = useState(false); 

    useEffect(() => {
        fetch(`${backendLink}/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data)
                if (data.author.username === currentUsername) setIsMe(true); 
            })
            .catch(err => console.log(err))
    }, [id, backendLink, currentUsername])

    return (
        <div className="row gx-5 position-relative pt-3">
            <BlogDetailPost blog={blog} />
            {(blog && isMe) ? <BlogDetailOption blog={blog} /> : <BlogDetailRelated />}
            <BackBtn />
        </div>
    )
}

export default BlogDetailView; 
