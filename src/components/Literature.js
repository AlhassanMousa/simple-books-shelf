import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import db from "../firebase";
import "../style/App.scss";
import PostComponent from "./PostComponent";
import { Link } from "react-router-dom";

function Literature() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const now = new Date();
    db.collection("bookreader")
      .where("cat", "==", "Literature")
      .limit(4)
      .onSnapshot((snapshot) => {
        setEvents(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div>
      <Container>
        <Link to="/LiteraturePage">
          <h2 className="linkh2">#روايات</h2>
        </Link>

        {events.map(({ id, data }) => (
          <PostComponent key={id} id={id} data={data} />
        ))}
      </Container>
    </div>
  );
}

export default Literature;
