import Card from "../../../shared/components/layout/Card";
import AppForm from "../../../shared/components/form/AppForm";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState("");

  return <AppForm>hi</AppForm>;
}

export default ForgotPassword;
