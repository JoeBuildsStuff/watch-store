import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">About Chronos</h3>
            <p className="text-sm text-muted-foreground">
              Discover premium timepieces for every occasion. Chronos brings you the finest selection of watches from around the world.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-muted-foreground hover:text-foreground">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-sm text-muted-foreground hover:text-foreground">
                  Warranty Information
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/new-arrivals" className="text-sm text-muted-foreground hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-sm text-muted-foreground hover:text-foreground">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/store-locator" className="text-sm text-muted-foreground hover:text-foreground">
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Connect With Us</h3>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium">Newsletter</h4>
              <p className="text-xs text-muted-foreground">Subscribe to receive updates on new arrivals and special promotions.</p>
              <form className="mt-2 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button className="rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Chronos Watch Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 