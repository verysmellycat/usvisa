import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

const QueryButton = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (formData) {
      navigate("/submit", { state: { formData } });
    }
  }, [formData, navigate]);

  return (
    <div className="flex justify-center">
      <Button
        className="border-2 bg-sky-400 rounded-xl p-3 text-sm"
        onPress={() => {
          setFormData({ action: "query" });
        }}
      >
        提交查询请求
      </Button>
    </div>
  );
};

export default QueryButton;
