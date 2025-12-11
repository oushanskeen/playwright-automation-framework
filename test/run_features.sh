#!/bin/bash
# Usage: ./run_features.sh

# Array of module names (should match folder names in test/features/login/)
MODULES=("UI" "Client" "API" "Auth_Service" "DB" "Token_Service")

# Base paths
FEATURES_BASE="test/features/login"
STEPS_BASE="test/steps/login"

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
