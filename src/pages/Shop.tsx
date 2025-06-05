import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export default function Shop() {
  const { toast } = useToast();
  const [cart, setCart] = useState<Product[]>([]);
  
  const products: Product[] = [
    {
      id: 1,
      name: "Classic White Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop",
      category: "Footwear",
      description: "Minimalist white sneakers that go with everything in your wardrobe."
    },
    {
      id: 2,
      name: "Vintage Denim Jacket",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=500&auto=format&fit=crop",
      category: "Outerwear",
      description: "Classic denim jacket with a comfortable, worn-in feel."
    },
    {
      id: 3,
      name: "Leather Crossbody Bag",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=500&auto=format&fit=crop",
      category: "Accessories",
      description: "Stylish and practical leather bag with adjustable strap."
    },
    {
      id: 4,
      name: "Cotton Graphic T-Shirt",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=500&auto=format&fit=crop",
      category: "Tops",
      description: "Soft, 100% cotton t-shirt with a unique graphic print."
    },
    {
      id: 5,
      name: "Aviator Sunglasses",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=500&auto=format&fit=crop",
      category: "Accessories",
      description: "Classic aviator style with UV protection and polarized lenses."
    },
    {
      id: 6,
      name: "Slim Fit Jeans",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=500&auto=format&fit=crop",
      category: "Bottoms",
      description: "Comfortable stretch denim in a versatile dark wash."
    }
  ];
  
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const addToWishlist = (product: Product) => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {cart.length}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105" 
              />
            </div>
            <CardHeader className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </div>
                <div className="font-bold text-lg">${product.price}</div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-muted-foreground text-sm">{product.description}</p>
            </CardContent>
            <CardFooter className="p-4 flex gap-2">
              <Button 
                className="flex-1" 
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => addToWishlist(product)}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}