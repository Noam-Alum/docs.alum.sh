export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# build site
nvm install 9.0.0
npm run docs:build
cp CNAME docs/.vuepress/dist/
tar czvf vuepress.tar.gz --exclude='node_modules' --exclude='docs/.vuepress/dist' .
mv vuepress.tar.gz docs/.vuepress/dist/
git clone https://github.com/Noam-Alum/docs.alum.sh.git
mv docs.alum.sh/.git docs/.vuepress/dist/
rm -rf docs.alum.sh

# Move into the directory of your local Git repository
cd /home/noam/Music/docs.alum.sh/docs/.vuepress/dist/

# Stage all changes
git add .

# Commit changes
git commit -m "Initial commit"

# Set upstream to the remote repository
git remote add origin https://github.com/Noam-Alum/docs.alum.sh.git


# Fetch changes from the remote repository
git fetch origin

# Checkout the 'main' branch and merge changes from 'origin/main'
git checkout main
git merge origin/main

# Force push local 'main' branch to overwrite the remote branch
git push --force origin main
nvm install 20.5.0
