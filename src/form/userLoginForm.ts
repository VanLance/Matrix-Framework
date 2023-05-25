import User from './types';

export const loginForm = (func: (user: User) => void): HTMLFormElement => {
  const userForm = document.createElement('form');

  const userNameLabel = document.createElement('label');
  userNameLabel.textContent = 'Username: ';
  const userNameInput = document.createElement('input');
  userNameInput.type = 'text';

  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = 'Password: ';
  const passwordField = document.createElement('input');
  passwordField.type = 'password';

  const button = document.createElement('button');
  button.textContent = 'Submit';

  userForm.append(
    userNameLabel,
    document.createElement('br'),
    userNameInput,
    document.createElement('br'),
    passwordLabel,
    document.createElement('br'),
    passwordField,
    document.createElement('br'),
    button
  );

  userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user: User = {
      username: userNameInput.value,
      password: passwordField.value,
    };
    verifyUserApi(user, func);
  });
  return userForm;
};

async function verifyUserApi(
  { username, password }: User,
  func: (user: User) => void
) {
  const res = await fetch(
    `https://matrix-116-fakebook.onrender.com/api/verifyuser`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }
  );
  if (res.ok) {
    const data = await res.json();
    console.log(data)
    const token = data[0]['user token'];
    console.log(token)
    func({ username, token });
    return data
  } else {
    console.error('Invalid User Info');
  }
}
