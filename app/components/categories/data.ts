const widgets1 = [
  {
    name: "Cloud Accounts",
    type: "donut",
    options: {
      series: [50, 5],
      labels: ["completed", "not completed"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true, // Corrected: should be a boolean
              },
              value: {
                show: true,
              },
              total: {
                show: true,
                label: "Total",
                formatter: function (w: any) {
                  return w.globals.seriesTotals.reduce(
                    (a: any, b: any) => a + b,
                    0
                  );
                },
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
  },
  {
    name: "Cloud Account Risk Assessment",
    type: "donut",
    options: {
      series: [1689, 68, 36, 7523],
      labels: [
        "Failed(1689)",
        "Warning(68)",
        "Not Available(36)",
        "Passed(7523)",
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true, // Corrected: should be a boolean
              },
              value: {
                show: true,
              },
              total: {
                show: true,
                label: "Total",
                formatter: function (w: any) {
                  return w.globals.seriesTotals.reduce(
                    (a: any, b: any) => a + b,
                    0
                  );
                },
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
  },
];

const widgets2 = [
  {
    name: "Top 5 Namespace Specific Alerts",
  },
  {
    name: "Workload Alerts",
  },
];
const widgets3 = [
  {
    name: "Image Risk Assessment",
  },
  {
    name: "Image Security Issues",
  },
];

export const categories = [
  {
    name: "CSPM Executive Dashboard",
    widgets: widgets1,
  },
  {
    name: "CWPP Dashboard",
    widgets: widgets2,
  },
  {
    name: "Registry Scan",
    widgets: widgets3,
  },
];
