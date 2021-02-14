import React from "react";
import { Alert, Button , Breadcrumb} from "react-bootstrap";

const Credits = () => {
  return (
    <div className="credits_page">
      <Breadcrumb>
        <Breadcrumb.Item href={'/'}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Credits</Breadcrumb.Item>
      </Breadcrumb>
      <div className="credits_page_div">
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you here</Alert.Heading>
          <hr />
          <p className="mb-0">Thanks for viewing this credits page !</p>
        </Alert>
        <div className="copyrights">Copyrights &#169; Reserved Shopiee</div>
        <div className="credits_freepik">
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div className="credits_website">
          Shopiee made by{" "}
          <a
            href="https://subramanian3600.github.io/profile_card/"
            title="Subramanian"
          >
            Subramanian
          </a>
        </div>
      </div>
    </div>
  );
};
export default Credits;
