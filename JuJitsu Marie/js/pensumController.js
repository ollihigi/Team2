function selectSubtype(id) {
    model.selectedSubtype = id;
    pensumView();
}

function setExerciseIsDone(id){
    const exercise = model.exercises.find(e=>e.id==id);
    exercise.isDone = !exercise.isDone;
    pensumView();
}