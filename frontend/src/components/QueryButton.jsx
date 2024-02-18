import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const QueryButton = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (formData) {
      navigate("/submit", { state: { formData } });
    }
  }, [formData, navigate]);

  return (
    <Button
      className="border-2 bg-sky-400 rounded-xl p-3 text-sm w-full"
      onPress={() => {
        setFormData({ action: "query" });
      }}
    >
      {t("queryButtonText")}
    </Button>
  );
};

export default QueryButton;
