var game = new Phaser.Game(713,400, Phaser.AUTO, '', {preload: preload, create: create, update: update});

var player; 

// Gráficos, sprite Spritesheets, audio, todo lo que necesitemos para el juego
function preload(){
    game.load.spritesheet('nina', 'sprites/nina.png', 60, 65.4);
    game.load.image('fondo', 'fondos/background-02.png');
}; 

// Colocamos todo lo que precargamos en el escenario para que sean visibles
function create(){
    // Agregar imagen de fondo
    game.add.sprite(0,0,'fondo');

    //Colocar al heroe en el escenario
    player = game.add.sprite(game.width / 15, game.height / 1.3, 'nina'); 

    //Animaciones (el 10 es la velocidad de los cuadros por segundo y true es para que sea en loop)
    player.animations.add('der', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 20,true);
    player.animations.add('run', [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], 25, true);
    player.animations.add('jump', [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69], 20,true);
    player.animations.add('izq', [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89], 20,true);


    //Asignar las animaciones a las teclas es importante tomar en cuenta la K en mayúscula para que si funcione la instrucción
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.A);
    correr = game.input.keyboard.addKey(Phaser.Keyboard.D);
    brincar = game.input.keyboard.addKey(Phaser.Keyboard.W);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.S);

};
    
// Permite actualizar el juego para tener moviemientos, animaciones, etc.
function update(){
    if (derecha.isDown){
        player.x += 1;
        player.animations.play('der');
    }
    else if (correr.isDown){
        player.x += 1.5;
        player.animations.play('run');
    }
    else if (brincar.isDown){
        player.x += 1.5;
        player.animations.play('jump');
    }
    else if (izquierda.isDown){
        player.x -= 1;
        player.animations.play('izq');
    }
    else {
        player.animations.stop();
        player.frame = 0;
    }
};