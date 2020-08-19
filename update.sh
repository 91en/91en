info=$1
if ["$info" = ""];
then info=":pencil: update content"
fi
git add .
git commit -m "$info"
git pull origin master
git push origin master