var game = new Phaser.Game(980,226, Phaser.AUTO, '', {preload: preload, create: create, update: update});

var player; 

// Gráficos, sprite Spritesheets, audio, todo lo que necesitemos para el juego
function preload(){
    game.load.spritesheet('luigi', 'sprites/characters.png', 25.5, 36);
    game.load.image('fondo', 'fondos/bg-1-1.png');
    intro = game.load.audio('inicio',['sounds/mario-bros.mp3']);
    game.load.audio('salto',['sounds/jump.mp3']);
}; 

// Colocamos todo lo que precargamos en el escenario para que sean visibles
function create(){
    // Agregar imagen de fondo
    game.add.sprite(0,0,'fondo');

    //Colocar al heroe en el escenario
    player = game.add.sprite(game.width / 10, game.height / 1.4, 'luigi'); 

    //Animaciones (el 10 es la velocidad de los cuadros por segundo y true es para que sea en loop)
    player.animations.add('der', [0, 1, 2, 3], 10,true);
    player.animations.add('izq', [4, 5, 6, 7], 10, true);
    player.animations.add('vol', [8, 9, 10, 11, 12], 10,true);
    player.animations.add('vol2', [13, 14, 15, 16, 17], 10,true);
    player.animations.add('brincar', [18, 19, 20, 21], 1,true);
    player.animations.add('brincar2', [22, 23, 24, 25], 1,true);

    //Agregar los sonidos
    inicio = game.add.audio('inicio');
    inicio.volume = 0.1; //valor del volumen que va de 0-1 donde 1 es el 100% del volumen

    salto = game.add.audio('salto');
    salto.volume = 0.1;


    //Asignar las animaciones a las teclas es importante tomar en cuenta la K en mayúscula para que si funcione la instrucción
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    volar = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    volar1 = game.input.keyboard.addKey(Phaser.Keyboard.W);
    volar2 = game.input.keyboard.addKey(Phaser.Keyboard.X);
    volar22 = game.input.keyboard.addKey(Phaser.Keyboard.C);
    brincar = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    
};

    
// Permite actualizar el juego para tener moviemientos, animaciones, etc.
function update(){
    if (derecha.isDown){
        player.x += 2;
        player.animations.play('der');

    }
    else if (izquierda.isDown){
        player.x -= 2;
        player.animations.play('izq');

    }
    else if (volar.isDown){
        player.x + 2;
        player.y -= 1
        player.animations.play('vol');

    }
    else if (volar1.isDown){
        player.x += 2;
        player.animations.play('vol');
   
    }
    else if (volar2.isDown){
        player.x - 2;
        player.y += 1;
        player.animations.play('vol2');
    }
    else if (volar22.isDown){
        player.x -= 2;
        player.animations.play('vol2');
    }
    else if (brincar.isDown){
        player.x + 4;
        player.animations.play('brincar');
        salto.play();
    }
    else {
        player.animations.stop();
        player.frame = 0;
    }
};