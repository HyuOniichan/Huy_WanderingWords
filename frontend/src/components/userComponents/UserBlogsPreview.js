import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BackendContext, ToastContext, UserContext } from "../../App";

function UserBlogsPreview({ blog, setShowPreview, profileState }) {

    const backendLink = useContext(BackendContext);

    const [profile, setProfile] = profileState;
    const { username } = useParams();
    const currentUser = useContext(UserContext);
    const isMe = (currentUser[0].username === username);
    const handleToast = useContext(ToastContext);

    function handleDelete(blogId) {
        setProfile(prev => ({
            ...prev,
            blogs: prev.blogs.filter(blog => blog._id !== blogId)
        }))
        setShowPreview(null)

        const deletedIndex = profile.blogs.findIndex(e => e._id === blogId);
        const deletedBlog = profile.blogs[deletedIndex];
        deletedBlog.deleted = true;

        fetch(`${backendLink}/blog/${blogId}`, {
            method: 'PUT',
            body: JSON.stringify(deletedBlog),
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

    function handleDraft(blogId) {
        setProfile(prev => ({
            ...prev,
            blogs: prev.blogs.filter(blog => blog._id !== blogId)
        }))
        setShowPreview(null)

        const draftIndex = profile.blogs.findIndex(e => e._id === blogId);
        const draftBlog = profile.blogs[draftIndex];
        draftBlog.published = false;

        fetch(`${backendLink}/blog/${blogId}`, {
            method: 'PUT',
            body: JSON.stringify(draftBlog),
            headers: { "Content-Type": "application/json" },
        })
            .then(data => {
                console.log(data);
                if (data.errors) throw new Error(data.message || 'An error occured')
                handleToast('check', 'succeed', 'No one can see this blog but you from now. Check it in Draft section');
            })
            .catch(err => {
                console.log(err);
                handleToast('error', 'failed', `${err}`);
            })
    }

    return (
        <div className="col-6">
            <div className="card position-relative">
                <img src={blog ? blog.thumbnail : ''} className="card-img-top" alt="thumbnail" />
                <div className="card-body">
                    <h5 className="card-title">{blog ? blog.title : 'Title...'}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <div className="mt-3 mx-2 d-flex justify-content-between gap-2">
                        <Link to={blog ? `/blog/${blog._id}/${isMe ? 'edit' : ''}` : '#blogs'} className="btn btn-primary w-100">
                            {isMe ? 'Edit' : 'Explore'}
                        </Link>
                        {isMe ? <button className="btn btn-danger w-100" onClick={() => handleDelete(blog._id)}>
                            Delete
                        </button> : ``}
                        {isMe ? <button className="btn btn-secondary w-100" onClick={() => handleDraft(blog._id)}>
                            Drafted
                        </button> : ``}
                    </div>
                </div>
                <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-1 bg-dark-subtle"
                    aria-label="Close"
                    onClick={() => setShowPreview(null)}
                ></button>
            </div>
        </div>
    )
}

export default UserBlogsPreview; 
