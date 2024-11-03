import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../../App";

function BlogEditOption({ data }) {

    const [title, thumbnail, content, [tags, setTags], blogId] = data;
    const currentUser = useContext(UserContext); 
    const currentUserId = currentUser? currentUser[0]._id : ``;
    const currentUsername = currentUser? currentUser[0].username : ``; 

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
            .then(data => console.log(data))
            .catch(err => console.log(err))
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
                    <Link to={`/user/${currentUsername}`}>
                        <button type="button" className="btn btn-danger w-100 text-center">Delete changes</button>
                    </Link>
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
