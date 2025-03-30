import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";

// For demo purposes, we'll show some sample items in the cart
const cartItems = [
  { productId: "rolex-submariner", quantity: 1 },
  { productId: "seiko-prospex", quantity: 2 },
];

export default function CartPage() {
  // Get product details for cart items
  const itemsWithDetails = cartItems.map(item => {
    const product = products.find(p => p.id === item.productId);
    return {
      ...item,
      product,
    };
  });

  // Calculate totals
  const subtotal = itemsWithDetails.reduce((total, item) => {
    const price = item.product?.isSale && item.product?.salePrice 
      ? item.product.salePrice 
      : item.product?.price || 0;
    return total + (price * item.quantity);
  }, 0);
  
  const shipping = 15;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="container py-10">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Shopping Cart</h1>
      
      {itemsWithDetails.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
          <h2 className="mb-2 text-xl font-semibold">Your cart is empty</h2>
          <p className="mb-6 text-center text-muted-foreground">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Button asChild>
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {itemsWithDetails.map((item) => {
                if (!item.product) return null;
                
                return (
                  <Card key={item.productId} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                          {/* Image needed: Product image from data file for cart item */}
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover bg-gray-300"
                          />
                        </div>
                        <div className="flex-1">
                          <Link 
                            href={`/products/${item.productId}`}
                            className="font-medium hover:underline"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                          <div className="mt-2 flex items-center gap-2">
                            {item.product.isSale && item.product.salePrice ? (
                              <>
                                <span className="font-medium">${item.product.salePrice.toFixed(2)}</span>
                                <span className="text-sm text-muted-foreground line-through">
                                  ${item.product.price.toFixed(2)}
                                </span>
                              </>
                            ) : (
                              <span className="font-medium">${item.product.price.toFixed(2)}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex w-24 items-center justify-between rounded-md border px-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <span className="text-sm">{item.quantity}</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                          <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-6">
              <Link
                href="/products"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-medium">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-4 p-6 pt-0">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
                <div className="text-center text-xs text-muted-foreground">
                  Taxes and shipping calculated at checkout
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
} 