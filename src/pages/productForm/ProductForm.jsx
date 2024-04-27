import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineX, HiPlus } from "react-icons/hi";
import { TbCurrencyNaira } from "react-icons/tb";
import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";

import { useFormValidation } from "../../hooks";
import { createProducts, getProducts } from "../../providers/products/products-slice";

export const ProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { isLoading } = useSelector((state) => state.merchantStoreSlice);

  const {
    productName,
    batchNumber,
    productCategory,
    amountValidation,
    productQuantity,
    productDescriptionValidation,
  } = useFormValidation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (payload) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result;

      dispatch(createProducts({ ...payload, productImage: base64Data }))
        .then(() => {
          dispatch(getProducts());
        })
        .then(() => {
          navigate("products/list");
        });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="pb-12">
      {/* Header */}
      <div className="w-full flex justify-between p-4 border-b-2 border-gray-200">
        <div className="flex gap-4 text-xl font-bold items-center">
          <button onClick={() => navigate("/products/list")}>
            <HiOutlineX className="h-6 w-6" />
          </button>
        </div>
        <div className="flex gap-4">
          <Button disabled={isLoading} color="dark" onClick={handleSubmit(onSubmit)}>
            {isLoading ? "Loading..." : "Add Product"}
            {!isLoading && <HiPlus className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </div>
      {/* Main form */}
      <div className=" m-auto max-w-[30rem] h-full gap-12 items-center pt-8 ">
        {/* Right Side */}
        <div className=" min-w-80 ">
          <form>
            <div className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="productName" value="Product name" />
                </div>

                <Controller
                  name="productName"
                  control={control}
                  rules={productName}
                  render={({ field }) => (
                    <TextInput
                      id="productName"
                      color={errors?.productName ? "failure" : null}
                      helperText={
                        errors?.productName ? (
                          <span className="font-medium">{errors.productName?.message}</span>
                        ) : null
                      }
                      {...field}
                      type="text"
                    />
                  )}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="productCategory" value="Product category" />
                </div>

                <Controller
                  name="categoryName"
                  control={control}
                  rules={productCategory}
                  render={({ field }) => (
                    <TextInput
                      color={errors.categoryName ? "failure" : null}
                      helperText={
                        errors.categoryName ? (
                          <span className="font-medium">{errors.categoryName?.message}</span>
                        ) : null
                      }
                      id="productCategory"
                      {...field}
                      type="text"
                    />
                  )}
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="productDescription" value="Product description" />
                </div>

                <Controller
                  name="description"
                  control={control}
                  rules={productDescriptionValidation}
                  render={({ field }) => (
                    <Textarea
                      color={errors.description ? "failure" : null}
                      helperText={
                        errors.description ? (
                          <span className="font-medium">{errors.description?.message}</span>
                        ) : null
                      }
                      id="productDescription"
                      {...field}
                      rows={3}
                    />
                  )}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="batchNumber" value="Batch number" />
                </div>

                <Controller
                  name="batchNumber"
                  control={control}
                  rules={batchNumber}
                  render={({ field }) => (
                    <TextInput
                      helperText={
                        errors?.batchNumber ? (
                          <span className="font-medium">{errors?.batchNumber.message}</span>
                        ) : null
                      }
                      color={errors?.batchNumber ? "failure" : null}
                      id="batchNumber"
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="amount" value="Price" />
                </div>

                <Controller
                  name="amount"
                  control={control}
                  rules={amountValidation}
                  render={({ field }) => (
                    <TextInput
                      id="amount"
                      color={errors?.amount ? "failure" : null}
                      {...field}
                      helperText={
                        errors?.amount ? (
                          <span className="font-medium">{errors?.amount.message}</span>
                        ) : null
                      }
                      icon={TbCurrencyNaira}
                    />
                  )}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="quantity" value="Quantity" />
                </div>

                <Controller
                  name="quantity"
                  control={control}
                  rules={productQuantity}
                  render={({ field }) => (
                    <TextInput
                      id="quantity"
                      color={errors?.quantity ? "failure" : null}
                      {...field}
                      helperText={
                        errors?.quantity ? (
                          <span className="font-medium">{errors?.quantity.message}</span>
                        ) : null
                      }
                      type="number"
                    />
                  )}
                />
              </div>
            </div>

            <Label value="Product image" />

            <div className="flex w-full items-center justify-center mt-5">
              <Label
                htmlFor="dropzone-file"
                className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-4 bg-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 p-12"
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="" />
                ) : (
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
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                )}

                <FileInput
                  id="dropzone-file"
                  accept="image/jpeg, image/png, image/webp"
                  onChange={({ target }) => {
                    const file = target?.files?.[0];
                    setFile(file);
                    setImageUrl(URL.createObjectURL(file));
                  }}
                  className="hidden"
                />
              </Label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
