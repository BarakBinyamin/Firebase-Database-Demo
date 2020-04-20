cd 

if [ "$#" -ne 1 ]; then
    echo "oops, try adding the firebase config file as a parameter"
fi

sed -i '/GOOBER/{r ${1}' -e 'd}'  demo.html

firefox demo.html

