cd 

goober=$1

cd ~/Firebase-Database-Demo
if [ "$#" -ne 1 ]; then
    echo "oops, try adding the firebase config file as a parameter"
fi

printf "'/GOOBER/{r $goober' -e 'd}' demo.html" | xargs sed -i -e

firefox demo.html

