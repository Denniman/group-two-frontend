import { Table } from "flowbite-react";

export const Transactions = () => {
  const empytTransactionList = true;
  return (
    <div>
      <div className="overflow-x-auto">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Product ID</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
          </Table.Head>
          {empytTransactionList && (
            <div className="flex items-center justify-center mt-10">
              <p className="text-center text-lg">Transaction list is empty</p>
            </div>
          )}
          <Table.Body className="divide-y">
            {/* {productList &&
              products?.map(({ id, productName, batchNumber, quantity, amount }) => (
                <Table.Row key={id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {productName}
                  </Table.Cell>
                  <Table.Cell>₦{amount}</Table.Cell>
                  <Table.Cell>{quantity}</Table.Cell>
                  <Table.Cell>{batchNumber}</Table.Cell>
                </Table.Row>
              ))} */}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
