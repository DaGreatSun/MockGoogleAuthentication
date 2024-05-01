const keyLabelTitle = [
  {
    type: "text",
    key: "title",
    label: "Title",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "textarea",
    key: "description",
    label: "Description",
    size: 6,
    disable: false,
    required: false,
  },
];

const tGroupOptions = [
  { text: "Patient", value: "Patient" },
  {
    text: "Substitute Decision Maker (SDM)",
    value: "Substitute Decision Maker",
  },
];

export default {
  keyLabelTitle,
  tGroupOptions,
};
