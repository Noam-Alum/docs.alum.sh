# Move into the directory of your local Git repository
cd /home/noam/Music/docs.alum.sh/

# Create a new branch named 'main' (or 'master' if preferred)
git checkout -b main

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