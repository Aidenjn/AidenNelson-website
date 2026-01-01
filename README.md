# 🌟 Aiden Nelson's Website
Professional website, developer project portfolio, and place for putting smaller projects out for public access.

# 🪾 The Repo
This repository contains the full codebase for Aiden Nelson's website, including:
- Next.js website
- Sanity Studio CMS (for content management)

## 🗂️ Structure

```
/
├── site       # Next.js website (deployed to Vercel)
│
├── cms        # Sanity Studio (locally run to manage content)
│
├── README.md  # What you are reading
│
└── .gitignore # ignore rules that apply to both site and cms
```


# 🚀 Technologies

## Frontend Site (the gallery)
- Next.js
- React
- Tailwind CSS
- TypeScript
- Framer Motion (animation library)

## CMS
- Sanity v3 Studio

## Tooling
- ESLint
- Prettier
- TypeScript
- React
- Next.js
- Vercel (deployment)

# 📦 Setup

## 🛠️ Install Dependencies

### Site

```
cd site
npm install
```

### Sanity Studio CMS
```
cd cms
npm install
```


# 🏃 Development

## Run the site

`npm run dev:site`

This runs the Next.js development server locally:

http://localhost:3000



## Run the Sanity Studio

`npm run dev:cms`

This runs the Sanity Studio locally:

http://localhost:3333


## 🏗️ Build Commands

Build the site:

```
cd site
npm run build
```

Build the CMS:

```
cd cms
npm run build
```

## 🧽 Other Commands

Lint the site code:

```
cd site
npm run lint
```

Format the site code (using Prettier):

```
cd site
npm run format
```

# 🚀 Deployment

## Next.js Site

The `site` project is deployed through Vercel.

When setting up the project in Vercel:
- Project Directory: `site`
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: `.next`

Vercel automatically handles workspace-based installs.

I have set up my deployments to trigger after a push to this repo.

## Sanity CMS (Content Managent Interface)

The CMS is meant to be run locally to manage content. Hosting is possible but out of scope for this project.

# 📁 Git Ignore Rules

Each project handles its own ignored files, but there are global ignores too. The global rules include:

- node_modules/
- .next/ (Next.js build output)
- .sanity/ and dist/ (CMS build output)
- Environment files (.env*)
- OS junk files (.DS_Store)
- Editor folders (.vscode/, .idea/)

# 📖 Useful Things of Note
- The CMS and website share the same Git repository but operate independently.
- The CMS is meant to be run locally only. It's purpose is to easily add and manage content for the site.
- Vercel supports deploying the Next.js site from site/.