def on_received_number(receivedNumber):
    global sprite
    if receivedNumber == 1:
        Enemy.change(LedSpriteProperty.X, -1)
    if receivedNumber == 2:
        Enemy.change(LedSpriteProperty.X, 1)
    if receivedNumber == 5:
        Enemy.change(LedSpriteProperty.Y, -1)
    if receivedNumber == 6:
        Enemy.change(LedSpriteProperty.Y, 1)
    if receivedNumber == 0:
        sprite = game.create_sprite(Enemy.get(LedSpriteProperty.X),
            Enemy.get(LedSpriteProperty.Y))
        sprite.set(LedSpriteProperty.BRIGHTNESS, 100)
        for index in range(4):
            sprite.change(LedSpriteProperty.X, -1)
            basic.pause(100)
            if sprite.is_touching(Player):
                game.remove_life(1)
            if sprite.get(LedSpriteProperty.X) <= 0:
                sprite.delete()
    if receivedNumber == 3:
        if game.is_paused():
            game.resume()
        else:
            game.pause()
    if receivedNumber == 4:
        sprite = game.create_sprite(Enemy.get(LedSpriteProperty.X),
            Enemy.get(LedSpriteProperty.Y))
        sprite.set(LedSpriteProperty.BRIGHTNESS, 100)
        for index2 in range(4):
            sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
            if sprite.is_touching(Player):
                game.remove_life(1)
            if sprite.get(LedSpriteProperty.Y) <= 0:
                sprite.delete()
    if receivedNumber == 7:
        sprite = game.create_sprite(Enemy.get(LedSpriteProperty.X),
            Enemy.get(LedSpriteProperty.Y))
        sprite.set(LedSpriteProperty.BRIGHTNESS, 100)
        for index3 in range(4):
            sprite.change(LedSpriteProperty.X, 1)
            basic.pause(100)
            if sprite.is_touching(Player):
                game.remove_life(1)
            if sprite.get(LedSpriteProperty.X) >= 4:
                sprite.delete()
    if receivedNumber == 8:
        sprite = game.create_sprite(Enemy.get(LedSpriteProperty.X),
            Enemy.get(LedSpriteProperty.Y))
        sprite.set(LedSpriteProperty.BRIGHTNESS, 100)
        for index4 in range(4):
            sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
            if sprite.is_touching(Player):
                game.remove_life(1)
            if sprite.get(LedSpriteProperty.Y) >= 4:
                sprite.delete()
radio.on_received_number(on_received_number)

def my_function():
    global Shoot
    radio.send_number(7)
    Shoot = game.create_sprite(Player.get(LedSpriteProperty.X),
        Player.get(LedSpriteProperty.Y))
    Shoot.set(LedSpriteProperty.BRIGHTNESS, 100)
    for index5 in range(4):
        Shoot.change(LedSpriteProperty.X, 1)
        basic.pause(100)
        if Shoot.is_touching(Enemy):
            game.add_score(1)
        if Shoot.get(LedSpriteProperty.X) >= 4:
            Shoot.delete()
    basic.pause(1000)
    if game.score() == 4:
        game.game_over()
joystickbit.on_button_event(joystickbit.JoystickBitPin.P14,
    joystickbit.ButtonType.DOWN,
    my_function)

def my_function2():
    global Shoot
    radio.send_number(8)
    Shoot = game.create_sprite(Player.get(LedSpriteProperty.X),
        Player.get(LedSpriteProperty.Y))
    Shoot.set(LedSpriteProperty.BRIGHTNESS, 100)
    for index6 in range(4):
        Shoot.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        if Shoot.is_touching(Enemy):
            game.add_score(1)
        if Shoot.get(LedSpriteProperty.Y) >= 4:
            Shoot.delete()
    basic.pause(1000)
    if game.score() == 4:
        game.game_over()
joystickbit.on_button_event(joystickbit.JoystickBitPin.P15,
    joystickbit.ButtonType.DOWN,
    my_function2)

def my_function3():
    global Shoot
    radio.send_number(4)
    Shoot = game.create_sprite(Player.get(LedSpriteProperty.X),
        Player.get(LedSpriteProperty.Y))
    Shoot.set(LedSpriteProperty.BRIGHTNESS, 100)
    for index7 in range(4):
        Shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if Shoot.is_touching(Enemy):
            game.add_score(1)
        if Shoot.get(LedSpriteProperty.Y) <= 0:
            Shoot.delete()
    basic.pause(1000)
    if game.score() == 4:
        game.game_over()
joystickbit.on_button_event(joystickbit.JoystickBitPin.P13,
    joystickbit.ButtonType.DOWN,
    my_function3)

def my_function4():
    global Shoot
    radio.send_number(0)
    Shoot = game.create_sprite(Player.get(LedSpriteProperty.X),
        Player.get(LedSpriteProperty.Y))
    Shoot.set(LedSpriteProperty.BRIGHTNESS, 100)
    for index8 in range(4):
        Shoot.change(LedSpriteProperty.X, -1)
        basic.pause(100)
        if Shoot.is_touching(Enemy):
            game.add_score(1)
        if Shoot.get(LedSpriteProperty.X) <= 0:
            Shoot.delete()
    basic.pause(1000)
    if game.score() == 4:
        game.game_over()
joystickbit.on_button_event(joystickbit.JoystickBitPin.P12,
    joystickbit.ButtonType.DOWN,
    my_function4)

def on_logo_pressed():
    radio.send_number(3)
    if game.is_paused():
        game.resume()
    else:
        game.pause()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

Shoot: game.LedSprite = None
sprite: game.LedSprite = None
Player: game.LedSprite = None
Enemy: game.LedSprite = None
game.set_life(4)
game.set_score(0)
joystickbit.init_joystick_bit()
Enemy = game.create_sprite(0, 0)
Player = game.create_sprite(4, 4)
radio.set_group(1)

def on_forever():
    if joystickbit.get_rocker_value(joystickbit.rockerType.X) <= 200:
        radio.send_number(1)
        Player.change(LedSpriteProperty.X, 1)
    if joystickbit.get_rocker_value(joystickbit.rockerType.X) >= 800:
        radio.send_number(2)
        Player.change(LedSpriteProperty.X, -1)
    if joystickbit.get_rocker_value(joystickbit.rockerType.Y) <= 200:
        radio.send_number(5)
        Player.change(LedSpriteProperty.Y, 1)
    if joystickbit.get_rocker_value(joystickbit.rockerType.Y) >= 800:
        radio.send_number(6)
        Player.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
basic.forever(on_forever)
