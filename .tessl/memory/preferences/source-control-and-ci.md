# Source Control and CI Preferences

- Source control: GitHub.
- CI: GitHub Actions.
- Autonomous issue implementation workflow: `.github/workflows/tessl-implement-issue.yml`, manually triggered with `workflow_dispatch` and an `issue_number` input.
- Required CI secrets: `TESSL_TOKEN`; agent-specific provider secrets such as `ANTHROPIC_API_KEY` or `OPENAI_API_KEY` may be needed depending on the selected backend.
- Use the default `GITHUB_TOKEN` for reading issues, pushing branches, and opening PRs unless a stronger app token is configured later.
- This repo is a fork. Implementation PRs must target the repository from the `origin` remote (`tdg-ninja/excalidraw-tessl-agent`) and its default branch, not `upstream` (`excalidraw/excalidraw`), unless a human explicitly says otherwise.

## Deterministic invariant checks

- Run focused Vitest tests for changed behavior.
- Run `yarn test:typecheck` before opening implementation PRs.
- Use `yarn fix` when formatting or lint cleanup is required.
