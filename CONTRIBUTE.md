# Contribute

## Basic Concept
The translateable input fields use the Strapi CustomFields logic in the background and depends on the official Internationalization plugin. Each field in the background is a default Strapi `json`-type field, registered under `/server/register.js`. Each of these fields automatically checks the app for available locales and create a corresponding JSON object, that i.e. might look like this:

```json
{
  "en": "Example String",
  "de": "Beispiel",
  "fr": "Exemple"
}
```

Beside that all magic is just a UI feature: The plugin gets the `currentLocale` from a React reducer and then switches the value of the input field to the value of the corresponding locale in the JSON object. The actual JSON object is delivered via a hidden field, whose value get updated on change.

## Components 

### Input Types

#### Translateable Text
This just works as explained above.

#### Translateable Rich Text
The BlocksEditor was copied from the Strapi Core and implemented here. The `<TranslateableBlocksInput />` uses a callback function called `handleDataChange` that is passed to the acual `<BlocksEditor>` via the `<BlocksInput>` to update the value. The value is then converted using `JSON.stringfy` and `JSON.parse` to be stored in the database. 

### Language Switcher
The language switch checks the offical Strapi plugin's reducer for all available locales under `state.i18n_locales.locales`. It then uses it's own reducer (`admin/src/store/localeReducer.js`) to store the `currentLocale` under `state.internationalized_fields.current_locale`. This can then be accessed by the input fields to update the view.


## Roadmap

* Add fields validations