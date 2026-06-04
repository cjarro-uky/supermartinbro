@namespace
class SpriteKind:
    Rest = SpriteKind.create()
# Little girl sprite with pink dress
girlSprite = img("""
    . . . . f f f f f . . . . . . .
    . . . . f c c c f . . . . . . .
    . . . . f c c c f . . . . . . .
    . . . . f c 8 c f . . . . . . .
    . . . . f 8 8 8 f . . . . . . .
    . . . . f c c c f . . . . . . .
    . . . . . f f f . . . . . . . .
    . . . . . 2 2 2 . . . . . . . .
    . . . . . 2 2 2 . . . . . . . .
    . . . . 2 2 2 2 2 . . . . . . .
    . . . 2 2 2 2 2 2 2 . . . . . .
    . . . 2 2 2 2 2 2 2 . . . . . .
    . . . 2 2 2 2 2 2 2 . . . . . .
    . . . . 2 2 2 2 2 . . . . . . .
    . . . . . 2 . . 2 . . . . . . .
    . . . . . 2 . . 2 . . . . . . .
    """)

def on_up_pressed():
    Martin.set_velocity(0, -100)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite, otherSprite):
    game.game_over(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.Rest, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    game.game_over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

Martin: Sprite = None
Martin = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f . . . . . .
        . . . . f 3 3 3 3 f . . . . . .
        . . . . f 3 f 3 f f . . . . . .
        . . . f f 3 3 3 3 f . . . . . .
        . . . f 3 3 3 3 2 f . . . . . .
        . . f f 5 5 5 5 5 f f . . . . .
        7 7 . . 7 7 7 7 7 . . . 7 7 . .
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 . .
        7 7 . . . 7 7 7 7 7 . . . . . .
        . . . . . 7 7 7 7 . . . . . . .
        . . . . . 2 . . 2 . . . . . . .
        . . . . 2 2 . . 2 2 . . . . . .
        . . . . 2 . . . . 2 2 . . . . .
        . . . 2 2 . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
Martin.set_position(480, 230)
controller.move_sprite(Martin, 100, 0)
Martin.ay = 300
tiles.set_current_tilemap(tilemap("""
    level1
    """))
scene.camera_follow_sprite(Martin)
YouWon = sprites.create(img("""
        ...cccccccccccccccccc...
        ..cbddddddddddddddddbc..
        .cddddddddddddddddddddc.
        .cddbbbbbbbbbbbbbbbbddc.
        .cdbbbbbbbbbbbbbbbbbbdc.
        .cdbbbbbbbbbbbbbbbbbbdc.
        cbbbccccccccccccccccbbbc
        cddcbddddddddddddddbcddc
        cddcddddddddddddddddcddc
        cddcddddddddddddddddcddc
        cddcddddddddddddddddcddc
        cbdcddddddddddddddddcdbc
        ccbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbcc
        cccccccccccccccccccccccc
        ..cbbc............cbbc..
        """),
    SpriteKind.Rest)
YouWon.set_position(500, 10)
Girl = sprites.create(girlSprite, SpriteKind.Rest)
Girl.set_position(460, 10)
Mostor = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 2 2 . . . . 2 2 . . . . .
        . . 2 2 . . . . . . 2 2 . . . .
        . . 2 2 . . . . . . 2 2 . . . .
        . . 2 2 2 . . . . 2 2 2 . . . .
        . . . 2 2 . . . . 2 2 . . . . .
        . . 3 3 3 3 3 3 3 3 3 3 . . . .
        . . 3 3 f f 3 3 3 f f 3 3 . . .
        . 3 3 f f f f 3 3 f f f 3 . . .
        . 3 3 3 f f f 3 3 f f f 3 . . .
        . . 3 3 3 3 3 3 3 3 3 3 3 . . .
        . . . 3 3 2 2 2 2 3 3 3 . . . .
        . . . 3 2 2 2 2 2 2 . . . . . .
        . . . . 3 3 3 3 3 . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.enemy)
Mostor.set_position(10, 230)
Mostor.set_velocity(50, 0)
Mostor.set_flag(SpriteFlag.BOUNCE_ON_WALL, True)
Mostor.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
Mostor.ay = 0
Mostor.set_position(10, 230)
Mostor2 = sprites.create(img("""
        . . . . 8 8 . . . 8 8 8 8 . . .
        8 8 . 8 8 8 8 8 8 8 8 8 8 . . .
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 2 2 8 8 8 2 2 2 2 8 8 8 8
        8 8 8 2 8 2 8 8 2 8 8 2 8 8 . .
        8 8 8 2 8 2 8 8 2 2 2 2 8 8 8 8
        . 8 8 8 2 2 8 8 8 2 2 8 8 8 8 8
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 4 4 4 4 4 8 8 8 8 8 8
        8 8 8 8 4 4 8 8 8 4 4 4 8 8 . .
        . 8 8 4 4 8 8 8 8 8 8 4 4 8 8 .
        8 8 4 4 8 8 8 8 8 4 4 8 4 8 8 8
        8 8 4 4 4 4 4 4 4 4 4 4 4 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        . . . 8 8 8 . 8 8 8 8 8 . 8 . .
        """),
    SpriteKind.enemy)
Mostor2.set_position(500, 170)
Mostor2.set_velocity(-40, 30)
Mostor2.set_flag(SpriteFlag.BOUNCE_ON_WALL, True)
Mostor2.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
Mostor2.ay = 0