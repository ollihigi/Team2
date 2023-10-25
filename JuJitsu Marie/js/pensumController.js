function selectSubtype(id) {
    model.selectedSubtype = id;
    pensumView();
}

function toggleCheckbox(exerciseId) {
    model.exercises[exerciseId].checkboxChecked = !model.exercises[exerciseId].checkboxChecked;
    pensumView();
}

