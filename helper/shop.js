import { DataProduct, DataCategory } from "/data/data";

// fn: format giá sản phẩm
const formatProductPrice = (price) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

// fn: tăng só lượng sản phẩm
const inCrease = (id, listProduct) => {
  const updateCart = listProduct.map((curElem) => {
    if (curElem.id === id) {
      return { ...curElem, quantity: curElem.quantity + 1 };
    }
    return curElem;
  });
  return updateCart;
};

// fn: giảm só lượng sản phẩm
const deCrease = (id, listProduct) => {
  const updateCart = listProduct.map((curElem) => {
    if (curElem.id === id) {
      if (curElem.quantity > 1)
        return { ...curElem, quantity: curElem.quantity - 1 };
    }
    return curElem;
  });
  return updateCart;
};

// fn: xử lý input[range]
const handleChange = (id, e, listProduct) => {
  const updateCart = listProduct.map((curElem) => {
    if (curElem.id === id) {
      if (curElem.quantity >= 1)
        return { ...curElem, quantity: e.target.value };
      else return { ...curElem, quantity: 1 };
    }
    return curElem;
  });
  return updateCart;
};

//get link url Routes
const getUrl = (id) => {
  const product = DataProduct.find((curElem) => curElem.id === id);
  const category = DataCategory.find(
    (curElem) => curElem.id === product.categoryId
  );
  return category.url;
};

export default {
  formatProductPrice,
  inCrease,
  deCrease,
  handleChange,
  getUrl,
};
