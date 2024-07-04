namespace SpriteKind {
    export const King = SpriteKind.create()
    export const Heart = SpriteKind.create()
    export const Assist = SpriteKind.create()
    export const Aura = SpriteKind.create()
    export const Cacti = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level6`))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cacti, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level4`))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Shoot_direction = 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Shoot_direction == 1) {
        Fire_ball = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . 2 2 2 2 4 2 2 2 2 2 2 . . . 
            . 2 2 2 2 4 5 5 2 5 2 4 2 2 . . 
            . 2 5 5 2 5 5 2 2 2 5 4 2 2 . . 
            . 2 5 2 4 5 4 2 2 4 5 4 4 2 . . 
            . 2 5 2 4 5 4 2 2 2 5 2 2 2 . . 
            . 2 5 2 4 5 4 2 2 2 5 2 2 2 . . 
            . 2 5 5 2 5 5 4 4 2 5 2 2 2 . . 
            . 2 2 5 2 2 5 5 5 2 2 2 2 2 . . 
            . . 2 2 5 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 4 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Wizard, 0, -100)
    } else if (Shoot_direction == 2) {
        Fire_ball = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . 2 2 2 2 4 2 2 2 2 2 2 . . . 
            . 2 2 2 2 4 5 5 2 5 2 4 2 2 . . 
            . 2 5 5 2 5 5 2 2 2 5 4 2 2 . . 
            . 2 5 2 4 5 4 2 2 4 5 4 4 3 . . 
            . 2 5 2 4 5 4 2 2 2 5 2 2 3 . . 
            . 2 5 2 4 5 4 2 2 2 5 2 2 3 . . 
            . 2 5 5 2 5 5 4 4 2 5 2 2 2 . . 
            . 2 2 5 2 2 5 5 5 2 2 2 2 2 . . 
            . . 2 2 5 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 4 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Wizard, 0, 100)
    } else if (Shoot_direction == 3) {
        Fire_ball = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . 2 2 2 2 4 2 2 2 2 2 2 . . . 
            . 2 2 2 2 4 5 5 2 5 2 4 2 2 . . 
            . 2 5 5 2 5 5 2 2 2 5 4 2 2 . . 
            . 2 5 2 4 5 4 2 2 4 5 4 4 3 . . 
            . 2 5 2 4 5 4 2 2 2 5 2 2 3 . . 
            . 2 5 2 4 5 4 2 2 2 5 2 2 3 . . 
            . 2 5 5 2 5 5 4 4 2 5 2 2 2 . . 
            . 2 2 5 2 2 5 5 5 2 2 2 2 2 . . 
            . . 2 2 5 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 4 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Wizard, 100, 0)
    } else if (Shoot_direction == 4) {
        Fire_ball = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . 2 2 2 2 4 2 2 2 2 2 2 . . . 
            . 2 2 2 2 4 5 5 2 5 2 4 2 2 . . 
            . 2 5 5 2 5 5 2 2 2 5 4 2 2 . . 
            . 2 5 2 4 5 4 2 2 4 5 4 4 3 . . 
            . 2 5 2 4 5 4 2 2 2 5 2 2 3 . . 
            . 2 5 2 4 5 4 2 2 2 5 2 2 3 . . 
            . 2 5 5 2 5 5 4 4 2 5 2 2 2 . . 
            . 2 2 5 2 2 5 5 5 2 2 2 2 2 . . 
            . . 2 2 5 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 4 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Wizard, -100, 0)
    } else {
    	
    }
    if (Snake.overlapsWith(Fire_ball)) {
        sprites.destroy(Fire_ball)
        sprites.destroy(Snake)
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.B)) {
        Aura2 = sprites.create(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, SpriteKind.Aura)
        Aura2.follow(Strongman)
        info.startCountdown(10)
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.B)) {
        Wolf = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b . . . . . . 
            . . . . . . . . . b b b . . . . 
            . . . . . . . . . b 2 b b b f . 
            . b b b b b b b b b b b b b . . 
            . . . . b b b b b b b . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . b . b . b . b . . . . . 
            . . . . b . b . b . b . . . . . 
            . . . . b . b . b . b . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Assist)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level45`))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Shoot_direction == 1) {
        Ice_shard = sprites.create(img`
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . 9 9 9 . . . . . . 
            . . . . . . 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            `, SpriteKind.Projectile)
        Ice_shard = sprites.createProjectileFromSprite(img`
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . 9 9 9 . . . . . . 
            . . . . . . 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            `, Wizard, 0, -100)
    } else if (Shoot_direction == 2) {
        Ice_shard = sprites.createProjectileFromSprite(img`
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . 9 9 9 . . . . . . 
            . . . . . . 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            `, Wizard, 0, 100)
    } else if (Shoot_direction == 3) {
        Ice_shard = sprites.createProjectileFromSprite(img`
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . 9 9 9 . . . . . . 
            . . . . . . 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            `, Wizard, 100, 0)
    } else if (Shoot_direction == 4) {
        Ice_shard = sprites.createProjectileFromSprite(img`
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . 9 9 9 . . . . . . 
            . . . . . . 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            `, Wizard, -100, 0)
    } else {
    	
    }
    if (Snake.overlapsWith(Ice_shard)) {
        sprites.destroy(Ice_shard)
        sprites.destroy(Snake)
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        Zombie = sprites.create(img`
            ..........ffff..........
            ........ff7777ff........
            .......fb777777bf.......
            .......f77777777f.......
            ......f6777777776f......
            ......f6777777776f......
            ......f6667777666f......
            ......fb6bf66fb6bf......
            ......fc6cf77fc6cf......
            .....ffff777777bf.......
            ....fc777c6b7b6fff......
            ....f7b7bcb7b7c777cf....
            ....fbfbfb77777b7b7f....
            .........7777777bfbf....
            .........7777777........
            .........7777777........
            .........7777777........
            .........6666666........
            .........6666666........
            .........666.666........
            .........666.666........
            .........666.666........
            .........666.666........
            ........ffff.ffff.......
            `, SpriteKind.Assist)
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        Swirling_vortex = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f . . . 
            . . . . . f f f f f f a a f f . 
            . . . . f f f f f f f f a a f . 
            . . . f f f f f f f f f f a f . 
            . . . f a f f f f f f f f a f . 
            . . f f f f f f a a a f f f f . 
            . . f a f f f a a a a f f f f . 
            . . f a f f f a a a a f f a f . 
            . . f a f f f a a a f a f f f . 
            . . f a f f f a a a f f f f . . 
            . . f f f a f a a f f f f . . . 
            . . f f f f f f f f f f f . . . 
            . . . f a f f a f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
    } else if (Shoot_direction == 1) {
        Swirling_vortex = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f . . . 
            . . . . . f f f f f f a a f f . 
            . . . . f f f f f f f f a a f . 
            . . . f f f f f f f f f f a f . 
            . . . f a f f f f f f f f a f . 
            . . f f f f f f a a a f f f f . 
            . . f a f f f a a a a f f f f . 
            . . f a f f f a a a a f f a f . 
            . . f a f f f a a a f a f f f . 
            . . f a f f f a a a f f f f . . 
            . . f f f a f a a f f f f . . . 
            . . f f f f f f f f f f f . . . 
            . . . f a f f a f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Necromancer, 0, -100)
    } else if (Shoot_direction == 2) {
        Swirling_vortex = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f . . . 
            . . . . . f f f f f f a a f f . 
            . . . . f f f f f f f f a a f . 
            . . . f f f f f f f f f f a f . 
            . . . f a f f f f f f f f a f . 
            . . f f f f f f a a a f f f f . 
            . . f a f f f a a a a f f f f . 
            . . f a f f f a a a a f f a f . 
            . . f a f f f a a a f a f f f . 
            . . f a f f f a a a f f f f . . 
            . . f f f a f a a f f f f . . . 
            . . f f f f f f f f f f f . . . 
            . . . f a f f a f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Necromancer, 0, 100)
    } else if (Shoot_direction == 3) {
        Swirling_vortex = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f . . . 
            . . . . . f f f f f f a a f f . 
            . . . . f f f f f f f f a a f . 
            . . . f f f f f f f f f f a f . 
            . . . f a f f f f f f f f a f . 
            . . f f f f f f a a a f f f f . 
            . . f a f f f a a a a f f f f . 
            . . f a f f f a a a a f f a f . 
            . . f a f f f a a a f a f f f . 
            . . f a f f f a a a f f f f . . 
            . . f f f a f a a f f f f . . . 
            . . f f f f f f f f f f f . . . 
            . . . f a f f a f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Necromancer, 100, 0)
    } else if (Shoot_direction == 4) {
        Swirling_vortex = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f . . . 
            . . . . . f f f f f f a a f f . 
            . . . . f f f f f f f f a a f . 
            . . . f f f f f f f f f f a f . 
            . . . f a f f f f f f f f a f . 
            . . f f f f f f a a a f f f f . 
            . . f a f f f a a a a f f f f . 
            . . f a f f f a a a a f f a f . 
            . . f a f f f a a a f a f f f . 
            . . f a f f f a a a f f f f . . 
            . . f f f a f a a f f f f . . . 
            . . f f f f f f f f f f f . . . 
            . . . f a f f a f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Necromancer, -100, 0)
    } else {
    	
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.A)) {
        Thrown_weight = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f d d d d d d d f f . . 
            . . . f f d d d d d d d f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
    } else if (Shoot_direction == 1) {
        Thrown_weight = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f d d d d d d d f f . . 
            . . . f f d d d d d d d f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Strongman, 0, 100)
    } else if (Shoot_direction == 2) {
        Thrown_weight = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f d d d d d d d f f . . 
            . . . f f d d d d d d d f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Strongman, 0, -100)
    } else if (Shoot_direction == 3) {
        Thrown_weight = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f d d d d d d d f f . . 
            . . . f f d d d d d d d f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Strongman, 100, 0)
    } else if (Shoot_direction == 4) {
        Thrown_weight = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f d d d d d d d f f . . 
            . . . f f d d d d d d d f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . f f . . . . . . . f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Strongman, -100, 0)
    } else {
    	
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) {
        Bear = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e . . . . . . . 
            . . . . . e e 2 e . . . . . . . 
            . . . . . e e e e e e f . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e . . . . . . 
            . . . . e e e e e e e e e . . . 
            . . . . e e e e e e e e e . . . 
            . . . . e e e e e e . . f . . . 
            . . . . e e e e e e . . . . . . 
            . . . . e e e e e e . . . . . . 
            . . . . e e e e e e . . . . . . 
            . . . . e e . . e e . . . . . . 
            . . . . e e . . e e . . . . . . 
            . . . . e e f . e e f . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Assist)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level47`))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Shoot_direction = 4
})
sprites.onOverlap(SpriteKind.Assist, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Aura, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(10)
})
info.onCountdownEnd(function () {
    info.stopCountdown()
    sprites.destroy(Aura2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Shoot_direction = 3
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Shoot_direction = 2
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level51`))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level17`))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.follow(sprite)
})
let Bear: Sprite = null
let Thrown_weight: Sprite = null
let Swirling_vortex: Sprite = null
let Zombie: Sprite = null
let Ice_shard: Sprite = null
let Wolf: Sprite = null
let Aura2: Sprite = null
let Fire_ball: Sprite = null
let Cacti: Sprite = null
let Snake: Sprite = null
let King2: Sprite = null
let Life: Sprite = null
let Shoot_direction = 0
let Strongman: Sprite = null
let Necromancer: Sprite = null
let Wizard: Sprite = null
Render.setViewMode(ViewMode.tilemapView)
scene.setBackgroundColor(7)
tiles.loadMap(tiles.createMap(tilemap`level4`))
Wizard = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 8 8 . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . e e 8 8 8 8 . . . . . . 
    . . . . . e 8 8 8 8 8 . . . . . 
    . . . . . e 9 d 9 d . . . . . . 
    . . . . . e 1 1 1 1 . . . . . . 
    . . . . . e 1 1 1 1 . . . . . . 
    . . . . . d 1 1 1 8 . . . . . . 
    . . . . . e 8 1 8 8 . . . . . . 
    . . . . . e 8 8 8 8 . . . . . . 
    . . . . . e 8 8 8 8 . . . . . . 
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 8 8 . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . e e 8 8 8 8 . . . . . . 
    . . . . . e 8 8 8 8 8 . . . . . 
    . . . . . e 9 d 9 d . . . . . . 
    . . . . . e 1 1 1 d . . . . . . 
    . . . . . e 1 1 1 8 . . . . . . 
    . . . . . d 1 1 1 8 . . . . . . 
    . . . . . e 8 1 8 8 . . . . . . 
    . . . . . e 8 8 8 8 . . . . . . 
    . . . . . e 8 8 8 8 . . . . . . 
    `, SpriteKind.Player))
Necromancer = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    ......fff111111bf.......
    .........cdb1bdff.......
    .........cbfbfc.........
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    ......fff111111bf.......
    .........cdb1bdff.......
    .........cbfbfc.........
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player))
controller.player2.moveSprite(Necromancer)
info.player2.setLife(3)
Strongman = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . . d 9 d 9 d . . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . . d d d d d . . . . . 
    . d d . d d e e e e e d d . d d 
    . d d d d d e e e e e d d d d d 
    . . . . . . e e e e e . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . b b . b b . . . . . 
    . . . . . . b b . b b . . . . . 
    . . . . . . b b . b b . . . . . 
    . . . . . f f f . f f f . . . . 
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . . d 9 d 9 d . . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . . d d d d d . . . . . 
    . d d . d d e e e e e d d . d d 
    . d d d d d e e e e e d d d d d 
    . d d d d d e e e e e d d d d d 
    . . . . . . e e e e e . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . b b . b b . . . . . 
    . . . . . . b b . b b . . . . . 
    . . . . . . b b . b b . . . . . 
    . . . . . f f f . f f f . . . . 
    `, SpriteKind.Player))
controller.player3.moveSprite(Strongman)
info.player3.setLife(3)
let Wild_man = sprites.create(img`
    . . . . . . . . . 6 6 . . . . . 
    . . . . . . . . . . 6 6 . . . . 
    . . . . . e e e e e 6 . . . . . 
    . . . . . d d d d d 6 6 . . . . 
    . . . . . d 9 d 9 d 6 . . . . . 
    . . . . . d d d d d 6 6 . . . . 
    . . . . . e e e e e 6 . . . . . 
    . . . . e e e e e e e 6 . . . . 
    . . . . . e e e e e d . . . . . 
    . . . . . d e e e d 6 6 . . . . 
    . . . . . d d e d d 6 . . . . . 
    . . . . . d d d d d 6 6 . . . . 
    . . . . . e e e e e 6 . . . . . 
    . . . . . d e e e d 6 6 . . . . 
    . . . . . d d e d d 6 . . . . . 
    . . . . . d d . d d . 6 . . . . 
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    . . . . . . . . . 6 6 . . . . . 
    . . . . . . . . . . 6 6 . . . . 
    . . . . . e e e e e 6 . . . . . 
    . . . . . d d d d d 6 6 . . . . 
    . . . . . d 9 d 9 d 6 . . . . . 
    . . . . . d d d d d 6 6 . . . . 
    . . . . . e e e e e 6 . . . . . 
    . . . . e e e e e e e 6 . . . . 
    . . . . . e e e e e d . . . . . 
    . . . . . d e e e d 6 6 . . . . 
    . . . . . d d e d d 6 . . . . . 
    . . . . . d d d d d 6 6 . . . . 
    . . . . . e e e e e 6 . . . . . 
    . . . . . d e e e d 6 6 . . . . 
    . . . . . d d e d d 6 . . . . . 
    . . . . . d d . d d . 6 . . . . 
    `, SpriteKind.Player))
controller.player4.moveSprite(Wild_man)
info.player4.setLife(3)
controller.moveSprite(Wizard)
info.setLife(3)
scene.cameraFollowSprite(Wizard)
Shoot_direction = 1
music.play(music.createSong(hex`0078000408020104001c00100500640000041e000004000000000000000000000000000a040004540000000400011d0400080001190c001000011d10001400011914001800011e18001c00012220002400011e24002800012028002c0001242c003000012530003400012234003800011e38003c00011b3c004000011d`), music.PlaybackMode.UntilDone)
for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
    Life = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . 2 2 2 2 2 . . 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Heart)
    tiles.placeOnTile(Life, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value2 of tiles.getTilesByType(assets.tile`myTile2`)) {
    King2 = sprites.create(img`
        . . . . . 5 . . 5 . . . . . . . 
        . . . . 5 2 5 5 5 2 5 . . . . . 
        . . . . 2 8 2 5 2 8 2 . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . d d 9 d d 9 d . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . 5 5 5 d d d d d . . . . . 
        . . . 5 2 5 a a a a a . . . . . 
        . . . 5 5 5 a a a a a . . . . . 
        . . . . d a a a a a a . . . . . 
        . . . . 5 a a a a a a . . . . . 
        . . . . 5 a a a a a a . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.King)
    tiles.placeOnTile(King2, value2)
}
for (let value3 of tiles.getTilesByType(assets.tile`myTile10`)) {
    Snake = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Snake, value3)
    tiles.setTileAt(value3, sprites.castle.tileGrass1)
}
for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
    Cacti = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . 7 7 . 7 7 7 . . . . . . 
        . . . . 7 7 . 7 7 7 . 7 7 . . . 
        . . . . 7 7 . 7 7 7 . 7 7 . . . 
        . . . . 7 7 7 7 7 7 . 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . . . 7 7 7 7 7 7 . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        `, SpriteKind.Cacti)
    tiles.placeOnTile(Cacti, value)
    tiles.setTileAt(value, assets.tile`myTile17`)
}
game.onUpdateInterval(1000, function () {
    Snake.setVelocity(randint(-70, 70), randint(-50, 50))
    Bear.follow(Snake)
    Wolf.follow(Snake)
    Zombie.follow(Snake)
})
