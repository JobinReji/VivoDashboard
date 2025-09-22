import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";

const ConsumerProfileAge = () => {
  const option = {
    xAxis: {
      type: "category",
      data: ["15-20", "21-25", "26-30", "31-35", "36-40", "41-45"],
      axisTick: {
        show: false,
      },
      axisLine: { show: false },
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        name: "Percentage",
        type: "bar",
        barWidth: "50%",
        data: [30, 27, 19, 11, 8, 5],
        itemStyle: {
          color: "#1f3bb3", // dark blue shade like the image
        },
        label: {
          show: true,
          position: "top",
          formatter: "{c}%",
          color: "#000",
          fontSize: 12,
        },
      },
    ],
    grid: {
      top: "20%",
      left: "1%",
      right: "8%",
      bottom: "2%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      formatter: "{b}: {c}%",
    },
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

const ConsumerProfileBrands = () => {
  const option = {
    xAxis: {
      type: "value",
      show: false, // hide the x-axis
    },
    yAxis: {
      type: "category",
      inverse: true, // top-down order
      data: ["SAMSUNG", "VIVO", "Xiaomi", "OPPO", "realme"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 12,
      },
    },
    series: [
      {
        type: "bar",
        data: [19, 16, 14, 11, 6],
        barWidth: 15,
        itemStyle: {
          color: "#1f3bb3",
        },
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
          color: "#000",
          fontSize: 12,
        },
      },
    ],
    grid: {
      top: "5%",
      bottom: "2%",
      left: "25%",
      right: "50%",
      containLabel: false,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: "{b}: {c}%",
    },
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

const ConsumerProfileOccupation = () => {
  const option = {
    // title: {
    //   text: "Occupation",
    //   left: "center",
    //   textStyle: {
    //     fontSize: 16,
    //     fontWeight: "bold",
    //   },
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: "{b}: {c}%",
    },
    grid: {
      left: "20%",
      right: "10%",
      top: "5%",
      bottom: "-5%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      show: false, // hide x-axis line and labels for cleaner look
    },
    yAxis: {
      type: "category",
      inverse: true, // shows highest at top
      data: [
        "Low White Collar",
        "High Businessmen",
        "Low Businessmen",
        "Post Graduates",
        "Not working",
        "College students",
        "High White Collar",
        "Blue Collar",
        "School Students",
        "Others",
      ],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 12,
      },
    },
    series: [
      {
        name: "Percentage",
        type: "bar",
        data: [20, 18, 17, 15, 10, 7, 6, 4, 1, 1],
        barWidth: 12,
        itemStyle: {
          color: "#1f3bb3",
        },
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

const ConsumerProfilePriceRange = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: "{b}: {c}%",
    },
    grid: {
      left: "30%",
      right: "10%",
      top: "5%",
      bottom: "2%",
    },
    xAxis: {
      type: "value",
      show: false,
    },
    yAxis: {
      type: "category",
      inverse: true,
      data: ["5-15K", "15-25K", "25-45K", "45-60K", "60-100K", "100K+"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 12,
      },
    },
    series: [
      {
        type: "bar",
        data: [46, 28, 15, 5, 5, 1],
        barWidth: 12,
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
          fontSize: 12,
        },
        itemStyle: {
          color: "#1f3bb3",
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

const BrandSnapshotChannel = () => {
  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {d}%", // Show name + percentage
    },
    legend: {
      show: false, // Hide legend since labels are inside
    },
    series: [
      {
        name: "Channel",
        type: "pie",
        radius: ["45%", "80%"], // Donut shape
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "inside", // Put label outside slices
          formatter: "{b}\n{d}%", // Show name and percentage on 2 lines
          fontSize: 8,
          color: "#fff", // White text for visibility
          backgroundColor: "rgba(1, 1, 1, 0.7)", // Semi-transparent background
          padding: 2,
          borderRadius: 4,
          lineHeight: 10,
        },
        labelLine: {
          show: true,
          length: 10, // distance from slice
          length2: 10, // distance to label text
          smooth: false,
        },
        data: [
          { value: 33, name: "Online", itemStyle: { color: "#1226AA" } },
          { value: 67, name: "Offline", itemStyle: { color: "#C8C8C8" } },
        ],
        itemStyle: {
          borderRadius: 0,
          borderColor: "#fff",
          borderWidth: 0,
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

const BrandSnapshotPriceRange = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: "{b}: {c}%",
    },
    grid: {
      left: "30%",
      right: "10%",
      top: "5%",
      bottom: "2%",
    },
    xAxis: {
      type: "value",
      show: false,
    },
    yAxis: {
      type: "category",
      inverse: true,
      data: ["5-15K", "15-25K", "25-45K", "45-60K", "60-100K", "100K+"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 12,
      },
    },
    series: [
      {
        type: "bar",
        data: [43, 37, 18, 1, 1, 0],
        barWidth: 12,
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
          fontSize: 12,
        },
        itemStyle: {
          color: "#1f3bb3",
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

const BrandSnapshotLoyalty = () => {
  const option = {
    grid: {
      left: "5%",
      right: "5%",
      bottom: "10%",
      top: "30%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["Q2'24", "Q3'24", "Q4'24", "Q1'25", "Q2'25"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { fontSize: 10 },
    },
    yAxis: {
      type: "value",
      show: false, // hide y-axis
    },
    series: [
      {
        data: [27.0, 23.6, 26.6, 32.3, 29.5],
        type: "line",
        symbol: "circle", // round dots
        symbolSize: 8,
        itemStyle: {
          color: "#3b4cca", // blue dots
        },
        lineStyle: {
          type: "dotted", // dotted line
          width: 2,
          color: "#3b4cca",
        },
        label: {
          show: true,
          position: "top",
          formatter: "{c}%",
          fontSize: 10,
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

const BrandSnapshotPerception = () => {
  const option = {
    tooltip: {
      show: false,
    },
    radar: {
      // Define the axes (indicators)
      indicator: [
        { name: "Quality", max: 60 },
        { name: "Camera", max: 60 },
        { name: "Efficiency", max: 60 },
        { name: "Innovation", max: 60 },
        { name: "Performance", max: 60 },
        { name: "Belongingness", max: 60 },
        { name: "Status", max: 60 },
        { name: "Positive WOM", max: 60 },
        { name: "Fun Brand", max: 60 },
        { name: "Value", max: 60 },
        { name: "Youthful", max: 60 },
        { name: "Trustworthy Brand", max: 60 },
        { name: "Stylish", max: 60 },
        { name: "International Brand", max: 60 },
        { name: "Security & Privacy", max: 60 },
        { name: "Joy", max: 60 },
        { name: "Appearance", max: 60 },
      ],
      splitNumber: 3, // grid levels
      shape: "circle",
      axisName: {
        fontSize: 10,
        color: "#333",
      },
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: [
              52, 51, 50, 48, 47, 46, 41, 41, 41, 41, 41, 41, 38, 36, 36, 35,
              52,
            ],
            name: "Brand Score",
            areaStyle: {
              color: "rgba(60,120,216,0.2)", // shaded fill
            },
            lineStyle: {
              color: "#3c78d8", // line color
              width: 1,
            },
            symbol: "circle",
            symbolSize: 4,
            itemStyle: {
              color: "#1226AA",
            },
            label: {
              show: true,
              formatter: "{c}%", // show percentage values
              color: "#000",
              fontSize: 8,
              fontWeight: "thinner",
            },
          },
        ],
      },
    ],
  };
  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

export {
  ConsumerProfileAge,
  ConsumerProfileBrands,
  ConsumerProfileOccupation,
  ConsumerProfilePriceRange,
  BrandSnapshotChannel,
  BrandSnapshotPriceRange,
  BrandSnapshotLoyalty,
  BrandSnapshotPerception,
};
