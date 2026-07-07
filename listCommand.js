import fs from "node:fs";

const filePath = "./newUser.json";
const allowedStatuses = ["done", "in-progress", "todo"];
function listTasks(status) {
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
      try {
        const jsonObject = JSON.parse(data);
        if (status && !allowedStatuses.includes(status)) {
          console.log(
            "Invalid status. Please use one of the following: done, in-progress, todo",
          );
          return;
        }
        if (!status) {
          console.log(jsonObject.tasks);
          return;
        }
        let found = false;
        for (let task of jsonObject.tasks) {
          if (task.status === status) {
            console.log(task);
            found = true;
          }
        }
        if (!found) {
          console.log("Task not found");
        }
      } catch (parseErr) {
        console.error("Error parsing JSON string:", parseErr);
      }
    });
  } else {
    console.log("There are no tasks to list. Please add a task first.");
  }
}

export { listTasks };
