<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<xsl:stylesheet version="2.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:xdt="http://www.w3.org/2005/02/xpath-datatypes"
   xmlns:xs="http://www.w3.org/2001/XMLSchema"
   xmlns:ex="http://exslt.org/dates-and-times" extension-element-prefixes="ex">
   <xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.1//EN" doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" />
   <xsl:template match="/">
      <html lang="en" manifest="manifest.appcache">
         <head>
            <title>Artūrs Jansons | Curriculum Vitae</title>
            <meta name="description">
               <xsl:attribute name="content">description</xsl:attribute>
            </meta>
            <meta name="keywords">
               <xsl:attribute name="content">
                  <xsl:for-each select="/projects/project">
                     <xsl:value-of select="name" />
                     ,
                  </xsl:for-each>
                  xsl, project, portfolio
               </xsl:attribute>
            </meta>
            <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
            <!-- <link
               href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
               rel="stylesheet"
            />
            <link
               href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
               rel="stylesheet"
            />
            <style>
               /* src/me.min.css */
               @charset 'UTF-8';
               @font-face {
               font-family: "Alina Script";
               src: local("Alina Script"), url(f/AlinaScript.woff) format("woff"),
                  url(f/AlinaScript.ttf) format("truetype"),
                  url(f/AlinaScript.svg#AlinaScript) format("svg");
               }
               body {
               background: url(i/Riga_Piter.png) 50% 0/2762px 129px repeat-x,
                  url(i/clouds.png) 0 0/1985px 461px repeat-x,
                  url(i/clouds.png) 0 0/3970px 922px repeat-x;
               }
               body,
               html {
               margin: 0 auto;
               padding: 0;
               min-height: 100%;
               width: 100%;
               }
               .lang,
               .section,
               section {
               text-align: center;
               }
               section ul {
               text-align: left;
               }
               nav.section {
               margin: 2em auto;
               }
               nav.section a {
               display: inline-block;
               padding: 1em;
               border-radius: 50%;
               background: #fff;
               text-decoration: none;
               font-size: 120%;
               }
               nav.lang a {
               font-variant: small-caps;
               }
               nav.lang a::before {
               content: "[";
               }
               nav.lang a::after {
               content: "]";
               }
               a > img {
               border: none;
               }
               h2 {
               font-family: "Alina Script", serif, fantasy;
               }
               h1 img,
               h2 img,
               nav img,
               p img {
               height: 1em;
               vertical-align: bottom;
               }
               section {
               display: none;
               }
               section:first {
               display: block;
               }
               section:target {
               display: block;
               }
               section {
               margin: 0 auto;
               max-width: 45em;
               }
               [itemprop="photo"] {
               display: block;
               margin: 0 auto;
               padding: 0.5em;
               min-width: 5em;
               min-height: 5em;
               max-width: 100%;
               max-height: 25em;
               border: 1px dashed #888;
               border-radius: 50%;
               }
               [itemprop="jobTitle"] {
               font-weight: 700;
               }
               .network,
               [itemprop="name"] {
               font-size: xx-large;
               }
               [href^="mailto"]:before {
               content: "\f0e0\00a0";
               font-family: FontAwesome;
               }
               article {
               display: block;
               min-height: 11em;
               }
               .network {
               padding-top: 0.5em;
               }
               .sertificates img {
               -webkit-filter: grayscale(100%);
               filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
               }
            </style> -->
            <!-- <link rel="stylesheet" type="text/css" href="css/index.css" media="all" /> -->
         </head>
         <body>
            <header role="banner">
               <h1>IT consultations, webpage development</h1>
               <nav>
                  <a href="/" title="Welcome home">home</a>
                  <a href="portfolio.xml" title="My works">portfolio</a>
                  <a href="blog.xml" title="My thoughts">blog</a>
                  <a href="cv-europass.xml" title="About me">CV</a>
               </nav>
            </header>
            <main id="content" role="main">
               <section class="portfolio" id="yui-main">
                  <h2>Portfolio</h2>
                  <xsl:apply-templates select="portfolio" />
               </section>
               <section id="europass">
                  <h2>Curriculum Vitae</h2>
                  <xsl:apply-templates select="europass" />
               </section>
               <section id="blog">
                  <h2>Blog</h2>
                  <xsl:apply-templates select="blog" />
               </section>
               <center id="slotmachine">&#x1f5b1;️&#x1f5b1;️&#x1f5b1;️</center>
            </main>
            <footer>
               <p>
                  <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">
                     <img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/80x15.png" />
                  </a>
                  <a rel="in-area" title="WAI Home" href="http://www.w3.org/WAI/">
                     <img alt="Level Double-A conformance icon, W3C-WAI Web Content Accessibility Guidelines 1.0" src="img/wai_aa_wcag10_80x15.gif" />
                  </a>
               </p>
            </footer>
         </body>
      </html>
   </xsl:template>
   <xsl:template match="europass">
      <h3>
         <a href="#identification" name="identification">Personas dati</a>
      </h3>
      <div class="vcard">
         <picture>
            <img src="i/artursjansons.jpg" alt="Autoportrait" class="left" itemprop="photo" />
            <caption />
         </picture>
         <br />
         <a class="fn org url" title="Contact Information" itemprop="name">
            <xsl:attribute name="href">
               <xsl:value-of select="//workexperience[1]/employer/url" />
            </xsl:attribute>
            <span class="organization-name">
               <xsl:value-of select="//workexperience[1]/employer/name" />
            </span>
            /
            <span class="organization-unit">
               <xsl:value-of select="learnerinfo/identification/firstname" />&#160;<xsl:value-of select="/europass/learnerinfo/identification/lastname" />
            </span>
            -
            <span class="organization-position">
               <xsl:value-of select="//workexperience[1]/position/label" />
            </span>
         </a>
         <br />
         <xsl:if test="//field[@name='step1.addressInfo' and @keep='true']">
            <span class="adr">
               <xsl:if test="//field[@name='step1.application' and @keep='true']">
                  <a class="extended-address" href="#about">
                     <xsl:value-of select="learnerinfo/application/label" />
                  </a>
                  <br />
               </xsl:if>
               <xsl:if test="//field[@name='step1.addressPhysical' and @keep='true']">
                  <xsl:for-each select="learnerinfo/identification/contactinfo/address/addressLine">
                     <span class="street-address">
                        <xsl:value-of select="current()" />
                     </span>
                  </xsl:for-each>
                  <xsl:if test="string-length(learnerinfo/identification/contactinfo/address/municipality) != 0">
                     <span class="locality">
                        <xsl:value-of select="learnerinfo/identification/contactinfo/address/municipality" />
                     </span>
                  </xsl:if>
                  <xsl:if test="string-length(learnerinfo/identification/contactinfo/address/postalCode) != 0">
                     ,
                     <span class="postal-code">
                        <xsl:value-of select="learnerinfo/identification/contactinfo/address/postalCode" />
                     </span>
                  </xsl:if>
                  <xsl:if test="string-length(learnerinfo/identification/contactinfo/address/country/label) != 0">
                     ,
                     <b class="country">
                        <xsl:value-of select="learnerinfo/identification/contactinfo/address/country/label" />
                     </b>
                  </xsl:if>
                  <br />
               </xsl:if>
               <xsl:if test="//field[@name='step1.mobile' and @keep='true']">
                  <span class="mob tel">
                     Mob. tālr.:
                     <span class="value">
                        <xsl:value-of select="/europass/learnerinfo/identification/contactinfo/mobile" />
                     </span>
                  </span>
               </xsl:if>
               <xsl:if test="//field[@name='step1.telephone' and @keep='true']">
                  ,
                  <span class="tel">
                     Tālrunis:
                     <span class="value">
                        <xsl:value-of select="learnerinfo/identification/contactinfo/telephone" />
                     </span>
                  </span>
               </xsl:if>
               <xsl:if test="//field[@name='step1.fax' and @keep='true']">
                  ,
                  <span class="fax tel">
                     Fakss:
                     <span class="value">
                        <xsl:value-of select="learnerinfo/identification/contactinfo/fax" />
                     </span>
                  </span>
               </xsl:if>
               <br />
               <xsl:if test="//field[@name='step1.email' and @keep='true']">
                  <span class="mail">
                     E-pasts:
                     <a>
                        <xsl:attribute name="href">
                           mailto:
                           <xsl:value-of select="/europass/learnerinfo/identification/contactinfo/email" />
                        </xsl:attribute>
                        <span class="value">
                           <xsl:value-of select="/europass/learnerinfo/identification/contactinfo/email" />
                        </span>
                     </a>
                  </span>
               </xsl:if>
               <br />
               <xsl:if test="//field[@name='step1.gender' and @keep='true']">
                  <span class="grender">
                     <span class="value">
                        <xsl:if test="learnerinfo/identification/demographics/gender='M'">
                           <xsl:text>Vīrietis</xsl:text>
                        </xsl:if>
                        <xsl:if test="learnerinfo/identification/demographics/gender='F'">
                           <xsl:text>Sieviete</xsl:text>
                        </xsl:if>
                     </span>
                  </span>
               </xsl:if>
               <xsl:if test="//field[@name='step1.birthDate' and @keep='true']">
                  <span class="age">
                     <!-- <xsl:value-of select="substring(/europass/learnerinfo/identification/demographics/birthdate, 9, 2)"/>.<xsl:value-of select="substring(/europass/learnerinfo/identification/demographics/birthdate, 6, 2)"/>.<xsl:value-of select="substring(/europass/learnerinfo/identification/demographics/birthdate, 1, 4)"/> -->
                     <span class="value">
                        (<xsl:value-of select="substring(/europass/learnerinfo/docinfo/issuedate, 1, 4)-substring(/europass/learnerinfo/identification/demographics/birthdate, 1, 4)" />)
                     </span>
                  </span>
               </xsl:if>
               <xsl:if test="//field[@name='step1.nationality' and @keep='true']">
                  <span class="nationality">
                     <xsl:for-each select="learnerinfo/identification/demographics/nationality/label">
                        <xsl:if test="position() != 1">,</xsl:if>
                        ,
                        <span class="value">
                           <xsl:value-of select="current()" />
                        </span>
                     </xsl:for-each>
                  </span>
               </xsl:if>
               <xsl:if test="//field[@name='step3List[0].activities' and @keep='true']">
                  <p class="activities">
                     <xsl:value-of select="//workexperience[1]/activities" />
                  </p>
               </xsl:if>
            </span>
         </xsl:if>
      </div>
      <xsl:if test="//field[@name='step3List' and @keep='true']">
         <h3>
            <a href="#workexperience" name="workexperience">Darba pieredze</a>
         </h3>
         <table>
            <xsl:for-each select="//workexperiencelist/workexperience">
               <xsl:sort select="translate(period/from/year,'-','')" order="descending" />
               <tr>
                  <td class="first">Laika periods</td>
                  <td>
                     <xsl:value-of select="translate(period/from/day,'-','')" />
                     <xsl:if test="string-length(period/from/day) != 0">.</xsl:if>
                     <xsl:value-of select="translate(period/from/month,'-','')" />
                     <xsl:if test="string-length(period/from/month) != 0">.</xsl:if>
                     <xsl:value-of select="translate(period/from/year,'-','')" />
                     <xsl:if test="string-length(period/to/day) != 0 or string-length(period/to/month) != 0 or string-length(period/to/year) != 0">-</xsl:if>
                     <xsl:value-of select="translate(period/to/day,'-','')" />
                     <xsl:if test="string-length(period/to/day) != 0">.</xsl:if>
                     <xsl:value-of select="translate(period/to/month,'-','')" />
                     <xsl:if test="string-length(period/to/month) != 0">.</xsl:if>
                     <xsl:value-of select="translate(period/to/year,'-','')" />
                  </td>
               </tr>
               <xsl:variable name="indexedStep3">
                  <xsl:value-of select="concat('step3List[', position()-1, ']')" />
               </xsl:variable>
               <xsl:if test="//field[@name=concat($indexedStep3,'.position') and @keep='true']">
                  <tr>
                     <td class="first">Profesija vai ieņemamais amats</td>
                     <td>
                        <xsl:value-of select="position/label" />
                     </td>
                  </tr>
               </xsl:if>
               <xsl:if test="//field[@name=concat($indexedStep3,'.activities') and @keep='true']">
                  <tr>
                     <td class="first">Galvenie pienākumi</td>
                     <td>
                        <xsl:value-of select="activities" />
                     </td>
                  </tr>
               </xsl:if>
               <xsl:if test="//field[@name=concat($indexedStep3,'.company.name') and @keep='true']">
                  <tr>
                     <td class="first">Darba vietas nosaukums</td>
                     <td>
                        <xsl:value-of select="employer/name" />
                        <xsl:if test="//field[@name=concat($indexedStep3,'.company.addressInfo') and @keep='true']">
                           <xsl:for-each select="employer/address/addressLine">
                              <xsl:value-of select="current()" />
                           </xsl:for-each>
                           <xsl:if test="string-length(employer/address/postalCode) != 0">
                              <xsl:value-of select="employer/address/postalCode" />
                           </xsl:if>
                            (
                           <xsl:value-of select="employer/address/municipality" />
                           ,
                           <xsl:if test=" string-length(employer/address/country/label) != 0">
                              <xsl:value-of select="employer/address/country/label" />
                           </xsl:if>
                        </xsl:if>
                        )
                     </td>
                  </tr>
               </xsl:if>
               <xsl:if test="//field[@name=concat($indexedStep3,'.company.sector.label') and @keep='true']">
                  <tr>
                     <td class="first">Nozare</td>
                     <td>
                        <xsl:value-of select="employer/sector/label" />
                     </td>
                  </tr>
               </xsl:if>
            </xsl:for-each>
         </table>
      </xsl:if>
      <xsl:if test="//field[@name='step4List' and @keep='true']">
         <h3>
            <a href="#education" name="education">Izglītība</a>
         </h3>
         <table>
            <xsl:for-each select="//educationlist/education">
               <xsl:sort select="translate(period/from/year,'-','')" order="descending" />
               <tr>
                  <td class="first">Laika periods</td>
                  <td>
                     <xsl:value-of select="translate(period/from/day,'-','')" />
                     <xsl:if test="string-length(period/from/day) != 0">.</xsl:if>
                     <xsl:value-of select="translate(period/from/month,'-','')" />
                     <xsl:if test="string-length(period/from/month) != 0">.</xsl:if>
                     <xsl:value-of select="translate(period/from/year,'-','')" />
                     <xsl:if test="string-length(period/to/day) != 0 or string-length(period/to/month) != 0 or string-length(period/to/year) != 0">-</xsl:if>
                     <xsl:value-of select="translate(period/to/day,'-','')" />
                     <xsl:if test="string-length(period/to/day) != 0">.</xsl:if>
                     <xsl:value-of select="translate(period/to/month,'-','')" />
                     <xsl:if test="string-length(period/to/month) != 0">.</xsl:if>
                     <xsl:value-of select="translate(period/to/year,'-','')" />
                  </td>
               </tr>
               <xsl:variable name="indexedStep4">
                  <xsl:value-of select="concat('step4List[', position()-1, ']')" />
               </xsl:variable>
               <xsl:if test="//field[@name=concat($indexedStep4,'.title') and @keep='true']">
                  <tr>
                     <td class="first">Piešķirtā kvalifikācija</td>
                     <td>
                        <xsl:value-of select="title" />
                     </td>
                  </tr>
               </xsl:if>
               <xsl:if test="//field[@name=concat($indexedStep4,'.skills') and @keep='true']">
                  <tr>
                     <td class="first">Galvenie mācību priekšmeti / iegūtās profesionālās prasmes</td>
                     <td>
                        <xsl:value-of select="skills" />
                     </td>
                  </tr>
               </xsl:if>
               <xsl:if test="//field[@name=concat($indexedStep4,'.educationalOrg.name') and @keep='true']">
                  <tr>
                     <td class="first">Izglītības iestādes nosaukums</td>
                     <td>
                        <xsl:value-of select="organisation/name" />
                        <xsl:if test="string-length(organisation/type) != 0">
                           (
                           <xsl:value-of select="organisation/type" />
                        </xsl:if>
                        <xsl:if test="//field[@name=concat($indexedStep4,'.educationalOrg.addressInfo') and @keep='true']">
                           <xsl:for-each select="organisation/address/addressLine">
                              <xsl:value-of select="current()" />
                              ,
                           </xsl:for-each>
                           <xsl:if test="string-length(organisation/address/postalCode) != 0">
                              <xsl:value-of select="organisation/address/postalCode" />
                           </xsl:if>
                           <xsl:value-of select="organisation/address/municipality" />
                           <xsl:if test="string-length(organisation/address/country/label) != 0">
                              ,
                              <xsl:value-of select="organisation/address/country/label" />
                           </xsl:if>
                           )
                        </xsl:if>
                     </td>
                  </tr>
               </xsl:if>
               <xsl:if test="//field[@name=concat($indexedStep4,'.level.label') and @keep='true']">
                  <tr>
                     <td class="first">Līmenis nacionālajā vai starptautiskajā klasifikācijas sistēmā</td>
                     <td>
                        <xsl:value-of select="level/label" />
                     </td>
                  </tr>
               </xsl:if>
            </xsl:for-each>
         </table>
      </xsl:if>
      <xsl:if test="//field[@name='step5' and @keep='true']">
         <h2>
            <a href="#skilllist" name="skilllist">Prasmes</a>
         </h2>
         <table id="languages">
            <xsl:if test="//field[@name='step5.motherLanguages' and @keep='true']">
               <tr>
                  <td class="first">Dzimtā valoda</td>
                  <td>
                     <xsl:value-of select="/europass/languagelist/language[@type='mother']/label" />
                  </td>
               </tr>
            </xsl:if>
            <xsl:if test="//field[@name='step5.foreignLanguageList' and @keep='true']">
               <tr>
                  <td rowspan="2" class="first">Citas valodas</td>
                  <th colspan="4">Sapratne</th>
                  <th colspan="4">Runāšana</th>
                  <th rowspan="2" colspan="2">Rakstīšana</th>
               </tr>
               <tr>
                  <th colspan="2">Klausīšanās</th>
                  <th colspan="2">Lasīšana</th>
                  <th colspan="2">Dialogs</th>
                  <th colspan="2">Monologs</th>
               </tr>
               <xsl:for-each select="/europass/languagelist/language[@type='foreign']">
                  <xsl:variable name="indexedLang">
                     <xsl:value-of select="concat('step5.foreignLanguageList[', position()-1, ']')" />
                  </xsl:variable>
                  <xsl:if test="//field[@name=$indexedLang and @keep='true']">
                     <tr>
                        <td>
                           <xsl:value-of select="label" />
                        </td>
                        <td class="indexed">
                           <xsl:value-of select="level/listening" />
                        </td>
                        <td>
                           <xsl:if test="level/listening='a1'">Pamatlīmenis</xsl:if>
                           <xsl:if test="level/listening='b1'">Vidējais līmenis</xsl:if>
                           <xsl:if test="level/listening='c1'">Augstākais līmenis</xsl:if>
                           <xsl:if test="level/listening='a2'">Pamatlīmenis</xsl:if>
                           <xsl:if test="level/listening='b2'">Vidējais līmenis</xsl:if>
                           <xsl:if test="level/listening='c2'">Augstākais līmenis</xsl:if>
                        </td>
                        <td class="indexed">
                           <xsl:value-of select="level/reading" />
                        </td>
                        <td>
                           <xsl:if test="level/reading='a1'">Pamatlīmenis</xsl:if>
                           <xsl:if test="level/reading='b1'">Vidējais līmenis</xsl:if>
                           <xsl:if test="level/reading='c1'">Augstākais līmenis</xsl:if>
                           <xsl:if test="level/reading='a2'">Pamatlīmenis</xsl:if>
                           <xsl:if test="level/reading='b2'">Vidējais līmenis</xsl:if>
                           <xsl:if test="level/reading='c2'">Augstākais līmenis</xsl:if>
                        </td>
                        <td class="indexed">
                           <xsl:value-of select="level/spokeninteraction" />
                        </td>
                        <td>
                           <xsl:if test="level/spokeninteraction='a1'">Pamatlīmenis</xsl:if>
                           <xsl:if test="level/spokeninteraction='b1'">Vidējais līmenis</xsl:if>
                           <xsl:if test="level/spokeninteraction='c1'">Augstākais līmenis</xsl:if>
                           <xsl:if test="level/spokeninteraction='a2'">Pamatlīmenis</xsl:if>
                           <xsl:if test="level/spokeninteraction='b2'">Vidējais līmenis</xsl:if>
                           <xsl:if test="level/spokeninteraction='c2'">Augstākais līmenis</xsl:if>
                        </td>
                        <td class="indexed">
                           <xsl:value-of select="level/spokenproduction" />
                        </td>
                        <td>
                           <xsl:if test="level/spokenproduction='a1'">Pamatlīmenis</xsl:if>
                           <xsl:if test="level/spokenproduction='b1'">Vidējais līmenis</xsl:if>
                           <xsl:if test="level/spokenproduction='c1'">Augstākais līmenis</xsl:if>
                           <xsl:if test="level/spokenproduction='a2'">Pamatlīmenis</xsl:if>
                           <xsl:if test="level/spokenproduction='b2'">Vidējais līmenis</xsl:if>
                           <xsl:if test="level/spokenproduction='c2'">Augstākais līmenis</xsl:if>
                        </td>
                        <td class="indexed">
                           <xsl:value-of select="level/writing" />
                        </td>
                        <td>
                           <xsl:if test="level/writing='a1'">Pamatlīmenis</xsl:if>
                           <xsl:if test="level/writing='b1'">Vidējais līmenis</xsl:if>
                           <xsl:if test="level/writing='c1'">Augstākais līmenis</xsl:if>
                           <xsl:if test="level/writing='a2'">Pamatlīmenis</xsl:if>
                           <xsl:if test="level/writing='b2'">Vidējais līmenis</xsl:if>
                           <xsl:if test="level/writing='c2'">Augstākais līmenis</xsl:if>
                        </td>
                     </tr>
                  </xsl:if>
               </xsl:for-each>
            </xsl:if>
            <xsl:if test="//field[@name='step6.socialSkills' and @keep='true']">
               <tr>
                  <td class="first">Sociālās prasmes</td>
                  <td colspan="10">
                     <xsl:value-of select="/europass/skilllist/skill[@type='social']" />
                  </td>
               </tr>
            </xsl:if>
            <xsl:if test="//field[@name='step6.organisationalSkills' and @keep='true']">
               <tr>
                  <td class="first">Organizatoriskas prasmes</td>
                  <td colspan="10">
                     <xsl:value-of select="/europass/skilllist/skill[@type='organisational']" />
                  </td>
               </tr>
            </xsl:if>
            <xsl:if test="//field[@name='step6.technicalSkills' and @keep='true']">
               <tr>
                  <td>Tehniskas prasmes</td>
                  <td colspan="10">
                     <xsl:value-of select="/europass/skilllist/skill[@type='technical']" />
                  </td>
               </tr>
            </xsl:if>
            <xsl:if test="//field[@name='step6.computerSkills' and @keep='true']">
               <tr>
                  <td class="first">Datora lietošanas prasmes</td>
                  <td colspan="10">
                     <xsl:value-of select="/europass/skilllist/skill[@type='computer']" />
                  </td>
               </tr>
            </xsl:if>
            <xsl:if test="//field[@name='step6.artisticSkills' and @keep='true']">
               <tr>
                  <td class="first">Mākslinieciskas prasmes</td>
                  <td colspan="10">
                     <xsl:value-of select="/europass/skilllist/skill[@type='artistic']" />
                  </td>
               </tr>
            </xsl:if>
            <xsl:if test="//field[@name='step6.otherSkills' and @keep='true']">
               <tr>
                  <td class="first">Citas prasmes</td>
                  <td colspan="10">
                     <xsl:value-of select="/europass/skilllist/skill[@type='other']" />
                  </td>
               </tr>
            </xsl:if>
            <xsl:if test="//field[@name='step6.drivingLicences' and @keep='true']">
               <tr>
                  <td class="first">Vadītāja apliecība</td>
                  <td colspan="10">
                     <xsl:for-each select="/europass/skilllist/structured-skill[@type='driving']/drivinglicence">
                        <xsl:if test="position() != 1">,</xsl:if>
                        <b>
                           <xsl:value-of select="current()" />
                        </b>
                     </xsl:for-each>
                     Kategorija
                  </td>
               </tr>
            </xsl:if>
            <xsl:if test="//field[@name='step7.additionalInfo' and @keep='true']">
               <tr>
                  <td class="first">Papildu informācija</td>
                  <td colspan="10">
                     <xsl:value-of select="/europass/misclist/misc[@type='additional']" />
                  </td>
               </tr>
            </xsl:if>
            <xsl:if test="//field[@name='step7.annexes' and @keep='true']">
               <tr>
                  <td class="first">Pielikumi</td>
                  <td colSpan="10">
                     <xsl:value-of select="europass:learnerinfo/misclist/misc[@type='annexes']" />
                  </td>
               </tr>
            </xsl:if>
         </table>
         <br />
      </xsl:if>
      <xsl:if test="//field[@name='grid' and @keep='true']">
         <table>
            <tr>
               <th colspan="6" class="title">European levels - Self Assessment Grid</th>
            </tr>
            <tr class="level">
               <th>A1</th>
               <td>I can understand familiar words and very basic phrases concerning myself, my family and immediate concrete surroundings when people speak slowly and clearly.</td>
               <td>I can understand familiar names, words and very simple sentences, for example on notices and posters or in catalogues.</td>
               <td>I can interact in a simple way provided the other person is prepared to repeat or rephrase things at a slower rate of speech and help me formulate what I'm trying to say. I can ask and answer simple questions in areas of immediate need or on very familiar topics.</td>
               <td>I can use simple phrases and sentences to describe where I live and people I know.</td>
               <td>I can write a short, simple postcard, for example sending holiday greetings. I can fill in forms with personal details, for example entering my name, nationality and address on a hotel registration form.</td>
            </tr>
            <tr class="level">
               <th>A2</th>
               <td>I can understand phrases and the highest frequency vocabulary related to areas of most immediate personal relevance (e.g. very basic personal and family information, shopping, local area, employment). I can catch the main point in short, clear, simple messages and announcements.</td>
               <td>I can read very short, simple texts. I can find specific, predictable information in simple everyday material such as advertisements, prospectuses, menus and timetables and I can understand short simple personal letters.</td>
               <td>I can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar topics and activities. I can handle very short social exchanges, even though I can't usually understand enough to keep the conversation going myself.</td>
               <td>I can use a series of phrases and sentences to describe in simple terms my family and other people, living conditions, my educational background and my present or  most recent job.</td>
               <td>I can write short, simple notes and messages. I can write a very simple personal letter, for example thanking someone for something.</td>
            </tr>
            <tr class="level">
               <th>B1</th>
               <td>I can understand the main points of clear standard speech on familiar matters regularly encountered in work, school, leisure, etc. I can understand the main point of many radio or TV programmes on current affairs or topics of personal or professional interest when the delivery is relatively slow and clear.</td>
               <td>I can understand texts that consist mainly of high frequency everyday or job-related language. I can understand the description of events, feelings and wishes in personal letters.</td>
               <td>I can deal with most situations likely to arise whilst travelling in an area where the language is spoken. I can enter unprepared into conversation on topics that are familiar, of personal interest or pertinent to everyday life (e.g. family, hobbies, work, travel and current events).</td>
               <td>I can connect phrases in a simple way in order to describe experiences and events, my dreams, hopes and ambitions. I can briefly give reasons and explanations for opinions and plans. I can narrate a story or relate the plot of a book or film and describe my reactions.</td>
               <td>I can write simple connected text on topics which are familiar or of personal interest. I can write personal letters describing experiences and impressions.</td>
            </tr>
            <tr class="level">
               <th>B2</th>
               <td>I can understand extended speech and lectures and follow even complex lines of argument provided the topic is reasonably familiar. I can understand most TV news and current affairs programmes. I can understand the majority of films in standard dialect.</td>
               <td>I can read articles and reports concerned with contemporary problems in which the writers adopt particular attitudes or viewpoints. I can understand contemporary literary prose.</td>
               <td>I can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible. I can take an active part in discussion in familiar contexts, accounting for  and sustaining my views.</td>
               <td>I can present clear, detailed descriptions on a wide range of subjects related to my field of interest. I can explain a viewpoint on a topical issue giving the advantages and disadvantages of various options.</td>
               <td>I can write clear, detailed text on a wide range of subjects related to my interests. I can write an essay or report, passing on information or giving reasons in support of or against a particular point of view. I can write letters highlighting the personal significance of events and experiences.</td>
            </tr>
            <tr class="level">
               <th>C1</th>
               <td>I can understand extended speech even when it is not clearly structured and when relationships are only implied and not signalled explicitly. I can understand television programmes and films without too much effort.</td>
               <td>I can understand long and complex factual and literary texts, appreciating distinctions of style. I can understand specialised articles and longer technical instructions, even when they do not relate to my field.</td>
               <td>I can express myself fluently and spontaneously without much obvious searching for expressions. I can use language flexibly and effectively for social and professional purposes.
										I can formulate ideas and opinions with precision and relate my contribution skilfully to those of other speakers.</td>
               <td>I can present clear, detailed descriptions of complex subjects integrating sub-themes, developing particular points and rounding off with an appropriate conclusion.</td>
               <td>I can express myself in clear, well-structured text, expressing points of view at some length. I can write about complex subjects in a letter, an essay or a report, underlining what I consider to be the salient issues. I can select a style appropriate to the reader in mind.</td>
            </tr>
            <tr class="level">
               <th>C2</th>
               <td>I have no difficulty in understanding any kind of spoken language, whether live or broadcast, even when delivered at fast native speed, provided. I have some time to get familiar with the accent.</td>
               <td>I can read with ease virtually all forms   of the written language, including abstract, structurally or linguistically complex texts such as manuals, specialised articles and literary works.</td>
               <td>I can take part effortlessly in any conversation or discussion and have a good familiarity with idiomatic expressions and colloquialisms. I can express myself fluently and convey finer shades of meaning precisely. If I do have a problem I can backtrack and restructure around the difficulty so smoothly that other people are hardly aware of it.</td>
               <td>I can present a clear, smoothly-flowing description or argument in a style appropriate to the context and with an effective logical structure which helps the recipient to notice and remember significant points.</td>
               <td>I can write clear, smoothly-flowing  text in an appropriate style. I can write complex letters, reports or articles which present a case with an effective logical structure which helps the recipient to notice and remember significant points. I can write summaries and reviews of professional or literary works.</td>
            </tr>
         </table>
      </xsl:if>
   </xsl:template>
   <xsl:template match="project">
      <article>
         <xsl:attribute name="id">
            <xsl:value-of select="name" />
         </xsl:attribute>
         <h3>
            <xsl:value-of select="client" />
         </h3>
					<div>
						<xsl:for-each select="images/picture">
                     <a rel="type:jpg" class="zoom">
								<picture>
									<xsl:if test="position()=1">
										<xsl:attribute name="class">zoom active</xsl:attribute>
									</xsl:if>
									<xsl:attribute name="id">
										<xsl:value-of select="@src" />
									</xsl:attribute>
									<xsl:attribute name="href">
										<xsl:value-of select="concat('images/', @src, '.jpg')" />
									</xsl:attribute>
									<img>
										<xsl:attribute name="alt">
												<xsl:value-of select="@src" />
										</xsl:attribute>
										<xsl:attribute name="title">
												<xsl:value-of select="@src" />
										</xsl:attribute>
										<xsl:attribute name="src">
												<xsl:value-of select="concat('images/', @src, '-thumb.jpg')" />
										</xsl:attribute>
									</img>
								</picture>
							</a>
						</xsl:for-each>
					</div>
					<p>
            <a rel="more">
               <xsl:attribute name="href">
                  <xsl:value-of select="url" />
               </xsl:attribute>
               <xsl:value-of select="url" />
            </a>
            -
            <xsl:value-of select="description[@lang = 'en']" disable-output-escaping="yes" />
         </p>
         <p>
            <i>
               Technics:
               <xsl:value-of select="category" />
               | Address:
               <a rel="more">
                  <xsl:attribute name="href">
                     <xsl:value-of select="url" />
                  </xsl:attribute>
                  <xsl:value-of select="url" />
               </a>
            </i>
         </p>
      </article>
   </xsl:template>
</xsl:stylesheet>