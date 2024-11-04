import { Link } from 'react-router-dom';

function Footer() {
    // Inline styles
    const footerStyle = {
        color: 'black', 
        backgroundColor: '#f8f9fa', 
        fontSize: '14px',
        paddingBottom: '50px',
        position: 'relative',
        marginTop: '40px'
    };

    const footerTopStyle = {
        paddingTop: '50px',
    };

    const aboutTextStyle = {
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif', 
        color: 'black', 
    };

    const socialLinkStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        border: '1px solid rgba(0, 0, 0, 0.5)', 
        fontSize: '16px',
        color: 'black', 
        marginRight: '10px',
        transition: '0.3s',
    };

    const linksStyle = {
        marginBottom: '30px',
    };

    const linkTextStyle = {
        color: 'black', 
        display: 'inline-block',
        lineHeight: '1',
        textDecoration: 'none'
    };

    const copyrightStyle = {
        paddingTop: '25px',
        paddingBottom: '25px',
        backgroundColor: 'rgba(0, 0, 0, 0.05)', 
    };

    const creditsStyle = {
        marginTop: '6px',
        fontSize: '13px',
    };

    return (
        <footer style={footerStyle}>
            <div className="container" style={footerTopStyle}>
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-about">
                        <p style={aboutTextStyle}>
                            Wandering Words - a blogs website with CRUD actions, using MERN stack and Bootstrap for styling and design from different sources
                        </p>
                        <div className="social-links d-flex mt-4">
                            <a href="https://github.com/HyuOniichan" style={socialLinkStyle}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297C5.373.297 0 5.67 0 12.3c0 5.196 3.29 9.633 7.867 11.224.575.106.783-.248.783-.552 0-.272-.011-1.182-.017-2.139-3.003.651-3.637-1.451-3.637-1.451-.492-1.25-1.204-1.585-1.204-1.585-.984-.67.075-.656.075-.656 1.091.077 1.667 1.124 1.667 1.124 1.007 1.722 2.64 1.224 3.283.935.102-.729.394-1.224.718-1.505-2.665-.303-5.467-1.335-5.467-5.93 0-1.311.467-2.386 1.236-3.23-.125-.303-.535-1.528.115-3.176 0 0 1.007-.322 3.3 1.228.958-.266 1.989-.398 3.005-.402 1.016.004 2.047.136 3.005.402 2.293-1.55 3.3-1.228 3.3-1.228.651 1.648.24 2.873.115 3.176.77.844 1.236 1.919 1.236 3.23 0 4.604-2.807 5.622-5.475 5.919.405.347.765 1.031.765 2.082 0 1.503-.014 2.715-.017 3.08 0 .304.205.664.79.552C20.71 21.933 24 17.497 24 12.3 24 5.67 18.627.297 12 .297z" /></svg>
                            </a>
                            <a href="/" style={socialLinkStyle}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57c-.885.39-1.83.65-2.825.77a4.931 4.931 0 0 0 2.163-2.724c-.95.555-2.005.956-3.127 1.175a4.916 4.916 0 0 0-8.38 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.927 4.927 0 0 0-.666 2.477c0 1.711.869 3.22 2.188 4.095a4.906 4.906 0 0 1-2.224-.616v.061c0 2.383 1.688 4.373 3.926 4.828a4.934 4.934 0 0 1-2.224.084c.63 1.956 2.445 3.384 4.598 3.426a9.877 9.877 0 0 1-6.086 2.097c-.395 0-.785-.023-1.17-.067a13.93 13.93 0 0 0 7.548 2.209c9.056 0 14.004-7.5 14.004-13.977 0-.213-.005-.425-.014-.637A10.005 10.005 0 0 0 24 4.59a9.853 9.853 0 0 1-2.847.782 4.905 4.905 0 0 0 2.165-2.724z" /></svg>
                            </a>
                            <a href="/" style={socialLinkStyle}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c-.83 0-1.5.68-1.5 1.5s.67 1.5 1.5 1.5c.83 0 1.5-.68 1.5-1.5S5.81 3.5 4.98 3.5zm-1.26 18.5V7h2.52v15h-2.52zm5.86-14h2.53v1.5h.03c.35-.66 1.24-1.5 2.55-1.5 2.73 0 3.23 1.79 3.23 4.1v7.9h-2.52v-7.3c0-1.73-.01-3.95-2.4-3.95-2.39 0-2.75 1.88-2.75 3.83v7.42h-2.52v-15z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links" style={linksStyle}>
                        <h4 style={{ color: 'black' }}>Useful Links</h4>
                        <ul>
                            <li><Link to="/" style={linkTextStyle}>Home</Link></li>
                            <li><Link to="/blog" style={linkTextStyle}>Blogs</Link></li>
                            <li><Link to="/" style={linkTextStyle}>About us</Link></li>
                            <li><Link to="/" style={linkTextStyle}>Services</Link></li>
                            <li><Link to="/" style={linkTextStyle}>Terms of service</Link></li>
                            <li><Link to="/" style={linkTextStyle}>Privacy policy</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links" style={linksStyle}>
                        <h4 style={{ color: 'black' }}>Our Services</h4>
                        <ul>
                            <li><Link to="/blogs" style={linkTextStyle}>Blogs</Link></li>
                            <li><Link to="/" style={linkTextStyle}>Web Development</Link></li>

                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4 style={{ color: 'black' }}>Contact Us</h4>
                        <p>Hanoi, Vietnam</p>
                        <p className="mt-4"><strong>Phone:</strong> <span>0911******</span></p>
                        <p><strong>Email:</strong> <span>hyuhyu@gmail.com</span></p>
                    </div>
                </div>
            </div>

            <div className="container copyright text-center mt-4" style={copyrightStyle}>
                <p>No copyright - personal use</p>
                <div style={creditsStyle}>
                    Designed by <Link to="https://github.com/HyuOniichan" style={{ color: 'black' }}>HyuHyu</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
