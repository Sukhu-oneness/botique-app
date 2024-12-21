'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';
import { useAppDispatch } from '@/lib/hooks/redux';
import { addItem } from '@/lib/redux/features/cartSlice';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export function ProductCard({ id, name, description, price, image }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, price, image, quantity: 1 }));
  };

  return (
    <div className="group overflow-hidden rounded-lg border bg-background p-4 transition-shadow hover:shadow-lg">
      <div className="relative mb-4 aspect-square overflow-hidden rounded-md">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{name}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">{formatPrice(price)}</span>
        <div className="flex gap-2">
          <Link href={`/products/${id}`}>
            <Button variant="outline">View</Button>
          </Link>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
