import Link from "next/link";
import React from "react";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="link-secondary text-decoration-none">
      {children}
    </Link>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-light pt-4">
      <div className="container-md">
        <div className="row">
          <div className="col-6 col-sm-4 mb-3">
            <h6 className="text-uppercase text-secondary fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FooterLink href="/support">Support</FooterLink>
              </li>
              <li className="mb-2">
                <FooterLink href="https://docs.prairielearn.com/">
                  Documentation
                </FooterLink>
              </li>
              <li className="mb-2">
                <FooterLink href="https://github.com/PrairieLearn/PrairieLearn">
                  GitHub
                </FooterLink>
              </li>
              <li className="mb-2">
                <FooterLink href="/research">Research</FooterLink>
              </li>
              <li className="mb-2">
                <FooterLink href="/pricing">Pricing</FooterLink>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-4 mb-3">
            <h6 className="text-uppercase text-secondary fw-bold">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FooterLink href="/legal/terms">Terms of Service</FooterLink>
              </li>
              <li className="mb-2">
                <FooterLink href="/legal/privacy">Privacy Policy</FooterLink>
              </li>
              <li className="mb-2">
                <FooterLink href="/legal/subprocessors">
                  Subprocessors
                </FooterLink>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-4 mb-3">
            <h6 className="text-uppercase text-secondary fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FooterLink href="/about">About</FooterLink>
              </li>
              <li className="mb-2">
                <FooterLink href="/jobs">Jobs</FooterLink>
              </li>
              <li className="mb-2">
                <FooterLink href="/security">Security</FooterLink>
              </li>
              <li className="mb-2">
                <FooterLink href="/accessibility">Accessibility</FooterLink>
              </li>
              <li className="mb-2">
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
