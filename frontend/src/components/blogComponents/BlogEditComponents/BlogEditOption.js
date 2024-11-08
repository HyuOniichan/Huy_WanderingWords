import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BackendContext, ToastContext, UserContext } from "../../../App";

function BlogEditOption({ data }) {

    const backendLink = useContext(BackendContext);

    const pageNavigate = useNavigate();
    const [old, title, thumbnail, content, [tags, setTags], blogId, [publicId, setPublicId]] = data;
    const currentUser = useContext(UserContext);
    const currentUserId = currentUser ? currentUser[0]._id : ``;
    const currentUsername = currentUser ? currentUser[0].username : ``;
    const handleToast = useContext(ToastContext);
    const [disable, setDisable] = useState(false);

    async function handleUpdate() {
        const arrTags = tags.trim().split(',').map(tag => tag.trim()).filter(e => e);
        const arrContent = content.filter(e => e.heading);

        const newBlog = {
            title: title,
            thumbnail: thumbnail,
            content: arrContent,
            author: currentUserId,
            tags: arrTags,
            comments: [],
            published: old.published,
            deleted: old.deleted
        }

        setDisable(true);

        // Delete previous saved image on Cloudinary 
        fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/destroy`, {
            method: 'POST',
            body: JSON.stringify({
                public_id: publicId,
                api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.messages)
                if (data.errors) throw new Error('An error occured while changing image')
            })
            .catch(err => handleToast('warn', 'warning', `${err}`))

        console.log(thumbnail)

        if (thumbnail) {
            try {
                const formData = new FormData();
                formData.append('file', thumbnail);
                formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

                const response = fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, {
                    method: 'POST',
                    body: formData
                })

                if (typeof response.json === 'function' && !response.json().secure_url && !response.ok)
                    throw new Error('Fail to send your local image');

                const res = await response;
                const data = await res.json();

                if (data.errors) throw new Error(data.message || 'An error occured');
                if (!data.secure_url)
                    handleToast(
                        'warn',
                        'fail to upload image',
                        'The error maybe due to running out of free photo storage, but the blog will continue trying to save'
                    );

                newBlog.thumbnail = data.secure_url;
                getPublicId(data.secure_url);

            } catch (error) {
                handleToast('error', 'failed', `${error}`);
            }
        } else newBlog.thumbnail = ''; 
        

        fetch(`${backendLink}/blog/${blogId}`, {
            method: 'PUT',
            body: JSON.stringify(newBlog),
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.errors) throw new Error(data.message || 'An error occured');
                handleToast('check', 'succeed', 'Blog edited');
            })
            .catch(err => {
                handleToast('error', 'failed', `${err}`);
            })

        setDisable(false);

    }

    function handleDeleteChanges() {
        setDisable(true);

        fetch(`${backendLink}/blog/${blogId}`, {
            method: 'PUT',
            body: JSON.stringify(old),
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.errors) throw new Error(data.message || 'An error occured');
                pageNavigate(`/user/${currentUsername}`);
                handleToast('check', 'succeed', 'Nothing changed');
            })
            .catch(err => {
                console.log(err);
                handleToast('error', 'failed', `${err}`);
                setDisable(false);
            })
    }

    function getPublicId(cldLink) {
        const cldLinkArr = cldLink.split('/');
        const nameArr = cldLinkArr[cldLinkArr.length - 1].split('.');
        setPublicId(nameArr[0]);
    }

    return (
        <div className="col-md-4">
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
                <h2 className="mb-3 mb-md-0 link-dark fs-4 text-center">Editor sidebar</h2>
                <hr />
                <div className="input-group mb-3">
                    <span className="input-group-text">Tags</span>
                    <input
                        className="form-control"
                        placeholder="seperate, tags, by, commas"
                        onChange={e => setTags(e.target.value)}
                        value={tags}
                    />
                </div>
                <hr />
                <div className="d-flex flex-column gap-1">
                    <button
                        type="button"
                        className="btn btn-danger w-100 text-center"
                        onClick={() => handleDeleteChanges()}
                        disabled={disable}
                    >Delete changes</button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleUpdate()}
                        disabled={disable}
                    >Save blog</button>
                    {/* <button type="button" className="btn btn-success">Publish</button> */}
                </div>
            </div>
        </div>
    )
}

export default BlogEditOption; 
