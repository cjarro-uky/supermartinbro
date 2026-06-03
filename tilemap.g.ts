// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`200010000000000000000000000000000000000000000000000000000000000000000000000000000700000007000007000700000707000000090000000000000000000008020808080808080808080808080808080808080808080808080808080808080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000606060606060606060606060606060606060606060606060606060602060606050505050505050505050505050505050505050505050505050505050205050500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101020101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030304040404040404040404040404040404`, img`
................................
................................
2.222222222222222222222222222222
................................
................................
................................
2222222222222222222222222222.222
2222222222222222222222222222.222
................................
................................
................................
2222.222222222222222222222222222
................................
................................
................................
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorth0,sprites.dungeon.stairSouth,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight3,sprites.dungeon.floorLightMoss,sprites.builtin.forestTiles0,sprites.castle.tileGrass2,sprites.swamp.swampTile0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
