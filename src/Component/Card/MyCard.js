import "./Card.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
export default function MyCard({ title, desc, image, writter, time , id}) {
  const scrollWin = () =>{
    window.scrollTo(0, 0);
  
  };
  return (
    <Card className="cardContainer">
      <Card.Img className="cardImage" src={image} />
      <Card.Body className="cardBody">
        <Card.Title>
       
          <h2> {title} </h2>
        </Card.Title>
        <Card.Text className="cardText">
          {desc}
          <Link className="links" to= {`/article/${id}`} >
            <h4 className="moreContext" onClick={() => scrollWin()}>
              More Context <FaArrowRightLong className="arrow" />
            </h4>
          </Link>
        </Card.Text>
      </Card.Body>

      <Card.Footer className="cardFooter">
        <p>writter : {writter} </p>
      </Card.Footer>
    </Card>
  );
}
