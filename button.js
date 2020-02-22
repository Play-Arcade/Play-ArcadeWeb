//var renderer = PIXI.autoDetectRenderer(800.600);
var app = new PIXI.Application({width: 800,height: 600});
app.renderer.backgroundColor = 0xffffff;
document.body.appendChild(app.view);


// create the root of the scene graph
var stage = new PIXI.Container();

 /*create a background...
var background = PIXI.Sprite.fromImage('img/a.jpg');
background.width = renderer.width;
background.height = renderer.height;*/

// add background to stage...
//stage.addChild(background);

// create some textures from an image path
var solutionbutton = PIXI.Texture.fromImage('images/nav/solution.svg');
var boo = PIXI.Texture.fromImage('images/nav/boo.svg');
var booo = PIXI.Texture.fromImage('images/nav/booo.svg');
var joinusbutton = PIXI.Texture.fromImage('images/nav/joinus.svg');
var storybutton = PIXI.Texture.fromImage('images/nav/story.svg');
var milestonebutton = PIXI.Texture.fromImage('images/nav/milestones.svg');
var visionbutton = PIXI.Texture.fromImage('images/nav/vision.svg');

var boov=new PIXI.Sprite(boo);
boov.x=0;
boov.y=60;
app.stage.addChild(boov);

var booov=new PIXI.Sprite(booo);
booov.x=0;
booov.y=60;
app.stage.addChild(boov);

var message = new PIXI.Text('Solution');
    message.x = 60;
    message.y = 0;
       
var messagevi = new PIXI.Text('Vision');
    messagevi.x = 500;
    messagevi.y = 0;
var noop = function () {
    console.log('click');
    app.stage.removeChild(booov);
    app.stage.addChild(boov);
};
var button = new PIXI.Sprite(solutionbutton);
    button.buttonMode = true;

    //button.anchor.set(0.5);

    button.position.x = 215;
    button.position.y = 0;

    // make the button interactive...
    button.interactive = true;

button.pointerup=noop; // just to test
button.tap = noop;
button.click = noop;
button.mouseover = function(){app.stage.addChild(message);
};
button.mouseout = function(){app.stage.removeChild(message);}
app.stage.addChild(button);

var buttonvi= new PIXI.Sprite(visionbutton);
    buttonvi.buttonMode=true;
    //buttonvi.anchor.set(0.5);
    buttonvi.position.x=300;
    buttonvi.position.y=0;
    buttonvi.interactive=true;
    buttonvi.tap=noop;
    buttonvi.mouseover = function(){app.stage.addChild(messagevi);
    };
    buttonvi.mouseout = function(){app.stage.removeChild(messagevi);}
    buttonvi.click=function(){app.stage.removeChild(boov);app.stage.addChild(booov)}
    app.stage.addChild(buttonvi);