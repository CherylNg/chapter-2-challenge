input.onButtonPressed(Button.A, function () {
    Girl += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Total =")
    basic.showNumber(Girl + Boy)
    basic.showString("Girl =")
    basic.showNumber(Girl)
    basic.showString("Boy =")
    basic.showNumber(Boy)
})
input.onButtonPressed(Button.B, function () {
    Boy += 1
})
let Boy = 0
let Girl = 0
basic.showIcon(IconNames.Happy)
Girl = 0
Boy = 0
