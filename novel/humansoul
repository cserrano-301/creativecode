# first, install a python package. This one is called "markovify"
# https://github.com/jsvine/markovify

!pip install markovify
!pip install weasyprint

import markovify
import random
from weasyprint import HTML

novel = ''
with open("Meditation_TheMonkeysPaw_TheWayofPeace.txt") as f:
    text = f.read()

text_model = markovify.Text(text)



for i in range(4667):
    novel+= str(text_model.make_sentence()) + " "
    
    
print(novel)

html_template = f"""
<html>
  <head>
  <title>HumanSoul</title>
  </style>
  </head>
  <body>
  <p style = "font-family: Baskerville Old Face; font-size:12;">
  </p>
  <body>
  {novel}
  </body>
</html>
"""

# Finally, this line saves that template as a PDF using the HTML module of WeasyPrint
HTML(string=html_template).write_pdf("HumanSoul.pdf")
