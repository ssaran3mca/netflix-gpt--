export const checkValidata = (email, password) => {
  const isEmailValidate = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);

  const isPasswordValidate =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!isEmailValidate) return "Email ID is Not valid";
  if (!isPasswordValidate) return "Email Password is Not valid";
  return "success";
};
