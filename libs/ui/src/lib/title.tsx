import styles from './title.module.css';

export type TitleProps = {
  children: React.ReactNode;
};

export function Title({ children }: TitleProps) {
  return <h1 className={styles['container']}>{children}</h1>;
}

export default Title;
