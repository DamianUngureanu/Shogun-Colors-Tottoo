export const PasswordVerification = (input: String): boolean => {
  const password: string = "parola";
  if (input === password) {
    return true;
  } else {
    return false;
  }
};
