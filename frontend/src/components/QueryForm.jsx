import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import CountrySelector from "./CountrySelector";
import { useForm } from "react-hook-form";

const QueryForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(new Set(["Canada"]));
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = () => {
    if (Object.keys(errors).length === 0) {
      const [countrySelection] = selectedCountry;
      setFormData({
        countryFull: countrySelection,
        action: "query",
      });
    }
  };

  useEffect(() => {
    if (formData) {
      navigate("/submission", { state: { formData } });
    }
  }, [formData, navigate]);

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex w-full flex-col gap-y-3"
      noValidate
    >
      <CountrySelector
        countryState={{ selectedCountry, setSelectedCountry }}
        control={control}
        errors={errors}
      />
      <Button
        className="w-full rounded-xl border-2 bg-sky-400 p-3 text-sm"
        type="submit"
      >
        {t("queryButtonText")}
      </Button>
    </form>
  );
};

export default QueryForm;
