# Decluttering with Val — Website

Hey Val! This is your website's code. Below is everything you need to get set up on your own computer so you can make changes, see them live, and publish updates — all by chatting with an AI assistant called **Claude Code**.

You won't need to learn how to code. You just describe what you want in plain English, and Claude Code will make the changes for you.

---

## What You'll Be Installing

| Tool | What It Does |
|------|-------------|
| **VS Code** | A free app where you view and edit your website files |
| **Claude Code** | An AI assistant that lives inside VS Code and makes changes for you |
| **Node.js** | A behind-the-scenes tool that Claude Code needs to run |
| **Git** | Saves snapshots of your work and syncs it to the internet |

---

## Step 1: Install VS Code

1. Go to **https://code.visualstudio.com**
2. Click the big **Download** button (it will detect your computer type automatically)
3. Open the downloaded file and drag it into your **Applications** folder (Mac) or run the installer (Windows)
4. Open VS Code

---

## Step 2: Install Node.js

1. Go to **https://nodejs.org**
2. Click the green button that says **LTS** (this is the stable version)
3. Open the downloaded file and follow the installer steps — just keep clicking "Continue" / "Next"
4. When it's done, restart VS Code if it's open

---

## Step 3: Install Claude Code in VS Code

1. Open **VS Code**
2. Click the **Extensions** icon on the left sidebar (it looks like four small squares)
3. In the search bar at the top, type **Claude Code**
4. Find **"Claude Code"** by Anthropic and click **Install**
5. After it installs, you'll see a Claude icon in your left sidebar — click it
6. It will ask you to sign in to your Anthropic account. Follow the prompts to log in
   - If you don't have an account yet, go to **https://console.anthropic.com** and create one
   - You'll need to add a payment method (Claude Code usage is pay-as-you-go, typically a few dollars per session)

---

## Step 4: Get Your Website Files

1. Open **VS Code**
2. Open the Claude Code panel (click the Claude icon in the left sidebar)
3. Type this into the chat:

```
Clone the repository https://github.com/kedarshashi/decluttering-website and open it
```

Claude will download all your website files and open them for you.

---

## Step 5: See Your Website Locally

Once your files are open in VS Code, tell Claude:

```
Start a local server so I can preview my website in the browser
```

Claude will set one up and give you a link (usually something like `http://localhost:3000`). Click it to see your website on your own computer. Changes you make will show up here before they go live.

---

## Making Changes to Your Website

This is the fun part! Just open Claude Code and describe what you want in plain English. Here are some examples:

### Changing text
```
Change the hero headline to "Transform your space. Transform your life."
```

### Changing colors
```
Make the accent color a dusty rose instead of terracotta
```

### Adding a new section
```
Add a testimonials section on the home page with 3 quotes from clients
```

### Changing photos
```
Replace the about page portrait with the file val-soundhealing-01.jpg from the Photos folder.
Make sure to optimize it for the web first.
```

### Changing layout
```
On mobile, make the services show as a horizontal scrollable row instead of stacking vertically
```

You can be as specific or as general as you want. Claude will figure out which files to change and do it for you.

---

## Publishing Your Changes

When you're happy with how things look locally, tell Claude:

```
Commit my changes, push to GitHub, and deploy to Vercel
```

That's it. Within a minute or two, your live site at **https://decluttering-with-val.vercel.app** will be updated.

---

## Helpful Commands to Know

You can type these into Claude Code at any time:

| What to type | What it does |
|---|---|
| `Show me what the home page looks like right now` | Claude reads through the code and describes the current state |
| `Undo the last change you made` | Reverts the most recent edit |
| `What files make up this website?` | Claude explains the project structure |
| `Make the site look more modern` | Claude will redesign elements with a fresh aesthetic |
| `The site looks broken on my phone, fix it` | Claude will investigate and fix responsive/mobile issues |

---

## Your Website Files — A Quick Map

```
decluttering-website/
  index.html          ← Home page
  about.html          ← About Val page
  services.html       ← Services page
  contact.html        ← Contact / inquiry form page
  css/styles.css      ← All the visual styling (colors, fonts, spacing)
  js/main.js          ← Animations and interactive behavior
  images/             ← Optimized photos used on the site
  Photos/             ← Original full-size photos (not uploaded to the site)
```

---

## If Something Goes Wrong

Don't panic! Just tell Claude:

```
Something looks wrong on the site. Can you check what happened and fix it?
```

Or if you want to go back to how things were:

```
Undo all changes since the last deploy
```

Everything is saved in version history, so nothing is ever permanently lost.

---

## Need Help?

Reach out to Kedar — he set this all up and can help troubleshoot anything weird.
