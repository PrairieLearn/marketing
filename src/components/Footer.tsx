import React from "react";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <p className="my-0">
      <a href={href} className="link-secondary text-decoration-none">
        {children}
      </a>
    </p>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-light pt-4">
      <div className="container-md">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <h6 className="text-uppercase text-secondary fw-bold">Resources</h6>
            <FooterLink href="https://prairielearn.readthedocs.io/en/latest/">
              Documentation
            </FooterLink>
            <FooterLink href="https://github.com/PrairieLearn/PrairieLearn">
              GitHub
            </FooterLink>
            <FooterLink href="/research">Research</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <h6 className="text-uppercase text-secondary fw-bold">Legal</h6>
            <FooterLink href="/legal/terms">Terms of Service</FooterLink>
            <FooterLink href="/legal/privacy">Privacy Policy</FooterLink>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <h6 className="text-uppercase text-secondary fw-bold">Contact</h6>
            <FooterLink href="mailto:hello@prairielearn.com">
              hello@prairielearn.com
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
