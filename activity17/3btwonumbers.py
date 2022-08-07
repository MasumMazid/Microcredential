a=0
b=0
while a-b==0:
    print('Please enter two number that are not the same')
    a=int(input('num1: '))
    b=int(input('num2: '))
if a>b:
    c=range(b+1,a)
elif b>a:
    c=range(a+1,b)
for n in c:
    print(n)

