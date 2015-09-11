import xml.etree.ElementTree as ET
import sys

name=sys.argv[1:][0]
tree = ET.parse("adapters//adapter.xml")
root = tree.getroot()

f=open("adapters//"+name+".xsl",'w')
f.write("<?xml version='1.0' encoding='UTF-8'?>\n")
f.write(ET.tostring(root).replace("ns0", "xsl"))

f.close()
    
       
