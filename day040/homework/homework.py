# hw 1

# Function 1 -funqcia hallo worlds gvibrunebs
def greet():
    return "hello world"

# Counting sheep... - ragaca lists datvlis da raodenobas gvibrunebs
def count_sheeps(sheep):
    return sheep.count(True)

# Remove String Spaces - gamotovebebs aqrobs x listshi da " " - anu gamotoveba
# xdeba es "" - gamotovebis gareshe
def no_space(x):
    return x.replace(" ", "")


# You Can't Code Under Pressure #1 - aormagebs integerebs da i-is *amravlebs 2-ze
def double_integer(i):
    return i*2

# Returning Strings - viyenebt funqcias formats, formatis shemdeg agnishnul 
# elementshi tu movaqcevt rame is 
# gamochndeba formatis win mocemul winadadebashi
def greet(name):
    return "Hello, {} how are you doing today?".format(name)

# Convert a Boolean to a String - gadaaqcevs boleans stringad
def boolean_to_string(b):
    return str(b)

# Basic Mathematical Operations kalkulatori romelic sheiqmna if, elif da elsis gamoyenebit
# tu operatori = + mashin value1 da value2 miemateba da ase midis sxva operatiebze mag "-" minusze
def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 + value2
    elif operator == "-":
        return value1 - value2
    elif operator == "*":
        return value1 * value2
    else:
        return value1 / value2


# Keep Hydrated! - itvlis ramdeni xani varjishob da mas gayofs 2ze rata daadginos ramdeniwyali unda dalio
# // am operaciis gamoyenebis dros pasuxi brundeba integerad da ara floatad
def litres(time):
    return time // 2


# Century From Year - es funqcia gamotvlis wlis mixedvit saukunes tu nashtiani gayofis dros pasuxi miigo 0 
# mashin is yofs wels 100ze da abrunebs ints vidre floats
def century(year): 
    if year % 100 == 0:
        return year // 100
    else:
        return year // 100 + 1
#  2nd variation   
def century(year): 
    return (year + 99) // 100

# Convert number to reversed array of digits slicingis gamoyenebit abrunebs lists
def digitize(n):
    starting_str = str(n)
    reversed_str = starting_str[::-1]

    res_list = []

    for i in reversed_str:
        res_list.append(int(i))

    return res_list

# Beginner - Lost Without a Map
def maps(a):
    saver=[]
    for i in a:
        saver.append(i*2)
    return saver

# Opposites Attract - nashtiani gayofisas orive elementma unda miigos gansxvavebuli pasuxi ro daiwerso true 
# tu ertidaigive pasuxi miiges falsi daiwereba
def lovefunc( flower1, flower2 ):
    if flower1 % 2 == 0 and flower2 % 2 == 1:
        return True
    elif flower1 % 2 == 1 and flower2 % 2 == 0:
        return True
    else:
        return False
    
# Sum Arrays - listis jams abrunebs
def sum_array(a):
    return sum(a)