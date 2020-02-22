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
    .add("vision", "Vision.svg")
    .add("milestones", "Milestones.svg")
    .add("story", "Story.svg")
    .add("joinUs", "Join Us.svg")
    .add("solution", "Solution.svg")
    .add("visionFrame", "vision-frame.svg")
    .add("solutionFrame", "solution-frame.svg");
  app.loader.load();

  //loader onComplete
  app.loader.onComplete.add(function(e) {
    console.log(app.loader.resources);

    //Tab Icons -------------------------------
    tabs = new Tabs(app);
    tabs.render();
  });
}
