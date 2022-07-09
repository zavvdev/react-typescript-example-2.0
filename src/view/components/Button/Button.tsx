import cx from "clsx";
import { ButtonProps } from "view/components/Button/Button.types";
import { useButtonStyles } from "view/components/Button/Button.styles";

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    onClick,
    disabled,
    href,
    target,
    icon,
  } = props;

  const classes = useButtonStyles();

  const rootClasses = cx(classes.root, {
    [classes.disabled]: disabled,
  }, className);

  const renderIcon = () => {
    if (icon) {
      return <div className={classes.icon}>{icon}</div>;
    }
    return null;
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={rootClasses}
      >
        {renderIcon()}
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={rootClasses}
      onClick={onClick}
    >
      {renderIcon()}
      {children}
    </button>
  );
}
