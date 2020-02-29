function init() {
  let app;
  resized = false;
  app = new PIXI.Application({
    width: 2000,
    height: 6000,
    backgroundColor: 0xffffff,
  });

  document.getElementById("canvas-container").appendChild(app.view);

  //preload assets
  app.loader.baseUrl = "resources";
  app.loader
    //mobile elements
    .add("mobileOutline", "mobile/outline.svg")
    //vision screen
    .add("vision", "vision/Vision.svg")
    .add("visionFrame", "vision/vision-frame.svg")
    .add("sharejoy", "vision/sharejoy.svg")
    .add("visionHero", "vision/heroo.png")
    .add("visionText", "vision/text.svg")
    .add("getUpdatesButton", "vision/getUpdatesButton.png")
    .add("visionTextMobile", "vision/mobile/text.svg")
    //solution screen
    .add("solution", "solution/Solution.svg")
    .add("solutionFrame", "solution/solution-frame.svg")
    .add("solutionCards", "solution/cards.png")
    .add("playerActive", "solution/playerActive.svg")
    .add("makerActive", "solution/makerActive.svg")
    .add("requestAccess", "solution/requestAccess.png")
    .add("builderCard", "solution/builderCard.png")
    //story
    .add("story", "story/Story.svg")
    .add("storyFrame", "story/story-frame.svg")
    .add("earlyDaysCard", "story/earlyDays.png")
    //milestones
    .add("milestones", "milestones/Milestones.svg")
    .add("milestonesFrame", "milestones/milestones-frame.svg")
    .add("mapGroup", "milestones/map group.png")
    //joinus
    .add("joinUs", "joinus/Join Us.svg")
    .add("alphaAccess", "joinus/alphaAccess.png")
    .add("crowdfund", "joinus/crowdfund.png")
    .add("development", "joinus/development.png")
    .add("newsletter", "joinus/newsletter.png")
    .add("partner", "joinus/partnerwithus.png")
    .add("investor", "joinus/investor.png")
    .add("joinUsFrame", "joinus/joinus-frame.svg")
    //newsletter1
    .add("newsletterhead", "newsletter/step0/Newsletter.svg")
    .add("newslettertext1", "newsletter/step0/text.svg")
    .add("newslettertext2", "newsletter/step0/text2.svg")
    .add("continue", "newsletter/step0/continue.svg")
    .add("iam", "newsletter/step0/iam.svg")
    .add("tab", "newsletter/step0/tab.svg")
    .add("studentActive", "newsletter/step0/studentactive.svg")
    .add("studentInactive", "newsletter/step0/studentinactive.svg")
    .add("proActive", "newsletter/step0/proactive.svg")
    .add("proInactive", "newsletter/step0/proinactive.svg")
    .add("close", "newsletter/close.svg")
    //newsletter2
    .add("intrested", "newsletter/step1/intrested.svg")
    .add("partnerr", "newsletter/step1/Partner.svg")
    .add("partnerInactive", "newsletter/step1/PartnerIn.svg")
    .add("investorr", "newsletter/step1/Investor.svg")
    .add("investorInactive", "newsletter/step1/investorIn.svg")
    .add("developer", "newsletter/step1/Developer.svg")
    .add("developerInactive", "newsletter/step1/DeveloperIn.svg")
    .add("player", "newsletter/step1/Player.svg")
    .add("playerInactive", "newsletter/step1/playerin.svg")
    .add("tap", "newsletter/step1/tap.svg")
    .add("join", "newsletter/step1/joinnewsletter.svg");
  app.loader.load();

  //loader onComplete
  app.loader.onComplete.add(function(e) {
    console.log(app.loader.resources);

    //Tab Icons -------------------------------
    renderTabs(app);
    renderTabContent(app);
    renderScreen(app, "vision");
    resizeToMobile(app);
  });
}
