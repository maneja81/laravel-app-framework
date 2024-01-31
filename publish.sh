read -p "Commit message: " message
npm run build
git add .
git commit -m "$message"
git push
