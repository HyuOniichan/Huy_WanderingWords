import { useState } from "react";

import BlogCreateEdit from "../components/blogComponents/BlogCreateComponents/BlogCreateEdit";
import BlogCreateOption from "../components/blogComponents/BlogCreateComponents/BlogCreateOption";

function BlogCreateView() {
    
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [content, setContent] = useState([{
        heading: '', 
        text: '', 
    }]);

    return (
        <div className="row">
            <BlogCreateEdit data={[[title, setTitle], [thumbnail, setThumbnail], [content, setContent]]} /> 
            <BlogCreateOption data={[title, thumbnail, content]} /> 
        </div>
    )
}

export default BlogCreateView; 