"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"


export function Navbar() {
  return (
     <div className='sticky top-0 w-full z-50 h-24 bg-white flex justify-center items-center'>
           <NavigationMenu >
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <NavigationMenuTrigger className={cn("hover:text-customeprimary", )}>Services</NavigationMenuTrigger>
          <NavigationMenuContent className={cn("absolute ")} >
            <ul className="grid z-50 gap-3 p-4 rounded-lg md:w-[200px] border-b-[6px] border-b-customeprimary ">
              <ListItem href="/translation-services" >
                Translation Services
              </ListItem>
              <ListItem href="/transcription-services" >
                Transcription Services
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>    
          <NavigationMenuTrigger>Languages</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid z-50 gap-3 p-4 rounded-lg md:w-[200px] border-b-[6px] border-b-customeprimary ">
              <ListItem href="/languages" >
              Languages
              </ListItem>
              <ListItem href="/history-of-languages" >
                History Of Languages
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>    
          <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
      
         <NavigationMenuContent >
          <ul className="grid z-50 gap-3 p-4 rounded-lg md:w-[200px] border-b-[6px] border-b-customeprimary ">
              <ListItem href="/contact-us" >
              Contact Us
              </ListItem>
              <ListItem href="/recruitment" >
                Recruitment
              </ListItem>
            </ul>
          </NavigationMenuContent>
     
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <Button  className="bg-customeprimary rounded-full p-2">Get a quote</Button>
     </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "",
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none">{title}</div>
          <p className=" text-sm leading-snug text-muted-foreground hover:text-customeprimary">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
