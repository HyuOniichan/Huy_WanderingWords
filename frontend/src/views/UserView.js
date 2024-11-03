import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { UserProfileCard, UserNavTabs, UserBlogsCard } from "../components/";

function UserView() {

    const [profile, setProfile] = useState();
    const { username } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/v1/user/${username}`)
            .then(res => res.json())
            .then(data => { setProfile(data[0]) })
            .catch(err => console.log(err))
    }, [username])

    return (
        <div className="position-relative px-5" data-bs-spy="scroll" data-bs-target="#userTabs" data-bs-smooth-scroll="true" tabIndex="0">
            <UserNavTabs />
            <UserProfileCard profile={profile} />
            <UserBlogsCard profile={profile} />
        </div>
    )
}

export default UserView; 
