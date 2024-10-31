import BlogDetailPost from "../components/blogComponents/BlogDetailComponents/BlogDetailPost";
import BlogDetailRelated from "../components/blogComponents/BlogDetailComponents/BlogDetailRelated";

function BlogDetailView() {
    return (
        <div className="row gx-5">
            <BlogDetailPost />
            <BlogDetailRelated />
        </div>
    )
}

export default BlogDetailView; 
