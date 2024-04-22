import { Button, Table, } from "flowbite-react";
import {  HiPlus } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";

export const Productlist = () => {
  return (
    <div>
       {/* Header */}
       <div className="w-full flex justify-between p-4 border-b-2 border-gray-200">
        <div className=" text-xl font-bold ">
          <p><span>{"1"}</span> Product</p>
        </div>
        <div className="flex gap-4">
          <Button color="dark" outline>
            All Products <FaAngleDown className="ml-2 h-4 w-4 mt-0.5" />
          </Button>
          <Button color="dark">
            Add Product <HiPlus className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      {/* Table */}
    <div className="overflow-x-auto">
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Number of products sold</Table.HeadCell>
        <Table.HeadCell>Date</Table.HeadCell>
      </Table.Head>
      
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex items-center gap-2">
            <img src={"https://techcrunch.com/wp-content/uploads/2022/06/CMC_1384.jpg?w=1390&crop=1"} alt="product image" className="w-6 h-6 rounded" />{'Apple MacBook Pro 17"'}
          </Table.Cell>
          <Table.Cell>{"$2999"}</Table.Cell>
          <Table.Cell>{"Laptop"}</Table.Cell>
          <Table.Cell>{"0/10"}</Table.Cell>
          <Table.Cell>
            {"4/22/2024"}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
    </div>
  );
};
