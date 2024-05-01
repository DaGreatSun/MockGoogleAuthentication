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
  {
    type: "select",
    key: "type",
    label: "Type of Educational Material",
    size: 12,
    options: [
      { text: "", value: "" },
      { text: "Diet", value: "Diet" },
      { text: "Exercise", value: "Exercise" },
      { text: "Sleep", value: "Sleep" },
    ],
    disable: false,
    required: false,
  },
  {
    type: "text",
    key: "badgeTitle",
    label: "Completion Badge Title",
    size: 12,
    disable: false,
    required: false,
  },
];

export default {
  keyLabelTitle,
};
