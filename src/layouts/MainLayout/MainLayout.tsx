import Header from 'components/Header/Header';
import { MainLayoutProps } from 'layouts/MainLayout/MainLayout.types';
import { useMainLayoutStyles } from 'layouts/MainLayout/MainLayout.styles';

function MainLayout(props: MainLayoutProps) {
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

export default MainLayout;
