var tt=function tapbut(frameno){
    if (frameno==1){
        app.stage.removeChild(frame2,frame5,frame3,frame4);app.stage.addChild(frame1);
    }
    else if (frameno==2){
        app.stage.removeChild(frame1,frame5,frame3,frame4);app.stage.addChild(frame2);
    }
    else if (frameno==3){
        app.stage.removeChild(frame2,frame5,frame1,frame4);app.stage.addChild(frame3);
    }
    else if (frameno==4){
        app.stage.removeChild(frame2,frame5,frame3,frame1);app.stage.addChild(frame4);
    }
    else if (frameno==5){
        app.stage.removeChild(frame2,frame1,frame3,frame4);app.stage.addChild(frame5);
    }
    else{
        app.stage.removeChild(frame2,frame5,frame3,frame4);app.stage.addChild(frame1);
    }
}