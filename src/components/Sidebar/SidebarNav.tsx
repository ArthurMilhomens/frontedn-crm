import { Stack } from "@chakra-ui/react";
import { RiContactsFill } from "react-icons/ri";
import { MdDashboard, MdConstruction } from "react-icons/md";
import { GiStack, GiTrophyCup } from "react-icons/gi";
import NavLink from "./NavLink";
import NavSection from "./NavSection";
import { HiOutlineInbox } from "react-icons/hi";

export default function SidebarNav(){
  return (
    <Stack spacing="12" align="flex-start">
        <NavSection title="INFO">
          <NavLink href="/dashboard" icon={MdDashboard}>Dashboard</NavLink>
          <NavLink href="/users" icon={RiContactsFill}>Usuários</NavLink>
          <NavLink href="/cards" icon={MdConstruction}>Cartas</NavLink>
          <NavLink href="/decks" icon={HiOutlineInbox}>Decks</NavLink>
        </NavSection>
        <NavSection title="SEASONS">
          <NavLink href="/current-season" icon={GiTrophyCup}>Atual</NavLink>
          <NavLink href="/seasons" icon={GiStack}>Todos</NavLink>
        </NavSection>
      </Stack>
  );
}