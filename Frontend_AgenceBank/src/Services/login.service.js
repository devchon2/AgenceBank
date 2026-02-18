// Mock data for users
const MOCK_USERS = [
  {
    email: 'tony@stark.com',
    password: 'password123',
    token: 'mock-token-tony-stark',
    body: {
      id: '1',
      email: 'tony@stark.com',
      firstName: 'Tony',
      lastName: 'Stark',
      createdAt: '2023-01-01T00:00:00.000Z',
      updatedAt: '2023-01-01T00:00:00.000Z'
    }
  },
  {
    email: 'steve@rogers.com',
    password: 'password456',
    token: 'mock-token-steve-rogers',
    body: {
      id: '2',
      email: 'steve@rogers.com',
      firstName: 'Steve',
      lastName: 'Rogers',
      createdAt: '2023-01-01T00:00:00.000Z',
      updatedAt: '2023-01-01T00:00:00.000Z'
    }
  }
];

// Function to fetch a user's token by providing their email and password
async function fetch_Token(password, email) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const user = MOCK_USERS.find(u => u.email === email && u.password === password);
  if (user) {
    return user.token;
  }
  return false;
}

// Function to fetch user information using their token
async function fetch_UserInfos(token) {
  await new Promise(resolve => setTimeout(resolve, 300));

  const user = MOCK_USERS.find(u => u.token === token);
  if (user) {
    return user.body;
  }
  return null;
}

// Function to update a user's first name and last name using their token
async function put_NewInfos(token, firstName, lastName) {
  await new Promise(resolve => setTimeout(resolve, 300));

  const user = MOCK_USERS.find(u => u.token === token);
  if (user) {
    user.body.firstName = firstName;
    user.body.lastName = lastName;
    // In a real app, we'd persist this to local storage or a state manager here if we want it to survive refreshes without a backend
  }
  return null;
}

export { fetch_Token, fetch_UserInfos, put_NewInfos };

