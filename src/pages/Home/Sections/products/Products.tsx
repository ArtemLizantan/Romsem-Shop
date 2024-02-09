import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useActions } from "../../../../hooks/useActions";
import { useEffect } from "react";

const Products = () => {
  const { isLoading, error, product } = useSelector(
    (state: RootState) => state.product
  );

  const { getProductsPizza } = useActions();

  useEffect(() => {
    console.log(getProductsPizza());
  }, [getProductsPizza]);

  return (
    <div className="products">
      <div className="products__body">{product.name}</div>
    </div>
  );
};

export default Products;
