function renderTabContent(app) {
  //=====================================  VISION  SCREEN =======================================
  visionScreen = new PIXI.Container();
  visionScreen.visible = false;
  app.stage.addChild(visionScreen);

  //sharejoy text
  shareJoy = PIXI.Sprite.from(app.loader.resources.sharejoy.texture);
  shareJoy.x = app.view.width / 2;
  shareJoy.y = 430;
  shareJoy.scale.set(0.8);
  shareJoy.anchor.set(0.5, 0);
  visionScreen.addChild(shareJoy);
  //hero image
  visionHero = PIXI.Sprite.from(app.loader.resources.visionHero.texture);
  visionHero.x = app.view.width / 2;
  visionHero.y = 620;
  visionHero.scale.set(1.6);
  visionHero.anchor.set(0.5, 0);
  visionScreen.addChild(visionHero);
  //text
  visionSubText = PIXI.Sprite.from(app.loader.resources.visionText.texture);
  visionSubText.x = app.view.width / 2;
  visionSubText.y = 1500;
  visionSubText.anchor.set(0.5, 0);
  visionScreen.addChild(visionSubText);
  //get updates
  getUpdatesButton = PIXI.Sprite.from(
    app.loader.resources.getUpdatesButton.texture,
  );
  getUpdatesButton.x = app.view.width / 2;
  getUpdatesButton.y = 1650;
  getUpdatesButton.scale.set(1);
  getUpdatesButton.anchor.set(0.5, 0);
  getUpdatesButton.buttonMode=true;
  getUpdatesButton.interactive=true;
  visionScreen.addChild(getUpdatesButton);

  //=====================================  SOLUTION - PLAYER - SCREEN =======================================
  solutionPlayerScreen = new PIXI.Container();
  solutionPlayerScreen.visible = false;
  app.stage.addChild(solutionPlayerScreen);

  //player Active btn
  playerActive = PIXI.Sprite.from(app.loader.resources.playerActive.texture);
  playerActive.x = app.view.width / 2;
  playerActive.y = 410;
  playerActive.anchor.set(0.5);
  playerActive.buttonMode = true;
  playerActive.interactive = true;
  playerActive.on("pointerdown", function() {
    //PLAYER - BUILDER SWITCH
    hideAllContent(app);
    solutionBuilderScreen.visible = true;
    app.view.height = 3000; // fixes pixi auto resizing canvas
  });
  solutionPlayerScreen.addChild(playerActive);

  //Request access btn
  requestAccess = PIXI.Sprite.from(app.loader.resources.requestAccess.texture);
  requestAccess.x = app.view.width / 2;
  requestAccess.y = 1700;
  requestAccess.scale.set(1);
  requestAccess.anchor.set(0.5, 0);
  solutionPlayerScreen.addChild(requestAccess);
  //Cards
  solutionCards = PIXI.Sprite.from(app.loader.resources.solutionCards.texture);
  solutionCards.x = app.view.width / 2;
  solutionCards.y = 560;
  solutionCards.scale.set(1.4);
  solutionCards.anchor.set(0.5, 0);
  solutionPlayerScreen.addChild(solutionCards);

  //=====================================  SOLUTION - BUILDER - SCREEN =======================================
  solutionBuilderScreen = new PIXI.Container();
  solutionBuilderScreen.visible = false;
  app.stage.addChild(solutionBuilderScreen);
  //Maker active btn
  makerActive = PIXI.Sprite.from(app.loader.resources.makerActive.texture);
  makerActive.x = app.view.width / 2;
  makerActive.y = 410;
  makerActive.anchor.set(0.5);
  makerActive.buttonMode = true;
  makerActive.interactive = true;
  makerActive.on("pointerdown", function() {
    //PLAYER - BUILDER SWITCH
    hideAllContent(app);
    solutionPlayerScreen.visible = true;
    app.view.height = 3000; // fixes pixi auto resizing canvas
  });
  solutionBuilderScreen.addChild(makerActive);

  solutionBuilderScreen.addChild(makerActive);
  //Request access btn
  requestAccess = PIXI.Sprite.from(app.loader.resources.requestAccess.texture);
  requestAccess.x = app.view.width / 2;
  requestAccess.y = 1750;
  requestAccess.scale.set(1);
  requestAccess.anchor.set(0.5);
  solutionBuilderScreen.addChild(requestAccess);
  //Cards
  builderCard = PIXI.Sprite.from(app.loader.resources.builderCard.texture);
  builderCard.x = app.view.width / 2;
  builderCard.y = 560;
  builderCard.scale.set(1.4);
  builderCard.anchor.set(0.5, 0);
  solutionBuilderScreen.addChild(builderCard);

  //=====================================  STORY  SCREEN =======================================
  storyScreen = new PIXI.Container();
  storyScreen.visible = false;
  app.stage.addChild(storyScreen);
  //story card
  earlyDaysCard = PIXI.Sprite.from(app.loader.resources.earlyDaysCard.texture);
  earlyDaysCard.x = app.view.width / 2;
  earlyDaysCard.y = 350;
  earlyDaysCard.scale.set(1.7);
  earlyDaysCard.anchor.set(0.5, 0);
  storyScreen.addChild(earlyDaysCard);

  //=====================================  MILESTONES /GOALS SCREEN =======================================
  milestonesScreen = new PIXI.Container();
  milestonesScreen.visible = false;
  app.stage.addChild(milestonesScreen);
  //milestones map text
  mapGroup = PIXI.Sprite.from(app.loader.resources.mapGroup.texture);
  mapGroup.x = app.view.width / 2 - 30;
  mapGroup.y = 230;
  mapGroup.scale.set(1.2);
  mapGroup.anchor.set(0.5, 0);
  milestonesScreen.addChild(mapGroup);

  //=====================================  JOINUS  SCREEN =======================================
  joinusScreen = new PIXI.Container();
  joinusScreen.visible = false;
  app.stage.addChild(joinusScreen);
  //Row 1
  //News Letter Button
  newsletter = PIXI.Sprite.from(app.loader.resources.newsletter.texture);
  newsletter.x = app.view.width / 2 - 40;
  newsletter.y = 400;
  newsletter.anchor.set(1, 0);
  newsletter.buttonMode=true;
  newsletter.interactive=true;
  joinusScreen.addChild(newsletter);
  //Crowd Fund Button
  crowdfund = PIXI.Sprite.from(app.loader.resources.crowdfund.texture);
  crowdfund.x = app.view.width / 2 + 40;
  crowdfund.y = 400;
  crowdfund.anchor.set(0);
  joinusScreen.addChild(crowdfund);

  //ROw 2
  //News Letter Button
  partner = PIXI.Sprite.from(app.loader.resources.partner.texture);
  partner.x = app.view.width / 2 - 40;
  partner.y = 980;
  partner.anchor.set(1, 0);
  joinusScreen.addChild(partner);
  //Investor Button
  investor = PIXI.Sprite.from(app.loader.resources.investor.texture);
  investor.x = app.view.width / 2 + 40;
  investor.y = 980;
  investor.anchor.set(0);
  joinusScreen.addChild(investor);

  //ROw 3
  //News Letter Button
  development = PIXI.Sprite.from(app.loader.resources.development.texture);
  development.x = app.view.width / 2 - 40;
  development.y = 1550;
 // development.anchor.set(1, 0);
  joinusScreen.addChild(development);
  //alphaAccess Button
  alphaAccess = PIXI.Sprite.from(app.loader.resources.alphaAccess.texture);
  alphaAccess.x = app.view.width / 2 + 40;
  alphaAccess.y = 1550;
  alphaAccess.anchor.set(0);
  joinusScreen.addChild(alphaAccess);

  //================================================================================================
  
  //=====================================  NEWS LETTER =============================================

  newsletterScreen = new PIXI.Container();
  newsletterScreen.visible = false;
  
  app.stage.addChild(newsletterScreen);

  newsletterhead = new PIXI.Sprite.from(app.loader.resources.newsletterhead.texture);
  newslettertext1= new PIXI.Sprite.from(app.loader.resources.newslettertext1.texture);
  newslettertext2=new PIXI.Sprite.from(app.loader.resources.newslettertext2.texture);
  continuee =new PIXI.Sprite.from(app.loader.resources.continue.texture);
  iam=new PIXI.Sprite.from(app.loader.resources.iam.texture);
  studentActive=new PIXI.Sprite.from(app.loader.resources.studentActive.texture);
  studentInactive=new PIXI.Sprite.from(app.loader.resources.studentInactive.texture);
  proActive=new PIXI.Sprite.from(app.loader.resources.proActive.texture);
  proInactive=new PIXI.Sprite.from(app.loader.resources.proInactive.texture);
  close=new PIXI.Sprite.from(app.loader.resources.close.texture);

  newsletterhead.x=app.stage.width/4+200; 
  newsletterhead.scale.set(1.5);

  newslettertext1.y=newsletterhead.y+100;

  newslettertext2.y=newslettertext1.y+200;

  iam.y=newslettertext2.y+300;

  proInactive.x=iam.x+150;
  proInactive.y=iam.y-30;
  proInactive.buttonMode=true;
  proInactive.interactive=true;

  proActive.x=iam.x+150;
  proActive.y=iam.y-30;
  proActive.buttonMode=true;
  proActive.interactive=true;
  proActive.visible=false;

  studentActive.x=proInactive.x+424;
  studentActive.y=iam.y-30;
  studentActive.buttonMode=true;
  studentActive.interactive=true;

  studentInactive.x=proInactive.x+424;
  studentInactive.y=iam.y-30;
  studentInactive.buttonMode=true;
  studentInactive.interactive=true;
  studentInactive.visible=false;

  continuee.y=iam.y+150;
  continuee.x=app.stage.width/2-50;
  continuee.buttonMode=true;
  continuee.interactive=true;

  close.x=app.stage.width-30;
  close.y=newsletterhead.y;
  close.buttonMode=true;
  close.interactive=true;

  newsletterScreen.addChild(newsletterhead,newslettertext1,newslettertext2,continuee,iam,close,proInactive,studentActive,proActive,studentInactive);

  studentActive.on("pointerdown", function(e){studentInactive.visible=false;studentActive.visible=true;proInactive.visible=true;});
  studentInactive.on("pointerdown", function(e){studentInactive.visible=false;studentActive.visible=true;proInactive.visible=true;});
  proInactive.on("pointerdown", function(e){proActive.visible=true;proInactive.visible=false;studentInactive.visible=true;});
  proActive.on("pointerdown", function(e){proActive.visible=true;proInactive.visible=false;studentInactive.visible=true;});

  

  //--------------------------------------------SCREEN2----------------------------------------
  newsletterScreen2 = new PIXI.Container();
  newsletterScreen2.visible = false;
  app.stage.addChild(newsletterScreen2);

  newsletterhead2 = new PIXI.Sprite.from(app.loader.resources.newsletterhead.texture);
  intrested=new PIXI.Sprite.from(app.loader.resources.intrested.texture);

  partnerr=new PIXI.Sprite.from(app.loader.resources.partnerr.texture);
  partnerInactive=new PIXI.Sprite.from(app.loader.resources.partnerInactive.texture);

  investorr=new PIXI.Sprite.from(app.loader.resources.investorr.texture);
  investorInactive=new PIXI.Sprite.from(app.loader.resources.investorInactive.texture);

  developer=new PIXI.Sprite.from(app.loader.resources.developer.texture);
  developerInactive=new PIXI.Sprite.from(app.loader.resources.developerInactive.texture);

  player=new PIXI.Sprite.from(app.loader.resources.player.texture);
  playerInactive=new PIXI.Sprite.from(app.loader.resources.playerInactive.texture)

  close2=new PIXI.Sprite.from(app.loader.resources.close.texture);
  tap=new PIXI.Sprite.from(app.loader.resources.tap.texture);
  join=new PIXI.Sprite.from(app.loader.resources.join.texture);

  newsletterhead2.x=app.stage.width/4+200; 
  newsletterhead2.scale.set(2);
  
  intrested.y=newsletterhead2.y+200;
  intrested.x=newsletterhead2.x/2+100;

  partnerr.y=intrested.y+50;
  partnerr.x=500;
  partnerr.buttonMode=true;
  partnerr.interactive=true;
  partnerInactive.x=partnerr.x;
  partnerInactive.y=partnerr.y;
  partnerInactive.buttonMode=true
  partnerInactive.interactive=true;
  partnerInactive.visible=false;
  partnerr.on("pointerdown", function(e){partnerInactive.visible=true;partnerr.visible=false});
  partnerInactive.on("pointerdown", function(e){partnerInactive.visible=false;partnerr.visible=true});

  investorr.y=intrested.y+50;
  investorr.x=800;
  investorr.buttonMode=true;
  investorr.interactive=true;
  investorInactive.x=investorr.x;
  investorInactive.y=investorr.y;
  investorInactive.buttonMode=true;
  investorInactive.interactive=true;
  investorInactive.visible=false;
  investorr.on("pointerdown", function(e){investorInactive.visible=true;investorr.visible=false});
  investorInactive.on("pointerdown", function(e){investorInactive.visible=false;investorr.visible=true});

  developer.y=intrested.y+50;
  developer.x=1100;
  developer.buttonMode=true;
  developer.interactive=true;
  developerInactive.x=developer.x;
  developerInactive.y=developer.y;
  developerInactive.buttonMode=true;
  developerInactive.interactive=true;
  developerInactive.visible=false;
  developer.on("pointerdown", function(e){developerInactive.visible=true;developer.visible=false});
  developerInactive.on("pointerdown", function(e){developerInactive.visible=false;developer.visible=true});

  player.y=intrested.y+50;
  player.x=1400;
  player.buttonMode=true;
  player.interactive=true;
  playerInactive.x=player.x;
  playerInactive.y=player.y;
  playerInactive.buttonMode=true;
  playerInactive.interactive=true;
  playerInactive.visible=false;
  player.on("pointerdown", function(e){playerInactive.visible=true;player.visible=false});
  playerInactive.on("pointerdown", function(e){playerInactive.visible=false;player.visible=true});

  tap.x=intrested.x-300;
  tap.y=player.y+300;

  join.x=app.stage.width/4+350;
  join.y=tap.y+150;
  join.buttonMode=true;
  join.interactive=true;

  close2.x=app.stage.width-30;
  close2.y=newsletterhead.y;
  close2.buttonMode=true;
  close2.interactive=true;

  newsletterScreen2.addChild(newsletterhead2,intrested,partnerr,developer,investorr,player,close2,tap,join,partnerInactive,developerInactive,investorInactive,playerInactive);

  newsletter.on("pointerdown", function(e){
    hideAllContent(app);
    newsletterScreen.visible=true;
    visionIcon.visible=false;
    solutionIcon.visible=false;
    storyIcon.visible=false;
    milestonesIcon.visible=false;
    joinUsIcon.visible=false;
    joinusFrame.visible=false;
    joinUsText.visible=false; 
  });

  continuee.on("pointerdown", function(e){
    newsletterScreen.visible=false;
    newsletterScreen2.visible=true;
  })

  close.on("pointerdown", function(e){
    newsletterScreen.visible=false;
    visionIcon.visible=true;
    solutionIcon.visible=true;
    storyIcon.visible=true;
    milestonesIcon.visible=true;
    joinUsIcon.visible=true;
    joinusFrame.visible=true;
    joinUsText.visible=true;
    renderScreen(app,"joinus");
  });

  close2.on("pointerdown", function(e){
    newsletterScreen2.visible=false;
    visionIcon.visible=true;
    solutionIcon.visible=true;
    storyIcon.visible=true;
    milestonesIcon.visible=true;
    joinUsIcon.visible=true;
    joinusFrame.visible=true;
    joinUsText.visible=true;
    renderScreen(app,"joinus"); 
  });
}
function hideAllContent(app) {
  app.view.height = 1200;
  visionScreen.visible = false;
  solutionPlayerScreen.visible = false;
  solutionBuilderScreen.visible = false;
  milestonesScreen.visible = false;
  storyScreen.visible = false;
  joinusScreen.visible = false;
}

function renderScreen(app, screen) {
  switch (screen) {
    case "vision":
      hideAllContent(app);
      visionScreen.visible = true;
      break;
    case "solution":
      hideAllContent(app);
      solutionPlayerScreen.visible = true;
      break;
    case "story":
      hideAllContent(app);
      storyScreen.visible = true;
      app.view.height = 2000;
      break;
    case "milestones":
      hideAllContent(app);
      milestonesScreen.visible = true;
      break;
    case "joinus":
      hideAllContent(app);
      joinusScreen.visible = true;
      break;
  }
  app.view.height = 3000;
}
