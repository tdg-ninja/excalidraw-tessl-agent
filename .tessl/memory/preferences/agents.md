# Agent Preferences

- Default backend: `tessl-agent` for local and CI issue implementation.
- Agent issue implementation entrypoint: `scripts/agent-implement-issue.sh <issue-number>`.
- Launch command uses `tessl launch skill file:plugins/issue-implementer#implement-issue --agent "$AGENT" --yolo`.
- Issue implementation branches are based on `origin`'s default branch and PRs are opened against `origin`, even when an `upstream` remote exists.
- Keep `--instructions` short; put large generated context in files and reference the path.
