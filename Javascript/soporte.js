const db = firebase.firestore();

const taskForm = document.getElementById("task-form");

const saveTask = (description) =>
    db.collection("Reclamos").doc().set(
        {
            description: description
        }
    )

taskForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const description = taskForm["Task-description"];

    await saveTask(description.value);

    taskForm.reset();
    description.focus();

})

