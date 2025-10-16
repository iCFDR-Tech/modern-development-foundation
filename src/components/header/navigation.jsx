"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BookOpenText,
  Eye,
  HandHeart,
  Home,
  Mail,
  Menu,
  Phone,
  PhoneCall,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faXTwitter,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "../ui/button";

const links = [
  {
    href: "/",
    label: "Home",
    icon: <Home className="w-5 h-5" />,
  },
  {
    href: "/about",
    label: "About Us",
    icon: <BookOpenText className="w-5 h-5"/>,
  },
  {
    href: "/vision-mission",
    label: "Vision & Mission",
    icon: <Eye className="w-5 h-5"/>,
  },
  {
    href: "/contact",
    label: "Contact Us",
    icon: <PhoneCall className="w-4 h-4"/>,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="bg-[#215aff]">
        <div className="container mx-auto px-5 lg:px-10 xl:px-0 py-2 text-white flex justify-between flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <div className="flex gap-2 items-center">
              <Phone className="h-4 w-4" />
              <span>8851597933</span>
            </div>
            <div className="flex gap-2 items-center">
              <Mail className="h-5 w-5" />
              <span>info@moderndreamfoundation.com</span>
            </div>
          </div>

          <div className="mt-4 xl:mt-0 flex gap-4">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faFacebookSquare} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faInstagramSquare} />
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 lg:px-10 xl:px-0  py-4 flex">
        <div className="items-center">
          <Link href="/">
            <Image alt="Logo" src="/logo.png" width={150} height={117} />
          </Link>
        </div>
        <div className="container mx-auto flex items-center justify-center">
          <div className="text-base lg:text-lg font-semibold hidden md:inline-flex">
            <div className="flex items-center gap-8">
              {links.map((link, idx) => {
                return (
                  <Link
                    key={idx}
                    href={link.href}
                    className={pathname === link.href ? "text-[#04e841]" : ""}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden md:inline-flex">
          <div className="flex items-center">
            <a href="#">
              <Button className="bg-[#000d44] hover:bg-[#000d44]/80 cursor-pointer rounded-3xl">
                Donate Now
              </Button>
            </a>
          </div>
        </div>

        <div className="inline-flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="mt-10">
                {links.map((link, idx) => (
                  <SheetTitle key={idx} className="mb-2">
                    <Link
                      href={link.href}
                      className={`flex gap-2 items-center ${
                        pathname === link.href ? "text-blue-500" : ""
                      }`}
                    >
                      {link.icon}
                      <nav>{link.label}</nav>
                    </Link>
                  </SheetTitle>
                ))}

                <SheetTitle>
                  <a href="#" className="flex gap-2 items-center">
                    <HandHeart className="w-5 h-5"/>
                    <nav>Donate</nav>
                  </a>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
