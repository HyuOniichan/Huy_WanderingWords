import { Link } from "react-router-dom";

function BlogDetailRelated() {
    return (
        <div className="col-md-4 pt-5">
            <h2>Related blogs</h2>
            <hr />
            <Link to='/blog' className="link-underline link-underline-opacity-0">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Demo text</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogDetailRelated; 