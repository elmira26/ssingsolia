# Singsolia - Professional Vocal Coaching Website

Professional, mobile-first website for vocal coaching services.

## 🎨 Design Features
- Mobile-first responsive design
- Custom color scheme (#3B313D, #FFB84D, #E85D9C, #CBC8B7)
- Video hero section with controls
- Smooth scroll navigation
- Interactive Q&A accordion
- Credentials gallery with filters
- Integrated booking calendar

## 📁 Project Structure
```
singsolia-site/
├── index.html           # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Photo assets
├── icons/              # SVG icons
├── assets/             # Video and other media
├── .htaccess           # Security & performance config
├── robots.txt          # SEO configuration
└── README.md           # This file
```

## 🚀 Deployment Instructions

### GitHub Pages
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/" (root)
6. Click Save
7. Your site will be live at: `https://[username].github.io/[repo-name]`

### Custom Domain (Optional)
1. Add CNAME file with your domain
2. Configure DNS at your registrar:
   - A record: 185.199.108.153
   - A record: 185.199.109.153
   - A record: 185.199.110.153
   - A record: 185.199.111.153
3. Enable HTTPS in GitHub Pages settings

### Other Hosting (Netlify, Vercel, etc.)
1. Connect your GitHub repository
2. Deploy automatically
3. Configure custom domain if needed

## 📧 Contact Integration
- Email: blendvoice@gmail.com
- Telegram: https://t.me/singsolia
- Google Calendar: https://calendar.app.google/myWkcJU93B5vzonf7

## 🔒 Security Features
- XSS protection
- Clickjacking prevention
- Content Security Policy
- MIME type sniffing protection
- Gzip compression
- Browser caching

## 🛠️ Customization

### Update Colors
Edit `css/style.css` and change CSS variables:
```css
:root {
    --deep-dark: #3B313D;
    --amber: #FFB84D;
    --pink: #E85D9C;
    --beige: #CBC8B7;
    --title-black: #1D1B20;
    --text-gray: #49454E;
}
```

### Update Content
- Hero section: Edit line 30-60 in `index.html`
- About section: Edit line 100-140 in `index.html`
- Pricing: Edit line 200-250 in `index.html`
- Q&A: Edit line 280-340 in `index.html`

### Add More Credentials
1. Add images to `/images/` folder
2. Add HTML in credentials section:
```html
<div class="credential-item" data-year="2025">
    <img src="images/your-image.jpg" alt="Description">
    <div class="credential-info">
        <span class="credential-title">Title</span>
        <div class="credential-meta">
            <span class="year">2025</span>
        </div>
    </div>
</div>
```

## 📱 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License
© 2024 Singsolia. All rights reserved.

## 🆘 Support
For issues or questions, contact: blendvoice@gmail.com