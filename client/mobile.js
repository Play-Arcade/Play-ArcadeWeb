function resizeToMobile(app, e) {
  console.log(app);
  if (window.innerWidth <= 650 && !resized) {
    //runs if window width is larger than 650

    resized = true;

    //remove the frame SVGs
    app.stage.removeChild(
      visionFrame,
      solutionFrame,
      storyFrame,
      milestonesFrame,
      joinusFrame,
    );

    //render the outline SVG
    outline = PIXI.Sprite.from(app.loader.resources.mobileOutline.texture);
    outline.x = app.view.width / 2;
    outline.y = app.loader.resources.vision.texture.height / 2 + 275;
    outline.anchor.set(0.5);
    outline.scale.set(1.8);
    app.stage.addChild(outline);

    //Scale the tab icons
    visionIcon.scale.set(1.8);
    solutionIcon.scale.set(1.8);
    milestonesIcon.scale.set(1.8);
    storyIcon.scale.set(1.8);
    joinUsIcon.scale.set(1.8);

    //Adjust the icon X values
    visionIcon.x = app.view.width / 2 - 700;
    solutionIcon.x = app.view.width / 2 - 350;
    milestonesIcon.x = app.view.width / 2 + 350;
    joinUsIcon.x = app.view.width / 2 + 700;

    //Adjust the icon Y values
    visionIcon.y = app.loader.resources.vision.texture.height / 2 + 275;
    solutionIcon.y = app.loader.resources.vision.texture.height / 2 + 275;
    milestonesIcon.y = app.loader.resources.vision.texture.height / 2 + 275;
    storyIcon.y = app.loader.resources.vision.texture.height / 2 + 275;
    joinUsIcon.y = app.loader.resources.vision.texture.height / 2 + 275;

    //center  the selected Tab Text
    visionText.x = app.view.width / 2;
    solutionText.x = app.view.width / 2;
    storyText.x = app.view.width / 2;
    milestonesText.x = app.view.width / 2;
    joinUsText.x = app.view.width / 2;

    //scale the selected tab text
    visionText.scale.set(2.5);
    solutionText.scale.set(2.5);
    milestonesText.scale.set(2.5);
    storyText.scale.set(2.5);
    joinUsText.scale.set(2.5);

    //resize and render tab content
    resizeTabContentForMobile(app);

    console.log(resized);
  }
}

//function to resize tab content for mobile screen sizes
function resizeTabContentForMobile(app) {
  // =========================  VISION SCREEN  ===============================
  ///top text
  shareJoy.y += 300;
  shareJoy.scale.set(1.3);
  //hero
  visionHero.y += 500;
  visionHero.scale.set(1.9);
  //subtext
  visionSubText.texture = app.loader.resources.visionTextMobile.texture;
  visionSubText.y += 650;
  visionSubText.scale.set(1.8);
  //button
  getUpdatesButton.y += 950;
  getUpdatesButton.scale.set(2);
}
