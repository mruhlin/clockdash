#/bin/bash

set -o allexport
source .env
set +o allexport

function my_ssh() {
  sshpass -p $DEPLOY_PASS ssh $DEPLOY_USER@$DEPLOY_HOST -t "$*"
}

npm run build

sshpass -p $DEPLOY_PASS scp -r ./dist/* $DEPLOY_USER@$DEPLOY_HOST:~/clockdash-vite

my_ssh "echo $DEPLOY_PASS | sudo -S reboot" || true