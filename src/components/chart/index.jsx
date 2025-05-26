import Chart from "react-apexcharts";
import { Box } from "@chakra-ui/react";

const options = {
  labels: ["Income", "Expense"],
  colors: ["#10B981", "#EF4444"],
  chart: {
    width: "50px",
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    },
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 3,
      left: 2,
      blur: 4,
      opacity: 0.1
    }
  },
  states: {
    hover: {
      filter: {
        type: "lighten",
        value: 0.15,
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "darken",
        value: 0.35,
      }
    }
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val.toFixed(1) + "%"
    },
    style: {
      fontSize: '14px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 'bold',
      colors: ['#fff']
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      color: '#000',
      opacity: 0.45
    }
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
      expandOnClick: true,
      offsetX: 0,
      offsetY: 0,
      customScale: 0.8,
      dataLabels: {
        offset: 0,
        minAngleToShowLabel: 10
      },
      donut: {
        size: '60%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '22px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            color: undefined,
            offsetY: -10,
            formatter: function (val) {
              return val
            }
          },
          value: {
            show: true,
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: undefined,
            offsetY: 16,
            formatter: function (val) {
              return parseInt(val) + "%"
            }
          },
          total: {
            show: true,
            showAlways: false,
            label: 'Total',
            fontSize: '22px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            color: '#373d3f',
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b
              }, 0) + '%'
            }
          }
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: "radial",
      shadeIntensity: 0.4,
      gradientToColors: ['#34D399', '#F87171'],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 100]
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: ['#fff'],
    width: 3,
    dashArray: 0,
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "14px",
      fontFamily: 'Helvetica, Arial, sans-serif',
      backgroundColor: "#1a202c",
    },
    custom: function({series, seriesIndex, dataPointIndex, w}) {
      const total = series.reduce((a, b) => a + b, 0);
      const percentage = ((series[seriesIndex] / total) * 100).toFixed(1);
      const label = w.globals.labels[seriesIndex];
      const value = series[seriesIndex];
      
      return `
        <div style="
          padding: 12px; 
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        ">
          <div style="
            color: ${seriesIndex === 0 ? '#10B981' : '#EF4444'}; 
            font-weight: bold; 
            font-size: 14px;
            margin-bottom: 4px;
          ">
            ${label}
          </div>
          <div style="color: #fff; font-size: 16px; font-weight: bold;">
            $${value}
          </div>
          <div style="color: #a0aec0; font-size: 12px;">
            ${percentage}% of total
          </div>
        </div>
      `;
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

export default function TransactionChartSummary({expense = 100, income = 100}) {
  return (
    <Box
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "120%",
        height: "120%",
        borderRadius: "50%",
        bgGradient: "radial(circle, rgba(16,185,129,0.1) 0%, rgba(239,68,68,0.1) 50%, transparent 70%)",
        zIndex: -1,
      }}
      _after={{
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "80%",
        borderRadius: "50%",
        border: "2px solid",
        borderColor: "rgba(255,255,255,0.1)",
        zIndex: -1,
      }}
    >
      <Chart
        options={options}
        series={[income, expense]}
        type="donut"
        width={"100%"}
        height={"100%"}
      />
    </Box>
  );
}