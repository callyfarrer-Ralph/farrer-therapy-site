# The Farrer Therapy Group

Warm, professional Next.js website for online therapy with Cally Farrer.

## Local setup

Clone the three repos side-by-side:

```bash
git clone https://github.com/callyfarrer-Ralph/shared-ui-.git
git clone https://github.com/callyfarrer-Ralph/ADHD-Addiction.git
git clone https://github.com/callyfarrer-Ralph/farrer-therapy-site.git
cd farrer-therapy-site
npm install
npm run dev
```

Build check:

```bash
npm run build
```

The shared UI package is installed from `../shared-ui-`.

## Routes

- `/`
- `/services`
- `/about`
- `/fees`
- `/contact`
- `/faq`
- `/privacy`
- `/health`

## DigitalOcean deployment

For a Droplet or Docker host, clone all three repos into the same parent directory, then build from that parent directory so Docker can include `shared-ui-`:

```bash
docker build -f farrer-therapy-site/Dockerfile -t farrer-therapy-site .
docker run -p 3000:3000 farrer-therapy-site
```

For DigitalOcean App Platform, either use a parent build context that contains all three repos or publish `@farrer/shared-ui` to a package source and change the dependency from `file:../shared-ui-` to that package URL before deploying this repo alone.
