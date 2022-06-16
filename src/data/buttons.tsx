import {
  faBold,
  faItalic,
  faUnderline,
  faListUl,
  faListOl,
  faLink,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

export const buttons = [
  { dataElement: "bold", icon: faBold },
  { dataElement: "italic", icon: faItalic },
  { dataElement: "underline", icon: faUnderline },
  { dataElement: "insertUnorderedList", icon: faListUl },
  { dataElement: "insertOrderedList", icon: faListOl },
  { dataElement: "createLink", icon: faLink },
  { dataElement: "justifyLeft", icon: faAlignLeft },
  { dataElement: "justifyCenter", icon: faAlignCenter },
  { dataElement: "justifyRight", icon: faAlignRight },
  { dataElement: "justifyFull", icon: faAlignJustify },
  { dataElement: "insertImage", icon: faImage },
];
