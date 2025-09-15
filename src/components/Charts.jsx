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
      top: "15%",
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
        color: "#000",
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
      bottom: "5%",
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
    // title: {
    //   text: "Price Range",
    //   left: "center",
    //   textStyle: {
    //     fontSize: 12,
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

export {
  ConsumerProfileAge,
  ConsumerProfileBrands,
  ConsumerProfileOccupation,
  ConsumerProfilePriceRange,
};
