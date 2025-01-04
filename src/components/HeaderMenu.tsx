import { ModeToggle } from "./mode-toggle";

export default function HeaderMenu() {
  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "About",
      href: "/about",
    },
  ];
  return (
    <div className="flex justify-center py-4">
      <div className="flex items-center justify-between w-full">
        <p className="text-2xl">Srinath Venkatesh</p>
        {menuItems.map((item, index) => (
          <a key={index} href={item.href}>
            {item.title}
          </a>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
}
