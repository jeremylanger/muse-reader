import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";

interface Props {
  setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchButton = ({ setIsSearchVisible }: Props) => {
  const toggleSearch = useCallback(() => setIsSearchVisible(curr => !curr), [setIsSearchVisible]);

  return (
    <button
      onClick={toggleSearch}
      className="fixed right-5 top-5 h-8 w-8 text-2xl opacity-30 transition-all hover:opacity-100"
    >
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
};
