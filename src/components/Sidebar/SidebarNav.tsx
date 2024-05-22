import { Stack } from "@chakra-ui/react";
import { RiContactsFill } from "react-icons/ri";
import { MdDashboard, MdConstruction } from "react-icons/md";
import { GiStack, GiTrophyCup } from "react-icons/gi";
import NavLink from "./NavLink";
import NavSection from "./NavSection";
import { HiOutlineInbox } from "react-icons/hi";
import { TbSwords } from "react-icons/tb";

export default function SidebarNav(){
  return (
    <Stack spacing="12" align="flex-start">
        <NavSection title="MAIN">
          <NavLink href="/dashboard" icon={MdDashboard}>Dashboard</NavLink>
          {/* <NavLink href="/users" icon={RiContactsFill}>Usuários</NavLink> */}
          <NavLink href="/cards" icon={MdConstruction}>Cartas</NavLink>
          <NavLink href="/decks" icon={HiOutlineInbox}>Decks</NavLink>
        </NavSection>
        <NavSection title="JOGOS">
          <NavLink href="/matches" icon={TbSwords}>Partidas</NavLink>
          <NavLink href="/championships" icon={GiTrophyCup}>Campeonatos</NavLink>
        </NavSection>
      </Stack>
  );
}