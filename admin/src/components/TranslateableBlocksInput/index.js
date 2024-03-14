import * as React from "react";
import { useIntl } from "react-intl";
import { useSelector } from 'react-redux';
import {
  Field,
  FieldError,
  FieldHint,
  FieldInput,
  FieldLabel,
  Flex,
  Icon,
  Tooltip,
} from '@strapi/design-system';
import { Earth } from "@strapi/icons";
import { BlocksInput } from '../BlocksInput/BlocksInput';

const Input = React.forwardRef((props, ref) => {
  const locales = useSelector((state) => state.i18n_locales.locales);
  const currentLocale = useSelector((state) => state.internationalized_fields.current_locale);
  const [currentValue, setCurrentValue] = React.useState({});
  const [currentLocaleValue, setCurrentLocaleValue] = React.useState("");

  const { attribute, description, disabled, intlLabel, labelAction, name, onChange, required, value, error } =
    props; // props passed by the content-manager

  const { formatMessage } = useIntl();

  const initialize = () => {
    let initializedValue
    try {
      if (!value) {
        value = "{}";
      }
      initializedValue = JSON.parse(value);
    } catch (e) {
      initializedValue = {};
    }
    if (initializedValue === null) {
      initializedValue = {};
    }
    locales.forEach((locale) => {
      if (!initializedValue[locale.code]) {
        initializedValue[locale.code] = "";
      }
    });
    setCurrentValue(currentValue => ({ ...currentValue, ...initializedValue }));
    setCurrentLocaleValue(initializedValue[currentLocale]);
  }

  const handleChange = (e) => {
    setCurrentLocaleValue(e.currentTarget.value);
  };

  React.useEffect(() => {
    if (currentValue) {
      currentValue[currentLocale] = currentLocaleValue;
      setCurrentValue(currentValue);
    }
    onChange({
      target: { name, type: attribute.type, value: JSON.stringify(currentValue) },
    });
  }, [currentLocaleValue]);

  React.useEffect(() => {
    setCurrentLocaleValue(currentValue[currentLocale]);
  }, [currentLocale]);

  React.useEffect(() => {
    initialize();
  }, []);

  return (
    <Field
      name={name}
      id={name}
      error={error}
      hint={description && formatMessage(description)}
      required={required}
    >
      <Flex direction="column" alignItems="stretch" gap={1}>
        <FieldLabel action={labelAction} gap={1}>
          <Flex gap={1}>
            {formatMessage(intlLabel)}
            <Tooltip description={'This value is unique for the selected locale'}>
              <Icon as={Earth} width={'0.75rem'} height={'0.75rem'} color="neutral600" />
            </Tooltip>
          </Flex>
        </FieldLabel>

        <BlocksInput intlLabel={intlLabel} name={name} />

        <input
          type="hidden"
          ref={ref}
          name={"name"}
          disabled={disabled}
          value={value}
          required={required}
        />
        <FieldHint />
        <FieldError />
      </Flex>

    </Field>
  );
});

export default Input;