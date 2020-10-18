radio.setGroup(1)
basic.forever(function () {
    if (BitPlayer.OnJoystick(Joystick.Up)) {
        basic.showArrow(ArrowNames.North)
        radio.sendNumber(1)
    }
    if (BitPlayer.OnJoystick(Joystick.Down)) {
        basic.showArrow(ArrowNames.South)
        radio.sendNumber(2)
    }
    if (BitPlayer.OnJoystick(Joystick.Right)) {
        basic.showArrow(ArrowNames.East)
        radio.sendNumber(3)
    }
    if (BitPlayer.OnJoystick(Joystick.Left)) {
        basic.showArrow(ArrowNames.West)
        radio.sendNumber(4)
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_A)) {
        while (BitPlayer.KeyPressed(BitPlayerKey.key_A)) {
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # . # .
                `)
        }
        radio.sendNumber(5)
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_B)) {
        while (BitPlayer.KeyPressed(BitPlayerKey.key_B)) {
            basic.showLeds(`
                # # # # #
                # . # . #
                # # # # #
                . . # . .
                . # # # .
                `)
        }
        radio.sendNumber(6)
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_C)) {
        if (BitPlayer.OnJoystick(Joystick.Up)) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . # . #
                . # . # .
                . . . . #
                `)
        }
        radio.sendNumber(7)
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_D)) {
        radio.sendNumber(8)
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_R)) {
        while (BitPlayer.KeyPressed(BitPlayerKey.key_R)) {
            basic.showLeds(`
                . # # . .
                . . # . .
                . . . . .
                . . # . .
                . . # # .
                `)
            basic.showLeds(`
                . . . # #
                . . . # .
                . . . . .
                . # . . .
                # # . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                # # . # #
                # . . . .
                . . . . .
                `)
            basic.showLeds(`
                # . . . .
                # # . . .
                . . . . .
                . . . # #
                . . . . #
                `)
            basic.showLeds(`
                . # # . .
                . . # . .
                . . . . .
                . . # . .
                . . # # .
                `)
        }
        radio.sendNumber(9)
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_L)) {
        while (BitPlayer.KeyPressed(BitPlayerKey.key_L)) {
            basic.showLeds(`
                . . # # .
                . . # . .
                . . . . .
                . . # . .
                . # # . .
                `)
            basic.showLeds(`
                # # . . .
                . # . . .
                . . . . .
                . . . # .
                . . . # #
                `)
            basic.showLeds(`
                . . . . .
                # . . . .
                # # . # #
                . . . . #
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # #
                . . . . .
                # # . . .
                # . . . .
                `)
            basic.showLeds(`
                . . # # .
                . . # . .
                . . . . .
                . . # . .
                . # # . .
                `)
        }
        radio.sendNumber(10)
    }
})
