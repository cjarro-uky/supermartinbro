namespace SpriteKind {
    export const Rest = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Martin.setVelocity(0, -100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rest, function (sprite, otherSprite) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    game.gameOver(false)
})
let Martin: Sprite = null
// Little girl sprite with pink dress
let girlSprite = img`
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
    `
Martin = sprites.create(img`
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
    `, SpriteKind.Player)
Martin.setPosition(480, 230)
controller.moveSprite(Martin, 100, 0)
Martin.ay = 300
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Martin)
let YouWon = sprites.create(img`
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
    `, SpriteKind.Rest)
YouWon.setPosition(500, 10)
let Girl = sprites.create(girlSprite, SpriteKind.Rest)
Girl.setPosition(460, 10)
let Mostor = sprites.create(img`
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
    `, SpriteKind.Enemy)
Mostor.setPosition(10, 230)
let Mostor2 = sprites.create(img`
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
    `, SpriteKind.Player)
Mostor2.setPosition(500, 170)
