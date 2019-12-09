import markovify
import random
from weasyprint import HTML


novel = ''
chapter1 = ''
chapter2 = ''
chapter3 = ''
chapter4 = ''
chapter5 = ''
chapter6 = ''
chapter7 = ''

with open("ChristmasSongs_AChristmasStory_Mashup.txt") as f:
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
  for i in range(random.randint(6,20)):
    paragraph += str(text_model.make_sentence()) + " "
  return '<p>'+paragraph+'</p>'

for i in range(13):
    chapter1+= str(make_paragraph()) + " "
    chapter2+= str(make_paragraph()) + " "
    chapter3+= str(make_paragraph()) + " "
    chapter4+= str(make_paragraph()) + " "
    chapter5+= str(make_paragraph()) + " "
    chapter6+= str(make_paragraph()) + " "
    chapter7+= str(make_paragraph()) + " "

print(novel)

html_template = f"""
<html>
  <head>
  <title>What's in the EggNog?</title>
  </head>
  <body>
  <h1>What's in the Eggnog?</h1>
  <p style = "font-family: Baskerville Old Face; font-size:12;">
  {chapter1}
  <p> </p>
  <p> </p>
  <h2>It's all getting fuzzy</h2>
  {chapter2}
  <p> </p>
  <h2>Can I have another?</h2>
  {chapter3}
  <p> </p>
  <h2>She's been drinking too much eggnog</h2>
  {chapter4}
  <p> </p>
  <h2>I don't want a hula hoop</h2>
  {chapter5}
  <p> </p>
  <h2>Just a half a drink more</h2>
  {chapter6}
  <p> </p>
  <h2>Goodnight</h2>
  {chapter7}
  <p> </p>
  <p> </p>
  </body>
</html>
"""

# Finally, this line saves that template as a PDF using the HTML module of WeasyPrint
HTML(string=html_template).write_pdf("WhatsintheEggNog.pdf")
