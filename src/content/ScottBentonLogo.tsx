import clsx from "clsx";

export interface ScottBentonLogoProps {
  className?: string;
}

export function ScottBentonLogo(props: ScottBentonLogoProps) {
  const { className } = props;
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, "w-8 h-8")}
    >
      <path
        d="M16 42H44V42C44 39.7909 45.7909 38 48 38H84V38C99.464 38 112 25.464 112 10V10H84H44V10C28.536 10 16 22.536 16 38V42Z"
        className="text-primary-500 dark:text-primary-400"
      />
      <path
        d="M16 46H44V46C44 48.2091 45.7909 50 48 50H84V50C99.464 50 112 62.536 112 78V82H84V82C84 79.7909 82.2091 78 80 78H44V78C28.536 78 16 65.464 16 50V46Z"
        className="text-primary-600 dark:text-primary-500"
      />
      <path
        d="M112 86H84V86C84 88.2091 82.2091 90 80 90H44V90C28.536 90 16 102.536 16 118V118H44H84V118C99.464 118 112 105.464 112 90V86Z"
        className="text-primary-700 dark:text-primary-600"
      />
    </svg>
  );
}
