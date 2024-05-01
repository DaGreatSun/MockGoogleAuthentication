const keyLabelQuestionnaire = [
  {
    type: "text",
    key: "survey",
    label: "Survey Title",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "textarea",
    key: "desc",
    label: "Description",
    size: 12,
    disable: false,
    required: true,
  },
];

// const keyLabelQuestions = [
//   {
//     type: "text",
//     key: "question",
//     label: "Question",
//     size: 6,
//     disable: false,
//     required: true,
//   },
//   {
//     type: "select",
//     key: "type",
//     label: "Type",
//     size: 6,
//     options: [
//       { text: "", value: "" },
//       { text: "Short Text", value: "short text" },
//       { text: "Paragraph", value: "paragraph" },
//       { text: "Radio Button", value: "radio button" },
//       { text: "Check Box", value: "checkbox" },
//       { text: "Linear Scale", value: "linear scale" },
//     ],
//     disable: false,
//     required: true,
//   },
// ];

export default {
  keyLabelQuestionnaire,
  // keyLabelQuestions,
};
