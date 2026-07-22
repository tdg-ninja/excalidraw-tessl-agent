---
name: implement-issue
description: Use when asked to implement a GitHub issue or ticket end-to-end, run verification checks, and open a ready-for-review pull request.
---

# Implement a GitHub issue

1. Read the issue number from instructions and inspect it with `gh issue view <number>`.
2. Read `CLAUDE.md`, `package.json`, and relevant code/tests before editing.
3. Create `agent/<issue-number>-<short-slug>` from the base branch unless already on a suitable branch.
4. Locate the failing behavior, implement the smallest fix, and add or update focused tests.
5. Run focused tests; if they fail, fix the cause and re-run before continuing.
6. Run `yarn test:typecheck`; run broader checks when the change risk warrants it.
7. Run `yarn fix` if formatting or lint cleanup is required.
8. Commit using `fix: <description>` or another conventional commit type.
9. Push the branch and open a PR that links `Closes #<issue-number>` and lists verification performed.
