# Strapi plugin internationalized-fields
Single entry based translations.

```json
{
  "my_api_result": {
    "en": "This is easy.",
    "de": "Alles im selben Eintrag.",
    "fr": "Je ne parle pas francais."
  }
}
```

## ⚠️ Alpha-Version
This plugin is currently in alpha. Contributions are welcome!

## ❓ Why this Plugin?

### The Problem
Beside Strapi beeing one of the best CMS out there, it gets challenging when it comes to internationalization. As every translation is stored as seperate entry in the database, working with relations in many languages gets a real pain.

### The solution
This plugin introduces _custom fields_ for text and rich text that store all translations within a single entry. This reduces the need for enabling Strapi's i18n and therefore makes working with translateable relations reasonable.

## ⏳ Installation
Install the plugin:
```bash
# with npm
npm i @klammerzu/strapi-internationalized-fields
# with yarn
yarn add @klammerzu/strapi-internationalized-fields
```

Add this to your `config/plugins.[js|ts]` file:
```ts
export default ({ env }) => ({
  // ...
  'internationalized-fields': {
    enabled: true,
  },
});
```

Then build the app:
```bash
npm run build
```

You now can find the _Internationalized Text_ field unter _Custom_ when adding new fields.

## 💾 API Output
Behind the scenes the plugin uses Strapi's `json` field type. The locales will be delivered automatically, without further configuration or population. The resulting response will look like this:

```json
{
  "field_name": {
    "en": "My field value.",
    "de": "Irgendwas auf Deutsch.",
    "fr": "Je ne parle pas francais."
  }
}
```
Rich text object must be back-converted using `JSON.parse()`.

## 🔧 Configuration
Look that you have the i18n plugin enabled. There is no futher configuration needed. The plugin automatically detects the configured languages.

### Hint
Don't use `internationalized-fields` on models with enabled `Internationalization` as they conflict each other. 


## 🤝 Contribute
You can get the basic concepts in the `CONTRIBUTE.md` file. Feel free to fork and make pull requests to this plugin. All input is welcome - thanks for all contributions so far!


## ⭐️ Support
I you like this project, please give it a star. 