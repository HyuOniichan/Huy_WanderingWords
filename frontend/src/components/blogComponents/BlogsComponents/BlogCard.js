import { Link } from "react-router-dom";

function BlogCard({ blog }) {

    return (
        <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis text-capitalize">{blog.tags[0]}</strong>
                    <h3 className="mb-0">{blog.title}</h3>
                    <div className="mb-1 text-body-secondary">
                        {blog.author.name ? blog.author.name : 'Anonymous'} 
                        {blog.createdAt ? ` - published on ${blog.createdAt}` : ``}
                    </div>
                    <Link to={`/blog/${blog._id}`} className="icon-link gap-1 icon-link-hover stretched-link">
                        Explore
                    </Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img src={blog.thumbnail} alt="thumbnail" style={{ height: 260, objectFit: 'cover' }} />
                </div>
            </div>
        </div >
    )

}

export default BlogCard; 
