import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  {
    id: "1",
    name: "Custom Embroidered Dress",
    description: "Elegant dress with custom embroidery patterns",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: "2",
    name: "Embroidered Table Runner",
    description: "Beautiful table runner with intricate embroidery",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: "3",
    name: "Custom Name Embroidery",
    description: "Personalized name embroidery service",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=400&h=400&q=80",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1920&h=600&q=80"
          alt="Boutique Embroidery"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-6 text-5xl font-bold">Boutique Embroidery & Stitching</h1>
          <p className="mb-8 max-w-2xl text-lg">
            Discover our exquisite collection of custom embroidery and professional
            stitching services. Transform your fabrics into works of art.
          </p>
          <div className="flex gap-4">
            <Link href="/products">
              <Button size="lg" className="text-lg">
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-lg border bg-background p-4 transition-shadow hover:shadow-lg"
            >
              <div className="relative mb-4 aspect-square overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <Link href={`/products/${product.id}`}>
                  <Button>View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-background p-6 text-center">
              <h3 className="mb-4 text-xl font-semibold">Custom Embroidery</h3>
              <p className="text-muted-foreground">
                Personalized embroidery designs tailored to your preferences.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 text-center">
              <h3 className="mb-4 text-xl font-semibold">Professional Stitching</h3>
              <p className="text-muted-foreground">
                Expert stitching services for all types of garments.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 text-center">
              <h3 className="mb-4 text-xl font-semibold">Alterations</h3>
              <p className="text-muted-foreground">
                Precise alterations to ensure the perfect fit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
