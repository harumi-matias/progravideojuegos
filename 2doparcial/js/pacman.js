var game = new Phaser.Game(980,1260, Phaser.AUTO, '', {preload: preload, create: create, update: update});

var player; 

// Gráficos, sprite Spritesheets, audio, todo lo que necesitemos para el juego
function preload(){
    game.load.spritesheet('fantasmarojo', 'sprites/fantasma_rojoch.png', 67, 67);
    game.load.spritesheet('fantasmarosa', 'sprites/fantasma_rosa.png', 67, 67);
    game.load.spritesheet('pacman', 'sprites/pacman.png', 67, 67);
    game.load.image('fondo','fondos/pacman.jpg');
    //Precarga de sonidos
    game.load.audio('inicio',['sounds/inicio.ogg', 'sounds/inicio.mp3']);
    game.load.audio('arranque',['sounds/go.ogg', 'sounds/go.mp3']);
}; 

// Colocamos todo lo que precargamos en el escenario para que sean visibles
function create(){
    // Agregar imagen de fondo
    game.add.sprite(0,0,'fondo');

    //Colocar al personaje en el escenario
    player = game.add.sprite(game.width / 15, game.height / 2.15, 'fantasmarojo');

    player2 = game.add.sprite(game.width / 1.2, game.height / 3.4, 'fantasmarosa');
    
    player3 = game.add.sprite(game.width / 1.95, game.height / 3.4, 'pacman');

    //Animaciones (el 10 es la velocidad de los cuadros por segundo y true es para que sea en loop)
    player.animations.add('der', [0, 1, 2, 3], 5,true);
    player.animations.add('izq', [0, 1, 2, 3], 5,true);
    player.animations.add('arr', [0, 1, 2, 3], 5,true);
    player.animations.add('aba', [0, 1, 2, 3], 5,true);

    player2.animations.add('der', [0, 1, 2, 3], 5,true);
    player2.animations.add('izq', [0, 1, 2, 3], 5,true);
    player2.animations.add('arr', [0, 1, 2, 3], 5,true);
    player2.animations.add('aba', [0, 1, 2, 3], 5,true);

    player3.animations.add('der', [0, 1, 2], 8,true);
    player3.animations.add('izq', [3, 4, 5], 8,true);
    player3.animations.add('arr', [6, 7, 8], 8,true);
    player3.animations.add('aba', [9, 10, 11], 8,true);

    //Asignar las animaciones a las teclas es importante tomar en cuenta la K en mayúscula para que si funcione la instrucción
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    arriba = game.input.keyboard.addKey(Phaser.Keyboard.W);
    abajo = game.input.keyboard.addKey(Phaser.Keyboard.S);
    //player2
    derecha2 = game.input.keyboard.addKey(Phaser.Keyboard.L);
    izquierda2 = game.input.keyboard.addKey(Phaser.Keyboard.J);
    arriba2 = game.input.keyboard.addKey(Phaser.Keyboard.I);
    abajo2 = game.input.keyboard.addKey(Phaser.Keyboard.K);
    //player3
    cursors = game.input.keyboard.createCursorKeys();

    //Agregar los sonidos
    inicio = game.add.audio('inicio');
    inicio.volume = 0.01; //valor del volumen que va de 0-1 donde 1 es el 100% del volumen

    arranque = game.add.audio('arranque');
    arranque.volume = 0.01;
};
    
// Permite actualizar el juego para tener moviemientos, animaciones, etc.
function update(){
    if (derecha.isDown){
        player.x += 1;
        player.animations.play('der');
        inicio.play();
    }
    else if (izquierda.isDown){
        player.x -= 1;
        player.animations.play('izq');
        inicio.play();
    }
    else if (arriba.isDown){
        player.y -= 1;
        player.animations.play('arr');
        inicio.play();
    }
    else if (abajo.isDown){
        player.y += 1;
        player.animations.play('aba');
        inicio.play();
    }
    else {
        player.animations.stop();
        player.frame = 0;

    }
    //player2
    if (derecha2.isDown){
        player2.x += 1;
        player2.animations.play('der');
    }
    else if (izquierda2.isDown){
        player2.x -= 1;
        player2.animations.play('izq');
    }
    else if (arriba2.isDown){
        player2.y -= 1;
        player2.animations.play('arr');
    }
    else if (abajo2.isDown){
        player2.y += 1;
        player2.animations.play('aba');
    }
    else {
        player2.animations.stop();
        player2.frame = 0;
    }
      //player3
      if (cursors.right.isDown){
        player3.x += 1;
        player3.animations.play('der');
        arranque.play()
    }
    else if (cursors.left.isDown){
        player3.x -= 1;
        player3.animations.play('izq');
        arranque.play()
    }
    else if (cursors.up.isDown){
        player3.y -= 1;
        player3.animations.play('arr');
        arranque.play()
    }
    else if (cursors.down.isDown){
        player3.y += 1;
        player3.animations.play('aba');
        arranque.play()
    }
    else {
        player3.animations.stop();
        player3.frame = 0;
    }
};