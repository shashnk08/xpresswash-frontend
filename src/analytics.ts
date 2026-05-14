import ReactGA from "react-ga4";

const TRACKING_ID = "G-TPB13022FJ";

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};
