import { useEffect } from "react";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { Label, TextInput } from "flowbite-react";
import { LoadingSpiner } from "../../components";
import { getStore } from "../../providers/merchantStore/merchantStore";

export const StoreDetails = () => {
  const dispatch = useDispatch();

  const { storeName, storeUrl, isLoading } = useSelector((state) => state.merchantStoreSlice);

  useEffect(() => {
    if (!storeName) {
      dispatch(getStore());
    }
  }, [dispatch, storeName]);

  if (isLoading) {
    return <LoadingSpiner />;
  }
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(storeUrl);
    toast.success("Copied successfully!");
  };
  return (
    <section className="w-1/2 m-auto">
      <div>
        <Label htmlFor="storeName" value="Store name" />
        <TextInput id="storeName" disabled value={storeName} />
      </div>

      <div className="mt-6 relative">
        <Label htmlFor="storeUrl" value="Store url" />
        <TextInput id="storeUrl" disabled value={storeUrl} />

        <button onClick={handleCopyToClipboard} className="absolute top-1/2 right-5">
          <HiOutlineClipboardDocument />
        </button>
      </div>
    </section>
  );
};
