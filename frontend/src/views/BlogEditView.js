import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { BackBtn, BlogEditField, BlogEditOption } from "../components";

function BlogEditView() {

    const { id } = useParams();
    const [old, setOld] = useState(); 
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [content, setContent] = useState([{ heading: '', text: '' }]);
    const [tags, setTags] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8000/v1/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setOld(data); 
                setTitle(data.title);
                setThumbnail(data.thumbnail);
                setContent(data.content);
                setTags(data.tags.join(', ')); 
            })
            .catch(err => {
                console.log(err); 
            })
    }, [id])

    return (
        <div className="row position-relative pt-5">
            <BlogEditField data={[[title, setTitle], [thumbnail, setThumbnail], [content, setContent]]} />
            <BlogEditOption data={[old, title, thumbnail, content, [tags, setTags], id]} />
            <BackBtn path={'blog'} />
        </div>
    )
}

export default BlogEditView; 
