import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: any) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-10">
      <Link
        href="/products"
        className="mb-6 flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <Card className="overflow-hidden rounded-lg">
            <AspectRatio ratio={1}>
              {/* Image needed: Primary product image from data file */}
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover bg-gray-300"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </AspectRatio>
          </Card>
          <div className="grid grid-cols-4 gap-4">
            {product.images.slice(1).map((image, index) => (
              <Card
                key={index}
                className="cursor-pointer overflow-hidden rounded-lg"
              >
                <AspectRatio ratio={1}>
                  {/* Image needed: Secondary product images from data file */}
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 2}`}
                    fill
                    className="object-cover bg-gray-300"
                    sizes="(min-width: 1024px) 12vw, 25vw"
                  />
                </AspectRatio>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text-muted-foreground">{product.brand}</p>
          </div>
          
          <div className="flex items-center gap-4">
            {product.isSale && product.salePrice ? (
              <>
                <span className="text-2xl font-bold">${product.salePrice.toFixed(2)}</span>
                <span className="text-lg text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                  {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-2">
            <p className="font-medium">Features:</p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <p className="mb-2 font-medium">Quantity:</p>
              <div className="flex w-32 items-center rounded-md border">
                <Button variant="ghost" size="icon" className="rounded-r-none">
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <div className="flex-1 text-center">1</div>
                <Button variant="ghost" size="icon" className="rounded-l-none">
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to Wishlist</span>
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Specifications</h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="font-medium">{key}:</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Stock: <span className={product.stock < 5 ? "text-red-500" : ""}>{product.stock} available</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 