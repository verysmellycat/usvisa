import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { t } = useTranslation();
  function decodeHex(hexString) {
    var hexCode, i;
    var result = "";
    for (i = 0; i < hexString.length; i += 2) {
      hexCode = parseInt(hexString.substr(i, 2), 16);
      result += String.fromCharCode(hexCode);
    }
    return result;
  }

  const queryParams = new URLSearchParams(useLocation().search);
  return (
    <div className="my-3 flex w-full flex-col items-center gap-y-3 pt-6">
      <h2 className="my-auto text-2xl font-bold">{t("confirmation.text1")}</h2>
      <div className="w-full space-y-3 text-center">
        <p>Email: {decodeHex(queryParams.get("email"))}</p>
        <p>
          Schedule ids:{" "}
          {queryParams.getAll("schedule_id").map((id) => `${id} `)}
        </p>
        <p className="text-balance">{t("confirmation.text2")}</p>
      </div>
    </div>
  );
}
