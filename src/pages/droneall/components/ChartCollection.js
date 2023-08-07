import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartCollection extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          // data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
          data : []
        }],
        options: {
          chart: {
            type: 'bar',
            height: 300
          },
          plotOptions: {
            bar: {
              barHeight: '100%',
              distributed: true,
              horizontal: true,
              dataLabels: {
                position: 'bottom'
              },
            }
          },
          colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
            '#f48024', '#69d2e7'
          ],
          dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
              colors: ['#fff']
            },
            formatter: function (val, opt) {
              return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            },
            offsetX: 0,
            dropShadow: {
              enabled: true
            }
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            categories: ['data01', 'data02', 'data03', 'data04', 'data05', 'data06', 'data07',
              'data08', 'data09', 'data10'
            ],
          },
          yaxis: {
            labels: {
              show: false
            }
          },
          // subtitle: {
          //     text: 'Category Names as DataLabels inside bars',
          //     align: 'center',
          // },
          tooltip: {
            theme: 'dark',
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function () {
                  return ''
                }
              }
            }
          }
        },
      };
    }

    componentDidMount(){
      this.interval = setInterval(() => {
        const {collection} = this.props
        const setCollection = [
          {data: collection}
        ]
  
        this.setState({series:setCollection})
      }, 3000);
    }

    componentWillUnmount(){
      clearInterval(this.interval)
    }

  
    render() {

      return (
        
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} />
            <h6 style={{textAlign:"center", fontSize:"1.25rem"}}>Collection of data by category</h6>
        </div>

      );
    }
  }

export default ChartCollection