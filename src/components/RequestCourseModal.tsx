import React from "react";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Link from "next/link";

interface RequestCourseModal extends Pick<ModalProps, "show" | "onHide"> {}

export const RequestCourseModal: React.FC<RequestCourseModal> = (props) => {
  const [server, setServer] = React.useState<"us" | "ca">("us");
  const url =
    server === "ca"
      ? "https://ca.prairielearn.com/pl/request_course"
      : "https://us.prairielearn.com/pl/request_course";
  return (
    <Modal {...props} centered aria-labelledby="request-course-modal-title">
      <Modal.Header closeButton>
        <Modal.Title id="request-course-modal-title">
          Request a course
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Click below to request a course. You&apos;ll be asked to sign in to
          PrairieLearn, after which you can submit your course details.
        </p>
        <Form className="mb-3">
          <Form.Check
            type="radio"
            name="server"
            id="server-us"
            checked={server === "us"}
            onChange={(e) => setServer("us")}
            label={
              <React.Fragment>
                Main <span className="text-muted">(us.prairielearn.com)</span>
              </React.Fragment>
            }
          />
          <Form.Check
            type="radio"
            name="server"
            id="server-ca"
            checked={server === "ca"}
            onChange={(e) => setServer("ca")}
            label={
              <React.Fragment>
                Canada <span className="text-muted">(ca.prairielearn.com)</span>
              </React.Fragment>
            }
          />
        </Form>
        <p>
          <a href={url} className="btn btn-primary">
            Request a course
          </a>
        </p>
        <p className="mb-0">
          Have any questions? Use the <Link href="/support">Contact us</Link>{" "}
          form and we will get back to you soon.
        </p>
      </Modal.Body>
    </Modal>
  );
};
