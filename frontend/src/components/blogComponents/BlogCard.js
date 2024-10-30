import { Link } from "react-router-dom";

function BlogCard({ blog }) {
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
                    <h3 className="mb-0">{blog.title}</h3>
                    <div className="mb-1 text-body-secondary">30/10/2024</div>
                    <p className="card-text mb-auto">{blog.content.slice(0, 40)}...</p>
                    <Link to={`/blog/${blog._id}`} className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                    </Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img src={blog.thumbnail} alt="thumbnail" className="img-fluid" /> 
                </div>
            </div>
        </div>
    )
}

export default BlogCard; 
