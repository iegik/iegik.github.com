function transformXML(xml, xsl) {
  const xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(xsl);

  const resultDocument = xsltProcessor.transformToFragment(xml, document);
  return resultDocument;
}

function text2xml(data) {
  return new window.DOMParser().parseFromString(data, "application/xml");
}

class MyPortfolio extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const options = {
      // headers: {
      //   'Authorization': `Bearer ${token}`
      // }
    }
    const xml = await fetch('/portfolio.xml', options).then(res => res.text()).then(text2xml);
    const xsl = await fetch('/' + (this.getAttribute('theme') || '.') + '/portfolio.xsl').then(res => res.text()).then(text2xml);

    const transformedHTML = transformXML(xml, xsl);

    this.shadowRoot.appendChild(transformedHTML);
  }
  attributeChangedCallback(attr, prev, next) {
    if (attr === 'theme') this.connectedCallback()
  }
}

customElements.define('my-portfolio', MyPortfolio);