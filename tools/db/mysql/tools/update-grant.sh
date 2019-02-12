#!/bin/bash
mysql -pdbpasswrd < /docker-entrypoint-initdb.d/1-grant.sql
