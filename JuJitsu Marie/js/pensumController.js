function selectSubtype(id) {
    model.selectedSubtype = id;
    pensumView();
}

function toggleCheckbox(exerciseId) {
    model.exercises[exerciseId].checkboxChecked = !model.exercises[exerciseId].checkboxChecked;
    pensumView();
}

function updateSubtypeCheckboxState() {
    const subType = model.subtypes;

    for (let i = 0; i < subType.length; i++) {
        const connectedExercises = model.exercises.filter(exercise => exercise.subtypesId === i);

        // Check if all connected exercises have checkboxChecked set to true
        const allExercisesChecked = connectedExercises.every(exercise => exercise.checkboxChecked);

        // Set the subtype checkboxChecked accordingly
        subType[i].checkboxChecked = allExercisesChecked;
    }
}



