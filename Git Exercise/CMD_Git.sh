git --version

# git config --global user.name "Name"
# git config --global user.email "email@example.com"

git config --global --list

mkdir GitAdventure
cd GitAdventure
# git init

echo "Embarking on my journey to master Git." > journey.txt
git status
git add journey.txt
git commit -m "Add journey.txt with initial Git journey message"

echo "This file is meant to be deleted." > temp.txt
git add temp.txt
git commit -m "Add temp.txt for deletion practice"
git rm temp.txt
git commit -m "Remove temp.txt"

git mv journey.txt adventure.txt
echo "My journey evolves into an adventure with Git." > adventure.txt
git add adventure.txt
git commit -m "Rename journey.txt to adventure.txt and update content"

echo "*.log" > .gitignore
git add .gitignore
git commit -m "Add .gitignore to ignore log files"

echo "dummy log content" > debug.log
git status

echo "Exploring the depths of Git commands and their powers." >> adventure.txt
git status --short
git add adventure.txt
git commit -m "Expand adventure.txt with deeper Git exploration"

git log --oneline

echo "Embarking on my journey to master Git." > adventure.txt
git add adventure.txt
git commit -m "Restore adventure.txt to its initial state"
# _________________________________________________
# _________________________________________________
# /*
# git init creates a new repo
# git status shows tracked/untracked changes
# git add stages changes
# git commit -m saves a snapshot
# git rm deletes a file and stages the deletion
# git mv renames a file and stages the rename
# git status --short gives compact status output
# git log --oneline shows concise commit history
# .gitignore prevents matching files from being tracked
# */