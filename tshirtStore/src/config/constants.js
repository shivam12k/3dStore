import {
  swatch,
  fileIcon,
  ai,
  logoShirt,
  shirt,
  sleeves,
  hoodie,
  stylishShirt,
  preferencePicker,
} from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
  {
    name: "preferencePicker",
    icon: preferencePicker,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const ChangeDress = [
  {
    name: "shirt",
    icon: shirt,
  },
  {
    name: "sleeves",
    icon: sleeves,
  },
  {
    name: "hoodie",
    icon: hoodie,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
