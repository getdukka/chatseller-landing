
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  onClick
}) => {
  return (
    <div className="group bg-white rounded-lg border border-border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="aspect-square bg-muted/30 relative overflow-hidden">
        <img
          src={image || '/placeholder.svg'}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity duration-300">
          <Button variant="secondary" size="sm" className="h-8">
            <Eye className="h-4 w-4 mr-1" />
            View
          </Button>
          <Button size="sm" className="h-8">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-sm line-clamp-1">{name}</h3>
        <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-primary font-semibold">{price}</span>
          <span className="text-xs text-muted-foreground">In stock</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
