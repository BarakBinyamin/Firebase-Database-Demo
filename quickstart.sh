cd 

cd ~/Firebase-Database-Demo
if [ "$#" -ne 1 ]; then
    echo "oops, try adding the firebase config file as a parameter"
fi

printf "'/GOOBER/{r $1' -e 'd}' demo.html" | xargs sed -i


firefox demo.html

