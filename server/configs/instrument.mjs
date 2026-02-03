import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://3cd7b546730ed9231f3d2d42ca55baeb@o4510821895766016.ingest.us.sentry.io/4510821905530880",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});