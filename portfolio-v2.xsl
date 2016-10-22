<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
	<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Artūrs Jansons: portfolio</title>
		<meta name="description">
			<xsl:attribute name="content">Portfolio of Artūrs Jansons</xsl:attribute>
		</meta>
		<meta name="keywords">
			<xsl:attribute name="content"><xsl:for-each select="/projects/project"><xsl:value-of select="name"/>, </xsl:for-each>xsl, project, portfolio</xsl:attribute>
		</meta>
		<link rel="stylesheet" type="text/css" href="css/index.css" media="all" />
		<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.8.0r4/build/grids/grids-min.css" />
		<link rel="stylesheet" type="text/css" href="css/slideshow.css" media="all" />
		<!--[if lt IE 7]>
		<script src="/modules/ie7/IE7.js" type="text/javascript"></script>
		<![endif]-->
	</head>
	<body>
		<div id="doc">
			<div id="hd">
				<h1>Artūrs Jansons</h1>
			    <ul>
			        <li>
			            <a href="./" title="Welcome Home">home</a>
			        </li>
			        <li>
			            <a href="portfolio.xml" class="current" title="My Works">portfolio</a>
			        </li>
			        <li>
			            <a href="twitter.html" title="Twitter">twitter</a>
			        </li>
			        <li>
			            <a href="fancybox.html" title="FancyBox">fancybox</a>
			        </li>
			        <li>
			            <a href="yui-wizard.html" title="Yahoo User Interfase wizard">YUI wizard</a>
			        </li>
			        <li>
			            <a href="calc.html" title="Currency online calculator">Currency</a>
			        </li>
			        <li>
			            <a href="cv-europass.xml" title="About Me" class="hightlight">about</a>
			        </li>
			    </ul>
			</div>
			<div id="bd">
				<div class="portfolio" id="yui-main">
		<script type="text/javascript" src="js/jquery.fancybox-1.2.5.min.js"></script>
		<script type="text/javascript">
			$(document).ready(function() {
	
				$("a.zoom").fancybox({
					'padding'				: 0,
					'zoomOpacity'			: true,
					'zoomSpeedIn'			: 500,
					'zoomSpeedOut'			: 500,
					'overlayOpacity'		: 0.75,
					'frameWidth'			: 560,
					'frameHeight'			: 340,
					'hideOnContentClick'	: false
				});
			});
		</script>
					<xsl:apply-templates />
				</div>
			</div>
			<div id="ft">
			    <p>
			        <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/80x15.png" /></a>
			    </p>
			</div>
		</div>
	</body>
</html>
	</xsl:template>
	
	<xsl:template match="project">
	<div class="yui-b">
	<xsl:attribute name="id"><xsl:value-of select="name"/></xsl:attribute>
		<h2><xsl:value-of select="client"/></h2>
		<p>
			<span class="slideshow left">
				<xsl:for-each select="images/picture">
				<a rel="type:jpg" class="zoom">
					<xsl:if test="position()=1" >
						<xsl:attribute name="class">zoom active</xsl:attribute>
					</xsl:if>
					<xsl:attribute name="id"><xsl:value-of select="@src"/></xsl:attribute>
					<xsl:attribute name="href">images/<xsl:value-of select="@src"/>.jpg</xsl:attribute>
					<img>
						<xsl:attribute name="alt"><xsl:value-of select="@src"/></xsl:attribute>
						<xsl:attribute name="title"><xsl:value-of select="@src"/></xsl:attribute>
						<xsl:attribute name="src">images/<xsl:value-of select="@src"/>-thumb.jpg</xsl:attribute>
					</img>
				</a>
				</xsl:for-each>
			</span>
			<a rel="more">
				<xsl:attribute name="href"><xsl:value-of select="url"/></xsl:attribute><xsl:value-of select="url"/>
			</a> - <xsl:value-of select="description[@lang = 'en']" disable-output-escaping="yes" />
		</p>
		<p>
			<i>
				Technics: <xsl:value-of select="category"/> | Address:
				<a rel="more">
					<xsl:attribute name="href"><xsl:value-of select="url"/></xsl:attribute><xsl:value-of select="url"/>
				</a>
			</i>
		</p>
		<span class="clear">* * *</span>
	</div>
	</xsl:template>
</xsl:stylesheet>
