# KAWOK — website

The digital home of KAWOK: the Toledo Temple Trail, Chaos Oasis and the Kulcha Fair.

Built with Next.js (App Router) + TypeScript + Tailwind CSS, and exported as a
folder of plain HTML files so it can be served by Cloudflare Pages with no
server to run, pay for or patch.

---

## Running it on your own computer

You need Node.js installed once (from nodejs.org — take the "LTS" version).
Then, in a terminal, inside this folder:

```bash
npm install     # only needed the first time
npm run dev
```

Open http://localhost:3000 in a browser. Anything you change in the files
appears in the browser within a second.

To produce the finished site for the web:

```bash
npm run build
```

That creates a folder called `out/`. **That folder is the website.**

---

## Putting it on the internet

### 1. Buy the domain (Porkbun)

Register the KAWOK domain. Nothing else to do there yet.

### 2. Put the code on GitHub

Create a new **private** repository on github.com, then from inside this folder:

```bash
git init
git add .
git commit -m "First version of the KAWOK website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kawok.git
git push -u origin main
```

> Make sure the GitHub account is one **you** own, not a developer's. Whoever
> owns the repository, the domain and the Cloudflare account owns the website.

### 3. Connect Cloudflare Pages

1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**
2. Choose the `kawok` repository.
3. Set the build settings exactly:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
4. Deploy.

From then on, every time the code changes on GitHub, Cloudflare rebuilds and
publishes the site automatically. There is no "uploading" step ever again.

### 4. Point the domain at it

In Cloudflare Pages → your project → **Custom domains** → add the KAWOK domain,
and follow the instructions to change the nameservers at Porkbun. Allow a few
hours for it to take effect.

---

## Where the words live

**Almost every piece of text on the site is in one file: `lib/content.ts`.**

Contact details, the three pillars, the five build steps, the temple figures,
the timeline, the ways to help, the cultural statement — all of it. Longer page
copy sits inside the page files in `app/`.

Lines marked `// NEEDS CONFIRMATION` are facts that were not verified when the
site was built. Check them before launch.

## Adding the content editor (CMS)

Not installed yet — this is the next job, exactly as it was for the Chaos Oasis
site. The plan is a free, git-based editor (Sveltia CMS or Decap CMS) reachable
at `yoursite.com/admin`, where you log in with your GitHub account and edit
text and images through simple forms. Saving there commits to GitHub, which
triggers a Cloudflare rebuild, and the site updates within about a minute.

When that goes in, the content in `lib/content.ts` moves into editable files so
the editor can reach it. Nothing about the design changes.

---

## Design system

Everything is defined in two files: `tailwind.config.ts` (colours, fonts,
spacing) and `app/globals.css` (type scale, buttons, motion, the signature
motif). Change a colour there and it changes across the whole site.

- **Palette** — warm limestone and parchment as the base, deep forest ink for
  dark bands, terracotta as the single accent, and jade/amber used *only* when
  the subject is glass, so those colours keep their meaning.
- **Type** — Archivo (expanded grotesque) for headings and interface labels;
  Newsreader (editorial serif) for body copy. The usual arrangement is a serif
  display over a sans body; this is deliberately the other way round, which is
  what gives the pages their museum-catalogue feel rather than a wedding
  invitation feel.
- **Signature motif** — a bottle base seen end-on. It appears as the dotted
  rules between sections (`<Course />`), as the numbered circles on the build
  steps (`.bottle-end`), and as the fading field of glass under the temple
  figures (`.bottle-field`). Every wall on this project is a grid of those
  circles, so the design system is made of the same thing the buildings are.
- **Motion** — one pattern only: a slow fade and rise as content scrolls into
  view (`components/Reveal.tsx`). It switches itself off completely for anyone
  who has "reduce motion" enabled on their device.

## Images

Images are pre-sized into `/public/images` as WebP files, and Next.js's image
optimiser is turned off (it needs a server; we do not have one and do not want
one). If you add a photograph, resize it to about 1600 pixels wide and save it
as WebP before putting it in that folder — do not drop a 10 MB phone photo
straight in.

Every render on the site is captioned **"Concept render"**. Please keep it that
way: nothing on the trail has been built yet, and the credibility of the whole
project depends on never blurring that line.

## Fonts

Fonts currently load from Google Fonts via a `<link>` in `app/layout.tsx`.
To self-host them instead — faster, more private, and no third-party request —
replace that link with `next/font/google`:

```ts
import { Archivo, Newsreader } from "next/font/google";
const display = Archivo({ subsets: ["latin"], variable: "--font-display", axes: ["wdth"] });
const body = Newsreader({ subsets: ["latin"], variable: "--font-body" });
```

and add `className={`${display.variable} ${body.variable}`}` to the `<html>`
tag. Next then downloads the fonts once at build time and serves them from your
own site.

## Still to do

- Content editor (CMS) at `/admin`
- Working contact form (currently the Contact page uses WhatsApp and email
  links, which reach a real inbox — no form is silently swallowing enquiries)
- Journal / news section
- Interactive trail map — deliberately deferred until more than one site is real
- Confirm the facts marked `// NEEDS CONFIRMATION` in `lib/content.ts`
- Replace the low-resolution reference photographs with original files
- Structural review of the temple design before any "safe to build" language
