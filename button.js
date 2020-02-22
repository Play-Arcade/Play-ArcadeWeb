//var renderer = PIXI.autoDetectRenderer(800.600);
var app = new PIXI.Application({width: 800,height: 600});
app.renderer.backgroundColor = 0xffffff;
document.body.appendChild(app.view);
app.renderer.resize(window.innerWidth, window.innerHeight);
// create the root of the scene graph
var stage = new PIXI.Container();

//images
var solutionbutton = PIXI.Texture.from('images/nav/solution.svg');
var visionbutton = PIXI.Texture.from('images/nav/vision.svg');
var joinusbutton = PIXI.Texture.from('images/nav/joinus.svg');
var storybutton = PIXI.Texture.from('images/nav/story.svg');
var milestonebutton = PIXI.Texture.from('images/nav/milestones.svg');


//*****************************FRAMES******************* */

var f1 = PIXI.Texture.from('images/nav/1.svg');
var f2 = PIXI.Texture.from('images/nav/2.svg');
var f3 = PIXI.Texture.from('images/nav/3.svg');
var f4 = PIXI.Texture.from('images/nav/4.svg');
var f5 = PIXI.Texture.from('images/nav/5.svg');

var frame1=new PIXI.Sprite(f1);
frame1.x=0;
frame1.y=60;


var frame2=new PIXI.Sprite(f2);
frame2.x=0;
frame2.y=60;


var frame3=new PIXI.Sprite(f3);
frame3.x=0;
frame3.y=60;


var frame4=new PIXI.Sprite(f4);
frame4.x=0;
frame4.y=60;


var frame5=new PIXI.Sprite(f5);
frame5.x=0;
frame5.y=60;



/*var message = new PIXI.Text('Solution');
    message.x = 60;
    message.y = 0;*/

    var noop = function () {
    console.log('click');
    app.stage.removeChild(frame2,frame4,frame5,frame3);
    app.stage.addChild(frame1);};

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
    buttonvi.click=function(){app.stage.removeChild(frame1,frame5,frame3,frame4);app.stage.addChild(frame2)}
    app.stage.addChild(buttonvi);
buttonvi.tap=function(){app.stage.removeChild(boov);app.stage.addChild(booov)};

var buttonst=new PIXI.Sprite(storybutton);
buttonst.buttonMode=true;
buttonst.position.x=385;
buttonst.position.y=0;
buttonst.interactive=true;
app.stage.addChild(buttonst);
buttonst.click=function(){app.stage.removeChild(frame2,frame1,frame5,frame4);app.stage.addChild(frame3);};

var buttonju=new PIXI.Sprite(joinusbutton);
buttonju.buttonMode=true;
buttonju.position.x=470;
buttonju.position.y=0;
buttonju.interactive=true;
app.stage.addChild(buttonju);
buttonju.click=function(){app.stage.removeChild(frame2,frame1,frame3,frame5);app.stage.addChild(frame4);};

var buttonmi=new PIXI.Sprite(milestonebutton);
buttonmi.buttonMode=true;
buttonmi.position.x=545;
buttonmi.position.y=0;
buttonmi.interactive=true;
app.stage.addChild(buttonmi);
buttonmi.click=function(){app.stage.removeChild(frame2,frame1,frame3,frame4);app.stage.addChild(frame5);};