import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext, ToastContext, BackendContext } from "../../../App";

function BlogCreateOption({ data }) {

    const backendLink = useContext(BackendContext); 

    const pageNavigate = useNavigate(); 
    const [title, thumbnail, content] = data;
    const [tags, setTags] = useState('');
    const currentUser = useContext(UserContext); 
    const currentUserId = currentUser? currentUser[0]._id : ``;
    const handleToast = useContext(ToastContext); 

    function saveDraft() {
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

        fetch(`${backendLink}/blog`, {
            method: 'POST',
            body: JSON.stringify(newBlog),
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.errors) throw new Error(data.message || 'An error occured')
                if (data._id) pageNavigate(`/blog/${data._id}`)
                handleToast('check', 'succeed', `Your blog created`); 
            })
            .catch(err => {
                // console.log(err); 
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
                    <Link to='/blog'>
                        <button type="button" className="btn btn-danger w-100 text-center">Delete draft</button>
                    </Link>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => saveDraft()}
                    >Save draft</button>
                    {/* <button type="button" className="btn btn-success">Publish</button> */}
                </div>
            </div>
        </div>
    )
}

export default BlogCreateOption; 
