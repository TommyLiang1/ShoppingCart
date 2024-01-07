"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  close: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({
  category,
  handleOpen,
  close,
  isOpen,
  isAnyOpen,
}: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen && (
        <div className="absolute inset-x-0 top-full text-sm text-muted-foreground">
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />

          <div
            className={cn("relative bg-white", {
              "animate-fade-in": isOpen,
            })}
          >
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-16">
                {category.featured.map((item) => (
                  <div
                    onClick={() => close}
                    key={item.name}
                    className="relative text-base sm:text-sm hover:opacity-75"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={item.imageSrc}
                        alt="product category image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <Link
                      href={item.href}
                      className="mt-6 block font-medium text-gray-900"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1" aria-hidden="true">
                      Shop now
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
