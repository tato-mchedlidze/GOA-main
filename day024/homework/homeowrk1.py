import turtle

def draw_square(t, x, y, size):
    t.penup()
    t.goto(x, y)
    t.pendown()
    for _ in range(4):
        t.forward(size)
        t.right(90)

def draw_axes():
    t = turtle.Turtle()
    t.speed(0)
    t.penup()
    t.goto(-400, 0)
    t.pendown()
    t.forward(800)
    t.penup()
    t.goto(0, -400)
    t.pendown()
    t.left(90)
    t.forward(800)

def draw_diagram():
    screen = turtle.Screen()
    screen.setup(800, 800)
    screen.bgcolor("white")
    
    t = turtle.Turtle()
    t.speed(10)
    
    draw_axes()
    
    # Draw squares
    draw_square(t, -300, 300, 200)
    draw_square(t, 100, 300, 200)
    draw_square(t, -300, -100, 200)
    draw_square(t, 100, -100, 200)

    screen.exitonclick()
    
if __name__ == "__main__":
    draw_diagram()