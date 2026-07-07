# Task Tracker CLI

A small Node.js command-line task tracker built with
[Commander](https://www.npmjs.com/package/commander). It lets you add, update,
delete, mark, and list tasks from the terminal.

## Requirements

- Node.js 18 or newer
- npm

## Installation

Install the project dependencies:

```bash
npm install
```

You can run the CLI directly with Node:

```bash
node main.js <command>
```

Or link it locally to use the `task-cli` command:

```bash
npm link
task-cli <command>
```

## Commands

| Command | Description |
| --- | --- |
| `add <taskDescription>` | Add a new task with `todo` status. |
| `update <taskID> <newTaskDescription>` | Update an existing task description. |
| `delete <taskID>` | Delete a task by ID. |
| `mark-in-progress <taskID>` | Change a task status to `in-progress`. |
| `mark-done <taskID>` | Change a task status to `done`. |
| `list [status]` | List all tasks, or filter by `todo`, `in-progress`, or `done`. |

## Examples

Using Node:

```bash
node main.js add "Read a book"
node main.js update 1 "Read two chapters"
node main.js mark-in-progress 1
node main.js mark-done 1
node main.js delete 1
node main.js list
node main.js list done
```

Using the linked command:

```bash
task-cli add "Write project notes"
task-cli list todo
```

## Task Data

Tasks are stored in `tasks.json` in the project root. The file uses this shape:

```json
{
  "tasks": [
    {
      "id": 1,
      "description": "Read a book",
      "status": "todo",
      "createdAt": "2026-07-07T10:00:00.000Z",
      "updatedAt": null
    }
  ]
}
```

Each task includes:

- `id`: an automatically assigned number
- `description`: the task text
- `status`: one of `todo`, `in-progress`, or `done`
- `createdAt`: when the task was created
- `updatedAt`: when the task was last changed

## Help

Show the CLI help output:

```bash
node main.js --help
node main.js <command> --help
```
