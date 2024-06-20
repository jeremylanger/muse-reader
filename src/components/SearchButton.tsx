import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect } from "react";

interface Props {
  isSearchVisible: boolean;
  setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchButton = ({ isSearchVisible, setIsSearchVisible }: Props) => {
  const toggleSearch = useCallback(() => setIsSearchVisible(curr => !curr), [setIsSearchVisible]);

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if ((event.code === "KeyS" && event.metaKey) || (isSearchVisible && event.key === "Escape")) {
        event.preventDefault();
        setIsSearchVisible(curr => !curr);
      }
    },
    [isSearchVisible, setIsSearchVisible],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
    <button
      onClick={toggleSearch}
      className="fixed right-5 top-5 h-8 w-8 text-2xl opacity-30 transition-all hover:opacity-100"
    >
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
};
