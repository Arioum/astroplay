export default function IconButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <button className={className}>{children}</button>;
}
