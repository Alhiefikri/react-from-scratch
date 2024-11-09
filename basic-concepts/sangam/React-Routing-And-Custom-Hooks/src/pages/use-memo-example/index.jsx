import { useEffect } from "react";
import useFetch from "../../hooks/use-fetch";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMemo } from "react";

function UseMemoExample() {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [flag, setFlag] = useState(false);

  function filterProductByPrice(getProducts) {
    console.log("this function is getting rendered");

    return getProducts?.length > 0
      ? getProducts.filter((singleProductItem) => singleProductItem.price > 10)
      : [];
  }

  const memorizeVersion = useMemo(
    () => filterProductByPrice(data?.products),
    [data?.products]
  );

  if (loading) return <h1>Loading! Please wait</h1>;

  console.log(data);

  return (
    <div>
      <h1 style={{ color: flag ? "red" : "black" }}>Use Memo</h1>
      <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
      <ul>
        {memorizeVersion.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemoExample;
