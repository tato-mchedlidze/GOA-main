from turtle import *

#we paint a house

#step 1 draw a square
speed(20)
width(8)
color("maroon")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(900)
#end square

#drawing door

width(4)
begin_fill()
right(90)
forward(70)
color("green")
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

#door end

penup()
goto(200, 200)
pendown()

#roof

color("yellow")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#roof end

#window start

penup()
goto(60, 130)
pendown()

begin_fill()
width(3)
color("blue")
right(60)
forward(50)

right(90)
forward(50)

right(90)
forward(50)

right(90)
forward(50)
end_fill()

exitonclick()