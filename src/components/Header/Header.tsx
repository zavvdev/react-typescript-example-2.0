import { Namespace } from "i18n/namespace";
import { useTranslation } from "react-i18next";
import logo from "assets/images/Logo.svg";
import { LanguageSwitch } from "components/Header/components/LanguageSwitch/LanguageSwitch";
import { useHeaderStyles } from "components/Header/Header.styles";

function Header() {
  const classes = useHeaderStyles();
  const { t } = useTranslation(Namespace.Common);

  return (
    <header className={classes.root}>
      <img src={logo} className={classes.logo} alt={t("appName")} />
      <LanguageSwitch />
    </header>
  );
}

export { Header };
