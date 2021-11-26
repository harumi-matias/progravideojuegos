var game = new Phaser.Game(536,322, Phaser.AUTO, '', {preload: preload, create: create, update: update});

var player; 

// Gráficos, sprite Spritesheets, audio, todo lo que necesitemos para el juego
function preload(){
    game.load.spritesheet('halo', 'sprites/halo.png', 65, 82);
    game.load.image('fondo', 'fondos/fondo3.jpg');
}; 

// Colocamos todo lo que precargamos en el escenario para que sean visibles
function create(){
    // Agregar imagen de fondo
    game.add.sprite(0,0,'fondo');

    //Colocar al heroe en el escenario
    player = game.add.sprite(game.width / 15, game.height / 1.3, 'halo'); 

    //Animaciones (el 10 es la velocidad de los cuadros por segundo y true es para que sea en loop)
    player.animations.add('der', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 10,true);

    //Asignar las animaciones a las teclas es importante tomar en cuenta la K en mayúscula para que si funcione la instrucción
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.A);


};
    
// Permite actualizar el juego para tener moviemientos, animaciones, etc.
function update(){
    if (derecha.isDown){
        player.x += 1;
        player.animations.play('der');
    }
    else {
        player.animations.stop();
        player.frame = 0;
    }
};