import Icon from "../baseComponents/Icon";

const HomeSectionStat = () => {
    const features = [
        {
            icon: <Icon type={'article'} />,
            title: 'Blogs',
            description: `Easily create and manage blogs with WW. 
                The powerful block editor allows for seamless blog post creation, 
                enabling you to write, format, and organize content effortlessly. 
                Customize layouts, add rich media, and enhance readability with 
                just a few clicks.
            `, 
            count: '521'
        },
        {
            icon: <Icon type={'view'} />,
            title: 'Views',
            description: `WW allows you to build dynamic, visually appealing layouts 
                that change based on user interactions. With integrated block patterns 
                and customizable views, you can tailor how your content is presented, 
                ensuring a perfect experience on every device.
            `, 
            count: '1453'
        },
        {
            icon: <Icon type={'person'} />,
            title: 'Users',
            description: `Engage your audience with intuitive user management tools. 
                WW simplifies the process of adding, managing, and interacting with users, 
                allowing you to build a seamless, personalized experience and have 
                full control over user interactions on your site.
            `, 
            count: '232'
        },
    ];

    return (
        <section style={{ padding: '40px 20px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
                {features.map((feature, index) => (
                    <div key={index} style={{
                        width: '32%',
                        backgroundColor: 'white',
                        padding: '30px',
                        borderRadius: '12px',
                        border: '2px solid #D9E9E7',
                        textAlign: 'center',
                        boxSizing: 'border-box',
                    }}>
                        {feature.icon}
                        <h3 style={{ fontSize: '24px', margin: '15px 0' }}><strong>{feature.title}</strong></h3>
                        <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{feature.description}</p>
                        <div>
                            <p style={{
                                    color: '#7F8C8D',
                                    textDecoration: 'none',
                                    fontWeight: 'bold'
                                }}>
                                {feature.count} {feature.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HomeSectionStat;
