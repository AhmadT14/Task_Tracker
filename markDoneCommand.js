import fs from "node:fs";

const filePath = "./tasks.json";
let found = false;
function markDone(taskID) {
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
      try {
        const jsonObject = JSON.parse(data);
        for (let task of jsonObject.tasks) {
          if (task.id === Number(taskID)) {
            task.status = "done";
            task.updatedAt = new Date().toString();
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
            console.log("Task marked as done successfully!");
          });
        } else {
          console.error("Task not found");
        }
      } catch (parseErr) {
        console.error("Error parsing JSON string:", parseErr);
      }
    });
  } else {
    console.error(
      "There are no tasks to mark as done. Please add a task first.",
    );
  }
}
export { markDone };
