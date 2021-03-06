export function getComponentLocale(props, context, componentName, getDefaultLocale) {
  let locale = {};
  if ( context && context.warehouseLocale && context.warehouseLocale[componentName]) {
    locale = context.warehouseLocale[componentName];
  } else {
    const defaultLocal = getDefaultLocale();
    locale = defaultLocal.default || defaultLocal;
  }
  let result = { ...locale };
  if(props.locale) {
    result = { ...result, ...props.locale };
    if (props.locale.lang) {
      result.lang = { ...locale.lang, ...props.locale.lang };
    }
  }
  return result;
}

export function getLocaleCode(context) {
  const localeCode = context.warehouseLocale && context.warehouseLocale.locale;
  if (context.warehouseLocale && context.warehouseLocale.exist && !localeCode) {
    return 'zh-cn';
  }
  return localeCode;
}
