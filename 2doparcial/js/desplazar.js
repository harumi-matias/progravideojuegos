

// La variable "game" nos sirve  para una instancia del juego
var game = new Phaser.Game(713,400, Phaser.AUTO, '', {preload: preload, create: create, update: update});

var player; 

// El juego se divide en tres fases: precarga (preload), crear (create) y actualizar (update)
// Gráficos, sprite Spritesheets, audio, todo lo que necesitemos para el juego
// Con "preload" cargamos en la memoria de la computadora los elementos que vamos a usar

function preload(){
    game.load.spritesheet('dino', 'sprites/dino.png', 101, 70);
    game.load.image('montana', 'fondos/fondo2_.png');
}; 

// Colocamos todo lo que precargamos en el escenario para que sean visibles
// La función "create" nos permite colocar los objetos en el escenario

function create(){

//Agregar imagen de fondo que se desplaza

    fondo = game.add.tileSprite(0,0, 713, 400, 'montana');

//Colocar al heroe en el escenario

    player = game.add.sprite(game.width / 2, 310, 'dino'); 

    
//Animaciones los corchetes contienen los fotogramas (el 10 es la velocidad de los cuadros por segundo y true es para que sea en loop)
    player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10,true);
    player.animations.add('jump', [10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ,20, 21], 10, true);
    player.animations.add('dead', [22, 23, 24, 25, 26, 27, 28, 29], 10, true);
    player.animations.add('run', [30, 31, 32, 33, 34, 35, 36, 37], 10, true);
    
//Asignar las animaciones a las teclas es importante tomar en cuenta la K en mayúscula para que si funcione la instrucción
    
    caminar = game.input.keyboard.addKey(Phaser.Keyboard.A);
    brincar = game.input.keyboard.addKey(Phaser.Keyboard.S);
    muerto = game.input.keyboard.addKey(Phaser.Keyboard.D);
    correr = game.input.keyboard.addKey(Phaser.Keyboard.Q);
};
    
// Permite actualizar el juego para tener moviemientos, animaciones, etc.
function update(){
// SI oprimimos la tecla D el fondo se va mover en el eje de las x un pixel

    if (caminar.isDown){
        fondo.tilePosition.x -= 1.5;
        player.animations.play('walk');
    }
// DE OTRA MANERA SI oprimimos la tecla A el fonfo se va mover menos un pixel en el eje de las x
    else if (brincar.isDown){
        fondo.tilePosition.x -= 2;
        player.animations.play('jump');
    }

    else if (muerto.isDown){
        fondo.tilePosition.x -= 1;
        player.animations.play('dead');
    }

    else if (correr.isDown){
        fondo.tilePosition.x -= 3;
        player.animations.play('run');
    }  

// DE OTRA MANERA si no se esta apretando va estar detenido en el fotograma elegido (128)
    else {
        player.animations.stop();
        player.frame = 128;
    }
};