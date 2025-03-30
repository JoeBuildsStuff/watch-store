# Chronos Watch Store

A modern e-commerce site for luxury watches built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- Responsive design optimized for all devices
- Product listing with filtering and sorting
- Detailed product pages
- Shopping cart functionality
- Category browsing
- Clean, modern UI using shadcn/ui components

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd watch-store
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
watch-store/
├── public/                # Static assets
│   └── images/            # Product images
├── src/
│   ├── app/               # Next.js app router pages
│   ├── components/        # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   └── product-card.tsx
│   ├── data/              # Mock data
│   │   └── products.ts
│   └── lib/               # Utility functions
└── package.json
```

## Pages

- `/` - Home page with featured products and categories
- `/products` - All products with filtering
- `/products/[id]` - Individual product page
- `/collections/[category]` - Category pages
- `/cart` - Shopping cart

## Development

### Adding New Components

To add a new shadcn/ui component:

```bash
npx shadcn add [component-name]
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
