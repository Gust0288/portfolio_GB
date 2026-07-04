@AGENTS.md

# Git workflow

- Never develop new features directly on `main`.
- For every new feature: create a feature branch named after the feature (e.g. `feature/hero-section`), build the feature there, and test it (build passes + verify in the browser) before merging.
- Merge into `main` only after the feature is tested and working.
