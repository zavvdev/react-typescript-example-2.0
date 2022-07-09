import cx from "clsx";
import { useTranslation } from "react-i18next";
import { APP_LANGUAGES } from "view/i18n/config";
import { useLanguageSwitchStyles } from "view/components/Header/components/LanguageSwitch/LanguageSwitch.styles";

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const classes = useLanguageSwitchStyles();
  const languages = Object.values(APP_LANGUAGES);

  const handleLanguageChange = (nextLang: string) => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className={classes.root}>
      {languages.map((lang, index) => (
        <div className={classes.langWrap} key={lang}>
          <button
            type="button"
            onClick={() => handleLanguageChange(lang)}
            className={cx(classes.lang, {
              [classes.active]: i18n.language === lang,
            })}
          >
            {lang}
          </button>
          {index === 0 ? <span>|</span> : null}
        </div>
      ))}
    </div>
  );
}