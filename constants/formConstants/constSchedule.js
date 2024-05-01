const keyLabelSchedulerInfo = [
  {
    type: "text",
    key: "title",
    label: "Title",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "select",
    key: "patient",
    label: "Attending Patient",
    size: 6,
    options: [{ text: "", value: "" }],
    disable: false,
    required: true,
  },
  {
    type: "datetime-local",
    step: 60,
    key: "appointmentStart",
    label: "Appointment Start Time",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "datetime-local",
    step: 60,
    key: "appointmentEnd",
    label: "Appointment End Time",
    size: 6,
    disable: false,
    required: true,
  },

  {
    type: "select",
    key: "appointmentType",
    label: "Type of Appointment",
    size: 12,
    options: [
      { text: "", value: "" },
      { text: "Personal Appointment", value: "Personal Appointment" },
      { text: "Teleconsultation", value: "Teleconsultation" },
    ],
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

export default {
  keyLabelSchedulerInfo,
};
