# Agent Preferences

- Default backend: `tessl-agent` for local and CI issue implementation.
- Agent issue implementation entrypoint: `scripts/agent-implement-issue.sh <issue-number>`.
- Launch command uses `tessl launch skill file:plugins/issue-implementer#implement-issue --agent "$AGENT" --yolo`.
- Keep `--instructions` short; put large generated context in files and reference the path.
