import { Link } from "react-router-dom";

function UserBlogsPreview({ blog, setShowPreview }) {

    return (
        <div className="col-6">
            <div className="card position-relative">
                <img src={blog ? blog.thumbnail : ''} className="card-img-top" alt="thumbnail" />
                <div className="card-body">
                    <h5 className="card-title">{blog ? blog.title : 'Title...'}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <Link to={blog ? `/blog/${blog._id}` : '#blogs'} className="btn btn-primary mt-2">Explore</Link>
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
