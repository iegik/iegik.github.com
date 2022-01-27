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
            <title>Artūrs Jansons | Portfolio</title>
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
         </head>
         <body>
            <xsl:apply-templates select="portfolio" />
         </body>
      </html>
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