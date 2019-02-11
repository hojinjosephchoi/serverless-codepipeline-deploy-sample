#!/bin/bash
SELF="${BASH_SOURCE[0]}"
cd `dirname "$SELF"`
sudo docker-compose -p lululala exec -T mysql sh /tools/update-grant.sh
