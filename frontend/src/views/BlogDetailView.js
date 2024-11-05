import { BackBtn, BlogDetailPost, BlogDetailRelated } from "../components/";

function BlogDetailView() {
    return (
        <div className="row gx-5 position-relative pt-3">
            <BlogDetailPost />
            <BlogDetailRelated />
            <BackBtn />
        </div>
    )
}

export default BlogDetailView; 
