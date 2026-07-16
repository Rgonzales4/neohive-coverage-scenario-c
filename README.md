# neohive-coverage-scenario-c

Fixture repo for HIVE-238 (F3 coverage) manual testing, Scenario C: verifying that a hive's coverage score updates after a change is synced.

## Initial contents

Indexable source files under `src/` plus this README. A lockfile (`pnpm-lock.yaml`) is included to confirm excluded files do not count toward `indexable_count`.

Add more files under `src/`, re-sync, and the coverage counts and `computed_at` should update.
