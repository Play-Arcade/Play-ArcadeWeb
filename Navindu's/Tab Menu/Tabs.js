class Tabs {
  constructor(app) {
    this.app = app;
  }

  render() {
    //renders all the icons/tab-buttons

    //------------Vision --------------
    //icon
    this.visionIcon = PIXI.Sprite.from(
      this.app.loader.resources.vision.texture
    );
    this.visionIcon.scale.set(0.7);
    this.visionIcon.anchor.set(0.5);
    this.visionIcon.x = this.app.view.width / 2 - 220;
    this.visionIcon.y =
      this.app.loader.resources.vision.texture.height / 2 + 100;
    this.app.stage.addChild(this.visionIcon);
    //text
    this.visionText = new PIXI.Text("Vision");
    this.visionText.anchor.set(0.5);
    this.visionText.y =
      this.visionIcon.y - this.visionIcon.texture.height / 2 - 20;
    this.visionText.x = this.visionIcon.x;
    this.app.stage.addChild(this.visionText);

    //------------ Solution --------------
    //icon
    this.solutionIcon = PIXI.Sprite.from(
      this.app.loader.resources.solution.texture
    );
    this.solutionIcon.scale.set(0.7);
    this.solutionIcon.anchor.set(0.5);
    this.solutionIcon.x = this.app.view.width / 2 - 110;
    this.solutionIcon.y =
      this.app.loader.resources.vision.texture.height / 2 + 100;
    this.app.stage.addChild(this.solutionIcon);
    //text
    this.solutionText = new PIXI.Text("Solution");
    this.solutionText.anchor.set(0.5);
    this.solutionText.y =
      this.solutionIcon.y - this.solutionIcon.texture.height / 2 - 20;
    this.solutionText.x = this.solutionIcon.x;
    this.app.stage.addChild(this.solutionText);

    //------------ Story --------------
    //icon
    this.storyIcon = PIXI.Sprite.from(this.app.loader.resources.story.texture);
    this.storyIcon.anchor.set(0.5);
    this.storyIcon.scale.set(0.7);
    this.storyIcon.x = this.app.view.width / 2;
    this.storyIcon.y =
      this.app.loader.resources.vision.texture.height / 2 + 100;
    this.app.stage.addChild(this.storyIcon);

    //text
    this.storyText = new PIXI.Text("Story");
    this.storyText.anchor.set(0.5);
    this.storyText.y =
      this.storyIcon.y - this.storyIcon.texture.height / 2 - 20;
    this.storyText.x = this.storyIcon.x;
    this.app.stage.addChild(this.storyText);

    //------------ Milestones --------------
    //icon
    this.milestonesIcon = PIXI.Sprite.from(
      this.app.loader.resources.milestones.texture
    );
    this.milestonesIcon.anchor.set(0.5);
    this.milestonesIcon.scale.set(0.7);
    this.milestonesIcon.x = this.app.view.width / 2 + 110;
    this.milestonesIcon.y =
      this.app.loader.resources.vision.texture.height / 2 + 100;
    this.app.stage.addChild(this.milestonesIcon);

    //text
    this.milestonesText = new PIXI.Text("Milestones");
    this.milestonesText.anchor.set(0.5);
    this.milestonesText.y =
      this.milestonesIcon.y - this.milestonesIcon.texture.height / 2 - 20;
    this.milestonesText.x = this.milestonesIcon.x;
    this.app.stage.addChild(this.milestonesText);

    //------------ Join Us --------------
    //icon
    this.joinUsIcon = PIXI.Sprite.from(
      this.app.loader.resources.joinUs.texture
    );
    this.joinUsIcon.anchor.set(0.5);
    this.joinUsIcon.scale.set(0.7);
    this.joinUsIcon.x = this.app.view.width / 2 + 220;
    this.joinUsIcon.y =
      this.app.loader.resources.vision.texture.height / 2 + 100;
    this.app.stage.addChild(this.joinUsIcon);

    //text
    this.joinUsText = new PIXI.Text("Join Us");
    this.joinUsText.anchor.set(0.5);
    this.joinUsText.y =
      this.joinUsIcon.y - this.joinUsIcon.texture.height / 2 - 20;
    this.joinUsText.x = this.joinUsIcon.x;
    this.app.stage.addChild(this.joinUsText);

    //----------------------------------------------------------

    //Hide all except the vision text on initial render
    this.joinUsText.visible = false;
    this.milestonesText.visible = false;
    this.storyText.visible = false;
    this.solutionText.visible = false;

    this.visionFrame = PIXI.Sprite.from(
      this.app.loader.resources.visionFrame.texture
    );
    this.visionFrame.scale.set(0.7);
    this.visionFrame.anchor.set(0.5, 0);
    this.visionFrame.x = this.app.view.width / 2;
    this.visionFrame.y = 220;
    this.app.stage.addChild(this.visionFrame);

    this.solutionFrame = PIXI.Sprite.from(
      this.app.loader.resources.solutionFrame.texture
    );
    this.solutionFrame.scale.set(0.7);
    this.solutionFrame.anchor.set(0.5, 0);
    this.solutionFrame.x = this.app.view.width / 2;
    this.solutionFrame.y = 220;
    this.app.stage.addChild(this.solutionFrame);
  }

  tabClick(tab) {}
}
