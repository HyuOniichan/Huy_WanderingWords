import { useState } from "react";
import UserBlogsPreview from "./UserBlogsPreview";

function UserBlogsCard({ profileState }) {

    const [profile, setProfile] = profileState; 
    const blogs = profile ? profile.blogs : [];
    const [chosen, setChosen] = useState(-1); 
    const [showPreview, setShowPreview] = useState(null);

    function chooseBlog(index) {
        setChosen(index); 
        setShowPreview(blogs[index]); 
    }

    return (
        <section className="container h-100 p-5 row d-flex justify-content-center ms-1">
            <div className={`${showPreview? 'col-5' : 'col-9'}`}>
                <div className="card" id="blogs">
                    <div className="card-body">
                        <h5 className="card-title mb-3">Blogs</h5>
                        <div className="list-group">
                            {blogs ? blogs.map((blog, index) => <button 
                                className={`list-group-item list-group-item-action ${(chosen === index)? 'active' : ''}`}
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

            {showPreview? <UserBlogsPreview 
                blog={showPreview} 
                setShowPreview={setShowPreview} 
                profileState={profileState} 
            /> : ''}

        </section>
    )
}

export default UserBlogsCard; 
