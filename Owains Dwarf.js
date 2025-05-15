
const width = 125;
const height = 125;

setDocDimensions(width, height);
const Dwarf= new bt.Turtle()
Dwarf.up()
Dwarf.forward(10)
Dwarf.right(-90)
Dwarf.forward(10)
Dwarf.down()

for (let i = 0; i < 3; i++) {
   Dwarf.forward(105)
   Dwarf.right(90)
 }

//torso

//left

Dwarf.forward(105)
Dwarf.right(180)
Dwarf.forward(10)
Dwarf.right(-85)
Dwarf.forward(45)
Dwarf.right(-95)
Dwarf.forward(5)
Dwarf.right(115)
Dwarf.forward(6)
Dwarf.right(40)
Dwarf.forward(10)
Dwarf.right(20)
Dwarf.forward(7)
Dwarf.right(95)
Dwarf.forward(3)

//right

Dwarf.jump([105,10])
Dwarf.right(-185)
Dwarf.forward(45)
Dwarf.left(-95)
Dwarf.forward(5)
Dwarf.right(-115)
Dwarf.forward(6)
Dwarf.right(-40)
Dwarf.forward(10)
Dwarf.right(-20)
Dwarf.forward(7)
Dwarf.right(-95)
Dwarf.forward(3)
Dwarf.right(90)
Dwarf.forward(50)

//helmet

//left

Dwarf.jump([62.3,70.5])
Dwarf.right(40)
Dwarf.forward(9)
Dwarf.right(65)
Dwarf.forward(8)
Dwarf.right(-65)
Dwarf.forward(4)
Dwarf.right(-45)
Dwarf.forward(10)
Dwarf.right(-90)
Dwarf.forward(4)
Dwarf.right(-45)
Dwarf.forward(3)
Dwarf.right(45)
Dwarf.forward(10)
Dwarf.right(75)
Dwarf.forward(5)
Dwarf.right(45)
Dwarf.forward(3)
Dwarf.right(45)
Dwarf.forward(3)
Dwarf.right(90)
Dwarf.forward(2)
Dwarf.right(60)
Dwarf.forward(3)
Dwarf.right(-145)
Dwarf.forward(15)
Dwarf.right(30)
Dwarf.forward(10)
Dwarf.right(30)
Dwarf.forward(10)
Dwarf.right(30)
Dwarf.forward(10)

//right

Dwarf.jump([62.3,70.5])
Dwarf.right(-25)
Dwarf.forward(9)
Dwarf.right(-65)
Dwarf.forward(8)
Dwarf.right(65)
Dwarf.forward(4)
Dwarf.right(45)
Dwarf.forward(10)
Dwarf.right(90)
Dwarf.forward(4)
Dwarf.right(45)
Dwarf.forward(3)
Dwarf.right(-45)
Dwarf.forward(10)
Dwarf.right(-75)
Dwarf.forward(5)
Dwarf.right(-45)
Dwarf.forward(3)
Dwarf.right(-45)
Dwarf.forward(3)
Dwarf.right(-90)
Dwarf.forward(2)
Dwarf.right(-60)
Dwarf.forward(3)
Dwarf.right(145)
Dwarf.forward(15)
Dwarf.right(-30)
Dwarf.forward(10)
Dwarf.right(-30)
Dwarf.forward(10)
Dwarf.right(-30)
Dwarf.forward(10)
Dwarf.right(-15)
Dwarf.forward(6.3)
  
const finalLines = [];
bt.join(finalLines, Dwarf.lines());
drawLines(finalLines);
