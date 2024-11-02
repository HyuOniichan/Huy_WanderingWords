import { useState } from "react";
import { Link } from "react-router-dom";

function BlogCreateOption({ data }) {

    const [title, thumbnail, content] = data;
    const [tags, setTags] = useState('');

    const currentUserId = '67220acc07a7a2d4ef000f15';

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

        fetch("http://localhost:8000/v1/blog", {
            method: 'POST',
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
