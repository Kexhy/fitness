function calculateCalories() {
    var gender = document.getElementById("gender").value;
    var age = parseInt(document.getElementById("age").value);
    var weight = parseInt(document.getElementById("weight").value);
    var height = parseInt(document.getElementById("height").value);
    var activity = document.getElementById("activity").value;

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        document.getElementById("result").innerHTML = "Por favor, completa todos los campos.";
        return;
    }

    var bmr;

    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    var activityMultiplier;

    switch (activity) {
        case "sedentary":
            activityMultiplier = 1.2;
            break;
        case "light":
            activityMultiplier = 1.375;
            break;
        case "moderate":
            activityMultiplier = 1.55;
            break;
        case "active":
            activityMultiplier = 1.725;
            break;
        case "very_active":
            activityMultiplier = 1.9;
            break;
        default:
            activityMultiplier = 1.2;
    }

    var totalCalories = bmr * activityMultiplier;

    document.getElementById("result").innerHTML = "Tu consumo calorico diario estimado es de " + totalCalories.toFixed(2) + " kcal.";
}
