function renderTabContent(app, screen) {
  let visionScreen;
  let solutionScreen;

  //=====================================  VISION  SCREEN =======================================
  visionScreen = new PIXI.Container();
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
    app.loader.resources.getUpdatesButton.texture
  );
  getUpdatesButton.x = app.view.width / 2;
  getUpdatesButton.y = 910;
  getUpdatesButton.scale.set(0.65);
  getUpdatesButton.anchor.set(0.5, 0);
  visionScreen.addChild(getUpdatesButton);

  //=====================================  SOLUTION  SCREEN =======================================
  solutionScreen = new PIXI.Container();
  //sharejoy text
  shareJoy = PIXI.Sprite.from(app.loader.resources.sharejoy.texture);
  shareJoy.x = app.view.width / 2;
  shareJoy.y = 250;
  shareJoy.scale.set(1.7);
  shareJoy.anchor.set(0.5, 0);
  solutionScreen.addChild(shareJoy);

  //================================================================================================
  //add screens to the stage
  app.stage.addChild(visionScreen);
  app.stage.addChild(solutionScreen);

  function hideScreens() {
    app.stage.removeChild(visionScreen);
    app.stage.removeChild(solutionScreen);
  }

  //render selected screen
  switch (screen) {
    case "vision":
      hideScreens();
      app.stage.addChild(visionScreen);
      break;

    case "solution":
      hideScreens();
      app.stage.addChild(solutionScreen);
      break;
  }
}
