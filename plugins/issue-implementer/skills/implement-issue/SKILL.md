---
name: implement-issue
description: Use when asked to implement a GitHub issue or ticket end-to-end, run verification checks, and open a ready-for-review pull request.
---

# Implement a GitHub issue

1. Resolve the harness repo from the `origin` remote and use it as the PR target unless a human explicitly instructs otherwise.
2. Inspect the issue with `gh issue view <number>`; if it exists only on `upstream`, read `upstream` for context only.
3. Read `CLAUDE.md`, `package.json`, and relevant code/tests before editing.
4. Create `agent/<issue-number>-<short-slug>` from `origin`'s default branch unless already on a suitable branch.
5. Locate the failing behavior, implement the smallest fix, and add or update focused tests.
6. Run focused tests; if they fail, fix the cause and re-run before continuing.
7. Run `yarn test:typecheck`; run broader checks when the change risk warrants it.
8. Run `yarn fix` if formatting or lint cleanup is required; do not commit unrelated cleanup.
9. Commit using the repo's conventional commit style, including required scope such as `fix(editor): <description>`.
10. Push the branch to `origin` and open the PR with an explicit `--repo <origin-owner>/<origin-repo>` and `--base <origin-default-branch>`.
11. In the PR body, link `Closes #<issue-number>` and list verification performed.
