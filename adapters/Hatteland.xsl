<?xml version='1.0' encoding='UTF-8'?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:output method="text" />

  <xsl:template match="/">
    Article - <xsl:value-of select="/Article/Title" />
    Authors: <xsl:apply-templates select="/Article/Authors/Author" />
  </xsl:template>

  <xsl:template match="Author">
    - <xsl:value-of select="." />
  </xsl:template>

</xsl:stylesheet>