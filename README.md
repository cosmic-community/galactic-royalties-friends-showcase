# 🌟 Galactic Royalties Friends Showcase

![App Preview](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=300&fit=crop&auto=format)

A luxurious, modern web application that showcases extraordinary individuals through an elegant friends directory. Features a special spotlight section celebrating creative visionaries and their multifaceted talents.

## ✨ Features

- **Dynamic Friend Profiles** - Beautiful card layouts with photos, bios, and contact information
- **Featured Spotlight Section** - Dedicated showcase for exceptional talents at the page bottom
- **Cosmic Theme Design** - Deep space colors with golden accents and premium aesthetics
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Elegant transitions and hover effects throughout
- **Search Functionality** - Quick filtering to find specific profiles
- **SEO Optimized** - Proper meta tags and structured data
- **Easy Content Management** - All content managed through Cosmic CMS

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68e5384e260d9dd939d1c4b9&clone_repository=6900bef7271316ad9f4b6f82)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "https://bb-collections-galactic-royalties-e-orpin.cosmic.site/
i want to make several modifications. write on in very cool format 
at the end of the page AN EXAMPLE OF THE CREATION OF ONE IN MILLION, GREAT DIRECTOR, ANIMATOR, GAME DESGINER, ASTROLOGER... ASHIRWAD MULE
and add more expensive royal luxurious rare epic collections like watches, outfits, gems jewels"

### Code Generation Prompt

> Based on the content model I created for "https://bb-collections-galactic-royalties-e-orpin.cosmic.site/
i want to make several modifications. write on in very cool format 
at the end of the page AN EXAMPLE OF THE CREATION OF ONE IN MILLION, GREAT DIRECTOR, ANIMATOR, GAME DESGINER, ASTROLOGER... ASHIRWAD MULE for crediting
and add more expensive royal luxurious rare epic collections like watches, outfits, gems jewels", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK v1.5+** - Official SDK for API integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account with your bucket set up
- Environment variables (see below)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching All Friends

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: friends } = await cosmic.objects
  .find({ type: 'friends' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Friend

```typescript
const response = await cosmic.objects.findOne({
  type: 'friends',
  slug: 'friend-slug'
}).depth(1)

const friend = response.object
```

## 🌐 Cosmic CMS Integration

This application uses the Cosmic SDK to fetch and display friend profiles from your Cosmic bucket. The content model includes:

- **Name** - Friend's full name
- **Photo** - Profile image (optimized with imgix)
- **Bio** - Detailed biography
- **Contact Info** - Optional contact details

All content is dynamically fetched and can be updated through the Cosmic dashboard without code changes.

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the "Deploy with Vercel" button
2. Add your environment variables in the Vercel dashboard
3. Deploy!

### Environment Variables for Production

Make sure to set these in your hosting platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key (optional for read-only apps)

<!-- README_END -->