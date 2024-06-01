"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons";
import { useRouter } from "next/navigation";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  const menuItems = [
   
    {
      item: "System Design",
      path: "/system-design",
    },
    {
      item: "Operating Systems",
      path: "/os",
    },
    {
      item: "Database Management Systems",
      path: "/dbms",
    },
    {
      item: "Object Oriented Concepts",
      path: "Object-Oriented-Concepts/Introduction/Definition",
    },
    {
      item: "Help & Feedback",
      path: "/help",
    },
    
  ];
  const router = useRouter();

  return (
    <Navbar className="backdrop-blur-md " onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            
            <p className="font-bold  text-Phantom_alpha text-xl">Pinchly</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <Dropdown className="backdrop-blur-lg rounded-xl border border-slate-600">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                System Design
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              <button
                onClick={() => router.push("/system-design/high-level-design")}
                className="text-Phantom_alpha font-bold"
              >
                High Level Design
              </button>
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              <button
                onClick={() => router.push("/system-design/low-level-design")}
                className="text-Phantom_alpha font-bold"
              >
                Low Level Design
              </button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <button onClick={() => router.push("/os")} color="foreground">
            OS
          </button>
        </NavbarItem>
        <NavbarItem isActive>
          <button onClick={() => router.push("/dbms")} aria-current="page">
            DBMS
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => router.push("Object-Oriented-Concepts/Introduction/Definition")} aria-current="page">
            OOPS
          </button>
        </NavbarItem>
        <NavbarItem>
          <button color="foreground" onClick={() => router.push("/help")}>
            Help & Feedback
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Button
            className=""
            as={Link}
            color="warning"
            href="/register"
            variant="shadow"
          >
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.path}
              size="lg"
            >
              {item.item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
