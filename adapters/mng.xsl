<?xml version='1.0' encoding='UTF-8'?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

	<xsl:template match="teacher">
		<p><u><xsl:value-of select="." /></u></p>
	</xsl:template>
	
	<xsl:template match="student">
		<p><b><xsl:value-of select="." /></b></p>
	</xsl:template>
	<xsl:template match="/">
		<html>
		<body>
		<xsl:apply-templates />
		</body>
		</html>
	</xsl:template>
	
</xsl:stylesheet>