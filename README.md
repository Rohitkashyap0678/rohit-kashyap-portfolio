# 🚀 Rohit Kashyap - Portfolio Website

A stunning, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features beautiful animations, responsive design, and a fully functional contact form.

![Portfolio Preview](public/portfolio-preview.png)

## ✨ Features

### 🎨 **Modern Design**
- **Beautiful UI/UX** with gradient backgrounds and smooth animations
- **Responsive Design** that works perfectly on all devices
- **Dark/Light theme** support with system preference detection
- **Interactive components** with hover effects and micro-interactions

### 📱 **Pages & Sections**
- **Homepage** - Hero section with introduction and quick stats
- **About** - Personal story, values, education, and certifications
- **Experience** - Professional timeline with detailed work history
- **Skills** - Interactive skill categories with proficiency levels
- **Projects** - Portfolio showcase with pricing and live demos
- **Contact** - Functional contact form with EmailJS integration

### 🛠️ **Technical Features**
- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations and transitions
- **EmailJS** for contact form functionality
- **React Hot Toast** for beautiful notifications
- **Responsive Images** with Next.js Image optimization

### 🎯 **Performance Optimized**
- **SEO Optimized** with proper meta tags and structured data
- **Core Web Vitals** optimized for excellent user experience
- **Image Optimization** with Next.js automatic optimization
- **Code Splitting** for faster loading times

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rohit-portfolio.git
   cd rohit-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # EmailJS Configuration (for contact form)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   
   # Optional: Analytics
   NEXT_PUBLIC_GA_TRACKING_ID=your_google_analytics_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📧 Email Setup (Contact Form)

To enable the contact form functionality, you need to set up EmailJS:

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set up Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:
   ```html
   Subject: New Contact Form Submission from {{from_name}}
   
   Hello,
   
   You have received a new message from your portfolio website:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   Best regards,
   Portfolio Contact Form
   ```
4. Copy your **Template ID**

### Step 4: Get Public Key
1. Go to **Integration** in your EmailJS dashboard
2. Copy your **Public Key**

### Step 5: Update Environment Variables
Update your `.env.local` file with the actual values:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### Step 6: Update Contact Form
Open `src/components/ContactForm.tsx` and replace the placeholder values:
```typescript
// Replace these with your actual EmailJS IDs
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
```

## 🎨 Customization

### Personal Information
Update your personal details in `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  phone: "+1234567890",
  location: "Your Location",
  description: "Your professional description",
  socialLinks: {
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourusername",
    upwork: "https://upwork.com/freelancers/yourprofile"
  }
};
```

### Projects & Portfolio
Add your projects in the same file:

```typescript
export const projects = [
  {
    title: "Your Project Name",
    description: "Project description with key features and technologies used",
    image: "https://your-image-url.com/image.jpg",
    liveUrl: "https://your-live-project.com",
    skills: ["React", "Node.js", "MongoDB"],
    category: "Website",
    price: "$5,000",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
  // Add more projects...
];
```

### Skills & Experience
Update your professional experience and skills in the same data file.

### Styling & Theme
- **Colors**: Modify the Tailwind config in `tailwind.config.ts`
- **Fonts**: Update fonts in `src/app/layout.tsx`
- **Components**: Customize individual components in `src/components/`

## 📁 Project Structure

```
rohit-portfolio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── experience/     # Experience page
│   │   ├── projects/       # Projects page
│   │   ├── skills/         # Skills page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout with footer
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactForm.tsx # Functional contact form
│   │   ├── Footer.tsx      # Website footer
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── Projects.tsx
│   └── data/
│       └── portfolio.ts    # All website data
├── public/                 # Static assets
│   ├── projects/          # Project images
│   └── ...
├── .env.local             # Environment variables
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Set up environment variables in Netlify dashboard

### Other Platforms
The website can be deployed to any platform that supports Node.js applications.

## 🛠️ Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run start`** - Start production server
- **`npm run lint`** - Run ESLint
- **`npm run type-check`** - Run TypeScript check

## 🔧 Configuration

### SEO Optimization
Update metadata in `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Professional Title",
  description: "Your professional description for SEO",
  keywords: ["keyword1", "keyword2", "keyword3"],
  // ... other SEO fields
};
```

### Analytics
To add Google Analytics, update the tracking ID in your environment variables and include the analytics script in the layout.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** - The React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **EmailJS** - Email service for contact forms
- **Unsplash** - Beautiful stock photos for project images

## 📞 Support

If you have any questions or need help setting up the portfolio:

- **Email**: roopeshkumar443@gmail.com
- **LinkedIn**: [Rohit Kashyap](https://www.linkedin.com/in/rohit-kashyap-611a201a6)
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/rohit-portfolio/issues)

## 🌟 Features to Add

- [ ] Blog section with MDX support
- [ ] Theme switcher (dark/light mode)
- [ ] Multi-language support
- [ ] Admin panel for content management
- [ ] Progressive Web App (PWA) features
- [ ] Advanced animations and interactions

---

**Made with ❤️ by [Rohit Kashyap](https://github.com/yourusername)**

*Star ⭐ this repository if you found it helpful!*
