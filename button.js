
var app = new PIXI.Application({width: 800,height: 750});
app.renderer.backgroundColor = 0xffffff;
document.body.appendChild(app.view);
app.renderer.resize(window.innerWidth, window.innerHeight);
// create the root of the scene graph
var stage = new PIXI.Container();

// *****************************FRAMES*******************

var f1 = PIXI.Texture.from('images/nav/1.svg');
var f2 = PIXI.Texture.from('images/nav/2.svg');
var f3 = PIXI.Texture.from('images/nav/3.svg');
var f4 = PIXI.Texture.from('images/nav/4.svg');
var f5 = PIXI.Texture.from('images/nav/5.svg');


// ********************* FRAME 1 *********************
var ss=PIXI.Texture.from('images/ss.svg');
var img=PIXI.Texture.from('images/pic.svg');
var txt=PIXI.Texture.from('images/text.svg');
var up=PIXI.Texture.from('images/up.svg');

var frame1=new PIXI.Sprite(f1);
frame1.x=0;
frame1.y=110;
app.stage.addChild(frame1);

var upp=new PIXI.Sprite(up);
upp.buttonMode=true
upp.x=300;
upp.y=400;
upp.interactive=true;


var noop = function () {
    console.log('click');
    app.stage.removeChild(frame2,frame4,frame5,frame3);
    app.stage.addChild(frame1);
    var testt= new PIXI.Sprite(ss);
    var pic= new PIXI.Sprite(img);
    var txtt=new PIXI.Sprite(txt);
    txtt.x=200;txtt.y=350;
    pic.x=200;pic.y=150;
    testt.y=50
    testt.x=300
    frame1.addChild(testt,pic,txtt,upp);
};


// ***************FRAME 2********************

var frame2=new PIXI.Sprite(f2);
frame2.x=0;
frame2.y=110;

var reqac=PIXI.Texture.from('images/ra.svg');
var ra= new PIXI.Sprite(reqac);
ra.buttonMode=true;
ra.x=300;
ra.y=400;
ra.interactive=true;
frame2.addChild(ra);


// ************************FRAME 3*****************
var frame3=new PIXI.Sprite(f3);
frame3.x=0;
frame3.y=110;

// ****************FRAME 4 *********************
var frame4=new PIXI.Sprite(f4);
frame4.x=0;
frame4.y=110;

// ****************FRAME 5*********************
var frame5=new PIXI.Sprite(f5);
frame5.x=0;
frame5.y=110;


// ******************************** NAVIGATION BAR ********************

var solutionbutton = PIXI.Texture.from('images/nav/solution.svg');
var visionbutton = PIXI.Texture.from('images/nav/vision.svg');
var joinusbutton = PIXI.Texture.from('images/nav/joinus.svg');
var storybutton = PIXI.Texture.from('images/nav/story.svg');
var milestonebutton = PIXI.Texture.from('images/nav/milestones.svg');

var button = new PIXI.Sprite(solutionbutton);
    button.buttonMode = true;

    button.position.x = 215;
    button.position.y = 50;


    button.interactive = true;

button.tap = noop;
button.click = noop;
app.stage.addChild(button);

var buttonvi= new PIXI.Sprite(visionbutton);
    buttonvi.buttonMode=true;
    //buttonvi.anchor.set(0.5);
    buttonvi.position.x=300;
    buttonvi.position.y=50;
    buttonvi.interactive=true;
    buttonvi.tap=noop;
    buttonvi.mouseover = function(){app.stage.addChild(messagevi);};
    buttonvi.mouseout = function(){app.stage.removeChild(messagevi);}
    buttonvi.click=function(){app.stage.removeChild(frame1,frame5,frame3,frame4);app.stage.addChild(frame2)}
    app.stage.addChild(buttonvi);
buttonvi.tap=function(){app.stage.removeChild(boov);app.stage.addChild(booov)};

var buttonst=new PIXI.Sprite(storybutton);
buttonst.buttonMode=true;
buttonst.position.x=385;
buttonst.position.y=50;
buttonst.interactive=true;
app.stage.addChild(buttonst);
buttonst.click=function(){app.stage.removeChild(frame2,frame1,frame5,frame4);app.stage.addChild(frame3);};

var buttonju=new PIXI.Sprite(joinusbutton);
buttonju.buttonMode=true;
buttonju.position.x=470;
buttonju.position.y=50;
buttonju.interactive=true;
app.stage.addChild(buttonju);
buttonju.click=function(){app.stage.removeChild(frame2,frame1,frame3,frame5);app.stage.addChild(frame4);};

var buttonmi=new PIXI.Sprite(milestonebutton);
buttonmi.buttonMode=true;
buttonmi.position.x=545;
buttonmi.position.y=50;
buttonmi.interactive=true;
app.stage.addChild(buttonmi);
buttonmi.click=function(){app.stage.removeChild(frame2,frame1,frame3,frame4);app.stage.addChild(frame5);};

