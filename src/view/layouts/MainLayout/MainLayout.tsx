import { Header } from "view/components/Header/Header";
import { MainLayoutProps } from "view/layouts/MainLayout/MainLayout.types";
import { useMainLayoutStyles } from "view/layouts/MainLayout/MainLayout.styles";

export function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  const classes = useMainLayoutStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}
