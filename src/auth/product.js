import { BASH_RUL } from "@/store/api/base_url";

export async function getAllProduct() {
  //   console.log(`${BASH_RUL}/products`);
  const respon = fetch(`${BASH_RUL}/products`).then((res) => res.json());
  const data = await respon;
  return data;
}
