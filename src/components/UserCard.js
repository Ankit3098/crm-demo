import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

const UserCard = (props) => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{props.user.name}</CardTitle>
          <CardText>{props.user.email}</CardText>
          {props.handleDelete && (
            <Button
              color="danger"
              onClick={() => props.handleDelete(props.user.id)}
            >
              {props.btnName}
            </Button>
          )}
          <Link to={props.to}>
            <Button className="ml-2">
              {props.showUser ? "Show User" : "Go Back"}
            </Button>
          </Link>
        </CardBody>
      </Card>
    </>
  );
};

export default UserCard;
