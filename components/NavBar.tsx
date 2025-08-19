"use client";
import Link from "next/link";
import { Home, Map, ShoppingCart, Contact, Settings } from "lucide-react";
const Item = ({ href, label, Icon }: any) => (
  <Link href={href} className="flex flex-col items-center gap-1 text-xs text-gray-600">
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </Link>
);
export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white">
      <div className="mx-auto grid max-w-md grid-cols-5 gap-2 p-2">
        <Item href="/" label="Home" Icon={Home} />
        <Item href="/map" label="Map" Icon={Map} />
        <Item href="/orders" label="Orders" Icon={ShoppingCart} />
        <Item href="/buyers" label="Buyers" Icon={Contact} />
        <Item href="/more" label="More" Icon={Settings} />
      </div>
    </nav>
  );
}
