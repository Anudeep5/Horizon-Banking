import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://1d8d1e1b69164e6b941869049f159fbb@o4509386379624448.ingest.us.sentry.io/4509386382114816",

    integrations: [Sentry.replayIntegration()],
    tracesSampleRate: 1,
    debug: false,
    // Session Replay
    replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
