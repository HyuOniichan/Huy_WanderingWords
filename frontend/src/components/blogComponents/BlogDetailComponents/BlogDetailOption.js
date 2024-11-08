import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackendContext, ToastContext } from "../../../App";

function BlogDetailOption({ blog }) {

    const pageNavigate = useNavigate();
    const backendLink = useContext(BackendContext);
    const handleToast = useContext(ToastContext);
    const [disable, setDisable] = useState(false);

    function handleDelete() {
        setDisable(true);
        blog.deleted = !blog.deleted;

        fetch(`${backendLink}/blog/${blog._id}`, {
            method: 'PUT',
            body: JSON.stringify(blog),
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.errors) throw new Error(data.message || 'An error occured')
                handleToast('check', 'succeed', (blog.deleted? 'Moved to trash' : 'Restored'));
                setDisable(false);
            })
            .catch(err => {
                console.log(err);
                handleToast('error', 'failed', `${err}`);
                setDisable(false);
            })
    }

    function handlePublish() {
        setDisable(true);
        blog.published = !blog.published;

        fetch(`${backendLink}/blog/${blog._id}`, {
            method: 'PUT',
            body: JSON.stringify(blog),
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.errors) throw new Error(data.message || 'An error occured')
                handleToast(
                    'check',
                    `${data.published ? 'Publish' : 'Set as draft'} succeed`,
                    (data.published ? 'Your blog published successfully' : 'You can see your blog in Draft section')
                );
                if (data._id) pageNavigate(`/blog/${data._id}`);
                setDisable(false); 
            })
            .catch(err => {
                console.log(err);
                handleToast('error', 'failed', `${err}`);
                setDisable(false); 
            })
    }

    return (
        <div className="col-md-4 pt-5">
            <h2>Actions</h2>
            <hr />
            <div className="d-flex flex-column gap-1">
                <button
                    type="button"
                    className={`btn btn-${blog.deleted ? 'success' : 'danger'}`}
                    onClick={handleDelete}
                    disabled={disable}
                >
                    {blog.deleted ? 'Restore' : 'Delete'}
                </button>
                {!blog.deleted && <button className="btn btn-primary position-relative" disabled={disable}>
                    <Link to={`/blog/${blog._id}/edit`} className="text-white text-decoration-none stretched-link">
                        Edit
                    </Link>
                </button>}
                {!blog.deleted && <button
                    type="button"
                    className={`btn btn-${blog.published ? 'secondary' : 'success'}`}
                    onClick={handlePublish}
                    disabled={disable}
                >
                    {blog.published ? 'Set as draft' : 'Publish'}
                </button>}

            </div>
        </div>
    )
}

export default BlogDetailOption; 
