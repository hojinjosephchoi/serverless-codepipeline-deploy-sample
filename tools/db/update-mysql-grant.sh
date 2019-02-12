#!/bin/bash
SELF="${BASH_SOURCE[0]}"
cd `dirname "$SELF"`
docker-compose -p cicdpoc exec -T mysql sh /tools/update-grant.sh
