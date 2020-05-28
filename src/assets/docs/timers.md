# Timers
Automatically perform tasks at specific intervals.

---

## Command Timers `[]`
Automatically execute commands at specific intervals.
A command prefix is not required for the input as commands are internally executed; not executed in chat.

**Pattern**: `A-Za-z 0-9`

## Message Timers `[]`
Automatically send messages at specific intervals.

---

## Schedule
This is the current, non-saved, task schedule for 3PG.
This schedule is not saved, hence a restart would reset the schedule.

Status  | Description
:-------|:--------------------------
Pending | The timer is waiting to start
Active  | The timer has started
Failed  | There is a problem with the timer config, and an error was thrown