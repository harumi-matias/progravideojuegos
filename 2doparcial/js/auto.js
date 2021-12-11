var cursors, sprite;
var movimiento = 300;
var giro = 200;

var game = new Phaser.Game(500, 600, Phaser.CANVAS, 'Auto', {preload: preload, create: create, update: update});

function preload(){
    game.load.audio('inicio',['sounds/arranque.mp3']);
    game.load.audio('turbo',['sounds/arranque.mp3']);
    game.load.image('auto', 'sprites/moto.png');
    game.load.image('fondo', 'fondos/parking.jpeg');
}

// Agregar fisicas, agrega peso al objeto para que vaya con la gravedad y detecte inercia, coliciones,etc.
function create(){
    game.physics.startSystem(Phaser.physics,'ARCADE')
    
    game.add.sprite(0,0,'fondo');
    sprite = game.add.sprite(350, 140, 'auto');
    sprite.anchor.setTo(0.5, 0.5); //cambia el punto de ancla del objeto, en este caso el carro para que gire desde el centro

    game.physics.enable(sprite); // habilitar las físicas
    sprite.body.collideWorldBounds = true; //evita que se salga del escenario

    cursors = game.input.keyboard.createCursorKeys(); //agregar las teclas en este caso son las flechas del teclado

    inicio = game.add.audio('inicio');
    inicio.volume = 0.01; //valor del volumen que va de 0-1 donde 1 es el 100% del volumen

    arranque = game.add.audio('turbo');
    arranque.volume = 0.01;

}

function update(){
    sprite.body.velocity.x = 0; 
    sprite.body.velocity.y = 0;
    sprite.body.angularVelocity = 0; // es la que permite que se mueva el carro

    if (cursors.left.isDown){sprite.body.angularVelocity = -giro;
    inicio.play();
    }
    else if (cursors.right.isDown){sprite.body.angularVelocity = giro;
    inicio.play();
    };

    if (cursors.up.isDown){sprite.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(sprite.angle, movimiento)
    )
    arranque.play();
}
    else {arranque.stop();};
}