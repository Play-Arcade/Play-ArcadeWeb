import axios from "axios";

// declaring temp vars to represent each field
// actual field will depend on frontend forms
// later these will each point to a form 
// (or the value can be directly replaced with a form in the query)
var id, name, email, isProfessional, isStudent, occupation, yearsExperience,
    stackItems, whyGames, buildDesires, hasDoneGameJam, dedicationLevel;

// POST request
axios({
    method: "post",
    url: process.env.ServerAPI + "/form_api/newgenericform",
    //temporary params
    params: {
        name: name.value,
        email: email.value,
        isProfessional: isProfessional.value,
        isStudent: isStudent.value,
        occupation: occupation.value,
        yearsExperience: yearsExperience.value,
        stackItems: stackItems.value,
        whyGames: whyGames.value,
        buildDesires: buildDesires.value,
        hasDoneGameJam: hasDoneGameJam.value,
        dedicationLevel: dedicationLevel.value
    }
});
