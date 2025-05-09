export const i18nRouterConfig: {
  locales: string[];
  defaultLocale: string;
  prefixDefault: boolean;
  serverSetCookie:"if-empty";
} = {
  locales: ["ar", "en","fr","pt"],
  defaultLocale: "en",
  prefixDefault: true,
  serverSetCookie: "if-empty",
};
