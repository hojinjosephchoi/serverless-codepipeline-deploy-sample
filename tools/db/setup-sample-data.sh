#!/bin/bash
SELF="${BASH_SOURCE[0]}"
cd `dirname "$SELF"`

SERVICES=(
  back
)

# for SERVICE in ${SERVICES[*]}
# do
#   echo Run migrate in $SERVICE...
#   (cd ../../services/$SERVICE && node tools/migrate)
# done

docker-compose -p cicdpoc exec mysql sh /tools/setup-sample-data.sh
