import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, Label, Spinner, Select, TextInput, Textarea } from "flowbite-react";
import { ChromePicker } from "react-color";
import { createMerchantStore } from "../../providers/merchantStore/merchantStore";

export const StoreForm = () => {
  const dispatch = useDispatch();
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const [color, setColor] = useState("#000000");

  const { isLoading } = useSelector((state) => state.merchantStoreSlice);

  const { control, handleSubmit } = useForm();

  const onSubmit = (payload) => {
    const filteredPayload = Object.entries(payload).reduce((acc, [key, value]) => {
      if (value) {
        acc[key] = value;
      }
      return acc;
    }, {});

    dispatch(createMerchantStore({ ...filteredPayload, color, backgroundColor }));
  };

  return (
    <section className="pb-12">
      {/* Header */}
      <div className="w-full flex justify-between border-b-2 border-gray-200">
        <div className="flex gap-4 text-xl font-bold items-center">
          <p>Store setup</p>
        </div>
        <div className="flex gap-4">
          <Button disabled={isLoading} color="dark" outline onClick={handleSubmit(onSubmit)}>
            {isLoading ? <Spinner aria-label="Small spinner example" size="sm" /> : "Create store"}
          </Button>
        </div>
      </div>
      {/* Main form */}
      <div className="flex justify-center w-full h-full items-center ">
        {/* Right Side */}
        <div className=" min-w-80 ">
          <form action="">
            <div className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="storeName" value="Store name" />
                </div>

                <Controller
                  name="storeName"
                  control={control}
                  render={({ field }) => <TextInput id="storeName" type="text" {...field} />}
                />
              </div>
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="storeDescription" value="Store description" />
                </div>

                <Controller
                  name="storeDescription"
                  control={control}
                  render={({ field }) => <Textarea id="storeDescription" {...field} rows={6} />}
                />
              </div>

              <div className="w-full">
                <h2 className="text-2xl">Store theme</h2>

                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="fontStyle" value="Select font" />
                  </div>

                  <Controller
                    name="fontStyle"
                    control={control}
                    render={({ field }) => (
                      <Select id="fontStyle" {...field}>
                        <option value="Roboto">Roboto</option>
                        <option value="Poppins">Poppins</option>
                        <option value="Montserrat">Montserrat</option>
                      </Select>
                    )}
                  />
                </div>

                <div className="mb-2 block">
                  <Label htmlFor="backgroundColor" value="Store background color" />

                  <ChromePicker
                    color={backgroundColor}
                    width="100%"
                    onChange={(color) => setBackgroundColor(color.hex)}
                    disableAlpha
                  />
                </div>
                <div className="mb-2 block">
                  <Label htmlFor="color" value="Store color" />
                  <ChromePicker
                    width="100%"
                    color={color}
                    disableAlpha
                    onChange={(color) => setColor(color.hex)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
