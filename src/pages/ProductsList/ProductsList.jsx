import { Fragment, useEffect } from "react";
import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../providers/products/products-slice";

export const ProductsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    if (!products) {
      dispatch(getProducts());
    }
  }, [products, dispatch]);

  const productList = products && products.length > 0;

  const emptyProductList = !products || products?.length < 1;

  return (
    <Fragment>
      <div className="w-full flex justify-between p-4 border-b-2 border-gray-200">
        <div className="ml-auto">
          <Button color="dark" onClick={() => navigate("/products/add")}>
            {isLoading ? "Loading" : "Add Product"}{" "}
            {!isLoading && <HiPlus className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Batch number</Table.HeadCell>
          </Table.Head>
          {emptyProductList && (
            <div className="flex items-center justify-center mt-10">
              <p className="text-center text-lg">Product list is empty</p>
            </div>
          )}
          <Table.Body className="divide-y">
            {productList &&
              products?.map(({ id, productName, batchNumber, quantity, amount }) => (
                <Table.Row key={id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {productName}
                  </Table.Cell>
                  <Table.Cell>₦{amount}</Table.Cell>
                  <Table.Cell>{quantity}</Table.Cell>
                  <Table.Cell>{batchNumber}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </Fragment>
  );
};
