radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Enemy.change(LedSpriteProperty.X, -1)
    }
    if (receivedNumber == 2) {
        Enemy.change(LedSpriteProperty.X, 1)
    }
    if (receivedNumber == 5) {
        Enemy.change(LedSpriteProperty.Y, -1)
    }
    if (receivedNumber == 6) {
        Enemy.change(LedSpriteProperty.Y, 1)
    }
    if (receivedNumber == 0) {
        sprite = game.createSprite(Enemy.get(LedSpriteProperty.X), Enemy.get(LedSpriteProperty.Y))
        sprite.set(LedSpriteProperty.Brightness, 100)
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.X, -1)
            basic.pause(100)
            if (sprite.isTouching(Player)) {
                game.removeLife(1)
            }
            if (sprite.get(LedSpriteProperty.X) <= 0) {
                sprite.delete()
            }
        }
    }
    if (receivedNumber == 3) {
        if (game.isPaused()) {
            game.resume()
        } else {
            game.pause()
        }
    }
    if (receivedNumber == 4) {
        sprite = game.createSprite(Enemy.get(LedSpriteProperty.X), Enemy.get(LedSpriteProperty.Y))
        sprite.set(LedSpriteProperty.Brightness, 100)
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
            if (sprite.isTouching(Player)) {
                game.removeLife(1)
            }
            if (sprite.get(LedSpriteProperty.Y) <= 0) {
                sprite.delete()
            }
        }
    }
    if (receivedNumber == 7) {
        sprite = game.createSprite(Enemy.get(LedSpriteProperty.X), Enemy.get(LedSpriteProperty.Y))
        sprite.set(LedSpriteProperty.Brightness, 100)
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.X, 1)
            basic.pause(100)
            if (sprite.isTouching(Player)) {
                game.removeLife(1)
            }
            if (sprite.get(LedSpriteProperty.X) >= 4) {
                sprite.delete()
            }
        }
    }
    if (receivedNumber == 8) {
        sprite = game.createSprite(Enemy.get(LedSpriteProperty.X), Enemy.get(LedSpriteProperty.Y))
        sprite.set(LedSpriteProperty.Brightness, 100)
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
            if (sprite.isTouching(Player)) {
                game.removeLife(1)
            }
            if (sprite.get(LedSpriteProperty.Y) >= 4) {
                sprite.delete()
            }
        }
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendNumber(8)
    Shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    Shoot.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        if (Shoot.isTouching(Enemy)) {
            game.addScore(1)
        }
        if (Shoot.get(LedSpriteProperty.Y) >= 4) {
            Shoot.delete()
        }
    }
    basic.pause(1000)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendNumber(7)
    Shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    Shoot.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.X, 1)
        basic.pause(100)
        if (Shoot.isTouching(Enemy)) {
            game.addScore(1)
        }
        if (Shoot.get(LedSpriteProperty.X) >= 4) {
            Shoot.delete()
        }
    }
    basic.pause(1000)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendNumber(4)
    Shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    Shoot.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (Shoot.isTouching(Enemy)) {
            game.addScore(1)
        }
        if (Shoot.get(LedSpriteProperty.Y) <= 0) {
            Shoot.delete()
        }
    }
    basic.pause(1000)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendNumber(0)
    Shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    Shoot.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.X, -1)
        basic.pause(100)
        if (Shoot.isTouching(Enemy)) {
            game.addScore(1)
        }
        if (Shoot.get(LedSpriteProperty.X) <= 0) {
            Shoot.delete()
        }
    }
    basic.pause(1000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(3)
    if (game.isPaused()) {
        game.resume()
    } else {
        game.pause()
    }
})
let Shoot: game.LedSprite = null
let sprite: game.LedSprite = null
let Player: game.LedSprite = null
let Enemy: game.LedSprite = null
game.setLife(4)
game.setScore(0)
joystickbit.initJoystickBit()
Enemy = game.createSprite(0, 0)
Player = game.createSprite(4, 4)
radio.setGroup(1)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        radio.sendNumber(1)
        Player.change(LedSpriteProperty.X, 1)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        radio.sendNumber(2)
        Player.change(LedSpriteProperty.X, -1)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        radio.sendNumber(5)
        Player.change(LedSpriteProperty.Y, 1)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        radio.sendNumber(6)
        Player.change(LedSpriteProperty.Y, -1)
    }
    basic.pause(100)
})
basic.forever(function () {
    if (game.isGameOver() && game.score() < 4) {
        basic.showString("You lose")
    }
    if (game.score() == 4) {
        game.gameOver()
        basic.showString("You win")
    }
    basic.clearScreen()
})
