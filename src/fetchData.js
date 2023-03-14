const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJUd2l0dGVyMXEydzNlNHIiLCJpYXQiOjE2NzY5MjU5Mjd9.ISpSolNUFED-ioYJVVraD_2dAow1Gzpyq4OT23-nWtg"

export async function fetchData(q) {
  try {
    const response = await fetch(
      `https://twitter-db-api.vercel.app/twitter/tweets?q=${q}`,
      {
        headers: {
          authorization:
            AUTH
        },
      }
    );
    const data = await response.json();
    console.log(data);
    const userData = await fetchUserData(q);
    console.log(userData);
    let postsData = data.data.map((e) => ({
      id: e.id,
      name: q,
      profilePic: userData.profile_image_url ?? '',
      desc: e.text,
      img: e.mediaUrl !== null || undefined ? e.mediaUrl[0] : null,
      created_at: new Date(e.created_at).toLocaleString(),
    }));

    console.log(postsData);
    return postsData;
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserData(q) {
  try {
    const response = await fetch(
      `https://twitter-db-api.vercel.app/twitter/user?q=${q}`,
      {
        headers: {
          authorization:
            AUTH
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchRef() {
  try {
    const response = await fetch(
      `https://twitter-db-api.vercel.app/twitter/ref`,
      {
        headers: {
          authorization:
            AUTH
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
let id = 0;
export async function createUsersData() {
  const ref = await fetchRef();
  const usersData = [];

  for (const q of ref) {
    const userData = await fetchUserData(q.username);
    usersData.push({
      id: generateId(),
      username: userData.username,
      description: userData.description,
      profile_image_url: userData.profile_image_url,
      location: userData.location ? userData.location : null,
    });
  }
  console.log(usersData);
  return usersData;
}
function generateId() {
  return ++id;
}


