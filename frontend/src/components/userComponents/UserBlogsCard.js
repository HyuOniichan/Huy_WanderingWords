import { useState } from "react";
import UserBlogsPreview from "./UserBlogsPreview";
import { Link } from "react-router-dom";

function UserBlogsCard({ profileState }) {

    const [profile, setProfile] = profileState;
    const blogs = profile ? profile.blogs.filter(blog => !blog.deleted) : [];
    const [chosen, setChosen] = useState(-1);
    const [showPreview, setShowPreview] = useState(null);

    function chooseBlog(index) {
        setChosen(index);
        setShowPreview(blogs[index]);
    }

    return (
        <section className="container h-100 p-5 row d-flex justify-content-center ms-1">
            <div className={`${showPreview ? 'col-5' : 'col-9'}`}>
                <div className="card" id="blogs">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="card-title m-0 fs-4">Blogs</h5>
                            <Link to='/blog/trash'>
                                <button className="btn btn-danger">Trash</button>
                            </Link>
                        </div>
                        <div className="list-group">
                            {blogs ? blogs.map((blog, index) => <button
                                className={`list-group-item list-group-item-action ${(chosen === index) ? 'active' : ''}`}
                                key={index}
                                onClick={() => chooseBlog(index)}
                            >
                                {blog.title}
                            </button>
                            ) : ''}
                        </div>
                    </div>
                </div>
            </div>

            {showPreview ? <UserBlogsPreview
                blog={showPreview}
                setShowPreview={setShowPreview}
                profileState={profileState}
            /> : ''}

        </section>
    )
}

export default UserBlogsCard; 
