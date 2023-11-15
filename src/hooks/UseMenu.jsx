import { useState, useEffect, useMemo } from "react";
import { ContactPhone, PersonOutline, WorkHistory } from "@mui/icons-material";
import About from "../components/About";
import SkillsSection from "../components/Skills";
import Contact from "../components/Contact";

const STORAGE_KEY = "selectedMenuItem";
const menuItems = [
  {
    id: 1,
    Name: "About Me",
    Icon: PersonOutline,
    Selected: true,
    component: <About />,
  },
  {
    id: 2,
    Name: "Skills",
    Icon: WorkHistory,
    Selected: false,
    component: <SkillsSection />,
  },
  {
    id: 3,
    Name: "Contact Us",
    Icon: ContactPhone,
    Selected: false,
    component: <Contact />,
  },
];
export const useMenu = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(() => {
    const storedSelectedMenuItem = sessionStorage.getItem(STORAGE_KEY);
    return storedSelectedMenuItem ? storedSelectedMenuItem : menuItems[0].id;
  });

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, selectedMenuItem);
  }, [selectedMenuItem]);

  const SetMenuItem = (itemId) => {
    sessionStorage.setItem(STORAGE_KEY, itemId);
    setSelectedMenuItem(itemId);
  };
  const selectedItem = useMemo(() => {
    return menuItems.find((item) => item.id === parseInt(selectedMenuItem));
  }, [selectedMenuItem]);
  return {
    menuItems,
  SetMenuItem,
    selectedItem,
    selectedMenuItem
  };
};
