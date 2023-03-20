import React from "react";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Link from "next/link";

interface RequestCourseModal extends Pick<ModalProps, "show" | "onHide"> {}

export const RequestCourseModal: React.FC<RequestCourseModal> = (props) => {
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
        <p>
          <a
            href="https://us.prairielearn.com/pl/request_course"
            className="btn btn-primary"
          >
            Request a course
          </a>
        </p>
        <p className="mb-0">
          Have any questions? <Link href="/contact">Contact us</Link> and
          we&apos;ll get back to you soon.
        </p>
      </Modal.Body>
    </Modal>
  );
};
