import React from "react";
import Button from "react-bootstrap/Button";
import BootstrapCard from "react-bootstrap/Card";

const CustomCard = () => {
  return (
    <>
      <BootstrapCard style={{ width: "18rem" }}>
        <BootstrapCard.Img variant="top" src="holder.js/100px180" />
        <BootstrapCard.Body>
          <BootstrapCard.Title>Card Title</BootstrapCard.Title>
          <BootstrapCard.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </BootstrapCard.Text>
          <Button variant="primary">Go somewhere</Button>
        </BootstrapCard.Body>
      </BootstrapCard>
    </>
  );
};

export default CustomCard;