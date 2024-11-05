import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { UserProfileCard, UserNavTabs, UserBlogsCard } from "../components/";
import { BackendContext } from "../App";

function UserView() {

    const backendLink = useContext(BackendContext); 

    const [profile, setProfile] = useState();
    const { username } = useParams();

    useEffect(() => {
        fetch(`${backendLink}/user/${username}`)
            .then(res => res.json())
            .then(data => setProfile(data[0]))
            .catch(err => console.log(err))
    }, [username, backendLink])

    return (
        <div className="position-relative px-5" data-bs-spy="scroll" data-bs-target="#userTabs" data-bs-smooth-scroll="true" tabIndex="0">
            <UserNavTabs />
            <UserProfileCard profile={profile} />
            <UserBlogsCard profileState={[profile, setProfile]} />
        </div>
    )
}

export default UserView; 
