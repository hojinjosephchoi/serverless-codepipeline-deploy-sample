#!/bin/bash
SELF="${BASH_SOURCE[0]}"
cd `dirname "$SELF"`
docker-compose -p cicdpoc up -d --build
