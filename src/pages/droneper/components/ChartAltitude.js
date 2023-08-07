import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartAltitude extends React.Component {
  constructor(props) {
    super(props);

    // function generateDayWiseTimeSeries(baseval, count, yrange) {
    //   var i = 0;
    //   var series = [];
    //   while (i < count) {
    //     var x = baseval;
    //     var y =
    //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    //     series.push([x, y]);
    //     baseval += 86400000;
    //     i++;
    //   }

    //   console.log("~~~~~~~~~~~~series~~~~~~~~~~~~~~",series)

    //   return series;
    // }

    this.state = {
      series: [],
      options: {
        chart: {
          type: "area",
          height: 350,
          stacked: true,
          events: {
            selection: function (chart, e) {
              console.log(new Date(e.xaxis.min));
            },
          },
        },
        colors: ["#008FFB", "#00E396", "#CED4DC"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
        },
        xaxis: {
          type: "datetime",
        },
      },
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { altitudedata } = this.props;
      const Setaltitudedata = [
        { name: "Central", data: altitudedata.centralData },
        { name: "North", data: altitudedata.northData },
        { name: "South", data: altitudedata.south },
      ];

      this.setState({ series: Setaltitudedata });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={250}
        />
        <h6 style={{ textAlign: "center", fontSize: "1.25rem" }}>
          Altitude of "Drone_ALPHA" x축, y축
        </h6>
      </div>
    );
  }
}

export default ChartAltitude;
