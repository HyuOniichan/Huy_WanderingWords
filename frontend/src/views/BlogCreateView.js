import { useState } from "react";

import { BackBtn, BlogCreateEdit, BlogCreateOption } from "../components/";

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