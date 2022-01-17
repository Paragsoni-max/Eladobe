import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import BlogPage from "./components/blog/BlogPage";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/blogs" component={Blog} />
        <Route exact path="/blogs/:id" component={BlogPage} />
        <Route exact path="/" component={Home}/>
      </Switch>
      <Footer />
    </>
  );
}
export default App;
