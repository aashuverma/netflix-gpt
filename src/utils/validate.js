export const checkValidate = (name, email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isNameValid = /^[A-Za-z\s]+$/.test(name);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
  if (!isEmailValid) return "Email Id is not valid";
  if (!isNameValid) return "Name is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
