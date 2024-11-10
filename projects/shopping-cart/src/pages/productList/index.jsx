import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../../components/ProductTile";

function ProductListpage() {
  const { listOfProducts, loading } = useContext(ShoppingCartContext);

  console.log(listOfProducts);

  if (loading)
    return (
      <div
        wire:loading
        className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
      >
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-white text-xl font-semibold">
          Loading...
        </h2>
        <p className="w-1/3 text-center text-white">
          This may take a few seconds, please don&apos;t close this page.
        </p>
      </div>
    );

  return (
    <section className="py-12  sm:py-16 lg:py-72">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl ">
            Our Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
          {listOfProducts && listOfProducts.length > 0 ? (
            listOfProducts.map((singleProductTile) => (
              <ProductTile
                key={singleProductTile?.id}
                singleProductTile={singleProductTile}
              />
            ))
          ) : (
            <h3>No Products Found</h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductListpage;
