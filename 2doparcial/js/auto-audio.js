var cursors, sprite;
var movimiento = 300;
var giro = 200;

var game = new Phaser.Game(600, 600, Phaser.CANVAS, 'Coche', {preload: preload, create: create, update: update});

function preload(){
    game.load.image('auto', 'sprites/auto.png');
    game.load.image('fondo', 'fondos/car.jpeg')

    //Precarga de sonidos
    game.load.audio('inicio',['audiofx/auto_llantas_chirriando.ogg', 'audiofx/auto_llantas_chirriando.mp3']);

    game.load.audio('arranque',['audiofx/auto_carreras1.ogg', 'audiofx/auto_carreras1.mp3']);
}

// Agregar fisicas, agrega peso al objeto para que vaya con la gravedad y detecte inercia, coliciones,etc.
function create(){
    game.physics.startSystem(Phaser.physics,'ARCADE')
    
    sprite = game.add.sprite(450, 80, 'auto');
    sprite.anchor.setTo(0.5, 0.5); //Cambia el punto de ancla del objeto, en este caso el carro para que gire desde el centro

    game.physics.enable(sprite); // Habilitar las físicas
    sprite.body.collideWorldBounds = true; //Evita que se salga del escenario

    cursors = game.input.keyboard.createCursorKeys(); //Agregar las teclas en este caso son las flechas del teclado

    //Agregar los sonidos
    inicio = game.add.audio('inicio');
    inicio.volume = 0.01; //valor del volumen que va de 0-1 donde 1 es el 100% del volumen

    arranque = game.add.audio('arranque');
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