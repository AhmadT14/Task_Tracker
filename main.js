#!/usr/bin/env node
import { Command } from "commander";
import { addTask } from "./addCommand.js";
import { updateTask } from "./updateCommand.js";
import { deleteTask } from "./deleteCommand.js";
import { markInProgress } from "./markInProgressCommand.js";
import { markDone } from "./markDoneCommand.js";
import { listTasks } from "./listCommand.js";
const program = new Command();

program
  .name("task-cli")
  .description("Tracking and managing your tasks")
  .version("0.0.1");

program
  .command("add")
  .description("Add a given task")
  .argument("<taskDescription>", "Task to add")
  .action((taskDescription) => {
    addTask(taskDescription);
  });
program
  .command("update")
  .description("Update a specific task")
  .argument("<taskID>", "Task ID to update")
  .argument("<newTaskDescription>", "New task description")
  .action((taskID, newTaskDescription) => {
    updateTask(taskID, newTaskDescription);
  });
program
  .command("delete")
  .description("Delete a specific task")
  .argument("<taskID>", "Task ID to delete")
  .action((taskID) => {
    deleteTask(taskID);
  });
program
  .command("mark-in-progress")
  .description("Mark a specific task as in progress")
  .argument("<taskID>", "Task ID to mark as in progress")
  .action((taskID) => {
    markInProgress(taskID);
  });
program
  .command("mark-done")
  .description("Mark a specific task as done")
  .argument("<taskID>", "Task ID to mark as done")
  .action((taskID) => {
    markDone(taskID);
  });
program
  .command("list")
  .description("List tasks")
  .argument("[status]", "Task status to list")
  .action((status) => {
    listTasks(status);
  });
program.parse();
