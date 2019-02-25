# GitHubTutorial
a tutorial for myself to learn github branches

but also a tutorial on how to use firebase with firestore.

Creating a simple website that saves your vote on whether or not you think a hot dog is a sandwhich 

# Basic Git Commands
Here's a good [link](https://github.github.com/gfm/)

*I'm working on a Mac*
But to get started: 
1. Find your repo online, and copy the link
2. cd (*change directory*) into wherever you want to make your local repo
```
cd /Documents/Github/<repoName>
```
3. clone the repo
```
git clone <link>
```
4. once you make changes, add them
```
git add <filename>
or to add all, 
git add . 
```
5. check git status (*good practice*)
```
git status
```
6. commit changes from local to staging area (*this is where conflicts can be seen in merging*)
```
git commit -m "commit message"
```
7. step 5
8. push your code up to the cloud
```
git push origin <branch> (*for right now, master branch is fine*)
```
9. Check your git log
```
git log --oneline
```
#Git Branching (*For features n wateva!*)
1. create a new branch
```
git branch new-feature1
```
2. check what branches you have now in your repo
```
git branch -a
```
3. switch to a different branch
```
git checkout new-feature1
```
4. git add, git status, git commit, git status, git push (basics)
5. delete a branch
```
git branch -D new-feature1
```
6. quick way to create and switch to new branch
```
git checkout -b new-feature2
```
7. if you want to merge a branch, checkout the branch you want to merge into (*maybe master?*)
8. then merge that feature
```
git merge new-feature2
```
###### when we have conlflicts
9. we have to manually look the conflicts and fix them
10. once done, git add, commit -> scary screen : exit using ":wq" done, merged