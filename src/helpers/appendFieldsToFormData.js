/**
 * Appends fields from the payload object to a FormData object.
 *
 * @param {FormData} formData - The FormData object to which the fields will be appended.
 * @param {Object} payload - The payload object containing key-value pairs to append to the FormData.
 * @returns {formData} formData
 */

export const appendFieldsToFormData = (payload) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(payload)) {
    formData.append(key, value);
  }
  return formData;
};
