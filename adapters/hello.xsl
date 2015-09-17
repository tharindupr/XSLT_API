<?xml version='1.0' encoding='UTF-8'?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/hello-world">
    <html>
      <head>
      </head>
      <body>
        <h1>
          <xsl:value-of select="greeting" />
        </h1>
        <xsl:apply-templates select="greeter" />
      </body>
    </html>
  </xsl:template>
  <xsl:template match="greeter">
    <DIV>from <I><xsl:value-of select="." /></I></DIV>
  </xsl:template>
</xsl:stylesheet>