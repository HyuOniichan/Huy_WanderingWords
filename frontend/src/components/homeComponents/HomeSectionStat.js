import React from 'react';

function HomeSectionStat() {
    // Inline styles
    const sectionStyle = {
        position: 'relative',
        padding: '120px 0',
        marginTop: '40px'
    };

    const imgStyle = {
        position: 'absolute',
        inset: 0,
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 1,
    };
    

    const overlayStyle = {
        content: '""',
        background: 'rgba(0, 0, 0, 0.4)', 
        position: 'absolute',
        inset: 0,
        zIndex: 2,
    };

    const containerStyle = {
        position: 'relative',
        zIndex: 3,
    };

    const statsItemStyle = {
        padding: '30px',
        width: '100%',
        textAlign: 'center',
    };

    const statsValueStyle = {
        fontSize: '24px',
        display: 'block',
        color: '#fff',
        fontWeight: 700,
    };

    const statsLabelStyle = {
        padding: 0,
        margin: 0,
        fontFamily: 'var(--heading-font)',
        fontSize: '16px',
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 0.8)', 
    };

    return (
        <section id="stats" className="stats section dark-background" style={sectionStyle}>
            <img src="/images/cover2.jpg" alt="cover" style={imgStyle} />
            <div className="container" style={containerStyle}>
                <div className="row gy-4">
                    {[
                        { end: 232, label: 'Blogs' },
                        { end: 521, label: 'Comments' },
                        { end: 1453, label: 'Views' },
                        { end: 32, label: 'Users' },
                    ].map((stat, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <div className="stats-item" style={statsItemStyle}>
                                <span style={statsValueStyle}>{stat.end}</span>
                                <p style={statsLabelStyle}>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={overlayStyle}></div>
        </section>
    );
};

export default HomeSectionStat;
