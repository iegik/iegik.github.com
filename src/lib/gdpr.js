const isCached = performance.getEntriesByType("navigation")[0].transferSize === 0;

Object.defineProperty(this, 'isConsent', {
    get() {
        return localStorage.getItem('GDPR') || false;
    }
});

window.gdpr = {
  async showPopover(){
    const isConsent = await confirm(`We use cookies to enhance your experience on our website. By clicking "Ok", you agree to the use of cookies as outlined in our Privacy Policy.`);
    isConsent && localStorage.setItem('GDPR', isConsent);
  }
}

function checkConsent() {
  document.querySelector('[href="#gdpr"]').addEventListener('click', gdpr.showPopover)
  if (!isConsent && !isCached) {
    gdpr.showPopover()
  }
}

addEventListener('DOMContentLoaded', checkConsent)
