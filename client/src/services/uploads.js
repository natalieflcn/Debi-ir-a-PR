import { apiFetch } from "./utils/apiFetch";

const SIGNATURE_ROUTES = {
  exploration: "/uploads/exploration-signature",
  user: "/uploads/user-signature",
};

async function uploadFiles(files, type) {
  const { data } = await apiFetch(SIGNATURE_ROUTES[type], { method: "POST" });
  const signature = data; // adjust to your envelope

  console.log(signature);
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

    console.log("UPLOAD ONE FUNCTION");
    console.log(Object.fromEntries(form));
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${signature.cloudName}/image/upload`,
      { method: "POST", body: form },
    );

    if (!res.ok) {
      const err = await res.json();
      console.log(err);
      throw new Error(`Image upload failed. ${err.message}`);
    }
    console.log("posted successfully");
    const { secure_url, public_id } = await res.json();

    return { url: secure_url, publicId: public_id };
  };

  console.log("got url and public id");
  const results = [];

  for (let i = 0; i < files.length; i += 4) {
    results.push(...(await Promise.all(files.slice(i, i + 4).map(uploadOne))));
  }
  return results;
}

// Takes a mix of File objects and already-uploaded images,
// uploads only the new ones, and keeps the original order.
export async function resolveImages(items = [], type) {
  const files = items.filter((item) => item instanceof File);
  console.log("RESOLVE IMAGES FUNCTION");
  console.log(items, files, type);
  const uploaded = await uploadFiles(files, type);

  let next = 0;
  return items.map((item) => (item instanceof File ? uploaded[next++] : item));
}
