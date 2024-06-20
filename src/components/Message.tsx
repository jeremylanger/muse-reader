import { useEffect } from "react";

interface Props {
  message: string;
  setMessage: (message: string) => void;
}

export const Message = ({ message, setMessage }: Props) => {
  useEffect(() => {
    if (!message) return;

    const timeout = setTimeout(() => {
      setMessage("");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [message, setMessage]);

  return (
    <div
      className={`${message ? "opacity-100" : "opacity-0 transition-opacity duration-1000"} absolute left-0 right-0 top-0 text-lg`}
    >
      {message}
    </div>
  );
};
