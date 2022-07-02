import { createUseStyles, Styles, Theming } from 'react-jss';
import { StyleSheetFactoryOptions } from 'jss';
import { AppTheme } from 'styles/theme/types/theme';

interface BaseOptions<Theme = AppTheme> extends StyleSheetFactoryOptions {
  index?: number
  theming?: Theming<Theme>
}

interface CreateAppUseStylesOptions<
Theme = AppTheme,
> extends BaseOptions<Theme> {
  name?: string
}

function createAppUseStyles<
  C extends string = string, Props = unknown, Theme = AppTheme,
>(
  styles: Styles<C, Props, Theme>
  | ((theme: Theme) => Styles<C, Props, undefined>),
  options?: CreateAppUseStylesOptions<Theme>,
) {
  return createUseStyles(styles, options);
}

export { createAppUseStyles };
