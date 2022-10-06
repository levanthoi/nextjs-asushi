import React from "react";
import Link from "next/link";
import { DataCategory } from "/data/data";

const MenuProd = () => {
  return (
    <ul role="tablist" className="menu-product">
      {DataCategory.map((category) => {
        const { id, name, url } = category;
        return (
          <li key={id} role="presentation">
            <Link href={`/product/${url}`}>
              <a>{name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuProd;
