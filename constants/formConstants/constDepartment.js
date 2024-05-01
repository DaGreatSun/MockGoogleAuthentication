const keyLabelDepartmentInformation = [
  {
    type: "text",
    key: "name",
    label: "Department Name",
    size: 12,
    disable: false,
    required: true,
  },
  {
    type: "textarea",
    key: "description",
    label: "Description",
    size: 12,
    disable: false,
    required: true,
  },
];

const keyLabelServiceModule = [
  {
    type: "select",
    key: "service",
    label: "Service",
    size: 6,
    options: [
      { text: "", value: "" },
      { text: "MyPerancanganAwal", value: "MyPerancanganAwal" },
      { text: "Therapeutic Lifestyle", value: "Therapeutic Lifestyle" },
    ],
    disable: false,
    required: false,
  },
  {
    type: "selectMultiple",
    key: "module",
    label: "Module",
    size: 6,
    options: [],
    disable: false,
    required: false,
  },
];

const moduleSelection = {
  MyPerancanganAwal: [
    {
      text: "ACP Information (Educational)",
      value: "ACP Information (Educational)",
    },
    { text: "Questionnaire", value: "Questionnaire" },
    { text: "Decision Aid", value: "Decision Aid" },
    { text: "Training", value: "Training" },
  ],
  "Therapeutic Lifestyle": [
    { text: "Health Monitoring Panel", value: "Health Monitoring Panel" },
    { text: "Forum", value: "Forum" },
    {
      text: "Dietary Information (Educational)",
      value: "Dietary Information (Educational)",
    },
    { text: "Reminder", value: "Reminder" },
  ],
};

export default {
  keyLabelDepartmentInformation,
  keyLabelServiceModule,
  moduleSelection,
};
