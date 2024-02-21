import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryParams } from '@strapi/helper-plugin';
import {
  Box,
  SingleSelect,
  SingleSelectOption,
} from '@strapi/design-system';

const LocaleSwitch = ({ }) => {
  const [{ query }] = useQueryParams();
  const dispatch = useDispatch();
  const locales = useSelector((state) => state.i18n_locales.locales);
  const currentLocale = useSelector((state) => state.internationalized_fields.current_locale);

  const isTranslatedViaI18n = !!query.plugins?.i18n?.locale;
  let [containsInternationalizedFields, setContainsInternationalizedFields] = React.useState(false);
  
  React.useEffect(() => {
    setContainsInternationalizedFields(!!document.querySelector('input[data-contains-internationalized-fields="true"]'));
  }, []);

  return (
    !isTranslatedViaI18n & containsInternationalizedFields ? (
      <Box padding={4} background="neutral100" borderColor="neutral200" borderRadius="4px">
        <SingleSelect
          label="Locales"
          value={currentLocale}
          onChange={(value) => {
            // set the current locale in the store
            dispatch({
              type: 'SET_CURRENT_LOCALE',
              locale: value,
            });
          }}
        >

          {locales.map((locale) => {
            return (
              <SingleSelectOption
                key={locale.code}
                value={locale.code}
              >
                {locale.name}
              </SingleSelectOption>
            );
          })}
        </SingleSelect>
      </Box>) : null
  );
}

export default LocaleSwitch;