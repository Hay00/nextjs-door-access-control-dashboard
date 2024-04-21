"use client";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { log } from "console";
import Link from "next/link";
import { usePathname } from "next/navigation";

type a = ["usuarios"];

function NavBreadcrumb() {
  const mappedPaths = ["usuarios", "visualizar", "editar", "acessos"];
  const pathsNames = {
    usuarios: "Usuários",
    visualizar: "Visualizar",
    editar: "Editar",
    acessos: "Acessos",
  };
  const originalPath = usePathname();
  const pathNames = usePathname()
    .split("/")
    .filter((s) => s.match(/[a-zA-Z]+/g))
    .filter((s) => mappedPaths.includes(s));

  const isHomePage = pathNames.length === 0;
  // console.log("originalPath", originalPath);
  // console.log("pathNames", pathNames);
  // console.log("isHomePage", isHomePage);

  // What this component should do:
  // The first breadcrumb is always 'Inicio'
  // The current page should use the property 'isCurrentPage' on the BreadcrumbLink component
  // Don't show the id in the breadcrumb, like 'usuarios/1/visualizar' or 'usuarios/1/editar
  function mapPathToBreadcrumb() {
    // match
  }

  return (
    <Box display='flex' padding='0.85rem'>
      <Breadcrumb spacing='0.5rem' separator={<ChevronRightIcon />}>
        <BreadcrumbItem
        // isCurrentPage={isHomePage}
        >
          <BreadcrumbLink as={Link} href='#'>
            Inicio
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.map((path, index) => (
          <BreadcrumbItem
            key={path + index}
            // isCurrentPage={true}
            // isCurrentPage={true}
          >
            <BreadcrumbLink as={Link} href='#'>
              {/* {pathsNames[path] || "Pagina"} */}
              Topper
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
}

export default NavBreadcrumb;
