import lxml.etree as ET
import sys



adapter=sys.argv[1:][1]
data=sys.argv[1:][0]

f=open('abc.html',"w")
dom = ET.parse("adapters//temp.xml")
xslt = ET.parse("adapters//"+adapter)
transform = ET.XSLT(xslt)
newdom = transform(dom)
print(ET.tostring(newdom, pretty_print=True))
f.write(ET.tostring(newdom, pretty_print=True))

f.close()
