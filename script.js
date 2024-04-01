












// -------------------CHARTS-----------------------------------
// ---------------CHARTBAR-------------------------------
var barChartOptions = {
  series: [{
    data: [10, 8, 6, 4, 2],
    name: "Products",
  }],
  chart: {
    type: 'bar',
    background: "transparent",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: [
    "#2962ff",
    "#050000",
    "#2e7e32",
    "#ff6d00",
    "#583cb3",
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  // ------------------- Legend ------------------------->
  legend: {
    labels: {
      colors: "#f5f2ff",
    },
    show: true,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  xaxis: {
    categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
    title: {
      style: {
        color: "#f5f2ff",
      },
    },
    axisBorder: {
      show: true,
      color: "#5550de",
    },
    axisTicks: {
      show: true,
      color: "#5550de",
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: {
    title: {
      text: "Count",
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      color: "#5550de",
      show: true,
    },
    axisTicks: {
      color: "#5550de",
      show: true,
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();



  //-----------------------------------AREA CHART-------------------

  var areaChartOptions = {
    series: [{
      data: [10, 8, 6, 4, 2],
      name: "Products",
    }],
    chart: {
      type: 'area', // Change type to 'area'
      background: "transparent",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: [
      "#2962ff",
      "#050000",
      "#2e7e32",
      "#ff6d00",
      "#583cb3",
    ],
    plotOptions: {
      area: { // Change plotOptions to 'area'
        distributed: true, // You may need to adjust these options based on your preference
        borderRadius: 4,
        horizontal: false,
        columnWidth: "40%",
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 0.7, // Adjust opacity for better visualization
    },
    grid: {
      borderColor: "#55596e",
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: "#f5f2ff",
      },
      show: true,
      position: "top",
    },
    stroke: {
      colors: ["#2962ff"], // Adjust stroke color
      show: true,
      width: 2
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: "dark",
    },
    xaxis: {
      categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
      title: {
        style: {
          color: "#f5f2ff",
        },
      },
      axisBorder: {
        show: true,
        color: "#5550de",
      },
      axisTicks: {
        show: true,
        color: "#5550de",
      },
      labels: {
        style: {
          colors: "#f5f7ff",
        },
      },
    },
    yaxis: {
      title: {
        text: "Count",
        style: {
          color: "#f5f7ff",
        },
      },
      axisBorder: {
        color: "#5550de",
        show: true,
      },
      axisTicks: {
        color: "#5550de",
        show: true,
      },
      labels: {
        style: {
          colors: "#f5f7ff",
        },
      },
    }
  };
  
  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions); 
  areaChart.render();
  