


"use client";
import { BsCart4 } from "react-icons/bs";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navbarItem } from "./menu";
import Category from "./Cart";
import { ReactNode } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "@/redux/feature/cart/cartSlice";
import { ProductType } from "@/type/ProductType";
// 

type MenuItem = {
  name: ReactNode;
  path: string;
  active: boolean;
};

export default function NavbarComponent() {
  const pathname = usePathname();
  // const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  // const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector(selectProducts);

  // useEffect(() => {
  //   dispatch(fetchUserProfile());
  // }, [dispatch]);

  if(pathname === "/login" ){
    return null
  }
  return (
    <Navbar className="bg-gray-200 text-lg h-20 font-bold " disableAnimation>
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Image
            width={50}
            className="mr-4 rounded-full"
            height={50}
            src={""}
            alt={""}
          />
          <p className="font-bold text-inherit">IVSHOPS</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4 lg: " justify="start">
        <NavbarBrand>
          <Image
            width={50}
            className="mr-4 rounded-full"
            height={50}
            src={""}
            alt={""}
          />
          <p className="font-bold text-inherit">IVSHOPS</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4 lg: " justify="center">
        {navbarItem.map((item, index: any) => (
          <NavbarItem key={index}>
            <Link
              color="foreground"
              href={item.path}
              className={`${
                pathname === item.path && "font-bold text-blue-800"
              }`}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
       
        {/* <NavbarItem className="hidden sm:flex bg-blue-800 p-2 px-4 rounded-lg">
          <Link href="/signup" className="text-white">Signup</Link>
        </NavbarItem> */}
        {/* <svg className="w-10 h-10 text-orange-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12.268 6A2 2 0 0 0 14 9h1v1a2 2 0 0 0 3.04 1.708l-.311 1.496a1 1 0 0 1-.979.796H8.605l.208 1H16a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L4.686 5H4a1 1 0 0 1 0-2h1.5a1 1 0 0 1 .979.796L6.939 6h5.329Z"/>
  <path d="M18 4a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V8h2a1 1 0 1 0 0-2h-2V4Z"/>
</svg> */}
        <NavbarItem >
          <Category  cartItems={cartItems}/>
            {/* <span className="text-3xl text-orange-500"><BsCart4/></span>
            <span className="absolute -top-1 text-xs left-4 px-1 rounded-lg bg-orange-500 text-gray-200">{}</span> */}
        </NavbarItem>
        <NavbarItem  className="hidden sm:flex">
          <Button as={Link} className=" from-blue-500 text-lg font-bold text-white bg-blue-500 p-4 rounded-lg" href="/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
       
      
      </NavbarContent>

      <NavbarMenu>
        {navbarItem.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === navbarItem.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.path}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem className="w-full text-[18px]">
          <Link href="/my-shop" className="bg-blue-800 rounded-lg p-3">My shop</Link>
        </NavbarItem>
        <NavbarItem className="w-full text-[18px]">
          <Link href="/login">Login</Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}