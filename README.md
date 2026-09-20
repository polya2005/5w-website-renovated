# 5w-website-renovated

This is the website for our hall, 5W, of MIT EAsT camPUS. Before EC renovation, this website was written in pure HTML, CSS, and JS. Now, it is rewritten using React and Next.js!

## Want to contribute?

If you want to contribute to the website, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for instructions on how to set up the project and submit a pull request.

## Setting up the project

> [!NOTE]
> If you are using Windows, I recommend using [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) to set up the project. WSL allows you to run a Linux environment on your Windows machine, which is more compatible with the tools used in this project.

1. Make sure you have the required tools installed on your machine:
   - [Node.js](https://nodejs.org/) (version 24 or higher)
   - [npm](https://www.npmjs.com/) (comes with Node.js)
   - [Git](https://git-scm.com/) (for version control)
   - [GNU Make](https://www.gnu.org/software/make/) (for building the project)
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/polya2005/5w-website-renovated.git
   ```
1. Navigate to the project directory:
   ```bash
   cd 5w-website-renovated
   ```
1. Install the dependencies:
   ```bash
   npm install
   ```
1. Test the project by running the development server:
   ```bash
   make dev
   ```
   This will start the development server, and you can view the website in your browser at `http://localhost:3000`.

## How to work on the project

1. Create a new branch for your work:
   ```bash
   git checkout -b your-branch-name
   ```
1. Make your changes and test them locally. To run the development server, use:
   ```bash
   make dev
   ```
   or
   ```bash
   npm run dev
   ```
1. Build the project for production:
   ```bash
   make build
   ```
   This will create static files in the `out` directory, which can be deployed to a web server. However, don't do that just yet.
1. Test your production build locally:
   ```bash
   make view-prod
   ```
   and view the website in your browser at `http://[::]:8000/`. This will serve the static files from the `out` directory, allowing you to test the production build before deploying it.
1. Once you are satisfied with your changes, try deploying the website to the scripts.mit.edu server. You can do this by running:
   ```bash
   make deploy
   ```
   This will upload the static files in the `out` directory to the server, making your changes live on the website. In the process, you will be prompted to enter your MIT username and password for authentication. If you encounter any issues during deployment, please contact davidbartus on Discord.
1. Open [5west.mit.edu](https://5west.mit.edu) in your browser to see your changes live on the website. If something is not working as expected, please try to fix the issue.

   > [!IMPORTANT]
   > If it takes you too long to resolve the issue, please revert the website to the previous working state by running:
   >
   > ```bash
   > git checkout main
   > git pull origin main
   > make deploy
   > ```

1. Once you are done with your changes, commit them to your branch and push the branch to the remote repository:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin your-branch-name
   ```
