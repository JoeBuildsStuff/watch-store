import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  brand,
  isNew = false,
  isSale = false,
  salePrice,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg border">
      <CardContent className="p-0">
        <Link href={`/products/${id}`} className="relative block">
          <AspectRatio ratio={3/4}>
            <div className="absolute inset-0 z-10">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </div>
          </AspectRatio>
          <div className="absolute top-2 right-2 z-20 flex gap-1">
            {isNew && (
              <span className="rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                New
              </span>
            )}
            {isSale && (
              <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                Sale
              </span>
            )}
          </div>
          <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <div className="flex w-full justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{brand}</p>
            <h3 className="font-medium">{name}</h3>
          </div>
          <Button size="icon" variant="ghost" className="rounded-full">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            {isSale && salePrice ? (
              <>
                <p className="font-medium">${salePrice.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground line-through">${price.toFixed(2)}</p>
              </>
            ) : (
              <p className="font-medium">${price.toFixed(2)}</p>
            )}
          </div>
          <Button size="sm" className="rounded-full">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
} 