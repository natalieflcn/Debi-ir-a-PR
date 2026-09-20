const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));

    console.log(errorData);

    throw new Response(errorData.message || "Request failed", {
      status: res.status,
    });
  }
  return res.status === 204 ? null : res.json();
}
