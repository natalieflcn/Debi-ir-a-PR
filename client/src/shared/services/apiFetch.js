const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  console.log("apifetch running", res);
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    console.log(errorData);

    throw new Error(errorData.message || "Request failed");
  }

  return res.status === 204 ? null : res.json();
}
