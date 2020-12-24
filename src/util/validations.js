export const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Length of password must be more than 6 character";
  }
  if (!values.confirmPass) {
    errors.confirmPass = "Required";
  }
  if (values.password !== values.confirmPass) {
    errors.confirmPass = "Password should be match";
  }
  return errors;
};
