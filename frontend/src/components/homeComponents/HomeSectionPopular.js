import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BackendContext } from "../../App";

const HomeSectionPopular = () => {

    const backendLink = useContext(BackendContext); 

    const [blogs, setBlogs] = useState();

    useEffect(() => {
        fetch(`${backendLink}/blog`)
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.log(err))
    }, [backendLink])

    // Inline styles
    const sectionStyle = {
        backgroundColor: '#f9f9f9',
        padding: '60px 30px',
        marginTop: '20px'
    };

    const contentStyle = {
        textAlign: 'left',
    };

    const titleStyle = {
        fontWeight: 700,
    };

    const paragraphStyle = {
        margin: '10px 0',
    };

    const exploreStyle = {
        background: '#007bff',
        color: '#ffffff',
        fontWeight: 500,
        fontSize: '16px',
        border: 'none', 
        letterSpacing: '1px',
        padding: '12px 24px',
        borderRadius: '5px',
        transition: '0.3s',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none', 
        marginTop: '8px'
    };

    const iconBoxStyle = {
        backgroundColor: '#ffffff',
        padding: '50px 40px',
        boxShadow: '0px 10px 50px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        transition: 'all 0.3s ease-out 0s',
        textAlign: 'center',
    };

    const iconStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px',
    };

    return (
        <section id="about" style={sectionStyle}>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center gy-5">
                    <div className="col-xl-5" style={contentStyle}>
                        <h2 style={titleStyle}>Popular blogs</h2>
                        <p style={paragraphStyle}>
                            Blogs are a powerful medium for sharing ideas and engaging with a community.
                            Whether you're writing about travel, technology, or personal experiences,
                            a well-crafted blog can inspire and inform.
                            Regular updates keep your audience connected and coming back for more.
                            Embrace your creativity and let your voice be heard!
                        </p>
                        <Link to='/blog'>
                            <button style={exploreStyle}>Explore</button>
                        </Link>
                    </div>

                    <div className="col-xl-7">
                        <div className="row gy-4">
                            {blogs ? blogs.map((blog, index) => (index < 4) && (
                                <div className="col-md-6" key={index}>
                                    <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div style={iconBoxStyle}>
                                            <div style={iconStyle}>
                                                <img src={blog.thumbnail} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                                            </div>
                                            <h3>{blog.title}</h3>
                                            <p>{blog.author.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            )) : ``}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionPopular;
