type ButtonProps = {
  label: string;
  href: string;
};

export default function LinkA({ label, href }: ButtonProps) {
  return (
    <a href={href} className="text-blue-600 dark:text-blue-500 hover:underline ml-1">
      {label}
    </a>
  );
}
