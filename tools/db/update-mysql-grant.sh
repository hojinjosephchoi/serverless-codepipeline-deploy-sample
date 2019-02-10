#!/bin/bash
SELF="${BASH_SOURCE[0]}"
cd `dirname "$SELF"`
docker-compose -p lululala exec mysql sh /tools/update-grant.sh
