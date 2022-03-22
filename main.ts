input.onButtonPressed(Button.A, function () {
    strikes += 1
    basic.showNumber(strikes)
    if (strikes == 3) {
        balls = 0
        strikes = 0
        basic.showString("STRIKEOUT")
    }
})
input.onButtonPressed(Button.AB, function () {
    balls = 0
    strikes = 0
})
input.onButtonPressed(Button.B, function () {
    balls += 1
    basic.showNumber(balls)
    if (balls == 4) {
        balls = 0
        strikes = 0
        basic.showString("WALK")
    }
})
let strikes = 0
let balls = 0
balls = 0
strikes = 0
