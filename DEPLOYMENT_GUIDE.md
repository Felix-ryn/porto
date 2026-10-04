# 🚀 Deployment Guide

Panduan lengkap untuk deploy portfolio ke berbagai hosting platform.

## ✅ Pre-Deployment Checklist

Sebelum deploy, pastikan:

- [ ] Semua informasi personal sudah update
- [ ] Semua project sudah diupdate
- [ ] Gambar sudah ditambah ke `public/images/`
- [ ] Color theme sudah sesuai
- [ ] Test di development (`npm run dev`)
- [ ] Test responsive design
- [ ] Build berhasil (`npm run build`)
- [ ] Tidak ada warning di build
- [ ] CV link sudah benar
- [ ] Social links sudah benar

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Pros**:
- Optimized for Next.js
- Free tier
- Automatic deployments from Git
- Custom domain support
- Edge functions ready

**Cons**:
- Requires GitHub/GitLab account

**Steps**:

#### 1.1 Install Vercel CLI
```bash
npm install -g vercel
```

#### 1.2 Initialize Git (if not already)
```bash
git init
git add .
git commit -m "Initial commit"
```

#### 1.3 Push to GitHub (Optional but recommended)
```bash
# Create repo on GitHub
git remote add origin https://github.com/username/portfolio
git push -u origin main
```

#### 1.4 Deploy with Vercel
```bash
vercel
```

Follow the prompts:
- Link project (if connecting Git)
- Set project name
- Framework preset: Next.js
- Install dependencies: Yes
- Build command: `npm run build`
- Output directory: `.next`

#### 1.5 Configure Domain
- Get domain (Vercel, Namecheap, GoDaddy, etc.)
- Add domain in Vercel dashboard
- Update DNS records if needed

**Estimated Time**: 5-10 minutes

---

### Option 2: Netlify

**Pros**:
- Easy GitHub integration
- Free tier
- Form handling built-in
- Deploy previews

**Cons**:
- Requires GitHub repo

**Steps**:

#### 2.1 Prepare Build
```bash
npm run build
```

#### 2.2 Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

#### 2.3 Connect to Netlify
1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Connect GitHub
4. Select repository
5. Configure build:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

#### 2.4 Environment Variables
Add if needed in Netlify dashboard:
```
NODE_VERSION=18
```

**Estimated Time**: 10-15 minutes

---

### Option 3: Docker + Server

**Pros**:
- Full control
- Can run anywhere
- Can add backend

**Cons**:
- Requires server knowledge
- Need VPS/server

**Steps**:

#### 3.1 Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### 3.2 Build Docker Image
```bash
docker build -t portfolio .
```

#### 3.3 Run Locally
```bash
docker run -p 3000:3000 portfolio
```

#### 3.4 Deploy to Server
```bash
# Option A: Push to DockerHub
docker push username/portfolio

# Option B: SSH to server
scp Dockerfile user@server:/path/
docker pull username/portfolio
docker run -d -p 80:3000 portfolio
```

**Estimated Time**: 15-30 minutes

---

### Option 4: GitHub Pages

**Pros**:
- Free
- Built-in with GitHub
- No server needed

**Cons**:
- Static only (need to export)
- No server-side rendering

**Steps**:

#### 4.1 Configure Next.js for Export
Edit `next.config.ts`:
```typescript
export default {
  output: 'export',
  distDir: 'out',
  basePath: '/portfolio', // If using username.github.io/portfolio
}
```

#### 4.2 Build
```bash
npm run build
```

#### 4.3 GitHub Setup
```bash
git add .
git commit -m "Add static export config"
git push
```

#### 4.4 GitHub Pages Settings
1. Go to repository Settings
2. Pages section
3. Set source to `gh-pages` branch
4. Configure custom domain (optional)

#### 4.5 Deploy Script
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

**Estimated Time**: 10-20 minutes

---

### Option 5: Traditional Server (cPanel, etc)

**Pros**:
- Familiar for many
- Full control
- Easy to upgrade

**Cons**:
- Need to manage server
- SSH knowledge required

**Steps**:

#### 5.1 Build Locally
```bash
npm run build
```

#### 5.2 Create `.next` Folder
```bash
# Folder .next berisi production build
```

#### 5.3 Upload to Server
```bash
# Via FTP/SFTP
ftp upload:
- .next folder
- public folder
- node_modules (atau install di server)
- package.json
- package-lock.json
```

#### 5.4 SSH to Server
```bash
ssh user@yourserver.com
cd /path/to/portfolio
npm install --production
NODE_ENV=production npm start
```

#### 5.5 Setup Reverse Proxy (Nginx)
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }
}
```

#### 5.6 Setup Process Manager (PM2)
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 startup
pm2 save
```

**Estimated Time**: 30-60 minutes

---

## 🔍 Post-Deployment Verification

After deployment, verify:

### Functionality Check
- [ ] All pages load correctly
- [ ] Navigation links work
- [ ] Download CV link works
- [ ] Project detail pages work
- [ ] Contact form (if backend integrated)
- [ ] Social media links work
- [ ] Mobile responsive works

### Performance Check
- [ ] Page load time < 3s
- [ ] Lighthouse score > 80
- [ ] No console errors
- [ ] No broken images
- [ ] No CSS issues

### SEO Check
- [ ] Title tags are set
- [ ] Meta descriptions present
- [ ] Open Graph tags (optional)
- [ ] Sitemap (optional)
- [ ] robots.txt (optional)

### Security Check
- [ ] HTTPS enabled (free with Vercel/Netlify)
- [ ] No sensitive data exposed
- [ ] Headers are correct
- [ ] CORS configured (if needed)

---

## 📊 Comparison Table

| Platform | Setup Time | Cost | Ease | Scalability |
|----------|-----------|------|------|------------|
| Vercel | 5 min | Free | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Netlify | 10 min | Free | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Docker | 15 min | Varies | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| GitHub Pages | 10 min | Free | ⭐⭐⭐ | ⭐⭐ |
| Traditional | 30 min | $5-20/mo | ⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## 🎯 Recommended Setup: Vercel

**Fastest & Easiest** ⭐⭐⭐⭐⭐

### Quick Deploy (3 minutes)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Follow prompts
# → Link project
# → Confirm settings
# → Done!
```

Your portfolio will be live at: `yourproject.vercel.app`

### Add Custom Domain (5 minutes)

1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Vercel dashboard → Project Settings → Domains
3. Add your domain
4. Update DNS records (instructions provided)
5. Done! Visit your custom domain

---

## 🔧 Environment Variables (if needed)

For production, you might need:

```env
# .env.production
NEXT_PUBLIC_API_URL=https://api.example.com
NODE_ENV=production
```

Then reference in code:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

## 📈 Analytics Setup (Optional)

### Google Analytics

Add to `app/layout.tsx`:

```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Vercel Analytics

Built-in! Just enable in Vercel dashboard.

---

## 🚨 Troubleshooting Deployment

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Image 404 Errors
- Ensure images in `public/images/`
- Check paths in data files
- Paths are case-sensitive on Linux

### Port Already in Use
```bash
# Use different port
PORT=3001 npm start
```

### Slow Performance
- Optimize images (< 500KB)
- Enable caching in server config
- Add CDN if needed
- Monitor with Lighthouse

---

## 📱 Custom Domain Setup

### After Deploying to Vercel/Netlify:

1. **Buy Domain**
   - Namecheap
   - GoDaddy
   - Google Domains
   - Hostinger

2. **Add to Hosting**
   - Vercel Dashboard → Domains
   - Netlify Dashboard → Domain Settings

3. **Update DNS**
   - Follow instructions from hosting
   - Point to hosting nameservers

4. **Verify**
   - Wait 24-48 hours for DNS propagation
   - Visit your domain
   - Check SSL certificate (automatic)

---

## ✨ SSL Certificate

Most platforms provide free SSL:

- ✅ Vercel - Automatic
- ✅ Netlify - Automatic
- ✅ GitHub Pages - Automatic
- ⚠️ Traditional Server - Use Let's Encrypt (free)

---

## 🎉 You're Live!

After deployment:

1. ✅ Share link dengan orang-orang
2. 📊 Monitor with analytics
3. 📝 Keep content updated
4. 🔄 Deploy updates with Git push

---

## 📞 Support

### If deployment fails:

1. Check platform-specific docs
2. Look at build logs
3. Check environment variables
4. Verify file structure
5. Search error message online

---

**Deployment Complete!** 🎊

Your portfolio is now live on the internet!

---

Last Updated: Oct 4, 2026
Next.js: 16.3.8
