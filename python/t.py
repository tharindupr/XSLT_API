import sys

f=open('test.txt','w')
# simple argument echo script

f.write(sys.argv[1:][0])


  


f.close()
