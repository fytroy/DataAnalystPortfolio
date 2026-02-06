import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const personalInfo = {
  name: "Rodney Gitonga",
  role: "Data Analytics Officer & BI Specialist",
  email: "rodneyroygitonga@gmail.com",
  phone: "0705762775",
  location: "Nairobi, Kenya",
  about: "I am a Data Analytics Officer specializing in transforming complex financial and operational data into actionable business insights to enhance operational efficiency. My expertise is focused on the intersection of data visualization, SQL optimization, and business process automation within the financial sector. My core mission is to drive data-informed decision-making by architecting robust SQL views and developing dynamic Power BI dashboards.",
  shortBio: "Data Analytics Officer & BI Specialist transforming financial data into actionable insights. I architect robust SQL solutions and build dynamic Power BI dashboards to drive operational efficiency.",
  social: {
    github: "https://github.com/fytroy",
    linkedin: "https://www.linkedin.com/in/rodney-gitonga-9299a41ba/",
    email: "mailto:rodneyroygitonga@gmail.com",
    instagram: "https://www.instagram.com/fyt.roy/",
    devto: "https://dev.to/fytroy",
  },
};

export const skills = {
  analytics: [
    "Power BI (Advanced Dashboarding & DAX)",
    "Data Analysis & Data Modeling",
    "Financial Analysis & Forecasting",
    "Data Storytelling & Visualization",
    "ETL & Data Warehouse Concepts",
    "Microsoft Excel (Advanced)",
  ],
  databases: [
    "SQL (Query Optimization, Views, Stored Procedures)",
    "MySQL",
    "MongoDB",
    "Database Administration (Basic)",
    "Data Integrity & Validation",
    "Data Engineering Principles",
  ],
  programming: [
    "Python (Pandas, NumPy, Scikit-learn)",
    "JavaScript / AngularJS",
    "REST APIs & Integration",
    "Process Automation (Power Apps, Python)",
  ],
  cloud: [
    "Oracle Cloud Infrastructure (OCI)",
    "Amazon Web Services (AWS)",
    "Git & Version Control",
    "Docker & Containerization",
  ],
  systems: [
    "Windows Server & Active Directory",
    "Network Troubleshooting (TCP/IP, DNS)",
    "ITIL Principles & Service Desk",
    "System Hardening & Security",
  ],
  softSkills: [
    "Clear Communication",
    "Problem Resolution",
    "Cross-functional Collaboration",
    "Adaptability & Learning",
  ],
};

export const skillsRadar = [
  { subject: "Analytics & BI", A: 100, fullMark: 100 },
  { subject: "Database", A: 90, fullMark: 100 },
  { subject: "Coding", A: 85, fullMark: 100 },
  { subject: "Cloud & DevOps", A: 80, fullMark: 100 },
  { subject: "Systems", A: 75, fullMark: 100 },
  { subject: "Soft Skills", A: 95, fullMark: 100 },
];

export const skillsRich = [
  {
    name: "Power BI",
    description: "Advanced dashboarding, DAX, and storytelling.",
    category: "Analytics",
    rating: 5,
    icon: "BarChart3",
  },
  {
    name: "Python",
    description: "Pandas, NumPy, Scikit-learn for analysis.",
    category: "Programming",
    rating: 5,
    icon: "Code2",
  },
  {
    name: "SQL",
    description: "Complex queries, optimization, and stored procs.",
    category: "Databases",
    rating: 5,
    icon: "Database",
  },
  {
    name: "AWS & OCI",
    description: "Cloud infrastructure and deployment.",
    category: "Cloud",
    rating: 4,
    icon: "Cloud",
  },
  {
    name: "Data Engineering",
    description: "ETL pipelines and data warehousing.",
    category: "Analytics",
    rating: 4,
    icon: "Workflow",
  },
  {
    name: "Excel",
    description: "Advanced formulas and modeling.",
    category: "Analytics",
    rating: 5,
    icon: "FileSpreadsheet",
  },
];

export const experience = [
  {
    role: "Data Analytics Officer",
    company: "GULF AFRICAN BANK",
    link: "https://gulfafricanbank.com/",
    period: "September 2025 – Present",
    description: [
      "Managed and optimized ETL (Extract, Transform, Load) processes to ensure the timely and accurate delivery of data for reporting and analysis.",
      "Designed and built Power Apps solutions to streamline operations and automate workflows across different bank departments.",
      "Performed comprehensive data analysis to identify trends, forecast performance, and support strategic planning.",
      "Translated raw banking data into actionable visualizations, supporting executive decisions on P&L and risk.",
      "Developed and maintained the foundational data layer (views) used for major Power BI dashboards across the bank.",
      "Partnered with business units to define requirements and deliver custom Power BI solutions for performance tracking.",
      "Led the end-to-end data visualization process, from requirement gathering to dashboard creation, ensuring reports were tailored to meet the strategic needs of various business units.",
    ],
  },
  {
    role: "Data Analytics Engineer Intern",
    company: "GULF AFRICAN BANK",
    link: "https://gulfafricanbank.com/",
    period: "July 2025 – September 2025",
    description: [
      "Built Microsoft PowerApps solutions to streamline branch-level processes, improving efficiency and user experience across bank operations.",
      "Designed and developed interactive Power BI dashboards to visualize key financial and operational metrics, enabling data-driven decision-making.",
      "Gained hands-on experience in integrating Power BI dashboards with MySQL servers, ensuring seamless data connectivity and real-time reporting.",
    ],
  },
  {
    role: "IT Support Specialist Intern",
    company: "GULF AFRICAN BANK",
    link: "https://gulfafricanbank.com/",
    period: "January 2025 – July 2025",
    description: [
      "Provided responsive end-user support and resolved technical issues to ensure smooth day-to-day operations across banking systems.",
      "Delivered on-site and remote technical support for hardware, software, and peripheral devices across multiple departments.",
      "Assisted in the maintenance, configuration, and monitoring of enterprise systems including core banking applications and business information systems.",
      "Contributed to network troubleshooting and supported RESTful services in the organization’s internal applications.",
      "Supported the IT Service Desk by handling incident reports, logging issues, and escalating where necessary to improve resolution times.",
      "Participated in routine system updates, patching, and maintenance tasks, improving system performance and uptime.",
    ],
  },
  {
    role: "Office Accountant & IT Assistant",
    company: "VOI WINNERS HOUSING COOPERATIVE SOCIETY LIMITED",
    period: "May 2024 – January 2025",
    description: [
      "Managed daily financial operations, including ledger reconciliation, billing, and budgeting processes.",
      "Oversaw real estate property management tasks, coordinating tenant interactions and lease documentation.",
      "Handled client liaison and customer service, addressing inquiries and providing administrative support to senior management.",
      "Led the IT infrastructure management for the cooperative, including network setup, administration, and hardware/software support.",
      "Designed and implemented digital communication strategies to improve engagement and streamline internal operations.",
      "Proactively troubleshot and resolved IT issues, ensuring minimal downtime and enhancing system reliability for daily business functions.",
    ],
  },
  {
    role: "Junior Software Developer Intern",
    company: "NUMERAL IOT LIMITED",
    link: "https://www.numeraliot.com/",
    period: "June 2022 – October 2022",
    description: [
      "Developed web applications using AngularJS, ensuring responsive and user-friendly interfaces.",
      "Installed, configured, and maintained Windows Server environments to support business operations.",
      "Managed web hosting environments using cPanel, including domain and email configurations.",
      "Provided ongoing website maintenance and technical support to ensure optimal performance and uptime.",
      "Performed hardware diagnostics, repairs, and general computer maintenance.",
      "Supported system-level troubleshooting, configuration, and optimization for enhanced reliability and performance.",
    ],
  },
];

export const projects = [
  {
    title: "ATM Logistics Command Center",
    category: "Geospatial BI",
    description:
      "Simulates 'Last Mile' logistics for retail banking to optimize armored truck routes and prevent cash-out events.",
    tech: ["Python", "SQL Server", "Power BI"],
    link: "https://github.com/fytroy/ATMCashLogistics",
    image: "/images/map.png",
  },
  {
    title: "Bank Treasury & Market Watch System",
    category: "Financial Tech",
    description:
      "Tracks live market data, calculates treasury rates, and feeds real-time prices for assets like Gold and Bitcoin.",
    tech: ["SQL Server", "Live Data Feed"],
    link: "https://github.com/fytroy/MarketFeeder",
    image: "/images/dashboard.png",
  },
  {
    title: "AI-Powered Loan Risk Assessment",
    category: "Predictive Analytics",
    description:
      "Predicts borrower default probability using a Random Forest Classifier wrapped in a Streamlit app.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    link: "https://github.com/fytroy/LoanRiskApp-aipoweredloanriskassesor-",
    image: "/images/code.png",
  },
  {
    title: "AI Banking Analyst",
    category: "Generative AI",
    description:
      "Text-to-SQL Enterprise Solution acting as an Intelligent Analyst for a Tier 1 Banking Data Warehouse.",
    tech: ["GenAI", "MS-SQL", "Star Schema"],
    link: "https://github.com/fytroy/AI-BankingAnalyst-TexttoSQL-0.2",
    image: "/images/network.png",
  },
  {
    title: "Financial Data Pipeline",
    category: "Data Engineering",
    description:
      "ETL pipeline extracting financial news and exchange rates into Google BigQuery.",
    tech: ["Web Scraping", "APIs", "BigQuery"],
    link: "https://github.com/fytroy/Automated_Currency_Exchange_Rate_ETL_Pipeline",
    image: "/images/network.png",
  },
  {
    title: "Customer Segmentation Engine",
    category: "E-Commerce Analysis",
    description:
      "Conducts e-commerce analysis using clustering for targeted marketing strategies.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    link: "https://github.com/fytroy/ecommerce_analysis",
    image: "/images/dashboard.png",
  },
  {
    title: "Streamlit Workflow Dashboard",
    category: "Productivity",
    description:
      "Personal data hub integrating External APIs and Google Gemini AI for summarization.",
    tech: ["Streamlit", "Gemini AI", "APIs"],
    link: "https://github.com/fytroy/personal_dashboard",
    image: "/images/dashboard.png",
  },
  {
    title: "Banking NBO Microservice",
    category: "Backend API",
    description:
      "REST API serving real-time product recommendations (Next Best Offer) to banking frontends.",
    tech: ["FastAPI", "Python"],
    link: "https://github.com/fytroy/Banking_api",
    image: "/images/code.png",
  },
];

export const archiveProjects = [
  {
    title: "LuxeMetricDashboard",
    description: "A luxury metric tracking dashboard for high-end analytics.",
    tech: ["Dashboard", "Analytics"],
    link: "https://github.com/fytroy/LuxeMetricDashboard",
  },
  {
    title: "Flixsasa.py",
    description: "Python-based streaming service utility or analyzer.",
    tech: ["Python", "Automation"],
    link: "https://github.com/fytroy/Flixsasa.py",
  },
  {
    title: "DockerChat",
    description: "Containerized chat application using Docker.",
    tech: ["Docker", "Chat System"],
    link: "https://github.com/fytroy/DockerChat",
  },
  {
    title: "dskeeper",
    description: "Data science project keeper and organizer.",
    tech: ["Data Science", "Utility"],
    link: "https://github.com/fytroy/dskeeper",
  },
  {
    title: "NeonProtocol.vsTheme",
    description: "Custom neon-themed Visual Studio extension.",
    tech: ["VS Code", "Theme"],
    link: "https://github.com/fytroy/NeonProtocol.vsTheme",
  },
  {
    title: "RenderKeeper",
    description: "Rendering management tool for graphics or data visualization.",
    tech: ["Rendering", "Tools"],
    link: "https://github.com/fytroy/RenderKeeper",
  },
  {
    title: "NewYouPortfolioChallenge",
    description: "Portfolio challenge project for Dev.to.",
    tech: ["Web Development", "Portfolio"],
    link: "https://github.com/fytroy/NewYouPortfolioChallenge_dev.to",
  },
  {
    title: "Portfolio (Legacy)",
    description: "Previous version of personal portfolio website.",
    tech: ["HTML/CSS", "Legacy"],
    link: "https://github.com/fytroy/portfolio",
  },
  {
    title: "TrafficController.docker",
    description: "Dockerized traffic control simulation or system.",
    tech: ["Docker", "Simulation"],
    link: "https://github.com/fytroy/TrafficController.docker",
  },
  {
    title: "ReactTodoList",
    description: "Classic Todo List application built with React.",
    tech: ["React", "Frontend"],
    link: "https://github.com/fytroy/ReactTodoList",
  },
  {
    title: "ResourceMonitor.ms",
    description: "System resource monitoring tool.",
    tech: ["System", "Monitoring"],
    link: "https://github.com/fytroy/ResourceMonitor.ms",
  },
  {
    title: "DevOpsBootstrapper",
    description: "Bootstrapping tool for DevOps environments.",
    tech: ["DevOps", "Automation"],
    link: "https://github.com/fytroy/DevOpsBootstrapper.mssvr",
  },
  {
    title: "YtDownloader.py",
    description: "Python script for downloading YouTube videos.",
    tech: ["Python", "Scripting"],
    link: "https://github.com/fytroy/YtDownloader.py",
  },
  {
    title: "DataExplorer.py",
    description: "Tool for exploratory data analysis.",
    tech: ["Python", "EDA"],
    link: "https://github.com/fytroy/DataExplorer.py",
  },
  {
    title: "FallingBlocks.game",
    description: "Tetris-style falling blocks game.",
    tech: ["Game Dev", "Logic"],
    link: "https://github.com/fytroy/fallingblocks.game",
  },
  {
    title: "Starfield",
    description: "Starfield simulation project.",
    tech: ["Simulation", "Graphics"],
    link: "https://github.com/fytroy/starfield",
  },
  {
    title: "RealtimeChat.app",
    description: "Real-time messaging application.",
    tech: ["WebSockets", "Chat"],
    link: "https://github.com/fytroy/realtimechat.app",
  },
  {
    title: "Snake.game",
    description: "Classic Snake game implementation.",
    tech: ["Game Dev", "Python/JS"],
    link: "https://github.com/fytroy/snake.game",
  },
  {
    title: "ParameterizedDbPreservation",
    description: "PowerShell script for database preservation.",
    tech: ["PowerShell", "Database"],
    link: "https://github.com/fytroy/ParameterizedDbPreservation.ps1",
  },
  {
    title: "RepoCloner.py",
    description: "Automated tool for cloning repositories.",
    tech: ["Python", "Git"],
    link: "https://github.com/fytroy/RepoCloner.py",
  },
  {
    title: "Nova.web",
    description: "Web application project 'Nova'.",
    tech: ["Web", "Frontend"],
    link: "https://github.com/fytroy/nova.web",
  },
  {
    title: "BackupSQLServerDbs",
    description: "Tool to backup SQL Server databases to network locations.",
    tech: ["SQL Server", "Backup"],
    link: "https://github.com/fytroy/BackupSQLServerDbsToNetworkLocation",
  },
  {
    title: "Flopy-Blarb Game",
    description: "Experimental game project.",
    tech: ["Game Dev", "Experimental"],
    link: "https://github.com/fytroy/flopy-blarb--v1.game",
  },
  {
    title: "PBIRS Dashboards",
    description: "Power BI Report Server dashboards collection.",
    tech: ["Power BI", "Reporting"],
    link: "https://github.com/fytroy/PBIRSdashboards",
  },
  {
    title: "AIBankingAnalyst v0.1",
    description: "Early version of the AI Banking Analyst.",
    tech: ["AI", "SQL"],
    link: "https://github.com/fytroy/AIBankingAnalyst.TexttoSQL0.1",
  },
  {
    title: "TimuAI.web",
    description: "Web interface for TimuAI project.",
    tech: ["Web", "AI"],
    link: "https://github.com/fytroy/timuai.web",
  },
  {
    title: "SQLQueriesRepo",
    description: "Collection of useful SQL queries and scripts.",
    tech: ["SQL", "Database"],
    link: "https://github.com/fytroy/SQLQueriesRepo",
  },
  {
    title: "UrbanCart",
    description: "E-commerce platform simulation.",
    tech: ["E-commerce", "Web"],
    link: "https://github.com/fytroy/UrbanCart",
  },
  {
    title: "HighValueTransactionAlerts",
    description: "System for alerting on high-value financial transactions.",
    tech: ["FinTech", "Security"],
    link: "https://github.com/fytroy/HighValueTransactionAlerts",
  },
  {
    title: "MarketMonitor.streamlit",
    description: "Streamlit app for monitoring market trends.",
    tech: ["Streamlit", "Data Viz"],
    link: "https://github.com/fytroy/MarketMonitor.steamlit",
  },
  {
    title: "LiveFraudProject.py",
    description: "Real-time fraud detection script.",
    tech: ["Python", "Security"],
    link: "https://github.com/fytroy/LiveFraudProject.py",
  },
  {
    title: "SpotifyJobPipeline",
    description: "ETL pipeline for Spotify data.",
    tech: ["ETL", "Data Eng"],
    link: "https://github.com/fytroy/SpotifyJobpipeline.etl",
  },
  {
    title: "CustomerVoiceNLP",
    description: "NLP analysis of customer feedback.",
    tech: ["NLP", "Python"],
    link: "https://github.com/fytroy/CustomerVoiceNlp-naturallanguageprocessing",
  },
  {
    title: "FinancePipeline",
    description: "General purpose financial data pipeline.",
    tech: ["Data Eng", "Finance"],
    link: "https://github.com/fytroy/FinancePipeline",
  },
  {
    title: "StockPricePredictor",
    description: "ML model for predicting stock prices.",
    tech: ["Machine Learning", "Finance"],
    link: "https://github.com/fytroy/StockPricePredictor",
  },
  {
    title: "Simple ETL VS",
    description: "Simple Extract-Transform-Load project.",
    tech: ["ETL", "Data"],
    link: "https://github.com/fytroy/simple_etl_vs",
  },
  {
    title: "EcommercePipeline",
    description: "Data pipeline for e-commerce metrics.",
    tech: ["ETL", "E-commerce"],
    link: "https://github.com/fytroy/EcommercePipeline",
  },
  {
    title: "TimeSeriesForecasting",
    description: "Forecasting using Facebook Prophet.",
    tech: ["Prophet", "Time Series"],
    link: "https://github.com/fytroy/TimeSeriesForecastingwithProphet",
  },
  {
    title: "NLPTextClassifier",
    description: "Text classification using NLP techniques.",
    tech: ["NLP", "Classification"],
    link: "https://github.com/fytroy/NLPTextClassifier",
  },
  {
    title: "SklearnModelShowdown",
    description: "Comparing various Scikit-learn models.",
    tech: ["Scikit-learn", "ML"],
    link: "https://github.com/fytroy/SklearnModelShowdown",
  },
  {
    title: "CustomerChurnPrediction",
    description: "Pipeline for predicting customer churn.",
    tech: ["ML", "Prediction"],
    link: "https://github.com/fytroy/CustomerChurnPredictionPipeline",
  },
  {
    title: "CreditRiskPrediction",
    description: "Random forest model for credit risk analysis.",
    tech: ["ML", "Risk Analysis"],
    link: "https://github.com/fytroy/CreditRiskPredictionPipelineETL.randomforestmodel",
  },
  {
    title: "FraudDetection Jupyter",
    description: "Jupyter notebooks for fraud detection analysis.",
    tech: ["Jupyter", "Data Analysis"],
    link: "https://github.com/fytroy/FraudDetection.jupyterLab",
  },
  {
    title: "BankDataWarehouse",
    description: "Data warehouse implementation for banking data.",
    tech: ["DBT", "Data Warehouse"],
    link: "https://github.com/fytroy/BankDataWarehouse.dbt",
  },
  {
    title: "ContainerizedDataLake",
    description: "Dockerized setup for a Data Lake.",
    tech: ["Docker", "Data Lake"],
    link: "https://github.com/fytroy/ContainerizedDataLake.docker",
  },
];

export const labChallenges = [
  {
    title: "Optimizing High-Volume Transaction Queries",
    slug: "optimizing-high-volume-transaction-queries",
    category: "Database Performance",
    problem: "A critical daily report query was taking 45 minutes to execute, causing delays in morning briefings. The table contained over 10 million rows with multiple joins.",
    approach: "Analyzed the execution plan and identified a full table scan on the transaction log table. Created a composite non-clustered index on transaction_date and branch_id. Refactored the query to replace a correlated subquery with a CTE.",
    tools: ["SQL Server Management Studio", "SQL Execution Plan", "Database Engine Tuning Advisor"],
    lessons: "Indexing strategies must align with query patterns. CTEs can improve readability and sometimes performance over subqueries.",
    link: null, // Internal write-up only
    date: "Oct 2025",
    fullContent: `
      <h3>Background</h3>
      <p>The core banking system generates approximately 500,000 transaction records daily. A legacy stored procedure used for the "Daily Branch Performance" report was taking nearly an hour to run, often timing out or blocking other operations.</p>
      
      <h3>Diagnosis</h3>
      <p>I utilized SQL Server Profiler to capture the exact execution parameters and then analyzed the Execution Plan in SSMS. The plan revealed:</p>
      <ul>
        <li>A <strong>Table Scan</strong> on the \`Transactions_Log\` table (10M+ rows).</li>
        <li>A high-cost <strong>Key Lookup</strong> operation due to a missing include column in an existing index.</li>
        <li>A correlated subquery that was executing for every row in the result set.</li>
      </ul>

      <h3>The Fix</h3>
      <ol>
        <li><strong>Indexing:</strong> Created a composite non-clustered index on \`(TransactionDate, BranchID)\` and included \`Amount\` and \`TransactionType\` to cover the query requirements.</li>
        <li><strong>Refactoring:</strong> Rewrote the correlated subquery as a Common Table Expression (CTE) to allow the optimizer to process the aggregation set once.</li>
        <li><strong>Testing:</strong> Verified the new execution plan showed an <strong>Index Seek</strong> instead of a Scan.</li>
      </ol>

      <h3>Results</h3>
      <p>The query execution time dropped from <strong>45 minutes to 42 seconds</strong>, a 98% improvement effectively eliminating the morning delay.</p>
    `
  },
  {
    title: "Real-time Fraud Detection Dashboard",
    slug: "real-time-fraud-detection-dashboard",
    category: "Power BI & Streaming",
    problem: "Fraud analysts needed to see suspicious transaction patterns in real-time, but the existing report was only updated once a day.",
    approach: "Set up a Power BI streaming dataset connected to a Python script that monitored the transaction log API. Designed a dashboard with card visuals for immediate alerts and a line chart for trend analysis over the last hour.",
    tools: ["Power BI Service", "Python (Requests, Pandas)", "REST APIs"],
    lessons: "Real-time dashboards require a different design philosophy than historical reports—focus on immediate outliers rather than deep aggregation.",
    link: null,
    date: "Aug 2025",
    fullContent: `
      <h3>The Challenge</h3>
      <p>Fraudsters often test cards with small amounts before making large purchases. Detecting these "velocity attacks" requires real-time monitoring, but the bank's data warehouse only refreshed overnight.</p>

      <h3>Solution Architecture</h3>
      <p>I built a lightweight real-time monitoring solution using:</p>
      <ul>
        <li><strong>Python Script:</strong> Polled the core banking API every 30 seconds for new transactions flagged with specific high-risk codes.</li>
        <li><strong>Power BI Streaming Dataset:</strong> The Python script pushed payload data (Timestamp, Branch, Amount, RiskScore) directly to the Power BI Service via API.</li>
        <li><strong>Live Dashboard:</strong> A dashboard configured to auto-refresh, verifying the API push connection.</li>
      </ul>

      <h3>Key Visuals</h3>
      <p>The dashboard focused on speed of interpretation:</p>
      <ul>
        <li><strong>Big Number Cards:</strong> Displaying "High Risk Transactions (Last 1 Hour)".</li>
        <li><strong>Flow Map:</strong> Visualizing the origin of transactions geographically.</li>
      </ul>
    `
  },
  {
    title: "Automated Data Cleaning Pipeline",
    slug: "automated-data-cleaning-pipeline",
    category: "Python Automation",
    problem: "Creating the monthly sales report involved manually cleaning and merging 15 different Excel files from various branches, taking 6 hours of manual work.",
    approach: "Wrote a Python script using Pandas to iterate through the folder, read each Excel file, standardize column names, handle missing values, and merge them into a single master dataset ready for analysis.",
    tools: ["Python", "Pandas", "OpenPyXL"],
    lessons: "Automation not only saves time but drastically reduces human error in data preparation tasks.",
    link: "https://github.com/fytroy/FinancePipeline",
    date: "June 2024 - 2025",
    fullContent: `
       <h3>The Bottleneck</h3>
       <p>At the end of every month, branch managers would email Excel files with varying formats (merged cells, different headers) to the central team. Collating this took a full working day.</p>

       <h3>The Script</h3>
       <p>I developed a Python script using the \`pandas\` and \`os\` libraries to:</p>
       <ol>
         <li><strong>Scan:</strong> Iterate through a designated directory for .xlsx files.</li>
         <li><strong>Normalize:</strong> Map different column headers (e.g., "CustID", "CIF", "Client ID") to a standard schema.</li>
         <li><strong>Clean:</strong> Drop empty rows, fill missing numerical values with 0, and validate date formats.</li>
         <li><strong>Consolidate:</strong> Append all clean dataframes into a master list and export to a single CSV.</li>
       </ol>

       <h3>Outcome</h3>
       <p>The process now takes <strong>14 seconds</strong>. The team uses the saved time for deeper analysis of the sales data rather than just preparing it.</p>
    `
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Zetech University",
    period: "May 2019 – November 2024",
  },
  {
    degree: "Kenya Certificate of Secondary Education",
    school: "Chania Boys Highschool",
    period: "2015 – 2018",
  },
];

export const certifications = [
  {
    name: "Associate Data Engineer",
    issuer: "DataCamp",
    link: "https://www.datacamp.com/certificate/DEA0018680202658",
  },
  {
    name: "SQL Query Optimization for Beginners",
    issuer: "Simplilearn",
    link: "https://certificates.simplicdn.net/share/8557381_87142531751456873978.pdf",
  },
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic Education",
    link: "https://verify.skilljar.com/c/ngm65svry48w",
  },
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic Education",
    link: "https://verify.skilljar.com/c/e9synyyswwz8",
  },
  {
    name: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic Education",
    link: "https://verify.skilljar.com/c/98juhpb6i3q7",
  },
  {
    name: "Generative AI Fundamentals",
    issuer: "Databricks Academy",
    link: "https://credentials.databricks.com/f9ee6c6b-656c-4ed6-824b-35cc6de2c368",
  },
  {
    name: "Academy Accreditation - Databricks Fundamentals",
    issuer: "Databricks Academy",
    link: "https://credentials.databricks.com/3e7f1bd8-fcac-4db0-8a11-b4d361830069",
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco Academy",
    link: "https://www.credly.com/badges/a90d20ae-1029-407f-b2a0-0c4ddf7b0c65/",
  },
  {
    name: "Power BI for Beginners",
    issuer: "Simplilearn",
    link: "https://drive.google.com/file/d/1J-nCV80RxXlgP7b_zCMsITSDl3LT8aFy/view?usp=sharing",
  },
  {
    name: "SQL for Data Analysis",
    issuer: "Simplilearn",
    link: "https://certificates.simplicdn.net/share/8556315_87142531751435958458.pdf",
  },
  {
    name: "Python for Data Analysis",
    issuer: "Simplilearn",
    link: "https://certificates.simplicdn.net/share/8557221_87142531751445684306.pdf",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Architect Associate",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=216749D1FE29A4A989E062CDE20E99B0DB89EFB67B2D979DAE4896C88B875F07",
  },
  {
    name: "Investment Risk Management",
    issuer: "Coursera Project Network",
    link: "https://www.coursera.org/account/accomplishments/verify/KG3NB8FWMB3X",
  },
  {
    name: "Mastery Certified Data Management Professional (CDMP) -Associate",
    issuer: "Udemy Academy",
    link: "https://drive.google.com/file/d/1ObH4wdHq1NVnHWnnJv6NovZ3FVog-wve/view?usp=sharing",
  },
  {
    name: "Introduction to ITIL® V4",
    issuer: "Simplilearn",
    link: "https://drive.google.com/file/d/1PtWjfocJ8Dd2vZQkkHk0gknPDpmkZ8bv/view?usp=sharing/",
  },
  {
    name: "The AWS Technical Essentials",
    issuer: "Simplilearn",
    link: "https://drive.google.com/file/d/1ahoqx2OF3KL0hbaVrZOdJ6xNmBVMGMiy/view?usp=sharing/",
  },
  {
    name: "Endpoint Management & Security",
    issuer: "ManageEngine",
    link: "https://drive.google.com/file/d/1RlgvRFNU1soktUsiT2HSKdXJ9damho9u/view",
  },
  {
    name: "Endpoint Security",
    issuer: "Cisco Academy",
    link: "https://www.credly.com/badges/a90d20ae-1029-407f-b2a0-0c4ddf7b0c65/",
  },
  {
    name: "CGRC- Governance, Risk and Compliance Certification",
    issuer: "Udemy Academy",
    link: "https://drive.google.com/file/d/1HmertXw73IUQ6pjRLdPyZtcBreRQYxSn/view?usp=sharing",
  },
  {
    name: "Digital Safety and Security Awareness",
    issuer: "Cisco Academy",
    link: "https://www.credly.com/badges/60201a3e-9c04-4359-9b4f-4a3e1dbce6bc/",
  },
  {
    name: "English for IT 2",
    issuer: "Cisco Academy",
    link: "https://www.credly.com/badges/6256dc04-9a47-4be3-ad32-b66457f7e724/",
  },
  {
    name: "IT Customer Support Basics",
    issuer: "Cisco Academy",
    link: "https://www.credly.com/badges/eff51a6e-1b74-45a0-b716-f1bb00edab0d/",
  },
  {
    name: "Networking Devices and Initial Configuration",
    issuer: "Cisco Academy",
    link: "https://www.credly.com/badges/ad945a83-d2d4-4847-a7ba-332925fb970b/",
  },
  {
    name: "JavaScript Essentials 2",
    issuer: "Cisco Academy",
    link: "https://www.credly.com/badges/8d946ce0-f610-4ccc-ac72-5cddb9009eb8/",
  }
];
