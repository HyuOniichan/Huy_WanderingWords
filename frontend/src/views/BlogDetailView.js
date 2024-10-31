import BlogDetailPost from "../components/blogComponents/BlogDetailPost";
import BlogDetailRelated from "../components/blogComponents/BlogDetailRelated";

function BlogDetailView() {
    return (
        <div className="row gx-5">
            <BlogDetailPost />
            <BlogDetailRelated />
        </div>
    )
}

export default BlogDetailView; 
