function renderTabs(app) {
  //renders all the icons/tab-buttons

  //---------------------------- Vision -----------------------------
  //icon
  visionIcon = PIXI.Sprite.from(app.loader.resources.vision.texture);
  //visionIcon.scale.set(0.7);
  visionIcon.anchor.set(0.5);
  visionIcon.x = app.view.width / 2 - 500;
  visionIcon.y = app.loader.resources.vision.texture.height / 2 + 100;
  //click handler
  visionIcon.buttonMode = true;
  visionIcon.interactive = true;
  visionIcon.on("pointerdown", function(e) {
    hideAll();
    showTab("vision");
  });
  app.stage.addChild(visionIcon);
  //text
  visionText = new PIXI.Text("VISION");
  visionText.anchor.set(0.5);
  visionText.y = visionIcon.y - visionIcon.texture.height / 2 - 20;
  visionText.x = visionIcon.x;
  app.stage.addChild(visionText);
  //frame
  visionFrame = PIXI.Sprite.from(app.loader.resources.visionFrame.texture);
  //visionFrame.scale.set(0.7);
  visionFrame.anchor.set(0.5, 0);
  visionFrame.x = app.view.width / 2;
  visionFrame.y = 250;
  app.stage.addChild(visionFrame);

  //---------------------------- Solution ----------------------------
  //icon
  solutionIcon = PIXI.Sprite.from(app.loader.resources.solution.texture);
  solutionIcon.anchor.set(0.5);
  solutionIcon.x = app.view.width / 2 - 250;
  solutionIcon.y = app.loader.resources.vision.texture.height / 2 + 100;
  //click handler
  solutionIcon.buttonMode = true;
  solutionIcon.interactive = true;
  solutionIcon.on("pointerdown", function(e) {
    hideAll();
    showTab("solution");
  });
  app.stage.addChild(solutionIcon);
  //text
  solutionText = new PIXI.Text("SOLUTION");
  solutionText.anchor.set(0.5);
  solutionText.y = solutionIcon.y - solutionIcon.texture.height / 2 - 20;
  solutionText.x = solutionIcon.x;
  app.stage.addChild(solutionText);
  //frame
  solutionFrame = PIXI.Sprite.from(app.loader.resources.solutionFrame.texture);
  solutionFrame.anchor.set(0.5, 0);
  solutionFrame.x = app.view.width / 2;
  solutionFrame.y = 250;
  app.stage.addChild(solutionFrame);

  //---------------------------- Story ----------------------------
  //icon
  storyIcon = PIXI.Sprite.from(app.loader.resources.story.texture);
  storyIcon.anchor.set(0.5);
  storyIcon.x = app.view.width / 2;
  storyIcon.y = app.loader.resources.vision.texture.height / 2 + 100;
  //click handler
  storyIcon.buttonMode = true;
  storyIcon.interactive = true;
  storyIcon.on("pointerdown", function(e) {
    hideAll();
    showTab("story");
  });
  app.stage.addChild(storyIcon);
  //text
  storyText = new PIXI.Text("STORY");
  storyText.anchor.set(0.5);
  storyText.y = storyIcon.y - storyIcon.texture.height / 2 - 20;
  storyText.x = storyIcon.x;
  app.stage.addChild(storyText);
  //frame
  storyFrame = PIXI.Sprite.from(app.loader.resources.storyFrame.texture);
  storyFrame.anchor.set(0.5, 0);
  storyFrame.x = app.view.width / 2;
  storyFrame.y = 250;
  app.stage.addChild(storyFrame);

  //---------------------------- Milestones / goal----------------------------
  //icon
  milestonesIcon = PIXI.Sprite.from(app.loader.resources.milestones.texture);
  milestonesIcon.anchor.set(0.5);
  milestonesIcon.x = app.view.width / 2 + 250;
  milestonesIcon.y = app.loader.resources.vision.texture.height / 2 + 100;
  //click handler
  milestonesIcon.buttonMode = true;
  milestonesIcon.interactive = true;
  milestonesIcon.on("pointerdown", function(e) {
    hideAll();
    showTab("milestones");
  });
  app.stage.addChild(milestonesIcon);
  //text
  milestonesText = new PIXI.Text("GOALS");
  milestonesText.anchor.set(0.5);
  milestonesText.y = milestonesIcon.y - milestonesIcon.texture.height / 2 - 20;
  milestonesText.x = milestonesIcon.x;
  app.stage.addChild(milestonesText);
  //frame
  milestonesFrame = PIXI.Sprite.from(
    app.loader.resources.milestonesFrame.texture,
  );
  milestonesFrame.anchor.set(0.5, 0);
  milestonesFrame.x = app.view.width / 2;
  milestonesFrame.y = 250;
  app.stage.addChild(milestonesFrame);

  //---------------------------- Join Us ----------------------------
  //icon
  joinUsIcon = PIXI.Sprite.from(app.loader.resources.joinUs.texture);
  joinUsIcon.anchor.set(0.5);
  joinUsIcon.x = app.view.width / 2 + 500;
  joinUsIcon.y = app.loader.resources.vision.texture.height / 2 + 100;
  //click handler
  joinUsIcon.buttonMode = true;
  joinUsIcon.interactive = true;
  joinUsIcon.on("pointerdown", function(e) {
    hideAll();
    showTab("joinus");
  });
  app.stage.addChild(joinUsIcon);
  //text
  joinUsText = new PIXI.Text("JOIN US");
  joinUsText.anchor.set(0.5);
  joinUsText.y = joinUsIcon.y - joinUsIcon.texture.height / 2 - 20;
  joinUsText.x = joinUsIcon.x;
  app.stage.addChild(joinUsText);
  //frame
  joinusFrame = PIXI.Sprite.from(app.loader.resources.joinUsFrame.texture);
  joinusFrame.anchor.set(0.5, 0);
  joinusFrame.x = app.view.width / 2;
  joinusFrame.y = 250;
  app.stage.addChild(joinusFrame);

  //----------------------------------------------------------
  //Hide all except the vision text on initial render
  joinUsText.visible = false;
  milestonesText.visible = false;
  storyText.visible = false;
  solutionText.visible = false;

  //hide all the frames
  joinusFrame.visible = false;
  milestonesFrame.visible = false;
  storyFrame.visible = false;
  solutionFrame.visible = false;

  function hideAll() {
    //Hide all Texts and frame sprites
    visionText.visible = false;
    joinUsText.visible = false;
    milestonesText.visible = false;
    storyText.visible = false;
    solutionText.visible = false;

    visionFrame.visible = false;
    joinusFrame.visible = false;
    milestonesFrame.visible = false;
    storyFrame.visible = false;
    solutionFrame.visible = false;
  }
  function showTab(tab) {
    switch (tab) {
      case "vision":
        visionText.visible = true;
        visionFrame.visible = true;
        renderScreen(app, "vision");
        break;
      case "solution":
        solutionText.visible = true;
        solutionFrame.visible = true;
        renderScreen(app, "solution");
        break;
      case "story":
        storyText.visible = true;
        storyFrame.visible = true;
        renderScreen(app, "story");
        break;
      case "milestones":
        milestonesText.visible = true;
        milestonesFrame.visible = true;
        renderScreen(app, "milestones");
        break;
      case "joinus":
        joinUsText.visible = true;
        joinusFrame.visible = true;
        renderScreen(app, "joinus");
    }

    app.view.height = 3000;
  }
}
