import axios from "axios";

// declaring temp vars to represent each field
// later these will each point to a form 
// (or the value can be directly replaced with a form in the query)
var id, name, email, isProfessional, isStudent, occupation, yearsExperience,
    stackItems, whyGames, buildDesires, hasDoneGameJam, dedicationLevel;

// POST request
axios({
    method: "post",
    // url needs to be replaced with actual url
    url: "mongodb/url",
    data: {
        id: id.value,
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