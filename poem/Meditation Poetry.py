with open('Meditation.txt', 'r') as file:
    text = file.read()

import random

wordlist = text.replace("\n"," ").split(" ")

print( "\n")
seed = random.randint(0, len(wordlist)-1)
wordlist[seed:seed+80]
line1=wordlist[seed:seed+3]
print(" ".join(line1) )

seed2 = random.randint(0, len(wordlist)-1)
wordlist[seed2:seed2+66]
line2=wordlist[seed2:seed2+6]
print(" ".join(line2) )

seed3 = random.randint(0, len(wordlist)-1)
wordlist[seed3:seed3+99]
line3=wordlist[seed3:seed3+5]
print(" ".join(line3) )

seed4 = random.randint(0, len(wordlist)-1)
wordlist[seed4:seed4+102]
line4=wordlist[seed4:seed4+6]
print(" ".join(line4) )

seed5 = random.randint(0, len(wordlist)-1)
wordlist[seed5:seed5+77]
line5=wordlist[seed5:seed5+5]
print(" ".join(line5) )

print( "\n")

seed = random.randint(0, len(wordlist)-1)
wordlist[seed:seed+80]
line1=wordlist[seed:seed+5]
print(" ".join(line1) )

seed2 = random.randint(0, len(wordlist)-1)
wordlist[seed2:seed2+66]
line2=wordlist[seed2:seed2+5]
print(" ".join(line2) )

seed3 = random.randint(0, len(wordlist)-1)
wordlist[seed3:seed3+99]
line3=wordlist[seed3:seed3+5]
print(" ".join(line3) )

seed4 = random.randint(0, len(wordlist)-1)
wordlist[seed4:seed4+102]
line4=wordlist[seed4:seed4+5]
print(" ".join(line4) )

print( "\n")

seed = random.randint(0, len(wordlist)-1)
wordlist[seed:seed+80]
line1=wordlist[seed:seed+6]
print(" ".join(line1) )

seed2 = random.randint(0, len(wordlist)-1)
wordlist[seed2:seed2+66]
line2=wordlist[seed2:seed2+5]
print(" ".join(line2) )

seed3 = random.randint(0, len(wordlist)-1)
wordlist[seed3:seed3+99]
line3=wordlist[seed3:seed3+6]
print(" ".join(line3) )

seed4 = random.randint(0, len(wordlist)-1)
wordlist[seed4:seed4+102]
line4=wordlist[seed4:seed4+5]
print(" ".join(line4) )

print( "\n")

seed5 = random.randint(0, len(wordlist)-1)
wordlist[seed5:seed5+77]
line5=wordlist[seed5:seed5+3]
print(" ".join(line5) )
