(options) => {window.sentryOnLoad = () => {
  typeof Sentry !== 'undefined' && Sentry.init(options);
}}