function init() {
  let app;
  let logo;
  let joinUsIcon;
  let screen3;
  let screen4;

  app = new PIXI.Application({
    height: 1000,
    backgroundColor: 0xffffff
  });

  document.getElementById("canvas-container").appendChild(app.view);

  //preload assets
  app.loader.baseUrl = "resources";
  app.loader
    .add("vision", "vision/Vision.svg")
    .add("visionFrame", "vision/vision-frame.svg")
    .add("solution", "solution/Solution.svg")
    .add("solutionFrame", "solution/solution-frame.svg")
    .add("story", "story/Story.svg")
    .add("storyFrame", "story/story-frame.svg")
    .add("milestones", "milestones/Milestones.svg")
    .add("milestonesFrame", "milestones/milestones-frame.svg")
    .add("joinUs", "joinus/Join Us.svg")
    .add("joinUsFrame", "joinus/joinus-frame.svg");
  app.loader.load();

  //loader onComplete
  app.loader.onComplete.add(function(e) {
    console.log(app.loader.resources);

    //Tab Icons -------------------------------
    renderTabs(app);
  });
}
