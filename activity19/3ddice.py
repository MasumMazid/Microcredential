import random

def diceroll():
    x=int(input("How many times do you want to roll? "))
    y=x+1
    for i in range(1,y,1):
        list1 = [1, 2, 3, 4, 5, 6]
        print('Dice Roll number: ',i," = ",random.choice(list1))
diceroll()
  

