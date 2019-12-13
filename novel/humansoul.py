import markovify
import random
from weasyprint import HTML


novel = ''
chapter1 = ''
chapter2 = ''
chapter3 = ''
chapter4 = ''
chapter5 = ''



with open("Meditation_TheMonkeysPaw_TheWayofPeace.txt") as f:
    text = f.read()

text_model = markovify.Text(text)

#Code help from Professor Whalen

def make_sentence():
  sentence =''
  for i in range():
    sentence += str(text_model.make_sentence()) + " "
  sentence +=". "
  return sentence

def make_paragraph():
  paragraph = ''
  for i in range(random.randint(6,14)):
    paragraph += str(text_model.make_sentence()) + " "
  return '<p>'+paragraph+'</p>'

for i in range(13):
    chapter1+= str(make_paragraph()) + " "
    chapter2+= str(make_paragraph()) + " "
    chapter3+= str(make_paragraph()) + " "
    chapter4+= str(make_paragraph()) + " "
    chapter5+= str(make_paragraph()) + " "
    

print(novel)

html_template = f"""
<html>
  <head>
  <title>Human Soul</title>
  </head>
  <body>
  <h1>The Human Soul</h1>
  <h2>Who am I?</h2>
  <p style = "font-family: Baskerville Old Face; font-size:12;">
  {chapter1}
  <p> </p>
  <p> </p>
  <h2>Nothing Makes Sense</h2>
  {chapter2}
  <p> </p>
  <h2>Finding Inner Strength</h2>
  {chapter3}
  <p> </p>
  <h2>Free Your Mind</h2>
  {chapter4}
  <p> </p>
  <h2>Finding Peace and Open Your Heart</h2>
  {chapter5}
  <p> </p>
  </body>
</html>
"""


# Finally, this line saves that template as a PDF using the HTML module of WeasyPrint
HTML(string=html_template).write_pdf("HumanSoul.pdf")
