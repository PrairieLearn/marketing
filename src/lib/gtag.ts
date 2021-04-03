export const GA_TRACKING_ID = "G-20ZFCK3V0P";

export const pageview = (url: URL) => {
  window.gtag("config", GA_TRACKING_ID, { page_path: url });
};

export const event = (name: string, parameters: Record<string, any>) => {
  window.gtag("event", name, parameters);
};
