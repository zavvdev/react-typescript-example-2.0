import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "components/Button/Button";
import { Namespace } from "i18n/namespace";
import { useNotFoundStyles } from "pages/NotFound/NotFound.styles";
import { generalRoutes } from "router/config/routes/generalRoutes";

export function NotFound() {
  const classes = useNotFoundStyles();
  const navigate = useNavigate();
  const { t } = useTranslation(Namespace.NotFound);

  const handleHomeClick = () => {
    navigate(generalRoutes.home, {
      replace: true,
    });
  };

  return (
    <div className={classes.root}>
      <span>{t("code")}</span>
      <h1>{t("text")}</h1>
      <Button className={classes.btn} onClick={handleHomeClick}>
        {t("buttons.home")}
      </Button>
    </div>
  );
}
