#!/bin/bash
# Usage: ./run_features.sh

# single test command (e.g. DB)):
# npx cucumber-js ./test/features/login/DB/**/*.feature   --require dist/test/steps/login/DB/*.steps.js   --import dist/test/steps/login/DB/**/*.js

# Array of module names (should match folder names in test/features/login/)
MODULES=("UI" "API" "Auth_Service" "DB" "Token_Service")

# Base paths
FEATURES_BASE="dist/test/features/login"
STEPS_BASE="dist/test/steps/login"

# Loop over modules and run Cucumber for each
for MODULE in "${MODULES[@]}"; do
  echo ""
  echo "Running Cucumber for module: $MODULE"
  echo ""

  npx cucumber-js \
    "$FEATURES_BASE/$MODULE/**/*.feature" \
    --require "$STEPS_BASE/$MODULE/**/*.js" \
    --strict
done
