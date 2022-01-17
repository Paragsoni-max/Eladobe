import "./blog.css";
import { useEffect } from "react";
import one_img_2 from "../../images/one_img_2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/blog/blog_Action";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Blog = () => {
  // const [user, setUser] = useState([]);

  const allUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const userData = [...allUsers];
  console.log(userData);

  return (
    <>
    <div className="all_blogs">
      <div className="blog_header">
        <h1>El Adobe Blogs</h1>
        <h1>""In the Morning""</h1>
      </div>
      <div className="blog_list">
        {userData.map((singleuser) => {
          return (
            <Link to= {`/blogs/${singleuser.id}`}>
            <div key={singleuser.id} className="single_blog">
              <img src={one_img_2} alt="" />
              <h1>{singleuser.title}</h1>
              <p>
                {singleuser.body}
              </p>
              <span>Click to view complete blog</span>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Blog;
