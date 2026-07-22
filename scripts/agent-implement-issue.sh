#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "usage: $0 <issue-number> [extra instructions]" >&2
  exit 64
fi

issue_number="$1"
shift || true
extra_instructions="$*"

instructions="Implement GitHub issue #${issue_number} end to end. Run focused tests and typecheck, then open a PR."
if [[ -n "${extra_instructions}" ]]; then
  instructions="${instructions} ${extra_instructions}"
fi

tessl launch skill file:plugins/issue-implementer#implement-issue \
  --agent "${AGENT:-tessl-agent}" \
  --yolo \
  --instructions "${instructions}"
