import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";
import { HiOutlineX, HiPlus } from "react-icons/hi";
import { TbCurrencyNaira } from "react-icons/tb";

export const Products = () => {
  return (
    <div className="pb-12">
      {/* Header */}
      <div className="w-full flex justify-between p-4 border-b-2 border-gray-200">
          <div className="flex gap-4 text-xl font-bold items-center">
          <HiOutlineX className="h-6 w-6"/>
          <p>Add new product</p>
          </div>
          <div className="flex gap-4">
           <Button color="dark" outline>Save and Preview </Button>
           <Button color="dark">Add Product <HiPlus className="ml-2 h-4 w-4"/> </Button>
          </div>
      </div>
      {/* Main form */}
      <div className="flex justify-center w-full h-full gap-12 items-center pt-8 ">  
        {/* Right Side */}
        <div className=" min-w-80 ">
          <form action="">
            <div className="flex flex-col gap-4"> 
          <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Product name" />
        </div>
        <TextInput id="productName" type="text" required/>
      </div>
      <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Product description" />
      </div>
      <Textarea id="description" required rows={6} />
    </div>
          <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Batch Number" />
        </div>
        <TextInput id="batchNumber" type="number" required/>
      </div>
          <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Price" />
        </div>
        <TextInput id="amount" icon={TbCurrencyNaira} type="number" required/>
      </div>
      <Button color="dark" outline className="mt-4">Add Product <HiPlus className="ml-2 h-4 w-4"/> </Button>
            </div>
          </form>
        </div>
        {/* Left side */}
        <div>
        <div className="flex w-full items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-4 bg-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 p-12"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center ">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <FileInput id="dropzone-file" className="hidden" />
      </Label>
    </div>
        </div>
      </div>
    </div>
  );
};
