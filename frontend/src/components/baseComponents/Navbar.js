import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

    const navigation = useNavigate();
    const [searchParams, setSearchParams] = useState(''); 
    
    const handleSearch = useCallback(() => {
        if (searchParams.trim()) navigation(`/blog/?title=${searchParams.trim()}`)
            else navigation(`/blog`)
    }, [searchParams, navigation])

    const handleKeyDown = useCallback(e => {
        if (e.key === 'Enter') handleSearch(); 
    }, [handleSearch])

    // Listen for key event (press Enter to search)
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown); 

        return () => {
            window.removeEventListener('keydown', handleKeyDown); 
        }
    }, [handleKeyDown])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top z-3">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="./logo.png" alt="logo" style={{ width: 28 }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                            {/* <NavLink to="/" className={(navData) => (navData.isActive ? "active" : null)}>Home</NavLink> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link">Blog</Link>
                            {/* <NavLink to="/" className={(navData) => (navData.isActive ? "active" : null)}>Blog</NavLink> */}
                        </li>
                    </ul>
                    <div className="d-flex mx-auto">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchParams}
                            onChange={e => setSearchParams(e.target.value)}
                        />
                        <button 
                            className="btn btn-outline-success" 
                            type="button"
                            onClick={handleSearch}
                        >Search</button>
                    </div>
                    <div>
                        <Link to='/blog/create'>
                            <button type="button" className="btn btn-primary me-3">
                                Create
                            </button>
                        </Link>
                        <Link to='/user/hyuhyu'>
                            <img src="https://avatars.githubusercontent.com/u/119403471" className="rounded-circle shadow-sm"
                                style={{ width: 40 }} alt="Avatar" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar; 
