document.addEventListener('DOMContentLoaded', () => {
  typeof Sentry !== 'undefined' && Sentry.init({
    dsn: "https://179618f1f04d4d9dac08acc750d5736c@o171820.ingest.sentry.io/1250596",
    release: `1250596@${release}`,
    environment: "production",
  });
});