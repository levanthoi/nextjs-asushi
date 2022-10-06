import React from "react";
import Link from "next/link";

const CartButton = (props) => {
  const { title, path, class1 } = props;
  return (
    <li>
      <Link href={path}>
        <button
          // key={key}
          className={`button ${class1}`}
          aria-label={title}
          title={title}
          type="button"
        >
          <span>{title}</span>
        </button>
      </Link>
    </li>
  );
};

export default CartButton;
