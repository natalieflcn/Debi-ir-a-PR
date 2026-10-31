const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5173/api/v1";

export class APIError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "APIError";
    this.status = status;
    this.data = data;
  }
}

export async function apiFetch(path, options = {}) {
  const { headers, ...rest } = options;

  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    ...rest,
    headers: { "Content-Type": "application/json", ...headers },
  });

  if (!res.ok) {
    let message = "Something went wrong.";

    try {
      const body = await res.json();
      message = body.message ?? message;
    } catch {
      // body wasn't JSON, keep the fallback
    }

    if (res.status === 429) {
      message =
        "You're making too many requests. Please wait a bit and try again.";
    }

    throw new APIError(message || "Request failed", res.status, res.data);
  }

  return res.status === 204 ? null : res.json();
}
