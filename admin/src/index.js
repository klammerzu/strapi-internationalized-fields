import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';
import LanguageSwitch from './components/LanguageSwitch';
import { reducers } from './store/localeReducer';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
    /**
     * TODO: this should use the `useInjectReducer` hook when it's exported from the `@strapi/admin` package.
     */
    app.addReducers(reducers);
    app.customFields.register({
      name: "internationalized",
      pluginId: "internationalized-fields",
      type: "json",
      intlLabel: {
        id: "internationalized-fields.plugin.label",
        defaultMessage: "Internationalized Text",
      },
      intlDescription: {
        id: "internationalized-fields.plugin.description",
        defaultMessage: "Text that can be translated to multiple languages.",
      },
      icon: PluginIcon,
      components: {
        Input: async () =>
          import(
            /* webpackChunkName: "input-component" */ "./components/Input"
          ),
      },
      options: {
        // declare options here
      },
    });
  },

  bootstrap(app) {
    app.injectContentManagerComponent("editView", "right-links", {
      name: "language-switch-component",
      Component: LanguageSwitch,
    });
  },

  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
