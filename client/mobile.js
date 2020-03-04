function resizeToMobile(app, e) {
  console.log(app);
  if (window.innerWidth <= 650) {
    //runs if window width is larger than 650
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

  // =========================  GOALS SCREEN  ===============================
  mapGroup.y = 530;
  mapGroup.scale.set(2);

  // ====================== SOLUTION CONTENT  ======================================
  //position
  makerActive.y += 250;
  playerActive.y += 250;
  solutionCards.y += 250;
  builderCard.y += 250;
  requestAccess.y += 600;
  requestAccess2.y += 600;
  //scale
  makerActive.scale.set(1.4);
  playerActive.scale.set(1.4);
  requestAccess.scale.set(1.8);
  requestAccess2.scale.set(1.8);
  solutionCards.scale.set(1.8);
  builderCard.scale.set(1.8);

  // =========================  STORY SCREEN  =================================
  earlyDaysCard.texture = app.loader.resources.earlyDaysMobile.texture;
  earlyDaysCard.scale.set(1.35);
  earlyDaysCard.y += 190;

  // =========================  JOINUS SCREEN  =================================
  newsletter.texture = app.loader.resources.joinNewsletter.texture;
  newsletter.y = outline.y + 220;
  newsletter.scale.set(1.6);

  crowdfund.texture = app.loader.resources.crowdfundmobile.texture;
  crowdfund.y = outline.y + 220;
  crowdfund.scale.set(1.6);

  investor.texture = app.loader.resources.investormobile.texture;
  investor.y = crowdfund.y + 900;
  investor.x = newsletter.x - 780;
  investor.scale.set(1.6);

  partner.texture = app.loader.resources.partnermobile.texture;
  partner.y = investor.y + 400;
  partner.x = 1800;
  partner.scale.set(1.6);

  development.texture = app.loader.resources.devmobile.texture;
  development.y = partner.y + 400;
  development.x = partner.x;
  development.scale.set(1.6);

  alphaAccess.texture = app.loader.resources.alphamobile.texture;
  alphaAccess.y = development.y + 400;
  alphaAccess.x = investor.x;
  alphaAccess.scale.set(1.6);

  //========================  NEWS LETTER ==========================================
  newsletterhead.scale.set(1.8);

  newslettertext1.texture = app.loader.resources.textmobile.texture;
  newslettertext1.scale.set(1.6);
  newslettertext1.x = app.stage.width / 8 - 100;
  newslettertext1.y = newsletterhead.y + 200;

  newslettertext2.texture = app.loader.resources.textmobile2.texture;
  newslettertext2.scale.set(1.6);
  newslettertext2.x = app.stage.width / 8 - 100;
  newslettertext2.y = newslettertext1.y + 600;

  iam.texture = app.loader.resources.iammobile.texture;
  iam.scale.set(1.6);
  iam.x = 250;
  iam.y = newslettertext2.y + 300;

  proInactive.x = iam.x + 150;
  proInactive.y = iam.y + 60;

  proActive.x = iam.x + 150;
  proActive.y = iam.y - 30;

  studentActive.x = proInactive.x + 424;
  studentActive.y = iam.y - 30;

  studentInactive.x = proInactive.x + 424;
  studentInactive.y = iam.y - 30;

  continuee.y = iam.y + 150;
  continuee.x = app.stage.width / 2 - 50;

  close.x = app.stage.width - 30;
  close.y = newsletterhead.y;
}

//shows or hides the outline around tab icons
function renderMobileOutline(visible) {
  if (window.innerWidth <= 650) {
    if (visible) {
      outline.visible = true;
    } else {
      outline.visible = false;
    }
  }
}
