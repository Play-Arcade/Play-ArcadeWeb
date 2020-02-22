function renderTabs(app) {
  //join us icon
  joinUsIcon = PIXI.Sprite.from(app.loader.resources.vision.texture);
  joinUsIcon.anchor.set(0.5);
  joinUsIcon.scale.set(1);
  joinUsIcon.x = app.view.width / 2 - 200;
  joinUsIcon.y =
    app.loader.resources.logo.texture.height +
    app.loader.resources.vision.texture.height / 2 +
    50;
  app.stage.addChild(joinUsIcon);
}
