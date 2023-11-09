import Axios from 'axios';

// Function to fetch a user's token by providing their email and password
async function fetch_Token(password, email) {
  try {
    // Set the base URL for Axios
    Axios.defaults.baseURL = 'http://localhost:3001/api/v1';

    // Make a POST request to the /user/login endpoint with email and password data
    const response = await Axios.request({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: `/user/login`,
      data: {
        'email': email,
        'password': password
      },
    })

    // Check if the response status is 200 (OK)
    if (response.data.status === 200) {
      const { body } = response.data;
      const { token } = body;
      return token;
    }
  } catch (error) {
    return false; // Return false if there's an error
  }
  return null; // Return null if no token is found
}

// Function to fetch user information using their token
async function fetch_UserInfos(token) {
  const user = await Axios.request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    method: 'post',
    url: `/user/profile`,
  })

  // Check if the response status is 200 (OK)
  if (user.data.status === 200) {
    return user.data.body; // Return user information
  }
  return null; // Return null if no user information is found
}

// Function to update a user's first name and last name using their token
async function put_NewInfos(token, firstName, lastName) {
  await Axios.request({
    method: 'put',
    url: 'http://localhost:3001/api/v1/user/profile',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    data: {
      firstName: firstName,
      lastName: lastName
    }
  });

  return null; // Return null as no specific data is returned
}

export { fetch_Token, fetch_UserInfos, put_NewInfos };
