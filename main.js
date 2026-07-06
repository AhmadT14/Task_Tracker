#!/usr/bin/env node
import { Command } from "commander";
import { addtask } from "./addCommand.js";
import { updateTask } from "./updateCommand.js";
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
program.parse();
