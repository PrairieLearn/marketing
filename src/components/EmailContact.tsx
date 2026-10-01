import classnames from "classnames";

import { Heading } from "./Heading";
import styles from "./EmailContact.module.scss";

export function EmailContact() {
  return (
    <div className={classnames("card", styles.card)}>
      <div className="card-body p-4 d-flex flex-column">
        <Heading>Contact us</Heading>
        <p className="card-text">
          Have a question about pricing, getting started, or using PrairieLearn
          or PrairieTest? Our team is here to help.
        </p>
        <a
          href="mailto:support@prairielearn.com"
          className="btn btn-primary btn-lg d-inline-flex align-items-center align-self-start gap-2 mt-auto"
        >
          Email support
          <i className="bi bi-arrow-right" aria-hidden="true" />
        </a>
        <a
          href="mailto:support@prairielearn.com"
          className={classnames("d-block mt-3", styles.address)}
        >
          support@prairielearn.com
        </a>
      </div>
    </div>
  );
}
