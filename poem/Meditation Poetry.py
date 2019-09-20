with open('Meditation.txt', 'r') as file:
    text = file.read()

import random

wordlist = text.replace("\n"," ").split(" ")

seed = random.randint(0, len(wordlist)-1)
wordlist[seed:seed+1]
line1=wordlist[seed:seed+1]
print(" ".join(line1) )

seed2 = random.randint(0, len(wordlist)-1)
wordlist[seed2:seed2+5]
line2=wordlist[seed2:seed2+5]
print(" ".join(line2) )

seed3 = random.randint(0, len(wordlist)-1)
wordlist[seed3:seed3+3]
line3=wordlist[seed3:seed3+3]
print(" ".join(line3) )

seed4 = random.randint(0, len(wordlist)-1)
wordlist[seed4:seed4+2]
line2=wordlist[seed4:seed4+2]
print(" ".join(line2) )

seed5 = random.randint(0, len(wordlist)-1)
wordlist[seed5:seed5+4]
line4=wordlist[seed5:seed5+4]
print(" ".join(line4) )

print( "\n")

seed = random.randint(0, len(wordlist)-1)
wordlist[seed:seed+3]
line1=wordlist[seed:seed+3]
print(" ".join(line1) )

seed2 = random.randint(0, len(wordlist)-1)
wordlist[seed2:seed2+4]
line2=wordlist[seed2:seed2+4]
print(" ".join(line2) )

seed3 = random.randint(0, len(wordlist)-1)
wordlist[seed3:seed3+3]
line3=wordlist[seed3:seed3+3]
print(" ".join(line3) )

seed4 = random.randint(0, len(wordlist)-1)
wordlist[seed4:seed4+2]
line2=wordlist[seed4:seed4+2]
print(" ".join(line2) )


print( "\n")

seed = random.randint(0, len(wordlist)-1)
wordlist[seed:seed+3]
line1=wordlist[seed:seed+3]
print(" ".join(line1) )

seed2 = random.randint(0, len(wordlist)-1)
wordlist[seed2:seed2+5]
line2=wordlist[seed2:seed2+5]
print(" ".join(line2) )

seed3 = random.randint(0, len(wordlist)-1)
wordlist[seed3:seed3+3]
line3=wordlist[seed3:seed3+3]
print(" ".join(line3) )

seed4 = random.randint(0, len(wordlist)-1)
wordlist[seed4:seed4+2]
line2=wordlist[seed4:seed4+2]
print(" ".join(line2) )

print( "\n")

seed5 = random.randint(0, len(wordlist)-1)
wordlist[seed5:seed5+3]
line4=wordlist[seed5:seed5+3]
print(" ".join(line4) )
