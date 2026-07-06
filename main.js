#!/usr/bin/env node
import { Command } from "commander";
import { addtask } from "./addCommand.js";
import { updateTask } from "./updateCommand.js";
import { deleteTask } from "./deleteCommand.js";
import { markInProgress } from "./markInProgressCommand.js";
import { markDone } from "./markDoneCommand.js";
const program = new Command();

program
  .name("task-cli")
  .description("tracking and managing your tasks")
  .version("0.0.1");

program
  .command("add")
  .description("Add a given task")
  .argument("<taskDescription>", "task to add")
  .action((taskDescription) => {
    addtask(taskDescription);
  })
  program
  .command("update")
  .description("update a specific task")
  .argument("<taskID>", "taskID to update")
  .argument("<newTaskDescription>", "new task description")
  .action((taskID, newTaskDescription) => {
    updateTask(taskID, newTaskDescription);
  });
  program
  .command("delete")
  .description("delete a specific task")
  .argument("<taskID>", "taskID to delete")
  .action((taskID) => {
    deleteTask(taskID);
  });
    program
  .command("mark-in-progress")
  .description("mark a specific task as in progress")
  .argument("<taskID>", "taskID to mark as in progress")
  .action((taskID) => {
    markInProgress(taskID);
  });
    program
  .command("mark-done")
  .description("mark a specific task as done")
  .argument("<taskID>", "taskID to mark as done")
  .action((taskID) => {
    markDone(taskID);
  });
program.parse();
