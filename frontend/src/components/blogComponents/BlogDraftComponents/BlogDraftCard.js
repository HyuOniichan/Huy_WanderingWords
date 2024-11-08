import { Link } from "react-router-dom";

function BlogDraftCard({ draftBlog }) {

    function handleDate(dateString) {
        let newDateString = dateString.slice(0, 10).split('-');
        newDateString.reverse();
        return newDateString.join('/');
    }

    return (
        <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis text-capitalize">{draftBlog.tags[0]}</strong>
                    <h3 className="mb-0">{draftBlog.title}</h3>
                    <div className="mb-1 text-body-secondary">
                        {draftBlog.author.name ? draftBlog.author.name : 'Anonymous'}
                        {draftBlog.createdAt && ` - draft created on ${handleDate(draftBlog.createdAt)}`}
                    </div>
                    <div className="row w-100 gap-2">
                        <Link to={`/blog/${draftBlog._id}`} className="col btn btn-primary px-0 ms-3 mt-2">
                            Explore
                        </Link>
                    </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                    {draftBlog.thumbnail && <img
                        src={draftBlog.thumbnail}
                        alt="thumbnail"
                        style={{ height: 260, objectFit: 'cover' }}
                    />}
                </div>
            </div>
        </div >
    )

}

export default BlogDraftCard; 
