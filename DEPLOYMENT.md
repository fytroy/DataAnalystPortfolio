 Deploying Your Portfolio to Vercel

Since you have your Vercel account connected to your GitHub, deploying is very straightforward.

 Prerequisites

1.  Code on GitHub: Your latest code must be pushed to your GitHub repository.
2.  Vercel Account: You need to be logged into your Vercel account.

 Step 1: Push Changes to GitHub

Ensure your local changes are committed and pushed to GitHub.

```bash
git add .
git commit -m "Update portfolio with new sections, skills, and links"
git push origin main
```

(I can help you run these commands if you haven't already)

 Step 2: Import Project in Vercel

1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click "Add New..." -> "Project".
3.  You should see your GitHub repositories listed on the left (under "Import Git Repository").
4.  Find your portfolio repository (`dataportfolio` or similar) and click "Import".

 Step 3: Configure Project

Vercel will automatically detect that this is a Next.js project.

   Framework Preset: Next.js
   Root Directory: `./` (default)
   Build Command: `next build` (default)
   Output Directory: `.next` (default)
   Install Command: `npm install` (or `yarn install` / `pnpm install`, Vercel detects this)

Environment Variables:
If you have any secrets (like database URLs, API keys), add them here. For this static portfolio, you likely don't need any unless you added specific integrations.

 Step 4: Deploy

1.  Click "Deploy".
2.  Vercel will build your project. You will see the build logs.
3.  Once finished (usually 1-2 minutes), you will see "Congratulations!".
4.  Click "Continue to Dashboard" or "Visit".

 Step 5: Verify

   Visit the URL provided by Vercel (e.g., `your-project.vercel.app`).
   Check if everything looks correct (images, links, etc.).

 Automatic Deploys

Now that you are connected, every time you `git push` to your `main` branch, Vercel will automatically rebuild and redeploy your site!
