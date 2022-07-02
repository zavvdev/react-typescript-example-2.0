import { Button } from "components/Button/Button";
import { Namespace } from "i18n/namespace";
import { MainLayout } from "layouts/MainLayout/MainLayout";
import { useTranslation } from "react-i18next";
import { useHomeStyles } from "pages/Home/Home.styles";

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
            // icon={<GitHubIcon />}
          >
            {t("buttons.repository")}
          </Button>
          {/* <Likes /> */}
        </div>
      </div>
    </MainLayout>
  );
}
