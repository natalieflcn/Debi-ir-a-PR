import { apiFetch } from "./utils/apiFetch";

const SIGNATURE_ROUTES = {
  exploration: "/uploads/exploration-signature",
  myUser: "/uploads/user-signature",
  otherUser: "/uploads/user-signature",
};

async function uploadFiles(files, type, id) {
  if (files.length === 0) return [];

  console.log("UPLOAD FILES ID");
  console.log(files, type, id);
  console.log(`${SIGNATURE_ROUTES[type]}${id ? `/${id}` : ""}`);
  const { data } = await apiFetch(
    `${SIGNATURE_ROUTES[type]}${id ? `/${id}` : ""}`,
    {
      method: "POST",
    },
  );
  const signature = data; // adjust to your envelope

  const uploadOne = async (file) => {
    const form = new FormData();
    form.append("file", file);
    form.append("api_key", signature.apiKey);
    form.append("timestamp", signature.timestamp);
    form.append("signature", signature.signature);
    form.append("folder", signature.folder);
    form.append("allowed_formats", signature.allowed_formats);

    // User Avatar Uploads
    if (signature.public_id) form.append("public_id", signature.public_id);
    if (signature.overwrite) form.append("overwrite", signature.overwrite);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${signature.cloudName}/image/upload`,
      { method: "POST", body: form },
    );

    if (!res.ok) {
      const err = await res.json();
      console.log(err);
      throw new Error(`Image Upload Failed: ${err.error.message}`);
    }

    const { secure_url, public_id } = await res.json();

    return { url: secure_url, publicId: public_id };
  };

  const results = [];

  for (let i = 0; i < files.length; i += 4) {
    results.push(...(await Promise.all(files.slice(i, i + 4).map(uploadOne))));
  }
  return results;
}

// Takes a mix of File objects and already-uploaded images,
// uploads only the new ones, and keeps the original order.
export async function resolveImages(items = [], type, id) {
  const files = items.filter((item) => item instanceof File);

  const uploaded = await uploadFiles(files, type, id);

  let next = 0;
  return items.map((item) => (item instanceof File ? uploaded[next++] : item));
}
