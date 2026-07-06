import fs from "node:fs";

const filePath = "./newUser.json";
let found = false;
function updateTask(taskID, newTaskDescription) {
  if (!fs.existsSync(filePath)) {
    console.log("there are no tasks added");
    return;
  }
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    try {
      const jsonObject = JSON.parse(data);
      for (let task of jsonObject.tasks) {
        if (task.id === Number(taskID)) {
          task.description = newTaskDescription;
          task.updatedAt = new Date().toISOString();
          found = true;
          break;
        }
      }
      if (found) {
        const updatedJson = JSON.stringify(jsonObject, null, 2);
        fs.writeFile(filePath, updatedJson, "utf8", (err) => {
          if (err) {
            console.error("Error writing file:", err);
            return;
          }
          console.log("JSON file successfully updated!");
        });
      } else {
        console.log("task not found");
      }
    } catch (parseErr) {
      console.error("Error parsing JSON string:", parseErr);
    }
  });
}

export { updateTask };
