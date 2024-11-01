import { useState } from "react";

import BackBtn from "../components/baseComponents/BackBtn";
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
        <div className="row position-relative pt-5">
            <BlogCreateEdit data={[[title, setTitle], [thumbnail, setThumbnail], [content, setContent]]} /> 
            <BlogCreateOption data={[title, thumbnail, content]} /> 
            <BackBtn path={'blog'} /> 
        </div>
    )
}

export default BlogCreateView; 