import { useEffect } from "react";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Card } from "../../components";
import { getStore } from "../../providers/merchantStore/merchantStore";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { storeName } = useSelector((state) => state.merchantStoreSlice);
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!storeName) {
      dispatch(getStore());
    }
  }, [dispatch, storeName]);

  const handleNavigation = () => {
    if (storeName) {
      navigate("/products");
    } else {
      navigate("/store");
    }
  };

  return (
    <div>
      <div className="flex gap-2 flex-col md:flex-row">
        <div className="flex-1">
          <Card heading="Total Transactios" subHeading={405} className="flex-1 w-32">
            <Button color="light" onClick={() => navigate("/transactions")}>
              View more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>
        <div className="flex-1  w-32">
          <Card heading="Total Products" subHeading={products?.length || 0} className="w-32">
            <Button color="light" onClick={() => navigate("/products")}>
              View more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>
        <div className="flex-1">
          <Card heading="Total Orders" subHeading={195}>
            <Button color="light" onClick={() => navigate("/customers")}>
              View more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <Button color="dark" onClick={handleNavigation}>
          {storeName ? "Add products" : "Create store"}
        </Button>
      </div>

      <article className="border-gray-300 rounded border px-3 py-2 mt-5 max-w-3xl min-h-96">
        <h2 className="font-bold">Recent Transactions</h2>
      </article>
    </div>
  );
};
