import { apiFetch } from "../shared/services/apiFetch";

// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";

export async function signup(path, { name, email, password, passwordConfirm }) {
  return apiFetch(`/users/signup/${path}`, {
    method: "POST",
    body: JSON.stringify({ name, email, password, passwordConfirm }),
  });

  //   if (!res.ok) {
  //     throw new Response("Sign up failed. Please try again.", {
  //       status: res.status,
  //     });
  //   }

  //   return res.json();
}

export const signupExplorer = (data) => signup("explorer", data);

export const signupAmbassador = (data) => signup("ambassador", data);

export async function login({ email, password }) {
  return apiFetch("/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  //   if (!res.ok) {
  //     throw new Response("Login failed. Please try again.", {
  //       status: res.status,
  //     });
  //   }

  //   return res.json();
}
