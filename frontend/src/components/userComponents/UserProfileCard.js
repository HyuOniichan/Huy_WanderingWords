import { Link } from "react-router-dom";

function UserProfileCard({ profile }) {

    // const location = useLocation();
    // const urlParams = new URLSearchParams(location.search);
    // const tabParam = urlParams.get('tab');
    // console.log(tabParam)

    return (
        <section className="h-100 gradient-custom-2 scrollspy-example-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center">
                    <div className="col col-lg-9 col-xl-8">
                        <div className="card" id="profile">
                            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: 200 }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: 150 }}>
                                    <img src={profile ? profile.avatar : ``}
                                        alt="thumbnail" className="img-fluid img-thumbnail mt-4 mb-2"
                                        style={{ width: 150, zIndex: 1 }} />
                                    <button type="button" className="btn btn-outline-dark" style={{ zIndex: 1 }}>
                                        Edit profile
                                    </button>
                                </div>
                                <div className="ms-3" style={{ marginTop: 130 }}>
                                    <h5>{(profile && profile.name) ? profile.name : 'Anonymous'}</h5>
                                    <p>Debug King</p>
                                </div>
                            </div>
                            <div className="p-4 text-black bg-body-tertiary">
                                <div className="d-flex justify-content-end text-center py-1 text-body">
                                    <div>
                                        <p className="mb-1 h5">5</p>
                                        <p className="small text-muted mb-0">Blogs</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="mb-1 h5">2</p>
                                        <p className="small text-muted mb-0">Followers</p>
                                    </div>
                                    <div>
                                        <p className="mb-1 h5">6</p>
                                        <p className="small text-muted mb-0">Following</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-4 text-black">
                                <div className="mb-5  text-body">
                                    <p className="lead fw-normal mb-1">About</p>
                                    <div className="p-4 bg-body-tertiary">
                                        <p className="font-italic mb-1">{profile ? profile.bio : '...'}</p>
                                        {/* <p className="font-italic mb-1">Web Developer</p>
                                            <p className="font-italic mb-1">Lives in New York</p>
                                            <p className="font-italic mb-0">Photographer</p> */}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4 text-body">
                                    <p className="lead fw-normal mb-0">Recent blogs</p>
                                    <Link to={`/user/hyuhyu?tab=blogs`}>
                                        <p className="mb-0">Show all</p>
                                    </Link>
                                </div>
                                <div className="row g-2">
                                    {(profile && profile.blogs) ? <div className="col mb-2">
                                        <Link to={'/blog/' + profile.blogs[0]._id}>
                                            <img src={profile.blogs[0].thumbnail} alt="thumnail"
                                                className="w-100 rounded-3" />
                                        </Link>
                                    </div> : ``}
                                    {(profile && profile.blogs) ? <div className="col mb-2">
                                        <Link to={'/blog/' + profile.blogs[1]._id}>
                                            <img src={profile.blogs[1].thumbnail} alt="thumnail"
                                                className="w-100 rounded-3" />
                                        </Link>
                                    </div> : ``}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProfileCard; 
