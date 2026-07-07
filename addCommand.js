import fs from "node:fs";

const filePath = "./tasks.json";
let newTask = {};
function addTask(description) {
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
      try {
        const jsonObject = JSON.parse(data);
        newTask = {
          id: Math.max(0, ...jsonObject.tasks.map((task) => task.id)) + 1,
          description: description,
          status: "todo",
          createdAt: new Date().toISOString(),
          updatedAt: null,
        };
        jsonObject.tasks.push(newTask);
        const updatedJson = JSON.stringify(jsonObject, null, 2);
        fs.writeFile(filePath, updatedJson, "utf8", (err) => {
          if (err) {
            console.error("Error writing file:", err);
            return;
          }
          console.log("Task added successfully!");
        });
      } catch (parseErr) {
        console.error("Error parsing JSON string:", parseErr);
      }
    });
  } else {
    newTask = {
      id: 1,
      description: description,
      status: "todo",
      createdAt: new Date().toISOString(),
      updatedAt: null,
    };
    const jsonString = JSON.stringify({ tasks: [newTask] }, null, 2);

    fs.writeFile("./tasks.json", jsonString, "utf8", (err) => {
      if (err) {
        console.error("Error creating file:", err);
        return;
      }
      console.log("Task added successfully!");
    });
  }
}
export { addTask };
