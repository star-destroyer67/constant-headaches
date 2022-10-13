function Eq_of_lime (x1: number, x2: number, y1: number, y2: number) {
    basic.showString("Eq of line")
    m = (y2 - y1) / (x2 - x1)
    basic.showNumber(m)
}
input.onButtonPressed(Button.A, function () {
    temp += 1
    basic.showNumber(temp)
})
function next_number () {
    temp = 0
    state += 1
    basic.showIcon(IconNames.Skull)
    basic.showNumber(temp)
}
input.onButtonPressed(Button.B, function () {
    temp += -1
    basic.showNumber(temp)
})
input.onGesture(Gesture.Shake, function () {
    if (state == 0) {
        num1 = temp
        next_number()
    } else if (state == 1) {
        num2 = temp
        next_number()
    } else if (state == 2) {
        num3 = temp
        next_number()
    } else if (state == 3) {
        num4 = temp
        next_number()
    } else {
        temp += 1
        if (temp == 1) {
            Eq_of_lime(num1, num2, num3, num4)
        } else if (temp == 2) {
        	
        } else if (temp == 3) {
        	
        }
    }
})
let m = 0
let temp = 0
let state = 0
let num4 = 0
let num3 = 0
let num2 = 0
let num1 = 0
num1 = 0
num2 = 0
num3 = 0
num4 = 0
state = 0
temp = 0
