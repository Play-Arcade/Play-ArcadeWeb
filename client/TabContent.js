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
  development.anchor.set(1, 0);
  joinusScreen.addChild(development);
  //alphaAccess Button
  alphaAccess = PIXI.Sprite.from(app.loader.resources.alphaAccess.texture);
  alphaAccess.x = app.view.width / 2 + 40;
  alphaAccess.y = 1550;
  alphaAccess.anchor.set(0);
  joinusScreen.addChild(alphaAccess);

  //================================================================================================
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
