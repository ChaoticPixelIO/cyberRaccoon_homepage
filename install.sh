#!/usr/bin/env bash
set -euo pipefail

REAL_SCRIPT_URL="https://raw.githubusercontent.com/ChaoticPixelIO/cyberRaccoon/main/install.sh"
bash <(curl -fsSL "$REAL_SCRIPT_URL") "$@"
