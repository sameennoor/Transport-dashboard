/* =========================================================
   TRANSIT OPERATIONS COMMAND CENTER
========================================================= */
/* =========================================================
   LIVE CLOCK
========================================================= */

function updateClock() {

    const now = new Date();


    const time = now.toLocaleTimeString(
        "en-US",
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        }
    );


    const date = now.toLocaleDateString(
        "en-GB",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    ).toUpperCase();


    const timeElement =
        document.getElementById("currentTime");


    const dateElement =
        document.getElementById("todayDate");


    const syncElement =
        document.getElementById("syncTime");


    if (timeElement) {

        timeElement.textContent = time;

    }


    if (dateElement) {

        dateElement.textContent = date;

    }


    if (syncElement) {

        syncElement.textContent = time;

    }

}


updateClock();

setInterval(updateClock, 1000);



/* =========================================================
   SEARCH + STATUS FILTER
========================================================= */

const searchInput =
    document.getElementById("searchInput");


const statusFilter =
    document.getElementById("statusFilter");


const operationRows =
    document.querySelectorAll(".operation-row");


function filterOperations() {

    const searchValue =
        searchInput.value
            .trim()
            .toLowerCase();


    const selectedStatus =
        statusFilter.value;


    operationRows.forEach(row => {

        const rowText =
            row.textContent.toLowerCase();


        const statusElement =
            row.querySelector(".status-pill");


        const rowStatus =
            statusElement
                ? statusElement.textContent.trim()
                : "";


        const matchesSearch =
            rowText.includes(searchValue);


        const matchesStatus =
            selectedStatus === "all" ||
            rowStatus === selectedStatus;


        row.style.display =
            matchesSearch && matchesStatus
                ? ""
                : "none";

    });

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterOperations
    );

}


if (statusFilter) {

    statusFilter.addEventListener(
        "change",
        filterOperations
    );

}



/* =========================================================
   CHART DEFAULTS
========================================================= */

Chart.defaults.font.family =
    "Inter, system-ui, sans-serif";

Chart.defaults.color =
    "#71807D";


/* =========================================================
   PASSENGER FLOW CHART
========================================================= */

const passengerCanvas =
    document.getElementById(
        "passengerChart"
    );


if (passengerCanvas) {

    const context =
        passengerCanvas.getContext("2d");


    const gradient =
        context.createLinearGradient(
            0,
            0,
            0,
            260
        );


    gradient.addColorStop(
        0,
        "rgba(61,129,124,0.34)"
    );


    gradient.addColorStop(
        1,
        "rgba(61,129,124,0.01)"
    );


    new Chart(
        context,
        {

            type: "line",


            data: {

                labels: [
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17"
                ],


                datasets: [

                    {

                        label:
                            "Passengers",

                        data: [
                            280,
                            410,
                            690,
                            1080,
                            930,
                            710,
                            760,
                            820,
                            900,
                            1040,
                            1210,
                            1460
                        ],

                        borderColor:
                            "#3D817C",

                        backgroundColor:
                            gradient,

                        fill: true,

                        tension: 0.42,

                        borderWidth: 2.5,

                        pointRadius: 0,

                        pointHoverRadius: 5,

                        pointHoverBackgroundColor:
                            "#0D2528"

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
                            "#0D2528",

                        titleColor:
                            "#FFFFFF",

                        bodyColor:
                            "#D8E8E5",

                        padding: 11,

                        displayColors: false

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

                                size: 8

                            }

                        }

                    },


                    y: {

                        beginAtZero: true,

                        border: {

                            display: false

                        },

                        grid: {

                            color:
                                "#E7ECE9"

                        },

                        ticks: {

                            font: {

                                size: 8

                            },

                            callback: value => {

                                return value >= 1000
                                    ? (value / 1000) + "K"
                                    : value;

                            }

                        }

                    }

                }

            }

        }

    );

}



/* =========================================================
   DELAY ANALYSIS CHART
========================================================= */

const delayCanvas =
    document.getElementById(
        "delayChart"
    );


if (delayCanvas) {

    new Chart(
        delayCanvas,
        {

            type: "bar",


            data: {

                labels: [
                    "06",
                    "08",
                    "10",
                    "12",
                    "14",
                    "16",
                    "18",
                    "20"
                ],


                datasets: [

                    {

                        label:
                            "Delay minutes",

                        data: [
                            2,
                            3,
                            7,
                            4,
                            5,
                            8,
                            6,
                            3
                        ],

                        backgroundColor:
                            [
                                "#9AC5BE",
                                "#9AC5BE",
                                "#D66F57",
                                "#9AC5BE",
                                "#E8B45B",
                                "#D66F57",
                                "#E8B45B",
                                "#9AC5BE"
                            ],

                        borderRadius: 5,

                        borderSkipped: false

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
                            "#0D2528",

                        displayColors: false

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

                                size: 8

                            }

                        }

                    },


                    y: {

                        beginAtZero: true,

                        max: 10,

                        border: {

                            display: false

                        },

                        grid: {

                            color:
                                "#E7ECE9"

                        },

                        ticks: {

                            stepSize: 2,

                            font: {

                                size: 8

                            }

                        }

                    }

                }

            }

        }

    );

}



/* =========================================================
   VEHICLE DATA
========================================================= */

const vehicleData = {

    "TR-204": {

        route:
            "Route R-04 · Central → University",

        driver:
            "A. Khan",

        passengers:
            "67 / 80",

        stop:
            "University Gate"

    },


    "TR-118": {

        route:
            "Route R-11 · Airport → Downtown",

        driver:
            "S. Ahmed",

        passengers:
            "51 / 80",

        stop:
            "Central Station"

    },


    "TR-307": {

        route:
            "Route R-07 · East Gate → Mall",

        driver:
            "M. Ali",

        passengers:
            "73 / 80",

        stop:
            "East Market"

    },


    "TR-415": {

        route:
            "Route R-15 · North → City",

        driver:
            "R. Malik",

        passengers:
            "46 / 80",

        stop:
            "City Center"

    }

};



/* =========================================================
   VEHICLE MODAL
========================================================= */

const modal =
    document.getElementById(
        "vehicleModal"
    );


const closeModal =
    document.getElementById(
        "closeModal"
    );


const modalVehicle =
    document.getElementById(
        "modalVehicle"
    );


const modalRoute =
    document.getElementById(
        "modalRoute"
    );


const modalDriver =
    document.getElementById(
        "modalDriver"
    );


const modalPassengers =
    document.getElementById(
        "modalPassengers"
    );


const modalStop =
    document.getElementById(
        "modalStop"
    );



function openVehicleModal(vehicleId) {

    const data =
        vehicleData[vehicleId];


    if (!data) {

        return;

    }


    modalVehicle.textContent =
        vehicleId;


    modalRoute.textContent =
        data.route;


    modalDriver.textContent =
        data.driver;


    modalPassengers.textContent =
        data.passengers;


    modalStop.textContent =
        data.stop;


    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}



/* =========================================================
   TABLE VIEW BUTTONS
========================================================= */

document
    .querySelectorAll(".view-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const vehicle =
                    button.dataset.vehicle;

                openVehicleModal(vehicle);

            }
        );

    });



/* =========================================================
   MAP VEHICLE BUTTONS
========================================================= */

document
    .querySelectorAll(".vehicle-marker")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const vehicle =
                    button.dataset.vehicle;

                openVehicleModal(vehicle);

            }
        );

    });



/* =========================================================
   CLOSE MODAL
========================================================= */

if (closeModal) {

    closeModal.addEventListener(
        "click",
        () => {

            modal.classList.remove(
                "show"
            );

            document.body.style.overflow =
                "";

        }
    );

}


/* =========================================================
   CLOSE MODAL ON BACKDROP
========================================================= */

if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                modal.classList.remove(
                    "show"
                );

                document.body.style.overflow =
                    "";

            }

        }
    );

}



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {

            modal.classList.remove(
                "show"
            );

            document.body.style.overflow =
                "";

        }

    }
);



/* =========================================================
   MAP FILTER BUTTONS
========================================================= */

const mapFilters =
    document.querySelectorAll(
        ".map-filter"
    );


mapFilters.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            mapFilters.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );

        }
    );

});
