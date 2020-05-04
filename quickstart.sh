#navigate the home directory
cd 

#goober=first arg
goober=$1

#navigate the demo directory
cd Firebase-Database-Demo

#check number of args
if [ "$#" -ne 1 ]; then
    echo "oops, try adding the path to the firebase config file as a parameter"
fi

#replace the word "GOOBER" in demo.html with the custom configuration 
printf "'/GOOBER/{r $goober' -e 'd}' demo.html" | xargs sed -i -e

#launch demo with firefox
firefox demo.html

