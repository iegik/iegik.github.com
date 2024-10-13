<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<xsl:stylesheet version="2.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:xdt="http://www.w3.org/2005/02/xpath-datatypes"
   xmlns:xs="http://www.w3.org/2001/XMLSchema"
   xmlns:ex="http://exslt.org/dates-and-times" extension-element-prefixes="ex">
   <xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.1//EN" doctype-system="https://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" />
   <xsl:template match="/">
      <link rel="stylesheet" href="/1990/styles.min.css" id="/1990/styles.min.css" />
      <xsl:apply-templates select="portfolio/project">
         <xsl:sort select="year" order="descending" />
      </xsl:apply-templates>
   </xsl:template>
   <xsl:template match="*">
      <!--
      <table>
         <tr>
            <td>
               <center>
                  <pre><font size=1>{ascii}</font></pre>
               </center>
               {description}<br/>
               <a rel="noopener noreferrer" href="{href}" title="{title}">{title}</a> |
               <a rel="noopener noreferrer" href="{href}" title="{title}">{title}</a>
               <em><font color="gray">${comment}</font></em><br/>
      -->
      <xsl:attribute name="id">
         <xsl:value-of select="name" />
      </xsl:attribute>
      <xsl:variable name="year" select="year"/>
      <xsl:variable name="client" select="client"/>
      <xsl:variable name="name" select="name"/>
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
      <center>
         <xsl:value-of select="client" />
      </center>
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
      <hr/>
   </xsl:template>
</xsl:stylesheet>