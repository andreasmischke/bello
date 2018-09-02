#!/usr/bin/env bash

if [ "$#" -ne "1" ]; then
    echo "Usage: $0 <hostname>"
    exit 1
fi

hostname="$1"

client=$(echo "Q" | openssl s_client -showcerts -connect $hostname:443 -servername $hostname 2> /dev/null)

echo "$client" | openssl x509 -noout -subject
echo "$client" | openssl x509 -noout -startdate
echo "$client" | openssl x509 -noout -enddate
echo "$client" | openssl x509 -noout -issuer


