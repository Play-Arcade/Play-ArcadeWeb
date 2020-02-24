function renderTabContent(app) {
  //=====================================  VISION  SCREEN =======================================
  visionScreen = new PIXI.Container();
  visionScreen.visible = false;
  app.stage.addChild(visionScreen);
  //sharejoy text
  shareJoy = PIXI.Sprite.from(app.loader.resources.sharejoy.texture);
  shareJoy.x = app.view.width / 2;
  shareJoy.y = 250;
  shareJoy.scale.set(1.7);
  shareJoy.anchor.set(0.5, 0);
  visionScreen.addChild(shareJoy);

  //hero image
  visionHero = PIXI.Sprite.from(app.loader.resources.visionHero.texture);
  visionHero.x = app.view.width / 2;
  visionHero.y = 430;
  visionHero.scale.set(0.7);
  visionHero.anchor.set(0.5, 0);
  visionScreen.addChild(visionHero);

  //text
  visionSubText = PIXI.Sprite.from(app.loader.resources.visionText.texture);
  visionSubText.x = app.view.width / 2;
  visionSubText.y = 825;
  visionSubText.anchor.set(0.5, 0);
  visionScreen.addChild(visionSubText);

  //get updates
  getUpdatesButton = PIXI.Sprite.from(
    app.loader.resources.getUpdatesButton.texture,
  );
  getUpdatesButton.x = app.view.width / 2;
  getUpdatesButton.y = 910;
  getUpdatesButton.scale.set(0.65);
  getUpdatesButton.anchor.set(0.5, 0);
  visionScreen.addChild(getUpdatesButton);

  //=====================================  SOLUTION - PLAYER - SCREEN =======================================
  solutionPlayerScreen = new PIXI.Container();
  solutionPlayerScreen.visible = false;
  app.stage.addChild(solutionPlayerScreen);

  //player Active btn
  playerActive = PIXI.Sprite.from(app.loader.resources.playerActive.texture);
  playerActive.x = app.view.width / 2;
  playerActive.y = 320;
  playerActive.scale.set(0.5);
  playerActive.anchor.set(1, 0);
  solutionPlayerScreen.addChild(playerActive);
  //Builder deactive btn
  builderDeactive = PIXI.Sprite.from(
    app.loader.resources.builderDeactive.texture,
  );
  builderDeactive.x = app.view.width / 2;
  builderDeactive.y = 320;
  builderDeactive.scale.set(0.5);
  builderDeactive.anchor.set(0, 0);
  builderDeactive.buttonMode = true;
  builderDeactive.interactive = true;
  builderDeactive.on("pointerdown", function() {
    //PLAYER - BUILDER SWITCH
    hideAllContent(app);
    solutionBuilderScreen.visible = true;
  });
  solutionPlayerScreen.addChild(builderDeactive);
  //Request access btn
  requestAccess = PIXI.Sprite.from(app.loader.resources.requestAccess.texture);
  requestAccess.x = app.view.width / 2;
  requestAccess.y = 860;
  requestAccess.scale.set(0.5);
  requestAccess.anchor.set(0.5, 0);
  solutionPlayerScreen.addChild(requestAccess);

  //Cards
  solutionCards = PIXI.Sprite.from(app.loader.resources.solutionCards.texture);
  solutionCards.x = app.view.width / 2;
  solutionCards.y = 400;
  solutionCards.scale.set(0.5);
  solutionCards.anchor.set(0.5, 0);
  solutionPlayerScreen.addChild(solutionCards);

  //=====================================  SOLUTION - BUILDER - SCREEN =======================================
  solutionBuilderScreen = new PIXI.Container();
  solutionBuilderScreen.visible = false;
  app.stage.addChild(solutionBuilderScreen);

  //player Active btn
  builderActive = PIXI.Sprite.from(app.loader.resources.builderActive.texture);
  builderActive.x = app.view.width / 2;
  builderActive.y = 320;
  builderActive.scale.set(0.5);
  builderActive.anchor.set(0, 0);
  solutionBuilderScreen.addChild(builderActive);
  //Builder deactive btn
  playerDeactive = PIXI.Sprite.from(
    app.loader.resources.playerDeactive.texture,
  );
  playerDeactive.x = app.view.width / 2;
  playerDeactive.y = 320;
  playerDeactive.scale.set(0.5);
  playerDeactive.anchor.set(1, 0);
  playerDeactive.buttonMode = true;
  playerDeactive.interactive = true;
  playerDeactive.on("pointerdown", function() {
    //PLAYER - BUILDER SWITCH
    hideAllContent(app);
    solutionPlayerScreen.visible = true;
  });
  solutionBuilderScreen.addChild(playerDeactive);
  //Request access btn
  requestAccess = PIXI.Sprite.from(app.loader.resources.requestAccess.texture);
  requestAccess.x = app.view.width / 2;
  requestAccess.y = 860;
  requestAccess.scale.set(0.5);
  requestAccess.anchor.set(0.5, 0);
  solutionBuilderScreen.addChild(requestAccess);
  //Cards
  builderCard = PIXI.Sprite.from(app.loader.resources.builderCard.texture);
  builderCard.x = app.view.width / 2;
  builderCard.y = 400;
  builderCard.scale.set(0.5);
  builderCard.anchor.set(0.5, 0);
  solutionBuilderScreen.addChild(builderCard);

  //=====================================  STORY  SCREEN =======================================
  storyScreen = new PIXI.Container();
  storyScreen.visible = false;
  app.stage.addChild(storyScreen);
  //early days card
  earlyDays = PIXI.Sprite.from(app.loader.resources.earlyDays.texture);
  earlyDays.x = app.view.width / 2;
  earlyDays.y = 300;
  earlyDays.scale.set(0.6);
  earlyDays.anchor.set(0.5, 0);
  storyScreen.addChild(earlyDays);
  //summer card
  summer = PIXI.Sprite.from(app.loader.resources.summer.texture);
  summer.x = app.view.width / 2;
  summer.y = 850;
  summer.scale.set(0.6);
  summer.anchor.set(0.5, 0);
  storyScreen.addChild(summer);

  //=====================================  MILESTONES  SCREEN =======================================
  milestonesScreen = new PIXI.Container();
  milestonesScreen.visible = false;
  app.stage.addChild(milestonesScreen);
  //milestones map text
  mapGroup = PIXI.Sprite.from(app.loader.resources.mapGroup.texture);
  mapGroup.x = app.view.width / 2 - 30;
  mapGroup.y = 220;
  mapGroup.scale.set(0.7);
  mapGroup.anchor.set(0.5, 0);
  milestonesScreen.addChild(mapGroup);

  //=====================================  JOINUS  SCREEN =======================================
  joinusScreen = new PIXI.Container();
  joinusScreen.visible = false;
  app.stage.addChild(joinusScreen);
  //milestones map text
  joinusCard = PIXI.Sprite.from(app.loader.resources.joinusCard.texture);
  joinusCard.x = app.view.width / 2;
  joinusCard.y = 340;
  joinusCard.scale.set(0.6);
  joinusCard.anchor.set(0.5, 0);
  joinusScreen.addChild(joinusCard);

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
}
