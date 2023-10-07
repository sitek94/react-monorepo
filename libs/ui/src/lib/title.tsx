export type TitleProps = {
  children: React.ReactNode;
};

export function Title({ children }: TitleProps) {
  return <h1 className="text-4xl text-primary-500 font-bold">{children}</h1>;
}

export default Title;
