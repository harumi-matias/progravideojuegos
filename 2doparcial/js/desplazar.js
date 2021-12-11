// La variable "game" nos sirve  para una instancia del juego
var game = new Phaser.Game(980,551, Phaser.AUTO, '', {preload: preload, create: create, update: update});

var player; 

// El juego se divide en tres fases: precarga (preload), crear (create) y actualizar (update)
// Gráficos, sprite Spritesheets, audio, todo lo que necesitemos para el juego
// Con "preload" cargamos en la memoria de la computadora los elementos que vamos a usar

function preload(){
    game.load.spritesheet('heroe', 'sprites/sonic.png', 89, 98);
    game.load.image('capa8', 'fondos/1sky.png');
    game.load.image('capa7', 'fondos/2jungle_bg.png');
    game.load.image('capa6', 'fondos/3trees&bushes.png');
    game.load.image('capa5', 'fondos/4lianas.png');
    game.load.image('capa4', 'fondos/5fireflys.png');
    game.load.image('capa3', 'fondos/6grass&road.png');
    game.load.image('capa2', 'fondos/7tree_face.png');


}; 

// Colocamos todo lo que precargamos en el escenario para que sean visibles
// La función "create" nos permite colocar los objetos en el escenario

function create(){

//Agregar imagen de fondo que se desplaza

    fondo8 = game.add.tileSprite(0,0, 981, 551, 'capa8');
    fondo7 = game.add.tileSprite(0,0, 981, 551, 'capa7')
 
    fondo6 = game.add.tileSprite(0,0, 981, 551, 'capa6');
    fondo5 = game.add.tileSprite(0,0, 981, 551, 'capa5');
    fondo4 = game.add.tileSprite(0,0, 981, 551, 'capa4');
    fondo3 = game.add.tileSprite(0,0, 981, 551, 'capa3');
    fondo2 = game.add.tileSprite(0,0, 981, 551, 'capa2');

    //Colocar al heroe en el escenario
    player = game.add.sprite(game.width / 2, 300, 'heroe'); 
    
//Animaciones los corchetes contienen los fotogramas (el 10 es la velocidad de los cuadros por segundo y true es para que sea en loop)
    player.animations.add('der', [0, 1, 2, 3, 4], 10,true);
    player.animations.add('brin', [5, 6, 7, 8, 9], 10, true);
    player.animations.add('izq', [11, 12, 13, 14, 15], 10, true);
    player.animations.add('brinc2', [16, 17, 18, 19, 20], 10, true);

    
//Asignar las animaciones a las teclas es importante tomar en cuenta la K en mayúscula para que si funcione la instrucción

    cursors = game.input.keyboard.createCursorKeys();
};
    
// Permite actualizar el juego para tener moviemientos, animaciones, etc.
function update(){
// SI oprimimos la tecla D el fondo se va mover en el eje de las x un pixel

    if (cursors.right.isDown){
        fondo8.tilePosition.x -= 0.5;
        fondo7.tilePosition.x -= 1;
        fondo6.tilePosition.x -= 1.5;
        fondo5.tilePosition.x -= 2;
        fondo4.tilePosition.x -= 2.3;
        fondo3.tilePosition.x -= 3;
        fondo2.tilePosition.x -= 3.2;
        player.animations.play('der');
    }
    if (cursors.up.isDown){
        fondo8.tilePosition.x -= 0.5;
        fondo7.tilePosition.x -= 1;
        fondo6.tilePosition.x -= 1.5;
        fondo5.tilePosition.x -= 2;
        fondo4.tilePosition.x -= 2.3;
        fondo3.tilePosition.x -= 3;
        fondo2.tilePosition.x -= 3.2;
        player.animations.play('brin');
    }
// DE OTRA MANERA SI oprimimos la tecla A el fonfo se va mover menos un pixel en el eje de las x
    else if (cursors.left.isDown){
        fondo8.tilePosition.x += 0.5;
        fondo7.tilePosition.x += 1;
        fondo6.tilePosition.x += 1.5;
        fondo5.tilePosition.x += 2;
        fondo4.tilePosition.x += 2.3;
        fondo3.tilePosition.x += 3;
        fondo2.tilePosition.x += 3.2;
        player.animations.play('izq');
    }
    else if (cursors.down.isDown){
        fondo8.tilePosition.x += 0.5;
        fondo7.tilePosition.x += 1;
        fondo6.tilePosition.x += 1.5;
        fondo5.tilePosition.x += 2;
        fondo4.tilePosition.x += 2.3;
        fondo3.tilePosition.x += 3;
        fondo2.tilePosition.x += 3.2;
        player.animations.play('brinc2');
    }

// DE OTRA MANERA si no se esta apretando va estar detenido en el fotograma elegido (128)
    else {
        player.animations.stop();
        player.frame = 128;
    }
};