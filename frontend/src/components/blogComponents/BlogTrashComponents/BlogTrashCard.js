import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContext } from "../../../App";

function BlogTrashCard({ deletedBlog, setDeletedBlogs }) {

    const handleToast = useContext(ToastContext);

    function handleDestroy() {

        setDeletedBlogs(prev => {
            const newDeletedBlogs = prev.filter(e => e._id !== deletedBlog._id); 
            return newDeletedBlogs; 
        })
        
        fetch(`http://localhost:8000/v1/blog/${deletedBlog._id}`, {
            method: 'DELETE'
        })
            .then(data => {
                console.log(data);
                if (data.errors) throw new Error(data.message || 'An error occured')
                handleToast('check', 'succeed', 'No chance to revive...');
            })
            .catch(err => {
                console.log(err);
                handleToast('error', 'failed', `${err}`);
            })
    }

    function handleRestore() {
        deletedBlog.deleted = false; 

        setDeletedBlogs(prev => {
            const newDeletedBlogs = prev.filter(e => e._id !== deletedBlog._id); 
            return newDeletedBlogs; 
        })

        fetch(`http://localhost:8000/v1/blog/${deletedBlog._id}`, {
            method: 'PUT',
            body: JSON.stringify(deletedBlog),
            headers: { "Content-Type": "application/json" },
        })
            .then(data => {
                console.log(data);
                if (data.errors) throw new Error(data.message || 'An error occured')
                handleToast('check', 'succeed', 'Return from death!');
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
                    <strong className="d-inline-block mb-2 text-primary-emphasis text-capitalize">{deletedBlog.tags[0]}</strong>
                    <h3 className="mb-0">{deletedBlog.title}</h3>
                    <div className="mb-1 text-body-secondary">
                        {deletedBlog.author.name ? deletedBlog.author.name : 'Anonymous'}
                        {deletedBlog.createdAt ? ` - published on ${deletedBlog.createdAt}` : ``}
                    </div>
                    <div className="row w-100 gap-2">
                        <Link to={`/blog/${deletedBlog._id}/edit`} className="col-3 btn btn-primary">
                            Edit
                        </Link>
                        <button className="col-3 btn btn-success" onClick={() => handleRestore()}>
                            Restore
                        </button>
                        <button className="col-3 btn btn-danger" onClick={() => handleDestroy()}>
                            Destroy
                        </button>
                    </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img src={deletedBlog.thumbnail} alt="thumbnail" style={{ height: 260, objectFit: 'cover' }} />
                </div>
            </div>
        </div >
    )

}

export default BlogTrashCard; 
