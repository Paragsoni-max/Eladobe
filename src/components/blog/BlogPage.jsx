import "./blogpage.css";
import one_img_1 from "../../images/one_img_1.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import { useSelector } from "react-redux";

const BlogPage = () => {
  const allUsers = useSelector((state) => state.users);
  const userData = [...allUsers];

  const {id} = useParams()
  const[blog,setBlog] = useState(null)

  useEffect(() => {
    let blog = userData.find(blog=>blog.id === parseInt(id))
    if (blog){
      setBlog(blog)
    }
  }, [])
  
  return (

    <>
    {
      blog?<div className="blog_page_container">
      <img src={one_img_1} alt="" />
      <div className="blog_page_header">
      <h1>{blog.title}</h1><span><Link className="but" to="/blogs"> ----Main-Page</Link></span>
      </div>

      <p>
        {blog.body}
      </p>
    </div>:<h1>no id</h1>
    }
      
    </>
  );
};

export default BlogPage;
