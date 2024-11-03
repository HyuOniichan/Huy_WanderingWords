import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";

function UserBlogsPreview({ blog, setShowPreview }) {

    const { username } = useParams();
    const currentUser = useContext(UserContext);
    const isMe = (currentUser[0].username === username); 

    function deleteBlog(blogId) {
        console.log(`${blogId} deleted`)
    }

    return (
        <div className="col-6">
            <div className="card position-relative">
                <img src={blog ? blog.thumbnail : ''} className="card-img-top" alt="thumbnail" />
                <div className="card-body">
                    <h5 className="card-title">{blog ? blog.title : 'Title...'}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <div className="mt-3 mx-2 d-flex justify-content-between gap-2">
                        <Link to={blog ? `/blog/${blog._id}` : '#blogs'} className="btn btn-primary w-100">
                            {isMe? 'Edit' : 'Explore'}
                        </Link>
                        {isMe? <button className="btn btn-danger w-100" onClick={() => deleteBlog(blog._id)}>
                            Delete
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
