import { useContext } from "react";
import { BackendContext, ToastContext } from "../../../App";

function BlogTrashCard({ deletedBlog, setDeletedBlogs }) {

    const backendLink = useContext(BackendContext); 

    const handleToast = useContext(ToastContext);

    function handleDestroy() {

        setDeletedBlogs(prev => {
            const newDeletedBlogs = prev.filter(e => e._id !== deletedBlog._id); 
            return newDeletedBlogs; 
        })
        
        fetch(`${backendLink}/blog/${deletedBlog._id}`, {
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

        fetch(`${backendLink}/blog/${deletedBlog._id}`, {
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

    function handleDate(dateString) {
        let newDateString = dateString.slice(0, 10).split('-');
        newDateString.reverse();
        return newDateString.join('/');
    }

    return (
        <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis text-capitalize">{deletedBlog.tags[0]}</strong>
                    <h3 className="mb-0">{deletedBlog.title}</h3>
                    <div className="mb-1 text-body-secondary">
                        {deletedBlog.author.name ? deletedBlog.author.name : 'Anonymous'}
                        {deletedBlog.updatedAt ? ` - deleted on ${handleDate(deletedBlog.updatedAt)}` : ``}
                    </div>
                    <div className="row w-100 gap-1 ms-1 mt-1">
                        <button className="btn btn-success" onClick={() => handleRestore()}>
                            Restore
                        </button>
                        <button className="btn btn-danger" onClick={() => handleDestroy()}>
                            Destroy
                        </button>
                    </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                    {deletedBlog.thumbnail && <img 
                        src={deletedBlog.thumbnail} 
                        alt="thumbnail" 
                        style={{ height: 260, objectFit: 'cover' }} 
                    />}
                </div>
            </div>
        </div >
    )

}

export default BlogTrashCard; 
