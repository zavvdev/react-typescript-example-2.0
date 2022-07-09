import { useTranslation } from "react-i18next";
import { Namespace } from "view/i18n/namespace";
import { Button } from "view/components/Button/Button";
import { ExternalLinkIcon } from "view/components/svgIcons/ExternalLinkIcon";
import { MainLayout } from "view/layouts/MainLayout/MainLayout";
import { useHomeStyles } from "view/pages/Home/Home.styles";

export function Home() {
  const { t } = useTranslation([Namespace.Home, Namespace.Common]);
  const classes = useHomeStyles();

  return (
    <MainLayout>
      <div className={classes.root}>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
        <div className={classes.buttonsWrap}>
          <Button
            target="_blank"
            href={t(`${Namespace.Common}:links.repository`)}
            icon={<ExternalLinkIcon />}
          >
            {t("buttons.repository")}
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
