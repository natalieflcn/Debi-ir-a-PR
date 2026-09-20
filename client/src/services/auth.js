const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";

export async function signup(
  endpoint,
  { name, email, password, passwordConfirm },
) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, passwordConfirm }),
  });

  if (!res.ok) {
    throw new Response("Sign up failed. Please try again.", {
      status: res.status,
    });
  }

  return res.json();
}

export const signupExplorer = (data) => signup("/users/signup/explorer", data);

export const signupAmbassador = (data) =>
  signup("/users/signup/ambassador", data);

export async function login({ email, password }) {
  const res = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Response("Login failed. Please try again.", {
      status: res.status,
    });
  }

  return res.json();
}
