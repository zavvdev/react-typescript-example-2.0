import { useTranslation } from "react-i18next";
import { Namespace } from "view/i18n/namespace";
import logo from "view/assets/images/Logo.svg";
import { LanguageSwitch } from "view/components/Header/components/LanguageSwitch/LanguageSwitch";
import { useHeaderStyles } from "view/components/Header/Header.styles";

export function Header() {
  const classes = useHeaderStyles();
  const { t } = useTranslation(Namespace.Common);

  return (
    <header className={classes.root}>
      <img src={logo} className={classes.logo} alt={t("appName")} />
      <LanguageSwitch />
    </header>
  );
}
