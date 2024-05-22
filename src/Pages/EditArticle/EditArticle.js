import { useParams } from "react-router-dom";
import "./EditArticle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MyNavbar from "../../Component/MyNavbar/MyNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



export default function EditArticle() {
  const navigate = useNavigate()
  const articleId = useParams().articleId;
  const [articleData, setArticleData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${articleId}`)
      .then((response) => setArticleData(response.data));
  }, []);
  

  const inputHandler = (e) =>{
    setArticleData({...articleData , [e.target.name] : e.target.value})
  }
  const editClickHandler = () => {
    axios.put(`http://localhost:5000/user/${articleId}`, articleData)
    navigate(`/article/${articleId}`)
    Swal.fire({
      title: "Success Changing",
      text: "Edit Complete",
      icon: "success"
    })

  }
  return (
    <>
      <MyNavbar />
        
      <div className="formContainer">
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Label className="formLable">Article Title</Form.Label> <br />
            <Form.Control
              name="title"
              value={articleData.title}
              onChange={inputHandler}
              className="fromControl"
              type="text"
              placeholder="Enter Article Title"
            />
          </Form.Group>
        </Form>
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Label>Short Description</Form.Label> <br />
            <Form.Control
              name="desc"
              value={articleData.desc}
              onChange={inputHandler}
              className="fromControl"
              type="text"
              placeholder="Enter Short Description"
            />
          </Form.Group>
        </Form>
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Label>Article Writter</Form.Label> <br />
            <Form.Control
              value={articleData.writter}
              name="writter"
              onChange={inputHandler}
              className="fromControl"
              type="text"
              placeholder="Enter Name Of Article Writter"
            />
          </Form.Group>
        </Form>
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Label>Article Image</Form.Label> <br />
            <Form.Control
             
              name="image"
              value={articleData.image}
              onChange={inputHandler}
              className="fromControl"
              type="text"
              placeholder="Enter Article Image Address"
            />
          </Form.Group>
        </Form>
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Label>Article Time to read</Form.Label> <br />
            <Form.Control
              name="time"
              value={articleData.time}
              onChange={inputHandler}
              className="fromControl"
              type="number"
              placeholder="Write Article time to read"
            />
          </Form.Group>
        </Form>
        <Button onClick={editClickHandler}>Edit Article</Button>
      </div>
    </>
  );
}
