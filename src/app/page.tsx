import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, CreditCard, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 8);
  const newArrivals = products.filter(product => product.isNew).slice(0, 4);
  const saleProducts = products.filter(product => product.isSale).slice(0, 4);
  
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
          <div className="absolute inset-0 flex items-center">
            <Image 
              src="/images/hero-watch.jpg" 
              alt="Luxury watch" 
              fill 
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
        <div className="container relative z-20 flex h-full flex-col justify-center text-white">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Timeless Elegance on Your Wrist
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Discover our collection of premium timepieces crafted with precision and style.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/collections/luxury">
                Shop Luxury
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white hover:text-black" asChild>
              <Link href="/new-arrivals">
                New Arrivals
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Shop by Category</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/collections/luxury" className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black">
              <Image 
                src="/images/category-luxury.jpg" 
                alt="Luxury Watches" 
                fill 
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 flex h-60 flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-bold">Luxury</h3>
              <p className="mt-2 text-sm text-white/80">Timeless elegance and craftsmanship</p>
              <Button variant="outline" size="sm" className="mt-4 bg-transparent text-white hover:bg-white hover:text-black">
                Explore
              </Button>
            </div>
          </Link>
          <Link href="/collections/sport" className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black">
              <Image 
                src="/images/category-sport.jpg" 
                alt="Sport Watches" 
                fill 
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 flex h-60 flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-bold">Sport</h3>
              <p className="mt-2 text-sm text-white/80">Durable timepieces for active lifestyles</p>
              <Button variant="outline" size="sm" className="mt-4 bg-transparent text-white hover:bg-white hover:text-black">
                Explore
              </Button>
            </div>
          </Link>
          <Link href="/collections/smart" className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black">
              <Image 
                src="/images/category-smart.jpg" 
                alt="Smart Watches" 
                fill 
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 flex h-60 flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-bold">Smart</h3>
              <p className="mt-2 text-sm text-white/80">Connected watches with modern features</p>
              <Button variant="outline" size="sm" className="mt-4 bg-transparent text-white hover:bg-white hover:text-black">
                Explore
              </Button>
            </div>
          </Link>
          <Link href="/collections/classic" className="group relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black">
              <Image 
                src="/images/category-classic.jpg" 
                alt="Classic Watches" 
                fill 
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 flex h-60 flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-bold">Classic</h3>
              <p className="mt-2 text-sm text-white/80">Timeless designs that never go out of style</p>
              <Button variant="outline" size="sm" className="mt-4 bg-transparent text-white hover:bg-white hover:text-black">
                Explore
              </Button>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
          <Button variant="ghost" className="gap-1 group" asChild>
            <Link href="/products">
              View All
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              salePrice={product.salePrice}
              image={product.images[0]}
              brand={product.brand}
              isNew={product.isNew}
              isSale={product.isSale}
            />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">New Arrivals</h2>
          <Button variant="ghost" className="gap-1 group" asChild>
            <Link href="/new-arrivals">
              View All
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              salePrice={product.salePrice}
              image={product.images[0]}
              brand={product.brand}
              isNew={product.isNew}
              isSale={product.isSale}
            />
          ))}
        </div>
      </section>

      {/* Sale Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Special Offers</h2>
            <Button variant="ghost" className="gap-1 group" asChild>
              <Link href="/sale">
                View All Sales
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {saleProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                salePrice={product.salePrice}
                image={product.images[0]}
                brand={product.brand}
                isNew={product.isNew}
                isSale={product.isSale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container">
        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-medium">Free Shipping</h3>
            <p className="mt-2 text-sm text-muted-foreground">On orders over $100</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CreditCard className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-medium">Secure Payment</h3>
            <p className="mt-2 text-sm text-muted-foreground">100% secure payment</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-medium">2-Year Warranty</h3>
            <p className="mt-2 text-sm text-muted-foreground">On all timepieces</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg className="h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                <rect height="8" width="18" x="3" y="8" rx="1"></rect>
                <path d="M10 8V5a2 2 0 0 1 4 0v3"></path>
              </svg>
            </div>
            <h3 className="mt-4 font-medium">Easy Returns</h3>
            <p className="mt-2 text-sm text-muted-foreground">30-day return policy</p>
          </div>
        </div>
      </section>
    </div>
  );
}
