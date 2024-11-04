import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContext, UserContext } from "../../../App";

function BlogEditOption({ data }) {

    const pageNavigate = useNavigate();
    const [old, title, thumbnail, content, [tags, setTags], blogId] = data;
    const currentUser = useContext(UserContext);
    const currentUserId = currentUser ? currentUser[0]._id : ``;
    const currentUsername = currentUser ? currentUser[0].username : ``;
    const handleToast = useContext(ToastContext);

    function handleUpdate() {
        const arrTags = tags.trim().split(',').map(tag => tag.trim()).filter(e => e);
        const arrContent = content.filter(e => e.heading);

        const newBlog = {
            title: title,
            thumbnail: thumbnail,
            content: arrContent,
            author: currentUserId,
            tags: arrTags,
            comments: [],
            published: false,
            deleted: false
        }

        fetch(`http://localhost:8000/v1/blog/${blogId}`, {
            method: 'PUT',
            body: JSON.stringify(newBlog),
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.errors) throw new Error(data.message || 'An error occured')
                handleToast('check', 'succeed', 'Blog saved');
            })
            .catch(err => {
                console.log(err);
                handleToast('error', 'failed', `${err}`);
            })
    }

    function handleDeleteChanges() {
        fetch(`http://localhost:8000/v1/blog/${blogId}`, {
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
            })
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
                    >Delete changes</button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleUpdate()}
                    >Save blog</button>
                    {/* <button type="button" className="btn btn-success">Publish</button> */}
                </div>
            </div>
        </div>
    )
}

export default BlogEditOption; 
