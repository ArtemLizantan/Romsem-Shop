import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useActions } from "../../../../hooks/useActions";
import { useEffect } from "react";

const Products = () => {
  const { product } = useSelector((state: RootState) => state.product);

  const { getProductsPizza } = useActions();

  useEffect(() => {
    getProductsPizza();
  }, [getProductsPizza]);

  console.log(product);

  return (
    <div className="products">
      <div className="products__body">
        {product.map(({ name }) => (
          <h1 key={name}>{name}</h1>
        ))}
      </div>
    </div>
  );
};

export default Products;
