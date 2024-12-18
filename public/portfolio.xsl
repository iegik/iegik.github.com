<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<xsl:stylesheet version="2.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:xdt="http://www.w3.org/2005/02/xpath-datatypes"
   xmlns:xs="http://www.w3.org/2001/XMLSchema"
   xmlns:ex="http://exslt.org/dates-and-times" extension-element-prefixes="ex">
   <xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.1//EN" doctype-system="https://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" />
   <xsl:template match="/">
      <html lang="en" manifest="manifest.appcache">
         <head>
            <title>Art&#363;rs Jansons | Portfolio</title>
            <meta name="description">
               <xsl:attribute name="content">Mobile / Web Developer &amp; JavaScript Consultant</xsl:attribute>
            </meta>
            <meta name="keywords">
               <xsl:attribute name="content">
                  <xsl:for-each select="/projects/project">
                     <xsl:sort select="year" order="descending" />
                     <xsl:value-of select="name" />
                     ,
                  </xsl:for-each>
                  xsl, project, portfolio
               </xsl:attribute>
            </meta>
            <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
            <link rel="stylesheet" href="/1990/styles.min.css" id="/1990/styles.min.css" />
         </head>
         <body>
            <font face="'SFMono-Regular', 'SF Mono', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace" size="3">
               <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
                  <tr align="center">
                     <td valign="top">
                        1990 |
                        <a href="/next/">BETA</a> |
                        <a id="toggleDosStyle" href="#exit" bgcolor="red">DOS</a>
                        <hr/>
                        <main>
                           <xsl:apply-templates select="portfolio/project">
                              <xsl:sort select="year" order="descending" />
                           </xsl:apply-templates>
                        </main>
                     </td>
                  </tr>
                  <tr>
                     <td valign="bottom" align="center">
                        <hr/>
                        <table border="0" cellpadding="8" cellspacing="0" width="100%">
                           <tr>
                              <td align="center">
                                 <a rel="noopener noreferrer" href="https://linkedin.com/in/iegik" title="LinkedIn">LinkedIn</a> | <a  rel="noopener noreferrer" href="https://github.com/iegik" title="GitHub">GitHub</a> | <a  rel="noopener noreferrer" href="https://profile.codersrank.io/user/iegik" title="CodersRank">CodersRank</a> | <a  rel="noopener noreferrer" href="https://codepen.io/iegik/" title="CodePen">CodePen</a> | <a  rel="noopener noreferrer" href="https://jsfiddle.net/user/iegik" title="JSFiddle">JSFiddle</a> | <a  rel="noopener noreferrer" href="https://stackoverflow.com/users/771471/iegik" title="StackOverflow">StackOverflow</a>
                                 <br/>
                                 <marquee>
                                    <font color="gray">© 2024 Art&#363;rs Jansons | All rights reserved</font>
                                 </marquee>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
              </table>
            </font>
         </body>
      </html>
   </xsl:template>
   <xsl:template match="*">
      <article>
         <xsl:attribute name="id">
            <xsl:value-of select="name" />
         </xsl:attribute>
         <xsl:variable name="year" select="year"/>
         <xsl:variable name="client" select="client"/>
         <xsl:variable name="name" select="name"/>
         <h3>
            <xsl:value-of select="client" />
         </h3>
            <xsl:for-each select="images/picture">
               <a rel="type:jpg" class="zoom">
                  <xsl:attribute name="href">
                     <xsl:value-of select="concat('/images/portfolio/', $year, '/', @src, '.png')" />
                  </xsl:attribute>
                  <picture>
                     <xsl:if test="position()=1">
                        <xsl:attribute name="class">zoom active</xsl:attribute>
                     </xsl:if>
                     <xsl:attribute name="id">
                        <xsl:value-of select="@src" />
                     </xsl:attribute>
                     <source type="image/webp">
                        <xsl:attribute name="srcset">
                              <xsl:value-of select="concat('/images/portfolio/', $year, '/', @src, '-thumb.webp', ' 991w')" />
                        </xsl:attribute>
                     </source>
                     <source type="image/jpeg">
                        <xsl:attribute name="srcset">
                              <xsl:value-of select="concat('/images/portfolio/', $year, '/', @src, '-thumb.jpg', ' 991w')" />
                        </xsl:attribute>
                     </source>
                     <source type="image/png">
                        <xsl:attribute name="srcset">
                              <xsl:value-of select="concat('/images/portfolio/', $year, '/', @src, '-thumb.png', ' 991w')" />
                        </xsl:attribute>
                     </source>
                     <img width="128" height="128">
                        <xsl:attribute name="alt">
                              <xsl:value-of select="@src" />
                        </xsl:attribute>
                        <xsl:attribute name="title">
                              <xsl:value-of select="@src" />
                        </xsl:attribute>
                        <xsl:attribute name="src">
                              <xsl:value-of select="concat('/images/portfolio/', $year, '/', @src, '-thumb.webp')" />
                        </xsl:attribute>
                     </img>
                  </picture>
               </a>
            </xsl:for-each>
            <br/>
            <b rel="more">
               <xsl:value-of select="$client" />
            </b>
            -
            <xsl:value-of select="description[@lang = 'en']" disable-output-escaping="yes" />
         <br/>
         <i>
            Year: <xsl:value-of select="year" /><br/>
            Technics: <xsl:value-of select="category" /><br/>
            Address:
            <a rel="more">
               <xsl:attribute name="href">
                  <xsl:value-of select="url" />
               </xsl:attribute>
               <xsl:value-of select="url" />
            </a>
         </i>
      </article>
      <hr/>
   </xsl:template>
</xsl:stylesheet>