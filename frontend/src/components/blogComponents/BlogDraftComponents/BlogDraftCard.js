import { useContext } from "react";
import { Link } from "react-router-dom";
import { BackendContext, ToastContext } from "../../../App";

function BlogDraftCard({ draftBlog, setDraftBlogs }) {

    const backendLink = useContext(BackendContext);
    const handleToast = useContext(ToastContext);

    function handleDelete() {
        setDraftBlogs(prev => {
            const newDraftBlogs = prev.filter(blog => blog._id !== draftBlog._id);
            return newDraftBlogs; 
        })

        draftBlog.deleted = true;

        fetch(`${backendLink}/blog/${draftBlog._id}`, {
            method: 'PUT',
            body: JSON.stringify(draftBlog),
            headers: { "Content-Type": "application/json" },
        })
            .then(data => {
                console.log(data);
                if (data.errors) throw new Error(data.message || 'An error occured')
                handleToast('check', 'succeed', 'Moved to trash');
            })
            .catch(err => {
                console.log(err);
                handleToast('error', 'failed', `${err}`);
            })

    }

    return (
        <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis text-capitalize">{draftBlog.tags[0]}</strong>
                    <h3 className="mb-0">{draftBlog.title}</h3>
                    <div className="mb-1 text-body-secondary">
                        {draftBlog.author.name ? draftBlog.author.name : 'Anonymous'}
                        {draftBlog.createdAt ? ` - published on ${draftBlog.createdAt}` : ``}
                    </div>
                    <div className="row w-100 gap-2">
                        <Link to={`/blog/${draftBlog._id}/edit`} className="col-3 btn btn-primary">
                            Edit
                        </Link>
                        <button className="col-3 btn btn-danger" onClick={() => handleDelete()}>
                            Delete
                        </button>
                    </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img src={draftBlog.thumbnail} alt="thumbnail" style={{ height: 260, objectFit: 'cover' }} />
                </div>
            </div>
        </div >
    )

}

export default BlogDraftCard; 
