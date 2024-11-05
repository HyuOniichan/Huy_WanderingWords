import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { BackBtn, BlogEditField, BlogEditOption } from "../components";
import { ToastContext, UserContext } from "../App";

function BlogEditView() {

    const { id } = useParams();
    const [old, setOld] = useState();
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [content, setContent] = useState([{ heading: '', text: '' }]);
    const [tags, setTags] = useState('');
    const [isMe, setIsMe] = useState(false);
    const currentUser = useContext(UserContext);
    const currentUsername = currentUser? currentUser[0].username : ``; 
    const handleToast = useContext(ToastContext);

    useEffect(() => {
        fetch(`http://localhost:8000/v1/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setOld(data);
                setTitle(data.title);
                setThumbnail(data.thumbnail);
                setContent(data.content);
                setTags(data.tags.join(', '));
                if (data.author.username === currentUsername) setIsMe(true);
                    else throw new Error(data.message || 'An error occured')
            })
            .catch(err => {
                handleToast('error', 'failed to access blog data', `${err}`);
            })
    }, [id])

    // if (!isMe) 

    return (
        <div className="row position-relative pt-5">
            {
                isMe? <>
                    <BlogEditField data={[[title, setTitle], [thumbnail, setThumbnail], [content, setContent]]} />
                    <BlogEditOption data={[old, title, thumbnail, content, [tags, setTags], id]} />
                </> : `An error occured`
            }
            <BackBtn />
        </div>
    )
}

export default BlogEditView; 
