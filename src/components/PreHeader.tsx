import React from "react";
import classnames from "classnames";
import { Dropdown, DropdownButton } from "react-bootstrap";

import styles from "./PreHeader.module.scss";
import { RequestCourseModal } from "../components/RequestCourseModal";

export const PreHeader: React.FC = () => {
  const [showRequestCourseModal, setShowRequestCourseModal] =
    React.useState(false);

  return (
    <React.Fragment>
      <div className={classnames("container-fluid py-3", styles.container)}>
        <div className="container-md text-end">
          <button
            className="btn btn-light btn-lg me-3 "
            onClick={() => setShowRequestCourseModal(true)}
          >
            Free sign up
          </button>
          <DropdownButton
            id="login-dropdown-desktop"
            title="Login"
            variant="light"
            size="lg"
            className="d-none d-sm-inline-block"
          >
            <Dropdown.Item href="https://us.prairielearn.com/pl/login">
              Main <span className="text-muted">(us.prairielearn.com)</span>
            </Dropdown.Item>
            <Dropdown.Item href="https://ca.prairielearn.com/pl/login">
              Canada <span className="text-muted">(ca.prairielearn.com)</span>
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <RequestCourseModal
        show={showRequestCourseModal}
        onHide={() => setShowRequestCourseModal(false)}
      />
    </React.Fragment>
  );
};
