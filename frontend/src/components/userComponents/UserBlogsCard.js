import { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import UserBlogsPreview from "./UserBlogsPreview";
import { UserContext } from "../../App";

function UserBlogsCard({ profileState }) {

    const { username } = useParams();
    const currentUser = useContext(UserContext);
    const isMe = (currentUser && currentUser[0].username === username);
    const [profile, setProfile] = profileState;
    const blogs = profile ? profile.blogs.filter(blog => (!blog.deleted && blog.published)) : [];
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
                            <div>
                                {isMe? <Link to='/blog/draft'>
                                    <button className="btn btn-secondary me-2">Draft</button>
                                </Link> : ``}
                                {isMe? <Link to='/blog/trash'>
                                    <button className="btn btn-danger">Trash</button>
                                </Link> : ``}
                            </div>
                        </div>
                        <div className="list-group">
                            {(blogs && blogs.length) ? blogs.map((blog, index) => <button
                                className={`list-group-item list-group-item-action ${(chosen === index) ? 'active' : ''}`}
                                key={index}
                                onClick={() => chooseBlog(index)}
                            >
                                {blog.title}
                            </button>
                            ) : `${profile? profile.name : 'This user'} haven't posted anything`}
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
