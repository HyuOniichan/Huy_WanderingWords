import BackBtn from "../baseComponents/BackBtn";

function UserNavTabs() {
    return (
        <div className="pt-5" style={{ position: 'fixed', top: 80, left: 70, zIndex: 3 }}>
            <BackBtn /> 
            <nav id="userTabs" className="h-100 flex-column align-items-stretch pe-5 border-end">
                <nav className="nav nav-pills flex-column">
                    <a className="nav-link" href="#profile">Profile</a>
                    <a className="nav-link" href="#blogs">Blogs</a>
                    {/* <nav className="nav nav-pills flex-column">
                        <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
                        <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
                    </nav>
                    <a className="nav-link" href="#item-2">Item 2</a>
                    <a className="nav-link" href="#item-3">Item 3</a>
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                        <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
                    </nav> */}
                </nav>
            </nav>
        </div>
    )
}

export default UserNavTabs; 