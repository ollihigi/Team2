function toggleSubtypeCheckbox(id) {
    model.subtypes[id].checkboxChecked = !model.subtypes[id].checkboxChecked;
    userGradeView();
}