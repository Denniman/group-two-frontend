export const useFormValidation = () => {
  const emailValidation = {
    required: {
      value: true,
      message: "Email is required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
      message: "Invalid email address",
    },
  };

  const loginPasswordValidation = {
    required: {
      value: true,
      message: "Password is required",
    },
  };
  const productName = {
    required: {
      value: true,
      message: "Product name is required",
    },
  };
  const productCategory = {
    required: {
      value: true,
      message: "Product category is required",
    },
  };

  const productDescriptionValidation = {
    required: {
      value: true,
      message: "Product description is required",
    },
  };

  const businessEmailValidation = {
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
      message: "Invalid email address",
    },
  };

  const firstNameValidation = {
    required: {
      value: true,
      message: "First name is required",
    },
    minLength: {
      value: 3,
      message: "Provided value is too short",
    },
  };

  const lastNameValidation = {
    required: {
      value: true,
      message: "Last name is required",
    },
    minLength: {
      value: 3,
      message: "Provided value is too short",
    },
  };

  const signUpPasswordValidation = {
    required: {
      value: true,
      message: "Create your password",
    },
    minLength: {
      value: 7,
      message: "Password must contain 8 minimum characters",
    },
  };

  const batchNumber = {
    required: {
      value: true,
      message: "Batch number is required",
    },
  };
  const productQuantity = {
    required: {
      value: true,
      message: "Quantity is required",
    },
    min: {
      value: 1,
      message: "Product quantity must be at least one",
    },
  };
  const amountValidation = {
    required: {
      value: true,
      message: "Price is required",
    },
  };

  const phoneValidation = {
    required: {
      value: true,
      message: "Provide a valid phone number",
    },
    minLength: {
      value: 9,
      message: "Invalid phone number",
    },
    pattern: {
      value: /^[0-9]+$/,
      message: "Invalid phone number",
    },
  };

  return {
    productName,
    batchNumber,
    productCategory,
    emailValidation,
    phoneValidation,
    amountValidation,
    productQuantity,
    lastNameValidation,
    firstNameValidation,
    businessEmailValidation,
    signUpPasswordValidation,
    loginPasswordValidation,
    productDescriptionValidation,
  };
};
