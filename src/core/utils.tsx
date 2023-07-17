export const emailValidator = (email: string | undefined) => {
  const re = /\S+@\S+\.\S+/;

  if (email == undefined || !email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = (password: string | undefined) => {
  if (password == undefined || !password || password.length < 8) return 'Password must be greater than 8 characters';

  return '';
};

export const nameValidator = (name: string | undefined) => {
  if (name == undefined || !name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};
