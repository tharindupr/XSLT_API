import lxml.etree as ET



f=open('abc.html',"w")
dom = ET.parse("1.xml")
xslt = ET.parse("1.xsl")
transform = ET.XSLT(xslt)
newdom = transform(dom)
print(ET.tostring(newdom, pretty_print=True))
f.write(ET.tostring(newdom, pretty_print=True))

f.close()
