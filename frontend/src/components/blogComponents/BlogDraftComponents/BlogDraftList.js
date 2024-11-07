import { useContext, useEffect, useState } from "react";
import BlogDraftCard from "./BlogDraftCard";
import { BackendContext, UserContext } from "../../../App";

function BlogDraftList() {

    const backendLink = useContext(BackendContext); 
    // const currentUser = useContext(UserContext); 
    // const currentUsername = currentUser && currentUser[0].username; 

    const [draftBlogs, setDraftBlogs] = useState();
    // const [profile, setProfile] = useState();

    // useEffect(() => {
    //     fetch(`${backendLink}/user/${currentUsername}`)
    //         .then(res => res.json())
    //         .then(data => setProfile(data[0]))
    //         .catch(err => console.log(err))
    // }, [currentUsername, backendLink])

    useEffect(() => {
        fetch(`${backendLink}/blog/draft`)
            .then(res => res.json())
            .then(data => setDraftBlogs(data))
            .catch(err => console.log(err))
            
    }, [backendLink])

    return (
        <div>
            <h1 className="m-4">Draft</h1>
            <div className="row mb-2">
                {draftBlogs && draftBlogs.length ? draftBlogs.map((draftBlog, index) => <BlogDraftCard
                    key={index}
                    draftBlog={draftBlog}
                    setDraftBlogs={setDraftBlogs}
                    // profileState={[profile, setProfile]}
                />) : "All published!"}
            </div>
        </div>
    )
}

export default BlogDraftList; 
