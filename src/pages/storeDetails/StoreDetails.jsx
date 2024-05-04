import { useEffect } from "react";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { TextInput } from "flowbite-react";

import { getStore } from "../../providers/merchantStore/merchantStore";

export const StoreDetails = () => {
  const dispatch = useDispatch();

  const { storeName, storeUrl } = useSelector((state) => state.merchantStoreSlice);

  useEffect(() => {
    if (!storeName) {
      dispatch(getStore());
    }
  }, [dispatch, storeName]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(storeUrl);
    toast.success("Copied URL!");
  };
  return (
    <section className="w-1/2 m-auto">
      <h2 className="text-xl mb-10 mt-3">Store Details</h2>
      <div>
        <p className="text-lg">Store Name</p>
        <TextInput id="storeName" disabled readOnly value={storeName} sizing="sm" />
      </div>

      <div className="mt-6 relative ">
        <p className="text-lg">Store URL</p>
        <TextInput id="storeUrl" disabled readOnly value={storeUrl} sizing="sm" />

        <button onClick={handleCopyToClipboard} className="absolute top-9 right-5">
          <HiOutlineClipboardDocument />
        </button>
      </div>
    </section>
  );
};
