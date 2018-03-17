#rebuild static site
npm run generate

git config --global user.email "tyferrin@gmail.com"
git config --global user.name "Tyler Ferrin"

git add .
git commit -m "Automated Rebuild"
git push
