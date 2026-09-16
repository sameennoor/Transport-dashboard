/* =========================================================
   TRANSIT OPERATIONS DASHBOARD
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       LIVE CLOCK
    ====================================================== */

    function updateClock() {

        const clock =
            document.getElementById("liveClock");

        if (!clock) return;

        const now = new Date();

        const hours =
            String(now.getHours()).padStart(2, "0");

        const minutes =
            String(now.getMinutes()).padStart(2, "0");

        const seconds =
            String(now.getSeconds()).padStart(2, "0");

        clock.textContent =
            `${hours}:${minutes}:${seconds}`;

    }

    updateClock();

    setInterval(updateClock, 1000);



    /* =====================================================
       MOBILE SIDEBAR
    ====================================================== */

    const mobileButton =
        document.getElementById("mobileMenuBtn");

    const sidebar =
        document.getElementById("sidebar");


    if (mobileButton) {

        mobileButton.addEventListener("click", function () {

            sidebar.classList.toggle("open");

        });

    }



    /* =====================================================
       NAVIGATION
    ====================================================== */

    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            navLinks.forEach(function (item) {

                item.classList.remove("active");

            });

            link.classList.add("active");

        });

    });



    /* =====================================================
       SEARCH + STATUS FILTER
    ====================================================== */

    const searchInput =
        document.getElementById("searchInput");

    const statusFilter =
        document.getElementById("statusFilter");

    const rows =
        document.querySelectorAll(
            "#networkTable tbody tr"
        );

    const noResults =
        document.getElementById("noResults");


    function filterRows() {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();

        const selectedStatus =
            statusFilter.value;

        let visible =
            0;


        rows.forEach(function (row) {

            const rowText =
                row.textContent.toLowerCase();

            const rowStatus =
                row.dataset.status;


            const searchMatch =
                rowText.includes(searchText);


            const statusMatch =
                selectedStatus === "all" ||
                rowStatus === selectedStatus;


            if (searchMatch && statusMatch) {

                row.style.display = "";

                visible++;

            } else {

                row.style.display = "none";

            }

        });


        noResults.style.display =
            visible === 0
                ? "block"
                : "none";

    }


    searchInput.addEventListener(
        "input",
        filterRows
    );


    statusFilter.addEventListener(
        "change",
        filterRows
    );



    /* =====================================================
       CHART GLOBAL SETTINGS
    ====================================================== */

    Chart.defaults.font.family =
        "Inter, system-ui, sans-serif";

    Chart.defaults.color =
        "#71807E";



    /* =====================================================
       PASSENGER FLOW
    ====================================================== */

    const passengerCanvas =
        document.getElementById("passengerChart");


    if (passengerCanvas) {

        const ctx =
            passengerCanvas.getContext("2d");


        const gradient =
            ctx.createLinearGradient(
                0,
                0,
                0,
                280
            );


        gradient.addColorStop(
            0,
            "rgba(60,133,131,.28)"
        );


        gradient.addColorStop(
            1,
            "rgba(60,133,131,.01)"
        );


        new Chart(

            ctx,

            {

                type: "line",

                data: {

                    labels: [
                        "06 AM",
                        "07 AM",
                        "08 AM",
                        "09 AM",
                        "10 AM",
                        "11 AM",
                        "12 PM",
                        "01 PM",
                        "02 PM",
                        "03 PM",
                        "04 PM",
                        "05 PM",
                        "06 PM",
                        "07 PM"
                    ],

                    datasets: [

                        {

                            label: "Passengers",

                            data: [
                                320,
                                550,
                                910,
                                1280,
                                1050,
                                790,
                                820,
                                970,
                                880,
                                1110,
                                1350,
                                1510,
                                1420,
                                1190
                            ],

                            borderColor:
                                "#3C8583",

                            backgroundColor:
                                gradient,

                            borderWidth: 3,

                            fill: true,

                            tension: .42,

                            pointRadius: 0,

                            pointHoverRadius: 5

                        }

                    ]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    interaction: {

                        intersect: false,

                        mode: "index"

                    },

                    plugins: {

                        legend: {
                            display: false
                        },

                        tooltip: {

                            backgroundColor:
                                "#102A2E",

                            displayColors: false,

                            padding: 10

                        }

                    },

                    scales: {

                        x: {

                            grid: {
                                display: false
                            },

                            border: {
                                display: false
                            },

                            ticks: {
                                font: {
                                    size: 10
                                }
                            }

                        },

                        y: {

                            beginAtZero: true,

                            grid: {
                                color: "#E8EFEC"
                            },

                            border: {
                                display: false
                            },

                            ticks: {

                                font: {
                                    size: 10
                                },

                                callback: function (value) {

                                    return value >= 1000
                                        ? value / 1000 + "k"
                                        : value;

                                }

                            }

                        }

                    }

                }

            }

        );

    }



    /* =====================================================
       REVENUE CHART
    ====================================================== */

    const revenueCanvas =
        document.getElementById("revenueChart");


    if (revenueCanvas) {

        new Chart(

            revenueCanvas.getContext("2d"),

            {

                type: "line",

                data: {

                    labels: [
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                        "Sun"
                    ],

                    datasets: [

                        {

                            data: [
                                360,
                                390,
                                425,
                                410,
                                455,
                                470,
                                486
                            ],

                            borderColor:
                                "#102A2E",

                            borderWidth: 2.5,

                            tension: .4,

                            pointRadius: 0,

                            fill: false

                        }

                    ]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {
                            display: false
                        },

                        tooltip: {

                            backgroundColor:
                                "#102A2E",

                            displayColors: false,

                            callbacks: {

                                label: function (context) {

                                    return (
                                        "Rs. " +
                                        context.parsed.y +
                                        "K"
                                    );

                                }

                            }

                        }

                    },

                    scales: {

                        x: {
                            display: false
                        },

                        y: {
                            display: false
                        }

                    }

                }

            }

        );

    }



    /* =====================================================
       FLEET DISTRIBUTION
    ====================================================== */

    const fleetCanvas =
        document.getElementById("fleetChart");


    if (fleetCanvas) {

        new Chart(

            fleetCanvas.getContext("2d"),

            {

                type: "bar",

                data: {

                    labels: [
                        "Central",
                        "North",
                        "East",
                        "West"
                    ],

                    datasets: [

                        {

                            label: "Active",

                            data: [
                                14,
                                12,
                                11,
                                11
                            ],

                            backgroundColor:
                                "#3C8583",

                            borderRadius: 5

                        },

                        {

                            label: "Idle",

                            data: [
                                2,
                                2,
                                1,
                                2
                            ],

                            backgroundColor:
                                "#A9B6B3",

                            borderRadius: 5

                        },

                        {

                            label: "Service",

                            data: [
                                1,
                                1,
                                2,
                                1
                            ],

                            backgroundColor:
                                "#C96D58",

                            borderRadius: 5

                        }

                    ]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {

                            position: "bottom",

                            labels: {

                                usePointStyle: true,

                                pointStyle: "circle",

                                padding: 15,

                                font: {
                                    size: 10
                                }

                            }

                        }

                    },

                    scales: {

                        x: {

                            stacked: true,

                            grid: {
                                display: false
                            },

                            border: {
                                display: false
                            }

                        },

                        y: {

                            stacked: true,

                            beginAtZero: true,

                            grid: {
                                color: "#E8EFEC"
                            },

                            border: {
                                display: false
                            },

                            ticks: {
                                stepSize: 5
                            }

                        }

                    }

                }

            }

        );

    }



    /* =====================================================
       ACTION BUTTONS
    ====================================================== */

    const scheduleButton =
        document.querySelector(".primary-action");


    if (scheduleButton) {

        scheduleButton.addEventListener(
            "click",
            function () {

                alert(
                    "Route scheduling module is ready for integration."
                );

            }
        );

    }


    const exportButton =
        document.querySelector(".secondary-action");


    if (exportButton) {

        exportButton.addEventListener(
            "click",
            function () {

                alert(
                    "Report export functionality can be connected to your backend."
                );

            }
        );

    }

});
