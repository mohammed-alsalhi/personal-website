# Personal Portfolio Website

A clean, modern portfolio website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Clean and modern UI
- Easy to customize
- Fast loading times

## Customization

### 1. Update Personal Information

Edit `index.html` and replace:
- `Your Name` with your actual name
- Update the About section with your information
- Add your actual projects (replace Project Title 1, 2, 3)
- Update skills based on what you know

### 2. Update Links

Replace these placeholder links:
- Email: `your.email@example.com`
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- Project links in each project card

### 3. Customize Colors (Optional)

Edit `styles.css` at the top to change colors:
```css
:root {
    --primary-color: #3b82f6;  /* Main accent color */
    --secondary-color: #8b5cf6;  /* Secondary accent */
    /* ... more colors */
}
```

## Local Development

1. Open `index.html` in your browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve
   ```
3. View at `http://localhost:8000`

## Deployment Options

### Option 1: GitHub Pages (Recommended - Free & Easy)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. Go to your repository on GitHub
3. Click **Settings** > **Pages**
4. Under "Source", select `main` branch
5. Click **Save**
6. Your site will be live at `https://yourusername.github.io/personal-website`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up and click "Add new site" > "Import an existing project"
3. Connect your GitHub repository
4. Click "Deploy site"
5. Your site will be live with a custom URL

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com/)
2. Sign up and click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Your site will be live instantly

## File Structure

```
personal-website/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript for interactions
└── README.md       # Documentation
```

## Tips for CS Students

1. **Add Real Projects**: Replace placeholder projects with:
   - Course projects (if allowed by professor)
   - Personal coding projects
   - Hackathon projects
   - Contributions to open source

2. **Keep Skills Updated**: Update your skills as you learn new technologies

3. **Regular Updates**: Update your portfolio each semester with new projects

4. **Make it Personal**: Add personality to your About section

5. **Get Feedback**: Share with peers and professors for feedback

## Next Steps

- [ ] Customize all personal information
- [ ] Add real projects with descriptions
- [ ] Update skills section
- [ ] Add your photo (optional)
- [ ] Deploy to GitHub Pages or Netlify
- [ ] Share on LinkedIn
- [ ] Add custom domain (optional)

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## License

Feel free to use this template for your personal portfolio!
