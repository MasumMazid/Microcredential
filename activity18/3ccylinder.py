h=int(input("please enter height"))
r=int(input("please enter radius"))

def volumeCylinder(h,r):
    b=(3.14)*h*r*r
    answer =round(b, 2)
    print("The volume with a radius 5 and height 2 is: ",answer)

volumeCylinder(h,r)
