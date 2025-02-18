1. Initial Setup (First Person)

(Assume Person A creates the project and Person B joins later.)
A. Person A: Create a Repository on GitHub

    Install GitHub CLI if you haven't:

gh auth login

Create a new repository (replace my-project with your project name):

gh repo create my-project --public --source=. --remote=origin

    This creates a remote repository and links it.

Push the initial project files:

git add .
git commit -m "Initial commit"
git push -u origin main

Add Person B as a collaborator:

    gh repo edit --add-collaborator personB-username

        Person B will receive an invitation via GitHub.

2. Person B: Clone the Repository

   Accept the invite:

gh repo clone personA-username/my-project

Navigate into the project folder:

cd my-project

Verify the remote repo is set up:

    git remote -v

3. Working Together on a Feature

Each person should work in a separate branch to avoid conflicts.
A. Create a New Branch

    Create and switch to a new branch:

git checkout -b feature-branch

Make changes, then commit:

git add .
git commit -m "Added feature X"

Push the branch to GitHub:

    git push origin feature-branch

4. Create a Pull Request (PR)

   Create a PR from the terminal:

gh pr create --base main --head feature-branch --title "Feature X" --body "Description of the feature"

The other person can review it:

gh pr checkout feature-branch

Merge the PR when ready:

    gh pr merge --squash --delete-branch

5. Keeping Local Repo Updated
   A. Sync with Main Branch

Before starting new work, update your local repository:

git checkout main
git pull origin main

If someone else has made changes:

git fetch origin
git merge origin/main

B. If There's a Conflict

Resolve conflicts manually, then:

git add .
git commit -m "Resolved conflicts"
git push origin feature-branch

6. Delete Old Branches (Cleanup)

After merging, delete the local and remote branch:

git branch -d feature-branch
gh pr delete feature-branch

7. Additional Tips

   View active PRs:

gh pr list

Assign reviewers:

gh pr edit --add-reviewer personA-username

Checkout someone’s PR branch for testing:

gh pr checkout PR_NUMBER
