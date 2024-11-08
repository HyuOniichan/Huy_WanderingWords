function BlogDetailPost({ blog }) {

    // useRef ? 
    const blogContent = document.getElementById('blogContent');
    if (blog && blogContent && blog.content) blogContent.innerHTML = blog.content.map(section => `
        <h2>${section.heading}</h2>
        <div>
            ${section.text ? section.text
            .split('\n')
            .map(para => `<p>${para}</p>`)
            .join('') : ``}
        </div> 
    `).join('');

    function handleDate(dateString) {
        let newDateString = dateString.slice(0, 10).split('-');
        newDateString.reverse();
        return newDateString.join('/');
    }

    return (
        <div className="col-md-8 pt-4">
            <div className="text-body-secondary">
                {(blog && blog.author) ? blog.author.name : 'Anonymous'}
                {blog && (blog.published ?
                    (blog.updatedAt && ` - published on ${handleDate(blog.updatedAt)}`) :
                    (blog.createdAt && ` - draft created on ${handleDate(blog.createdAt)}`)
                )}
            </div>
            <h1>{blog ? blog.title : `Title`}</h1>
            {(blog && blog.thumbnail) && <img src={blog.thumbnail} alt="thumbnail" className="img-fluid my-4" />}
            <div id="blogContent"></div>
        </div>
    )
}

export default BlogDetailPost; 
