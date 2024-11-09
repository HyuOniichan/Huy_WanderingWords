import { Link } from "react-router-dom";

const HomeSectionHero = () => {
    // Inline styles
    const heroStyle = {
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        padding: '20px 0',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        // overflow: 'hidden', 
    };

    const imgStyle = {
        position: 'absolute',
        // inset: 0,
        top: '-20px',
        display: 'block',
        width: '98vw',
        height: '100vh',
        objectFit: 'cover',
        objectPosition: 'center bottom', 
        zIndex: 1,
    };

    const overlayStyle = {
        position: 'absolute',
        // inset: 0,
        top: '-20px',
        width: '98vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 2,
    };

    const containerStyle = {
        position: 'relative',
        zIndex: 2,
        color: 'white',
        textAlign: 'center',
        width: '100%'
    };

    const headingStyle = {
        margin: 0,
        fontSize: '4rem',
        fontWeight: 700,
    };

    const paragraphStyle = {
        margin: '5px 0 0 5px',
        fontSize: '2rem',
        color: 'rgba(255, 255, 255, 0.9)',
    };

    return (
        <section id="hero" className="hero section dark-background" style={heroStyle}>
            <img src="/images/hero_cover.jpg" alt="cover" style={imgStyle} />
            <div style={overlayStyle}></div>
            <div className="container" style={containerStyle}>
                <div className="row text-start">
                    <div className="col-lg-6" style={{ marginTop: 60 }}>
                        <h2 style={headingStyle}>Wandering Words</h2>
                        <p style={paragraphStyle}>
                            Where words roam free
                        </p>
                    </div>
                    <div className="mt-5">
                        <Link to='/blog'
                            style={{
                                backgroundColor: '#3498db',
                                color: 'white',
                                padding: '12px 20px',
                                textDecoration: 'none',
                                borderRadius: '4px',
                                fontSize: '16px',
                            }}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionHero;
