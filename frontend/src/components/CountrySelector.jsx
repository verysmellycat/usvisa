import { Controller } from "react-hook-form";
import { Select, SelectItem, SelectSection, Avatar } from "@nextui-org/react";
import { countries, countryMap } from "../config.js";
import { useTranslation } from "react-i18next";

export default function CountrySelector({ countryState, control, errors }) {
  const { t } = useTranslation();
  const { selectedCountry, setSelectedCountry } = countryState;

  return (
    <Controller
      control={control}
      name="country"
      defaultValue="Canada"
      rules={{ required: "请选择要预约面试的国家" }}
      render={({ field }) => (
        <Select
          {...field}
          className="w-full"
          label={t("form.fieldLabel1")}
          errorMessage={errors?.country?.message}
          validationState={errors.country ? "invalid" : "valid"}
          isDisabled={false}
          isRequired
          selectedKeys={selectedCountry}
          onSelectionChange={setSelectedCountry}
          startContent={
            selectedCountry.size === 0 ? null : (
              <Avatar
                alt="country icon"
                className="h-6 w-6"
                src={`https://flagcdn.com/${
                  countryMap[Array.from(selectedCountry)[0]][1]
                }.svg`}
              />
            )
          }
        >
          {Object.entries(countries).map((entry) => (
            <SelectSection key={entry[0]} title={entry[0]}>
              {Object.keys(entry[1]).map((country) => (
                <SelectItem
                  key={country}
                  value={country}
                  startContent={
                    <Avatar
                      alt="country"
                      className="h-6 w-6"
                      src={`https://flagcdn.com/${countryMap[country][1]}.svg`}
                    />
                  }
                >
                  {country}
                </SelectItem>
              ))}
            </SelectSection>
          ))}
        </Select>
      )}
    />
  );
}
