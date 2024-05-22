import MyNavbar from "../../Component/MyNavbar/MyNavbar";
import "./CreateAnArticle.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function CreateAnArticle() {
  let navigate = useNavigate();
  let [newArticle, setNewArticle] = useState({});
  const articleClickHandler = () => {
    axios.post("http://localhost:5000/user", newArticle);
    navigate('/');
    Swal.fire({
      title : "Good Luck",
      text : "Seccessfully",
      icon : "seccess",
      timer : 1500,
      timerProgressBar : true,
      
      
  
    })
  };
  const inputHandler = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };
  return (
    <>
      <MyNavbar />

      <div className="formContainer">
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Label className="formLable">Article Title</Form.Label> <br />
            <Form.Control
              name="title"
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
              onChange={inputHandler}
              className="fromControl"
              type="number"
              placeholder="Write Article time to read"
            />
          </Form.Group>
        </Form>
        <Button onClick={articleClickHandler}>Create an Article</Button>
      </div>
    </>
  );
}
