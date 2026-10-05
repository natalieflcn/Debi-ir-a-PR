import AppForm from "../../../shared/components/form/AppForm";

const { useState } = require("react");

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState("");

  return <AppForm>hi</AppForm>;
}

export default ResetPassword;
