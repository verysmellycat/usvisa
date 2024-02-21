import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CancelForm = () => {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();

  const onFormSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      setFormData({
        schedule_ids:
          data.schedule_ids === "" ? [] : data.schedule_ids.split(","),
        action: "cancel",
      });
    }
  };

  useEffect(() => {
    if (formData) {
      navigate("/submit", { state: { formData } });
    }
  }, [formData, navigate]);

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col gap-y-3 w-full"
      noValidate
    >
      <p className="text-sm text-danger">{t("text.text18")}</p>
      <Controller
        control={control}
        name="schedule_ids"
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            label="Schedule ID"
            type="text"
            placeholder={t("cancellationFieldPlaceholder")}
            errorMessage={errors?.schedule_ids?.message}
          ></Input>
        )}
      />
      <Button
        className="border-2 bg-sky-400 rounded-xl p-3 text-sm"
        type="submit"
      >
        {t("cancellationButtonText")}
      </Button>
    </form>
  );
};

export default CancelForm;
