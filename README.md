 📊 My Data Analyst Portfolio

A modern, interactive portfolio website showcasing data analytics expertise, projects, and professional experience. Built with Next.js and modern web technologies, this portfolio demonstrates proficiency in data visualization, SQL optimization, and BI solutions.

 🎯 About

This portfolio belongs to Rodney Gitonga, a Data Analytics Officer & BI Specialist specializing in transforming complex financial and operational data into actionable business insights. The website highlights expertise in:

- Data Analytics & Visualization: Power BI, Dashboarding, DAX, Data Storytelling
- Database Management: SQL optimization, Views, Stored Procedures, MySQL, MongoDB
- Programming: Python (Pandas, NumPy, Scikit-learn), JavaScript, REST APIs
- Cloud & Infrastructure: Oracle Cloud, AWS, Docker, Git
- Business Intelligence: Financial Analysis, ETL, Data Warehousing

 🚀 Features

- Modern Responsive Design: Fully responsive layout that works on desktop, tablet, and mobile devices
- Dark/Light Theme Toggle: Switch between dark and light themes for comfortable viewing
- Smooth Animations: Beautiful transitions and animations using Framer Motion
- Interactive Sections:
  - Home showcase with professional summary
  - About page with detailed background
  - Projects section featuring data analytics work
  - Skills breakdown across multiple categories
  - Experience timeline
  - Education history
  - Contact information

 🛠️ Tech Stack

- Framework: [Next.js 16](https://nextjs.org/) - React framework for production
- Styling: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- Animations: [Framer Motion](https://www.framer.com/motion/) - React animation library
- UI Components: [Lucide React](https://lucide.dev/) - Beautiful icon library
- Charting: [Recharts](https://recharts.org/) - Composable charting library
- Type Safety: [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- Validation: [Zod](https://zod.dev/) - TypeScript-first schema validation
- Utilities: 
  - `clsx` - Conditional CSS class names
  - `tailwind-merge` - Merge Tailwind CSS classes

 📁 Project Structure

```
src/
├── app/                     Next.js app directory
│   ├── page.tsx           Home page
│   ├── layout.tsx         Root layout
│   ├── globals.css        Global styles
│   ├── actions.ts         Server actions
│   ├── about/             About page
│   ├── contact/           Contact page
│   ├── education/         Education page
│   └── projects/          Projects page
├── components/             Reusable components
│   ├── layout/            Layout components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── sections/          Page sections
│   │   ├── ExperienceSection.tsx
│   │   └── SkillsSection.tsx
│   └── ui/                UI components
│       └── FadeIn.tsx
├── lib/                   Utilities and configuration
│   ├── data.ts           Portfolio data (projects, skills, etc.)
│   └── utils.ts          Utility functions
└── public/               Static assets
    └── images/           Image files
```

 🚀 Getting Started

 Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun package manager

 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd DataAnalystPortfolio
```

2. Install dependencies:
```bash
npm install
 or
yarn install
 or
pnpm install
 or
bun install
```

3. Run the development server:
```bash
npm run dev
 or
yarn dev
 or
pnpm dev
 or
bun dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

The site will auto-reload as you make changes to the source files.

 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

 🎨 Customization

 Update Portfolio Data

Edit [src/lib/data.ts](src/lib/data.ts) to customize:
- Personal information and contact details
- Skills and expertise areas
- Work experience
- Education history
- Projects and case studies

 Theme Configuration

The theme toggle is located in the header and stored in local storage for persistence. Colors and styling are controlled through Tailwind CSS configuration.

 Images

Add portfolio images to the `public/images/` directory and reference them in your components.

 🌐 Deployment

 Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live at a Vercel URL

[Learn more about deploying Next.js on Vercel](https://nextjs.org/docs/app/building-your-application/deploying)

 Other Deployment Options

- Netlify: Supports Next.js with a few configuration steps
- Traditional Hosting: Build with `npm run build` and host the `.next` folder
- Docker: Containerize using Docker for any hosting platform

 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

 📞 Contact

- Email: rodneyroygitonga@gmail.com
- Phone: 0705762775
- Location: Nairobi, Kenya
- LinkedIn: [linkedin.com/in/rodney-gitonga](https://www.linkedin.com/in/rodney-gitonga-9299a41ba/)
- GitHub: [github.com/fytroy](https://github.com/fytroy)

 📄 License

This project is open source and available under the MIT License.

 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
