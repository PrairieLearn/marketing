import Head from "next/head";
import Script from "next/script";

export const AshbyEmbed: React.FC = () => {
  return (
    <>
      <div id="ashby_embed"></div>
      <Script id="ashby-config">
        {`window.__ashbyBaseJobBoardUrl = "https://jobs.ashbyhq.com/prairielearn";`}
      </Script>
      <Script
        src="https://jobs.ashbyhq.com/prairielearn/embed?version=2"
        strategy="afterInteractive"
      />
    </>
  );
};
