
var app = new PIXI.Application({width: 800,height: 1169});
app.renderer.backgroundColor = 0xffffff;
document.body.appendChild(app.view);
// create the root of the scene graph
var stage = new PIXI.Container();

var arc=PIXI.Texture.from('images/frame1.svg');
var arcade = new PIXI.Sprite(arc);

arcade.x=0;
arcade.y=0;
app.stage.addChild(arcade);
// *****************************FRAMES*******************

var f1 = PIXI.Texture.from('images/nav/1.svg');
var f2 = PIXI.Texture.from('images/nav/2.svg');
var f3 = PIXI.Texture.from('images/nav/3t.svg');
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

// ***************FRAME 2********************

var frame2=new PIXI.Sprite(f2);
frame2.x=0;
frame2.y=110;

var reqac=PIXI.Texture.from('images/ra.svg');
var card=PIXI.Texture.from('images/pc.svg');
var play=PIXI.Texture.from('images/player.svg');
var build=PIXI.Texture.from('images/bt.svg');
var buildert=PIXI.Texture.from('images/bta.svg');
var builderc=PIXI.Texture.from('images/bc.svg');
var playerin=PIXI.Texture.from('images/pina.svg');

var ra= new PIXI.Sprite(reqac);
var cards=new PIXI.Sprite(card);
var player=new PIXI.Sprite(play);
var playerinactive= new PIXI.Sprite(playerin);

var builder=new PIXI.Sprite(build);
var buildercard= new PIXI.Sprite(builderc);
var buildertab=new PIXI.Sprite(buildert);

playerinactive.x=300;
playerinactive.y=50;
playerinactive.buttonMode=true;
playerinactive.interactive=true;
playerinactive.click=function(){frame2.addChild(cards,builder,player);frame2.removeChild(buildertab);};
playerinactive.tap=function(){frame2.addChild(cards,builder,player);frame2.removeChild(buildertab);};

buildercard.x=200;
buildercard.y=150;

buildertab.x=400;
buildertab.y=50;
buildertab.buttonMode=true;
buildertab.interactive=true;

ra.buttonMode=true;
ra.x=300;
ra.y=500;
ra.interactive=true;

cards.x=200;
cards.y=150;

player.buttonMode=true;
player.interactive=true;
player.x=300;
player.y=50;
player.click=function(){frame2.addChild(cards,builder);frame2.removeChild(buildertab);};
player.tap=function(){frame2.addChild(cards,builder);frame2.removeChild(buildertab);};

builder.buttonMode=true;
builder.interactive=true;
builder.x=400;
builder.y=50;
builder.click=function(){frame2.addChild(buildercard,buildertab,playerinactive);frame2.removeChild(cards,player);};
builder.tap=function(){frame2.addChild(buildercard,buildertab,playerinactive);frame2.removeChild(cards,player);};

frame2.addChild(ra,cards,player,builder);


// ************************FRAME 3*****************
var frame3=new PIXI.Sprite(f3);
frame3.x=10;
frame3.y=110;

var box=new PIXI.Texture.from('images/textbox1.svg');
var box2=new PIXI.Texture.from('images/textbox12.svg');
var textbox1= new PIXI.Sprite(box);
var textbox2= new PIXI.Sprite(box2);

textbox1.x=250;
textbox1.y=-40;

textbox2.x=250;
textbox2.y=250;

frame3.addChild(textbox1,textbox2);

// ****************FRAME 4 *********************
var frame4=new PIXI.Sprite(f4);
frame4.x=0;
frame4.y=110;

var map=new PIXI.Texture.from('images/map.svg');

var mapp=new PIXI.Sprite(map);

mapp.x=180;
mapp.y=-8;

frame4.addChild(mapp);
// ****************FRAME 5*********************
var frame5=new PIXI.Sprite(f5);
frame5.x=0;
frame5.y=110;

var join=new PIXI.Texture.from('images/ju.svg');

var ju=new PIXI.Sprite(join);

ju.x=200;
ju.y=0;

frame5.addChild(ju);

// ******************************** NAVIGATION BAR ********************

var visionbutton = PIXI.Texture.from('images/nav/vision.svg');
var solutionbutton = PIXI.Texture.from('images/nav/solution.svg');
var storybutton = PIXI.Texture.from('images/nav/story.svg');
var milestonebutton = PIXI.Texture.from('images/nav/milestones.svg');
var joinusbutton = PIXI.Texture.from('images/nav/joinus.svg');


var buttonvi= new PIXI.Sprite(visionbutton);
buttonvi.buttonMode=true;
buttonvi.position.x=215;
buttonvi.position.y=50;
buttonvi.interactive=true;
buttonvi.click=function(){app.stage.removeChild(frame2,frame5,frame3,frame4);app.stage.addChild(frame1)};
app.stage.addChild(buttonvi);
buttonvi.tap=function(){app.stage.removeChild(frame2,frame5,frame3,frame4);app.stage.addChild(frame1)};





var button = new PIXI.Sprite(solutionbutton);
button.buttonMode = true;
button.position.x = 300;
button.position.y = 50;
button.interactive = true;
button.click=function(){app.stage.removeChild(frame1,frame5,frame3,frame4);app.stage.addChild(frame2)};
app.stage.addChild(button);
button.tap=function(){app.stage.removeChild(frame1,frame5,frame3,frame4);app.stage.addChild(frame2)};

var buttonst=new PIXI.Sprite(storybutton);
buttonst.buttonMode=true;
buttonst.position.x=385;
buttonst.position.y=50;
buttonst.interactive=true;
app.stage.addChild(buttonst);
buttonst.click=function(){app.stage.removeChild(frame2,frame1,frame5,frame4);app.stage.addChild(frame3);};
buttonst.tap=function(){app.stage.removeChild(frame2,frame1,frame5,frame4);app.stage.addChild(frame3);};


var buttonmi=new PIXI.Sprite(milestonebutton);
buttonmi.buttonMode=true;
buttonmi.position.x=470;
buttonmi.position.y=50;
buttonmi.interactive=true;
app.stage.addChild(buttonmi);
buttonmi.click=function(){app.stage.removeChild(frame2,frame1,frame3,frame5);app.stage.addChild(frame4);};
buttonmi.tap=function(){app.stage.removeChild(frame2,frame1,frame3,frame5);app.stage.addChild(frame4);};

var buttonju=new PIXI.Sprite(joinusbutton);
buttonju.buttonMode=true;
buttonju.position.x=545;
buttonju.position.y=50;
buttonju.interactive=true;
app.stage.addChild(buttonju);
buttonju.click=function(){app.stage.removeChild(frame2,frame1,frame3,frame4);app.stage.addChild(frame5);};
buttonju.tap=function(){app.stage.removeChild(frame2,frame1,frame3,frame4);app.stage.addChild(frame5);};





