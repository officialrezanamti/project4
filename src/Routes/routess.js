import Home from "../Pages/Home/Home";
import AboutUs from '../Pages/AboutUs/AboutUs';
import CreateAnArticle from '../Pages/CreateAnArticle/CreateAnArticle';
import EditArticle from '../Pages/EditArticle/EditArticle';
import Article from "../Pages/Article/Article";

const routess = [
    {path : '/' , element : <Home />},
    {path : '/create-an-article' , element : <CreateAnArticle />},
    {path : '/about-us' , element : <AboutUs />},
    {path : '/edit-article/:articleId' , element : <EditArticle />},
    {path : '/article/:articleId' , element : <Article />}
    
]

export default routess;