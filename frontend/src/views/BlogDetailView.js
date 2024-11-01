import BackBtn from "../components/baseComponents/BackBtn";
import BlogDetailPost from "../components/blogComponents/BlogDetailComponents/BlogDetailPost";
import BlogDetailRelated from "../components/blogComponents/BlogDetailComponents/BlogDetailRelated";

function BlogDetailView() {
    return (
        <div className="row gx-5 position-relative pt-3">
            <BlogDetailPost />
            <BlogDetailRelated />
            <BackBtn path={'blog'} /> 
        </div>
    )
}

export default BlogDetailView; 
