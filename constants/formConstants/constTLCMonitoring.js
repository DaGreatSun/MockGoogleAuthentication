const keyLabelPatientInfo = [
  {
    type: "text",
    key: "patient",
    label: "Patient",
    size: 6,
    // options: [{ text: "", value: "" }],
    disable: true,
    required: true,
  },
  {
    type: "datetime-local",
    step: 60,
    key: "dateUpdated",
    label: "Date of Update",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "textarea",
    key: "remarks",
    label: "Remarks",
    size: 12,
    disable: false,
    required: false,
  },
];
const keyLabelAnthroInfo = [
  {
    type: "number",
    key: "height",
    label: "Height (cm)",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "number",
    key: "weight",
    label: "Weight (kg)",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "number",
    key: "bmi",
    label: "BMI",
    size: 6,
    disable: false,
    required: false,
  },
  {
    type: "number",
    key: "abdominalCirc",
    label: "Abdominal Circumference (cm)",
    size: 6,
    disable: false,
    required: false,
  },
];

const keyLabelActivityInfo = [
  {
    type: "number",
    key: "dailySteps",
    label: "Daily Steps",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "number",
    key: "durationActiveExercise",
    label: "Duration of Active Exercise (min)",
    size: 6,
    disable: false,
    required: true,
  },
];

const keyLabelPhysicalInfo = [
  {
    type: "number",
    key: "bp",
    label: "Blood Pressure (mmHg)",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "number",
    key: "hr",
    label: "Heart Rate (BPM)",
    size: 6,
    disable: false,
    required: true,
  },
];

const keyLabelLabInfo = [
  {
    type: "number",
    key: "FBS",
    label: "FBS",
    size: 4,
    disable: false,
    required: true,
  },
  {
    type: "number",
    key: "HbA1C",
    label: "HbA1C",
    size: 4,
    disable: false,
    required: true,
  },
  {
    type: "number",
    key: "FLP",
    label: "FLP",
    size: 4,
    disable: false,
    required: true,
  },
];

export default {
  keyLabelPatientInfo,
  keyLabelAnthroInfo,
  keyLabelActivityInfo,
  keyLabelPhysicalInfo,
  keyLabelLabInfo,
};
