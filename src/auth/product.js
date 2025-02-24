import { BASH_RUL } from "@/store/api/base_url";

export async function getAllProduct() {
  //   console.log(`${BASH_RUL}/products`);
  const respon = fetch(`${BASH_RUL}/products`).then((res) => res.json());
  const data = await respon;
  return data;
}

// use for get single product
export async function getSingleProduct(id) {
  //   console.log(`${BASH_RUL}/products`);
  const respon = fetch(`${BASH_RUL}/products/${id}`).then((res) => res.json());
  const data = await respon;
  return data;
}
