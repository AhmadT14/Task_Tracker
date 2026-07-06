# Task Tracker CLI

Task Tracker CLI is a small Node.js command-line app for managing tasks from the terminal.

## Requirements

- Node.js 18 or newer
- npm

## Install

```bash
npm install
```

## Usage

Run the CLI with Node:

```bash
node main.js <command>
```

Or link it locally if you want to use the `task-cli` command:

```bash
npm link
```

## Commands

- `add <taskDescription>`: add a new task
- `update <taskID> <newTaskDescription>`: update a task description
- `delete <taskID>`: delete a task
- `mark-in-progress <taskID>`: set a task to in-progress
- `mark-done <taskID>`: set a task to done
- `list [status]`: list all tasks or filter by `todo`, `in-progress`, or `done`

## Examples

```bash
node main.js add "Read a book"
node main.js update 1 "Read two chapters"
node main.js mark-in-progress 1
node main.js mark-done 1
node main.js list
node main.js list done
```

## Data Storage

Tasks are stored in `newUser.json` in the project root. Each task includes:

- `id`
- `description`
- `status`
- `createdAt`
- `updatedAt`

## Notes

- Task IDs are assigned automatically.
- The CLI currently uses `newUser.json` as its local data store.