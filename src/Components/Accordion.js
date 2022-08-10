import React, { useState } from "react";
import { questions } from "./data";
import Myaccordion from "./Myaccordion";
import "./Accordion.css";

const Accordion = () => {
  const [Data, setData] = useState(questions);

  return (
    <>
      <section className="main-div">
        <h1>React interview question</h1>
        {Data.map((item) => {
          const { id } = item;
          return <Myaccordion key={id} {...item} />;
        })}
      </section>
    </>
  );
};

export default Accordion;
