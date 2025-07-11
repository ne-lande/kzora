#!/usr/bin/env bash

CUR_DIR="$(pwd)"
MIXED="$CUR_DIR/mixed"
SERVER="$CUR_DIR/server"
CLIENT="$CUR_DIR/client"

# https://github.com/packwiz/packwiz/issues/191
# return to previous when fixed

#ln -s "$MIXED/mods" "$CLIENT/mods/mixed"
#ln -s "$MIXED/config" "$CLIENT/config"
#ln -s "$MIXED/kubejs" "$CLIENT/kubejs"

#ln -s "$MIXED/mods" "$SERVER/mods/mixed"
#ln -s "$MIXED/config" "$SERVER/config"
#ln -s "$MIXED/kubejs" "$SERVER/kubejs"

cp -r "$MIXED/mods" "$CLIENT/mods/mixed"
cp -r "$MIXED/config" "$CLIENT/config"
cp -r "$MIXED/kubejs" "$CLIENT/kubejs"

cp -r "$MIXED/mods" "$SERVER/mods/mixed"
cp -r "$MIXED/config" "$SERVER/config"
cp -r "$MIXED/kubejs" "$SERVER/kubejs"
