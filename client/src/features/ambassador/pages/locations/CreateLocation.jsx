import { useState } from "react";

import { useLoaderData } from "react-router-dom";

import CreateLocationCard from "../../../locations/components/CreateLocationCard";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import Row from "../../../../shared/components/layout/Row";
import Button from "../../../../shared/components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";

function CreateLocation() {
  const { exploration, location } = useLoaderData();

  // const isEditing = Boolean(location);

  // const [name, setName] = useState(location.name || "");
  // // const [address, setAddress] = useState(isEditing ? location.address : "");
  // const [street, setStreet] = useState(location.address.street || "");
  // const [city, setCity] = useState(location.address.city || "");
  // const [zipcode, setZipcode] = useState(location.address.zipcode || "");
  // const [headerImage, setHeaderImage] = useState(location.headerImage || []);
  // const [description, setDescription] = useState(location.description || "");
  // const [images, setImages] = useState(location.images || []);
  // const [tags, setTags] = useState(location.tags || []);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [isDeletingError, setIsDeletingError] = useState(false);
  // const [isDeletingErrorMessage, setIsDeletingErrorMessage] = useState(false);
  // const [isDeletingSuccess, setIsDeletingSucess] = useState(false);

  // const navigate = useNavigate(); TODO
  // const { user } = useAuth();

  // function handleSetTags(value) {
  //   setFormErrors((prev) => ({ ...prev, tags: "" }));
  //   setTags(value);
  // }

  // function handleSetCity(value) {
  //   setFormErrors((prev) => ({ ...prev, city: "" }));
  //   setCity(value);
  // }

  // const handleSubmit = async function (e) {
  //   e.preventDefault();

  //   const errors = {};

  //   if (!name.trim()) errors.name = "Location name is required.";
  //   else if (name.trim().length < 5)
  //     errors.name = "A location name must have more than 5 characters.";
  //   else if (name.trim().length > 40)
  //     errors.name = "A location name must have less than 40 characters.";

  //   if (!street.trim()) errors.street = "Location street address is required.";

  //   if (!city) errors.city = "Please select a city.";

  //   if (!zipcode.trim()) errors.zipcode = "Location zipcode is required.";
  //   else if (!verifyPRZipcode(zipcode.trim()))
  //     errors.zipcode = "Please enter a valid Puerto Rican zipcode.";

  //   // if (headerImage.length < 1)
  //   // errors.headerImage = "Please select a header image.";

  //   if (!description.trim())
  //     errors.description = "Please provide a description.";
  //   else if (description.trim().length < 50)
  //     errors.description =
  //       "A location description must have more than 50 characters.";
  //   else if (description.trim().length > 1000)
  //     errors.description =
  //       "A location description must have less than 1000 characters.";

  //   // if (images.length < 1) errors.images = "Please provide at least one image.";

  //   if (tags.length < 1) errors.tags = "Please select at least one tag.";

  //   if (Object.keys(errors).length > 0) {
  //     errors.submit = "Please review your form submission and try again.";

  //     setFormErrors(errors);
  //     return;
  //   }

  //   const formData = {
  //     name,
  //     address: { street, city, zipcode },
  //     headerImage,
  //     description,
  //     images,
  //     tags,
  //   };

  //   formData.updatedBy = user._id;

  //   try {
  //     setIsSubmitting(true);
  //     const { data } = await updateExplorationLocation(
  //       exploration.slug,
  //       location.slug,
  //       formData,
  //     );
  //     const updatedLocation = data.data;

  //     navigate(
  //       `/ambassador/explorations/${exploration.slug}/locations/${updatedLocation.slug}`,
  //     );
  //   } catch (err) {
  //     console.log(err);
  //     setFormErrors({ submit: err.message });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // const handleSubmit = async function (formData) {
  //   const { data } = await updateExplorationLocation(
  //     exploration.slug,
  //     location.slug,
  //     formData,
  //   );

  //   const updatedLocation = data.data;

  //   navigate(
  //     `/ambassador/explorations/${exploration.slug}/locations/${updatedLocation.slug}`,
  //   );
  // };

  // TODO REfactor delete location later
  // async function handleDeleteLocation() {
  //   try {
  //     await deleteExplorationLocation({
  //       explorationId: exploration.slug,
  //       locationId: location.slug,
  //     });
  //     setIsDeleting(false);
  //     setIsDeletingSucess(true);
  //     setTimeout(() => {
  //       setIsModalOpen(false);
  //       setIsDeletingError(false);
  //       navigate(`/${user.role}/explorations/${exploration.slug}`);
  //     }, 1500);
  //   } catch (err) {
  //     setIsDeleting(false);
  //     setIsDeletingError(true);
  //     setIsDeletingErrorMessage(err.message);
  //   }
  // }

  return (
    <>
      <Row $gap="var(--gap-lg)">
        <RouterLink to={`/ambassador/explorations/${exploration.slug}`}>
          <Button $size="small" $variation="darkRed">
            <FaArrowLeft size={12} /> Back to{" "}
            {exploration?.name ?? "Exploration"}
          </Button>
        </RouterLink>

        <CreateLocationCard
          exploration={exploration}
          location={location}
          // onSubmit={handleSubmit}
        />
      </Row>
    </>
  );
}

export default CreateLocation;
