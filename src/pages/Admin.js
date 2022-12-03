import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import Adminsidebar from "../components/Adminsidebar";
import AdminTopnav from "../components/AdminTopnav";
import Adminfooter from "../components/Adminfooter";
import { getStats } from "../helpers/admin";

const iconlList = [
  {

    name: "Parents",
    status: "warning",
    icon: "./assets/images/family.png",
    des: "20% Incrase from Last Week",
  },
  {
    name: "Childs",
    status: "success",
    icon: "./assets/images/children.png",
    des: "20% Incrase from Last Week",
  },
  {
    name: "Subscribed users",
    status: "info",
    icon: "./assets/images/save-money.png",
    des: "20% Incrase from Last Week",
  },
  {
    name: "Unsubscribed users",
    status: "secondary",
    icon: "./assets/images/bill.png",
    des: "20% Incrase from Last Week",
  },
];

const lineChart = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  series: [
    {
      name: "",
      data: [
        35, 16, 34, 36, 18, 35, 26, 34, 26, 18, 36, 18, 36, 34, 36, 18, 16, 18,
      ],
    },
    {
      name: "",
      data: [12, 24, 12, 11, 7, 12, 34, 12, 11, 7, 11, 7, 34, 12, 11, 7, 11, 7],
    },
  ],
  options: {
    chart: {
      height: 100,
      type: "bar",
      // width:'50%',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      columnWidth: "40%",
      bar: {
        horizontal: false,
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  },
};

const pieChart = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
          stacked: true,
          toolbar: {
            show: false,
          },
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  },
};

const Admin = () => {

  const [stats, setStats] = useState([])

  useEffect(() => {
    getStats({ setStats })
  }, [])
  return (
    <>
      <div id='wrapper'>
        <Adminsidebar />

        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content'>
            <AdminTopnav />

            <div className='container px-3 py-4'>
              <div className='row'>
                <div className='col-lg-12 d-flex mb-4'>
                  <h2 className='text-grey-900 font-md fw-700'>Overview</h2>
                </div>
              </div>

              <div className='row'>
                {iconlList.map((value, index) => (
                  <div key={index} className='col-lg-3'>
                    <div
                      className={`card mb-4 border-0 pt-4 pb-4 text-center alert-${value.status} align-items-center rounded-10`}>
                      <img src={value.icon}
                        className={`psor text-white btn-round-md font-xs p-1 bg-${value.status}`} />
                      <h3 className='fw-700 font-xl text-grey-900 mt-2 ls-3 mb-0'>
                        {stats[index]}
                      </h3>
                      <span className='font-xssss ls-0 text-grey-900 fw-700 mt-0'>
                        {value.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className='row'>
                <div className='col-lg-12'>
                  <div className='card border-0 p-4 mt-2 rounded-10'>
                    <div className='card-body d-flex'>
                      <h4 className='font-xss text-grey-800 mb-4 mt-3 fw-700'>
                        Sales Statistics
                      </h4>
                      <h5 className='ml-auto mr-3 mt-2 text-grey-600 font-xssss fw-700'>
                        <span className='btn-round-xss bg-warning mr-1'></span>
                        Sale
                      </h5>
                      <h5 className='mt-2 text-grey-600 font-xssss fw-700'>
                        <span className='btn-round-xss bg-success mr-1'></span>
                        Earn
                      </h5>
                    </div>
                    <Chart
                      options={lineChart.options}
                      series={lineChart.series}
                      type='bar'
                      width='100%'
                      height='350'
                    />
                  </div>
                </div>
              </div>
            </div>

            <Adminfooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
