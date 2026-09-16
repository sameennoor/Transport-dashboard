
$(document).ready(function () {


    /* =================================================
       SIDEBAR TOGGLE
    ================================================= */

    $("#menuBtn").click(function () {

        $("#sidebar").toggleClass("show");

    });


    /* =================================================
       COUNTER ANIMATION
    ================================================= */

    $(".counter").each(function () {

        let element = $(this);

        let text = element.text();

        let value = parseInt(text);

        let suffix = text.includes("%") ? "%" : "";

        $({ count: 0 }).animate(
            { count: value },
            {
                duration: 1500,

                step: function () {

                    element.text(
                        Math.floor(this.count) + suffix
                    );

                },

                complete: function () {

                    element.text(value + suffix);

                }
            }
        );

    });


    /* =================================================
       STUDENT SEARCH
    ================================================= */

    $("#searchInput").on("keyup", function () {

        let searchValue = $(this).val().toLowerCase();

        $("#studentTable tr").filter(function () {

            $(this).toggle(
                $(this).text().toLowerCase().indexOf(searchValue) > -1
            );

        });

    });


    /* =================================================
       SIDEBAR ACTIVE MENU
    ================================================= */

    $(".sidebar-menu li a").click(function (e) {

        e.preventDefault();

        $(".sidebar-menu li").removeClass("active");

        $(this).parent().addClass("active");

    });


    /* =================================================
       ATTENDANCE LINE CHART
    ================================================= */

    const attendanceCanvas =
        document.getElementById("attendanceChart");

    new Chart(attendanceCanvas, {

        type: "line",

        data: {

            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June"
            ],

            datasets: [{

                label: "Attendance",

                data: [
                    78,
                    81,
                    79,
                    84,
                    88,
                    86
                ],

                borderColor: "#4f46e5",

                backgroundColor: "rgba(79, 70, 229, 0.10)",

                borderWidth: 3,

                fill: true,

                tension: 0.4,

                pointRadius: 4,

                pointHoverRadius: 6,

                pointBackgroundColor: "#4f46e5",

                pointBorderColor: "#ffffff",

                pointBorderWidth: 2

            }]

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

                    display: true,

                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }

                },

                tooltip: {

                    backgroundColor: "#172033",

                    padding: 12,

                    callbacks: {

                        label: function (context) {

                            return " Attendance: "
                                + context.parsed.y
                                + "%";

                        }

                    }

                }

            },

            scales: {

                x: {

                    grid: {
                        display: false
                    },

                    ticks: {
                        color: "#64748b"
                    }

                },

                y: {

                    min: 60,

                    max: 100,

                    grid: {
                        color: "#eef1f5"
                    },

                    ticks: {

                        color: "#64748b",

                        callback: function (value) {

                            return value + "%";

                        }

                    }

                }

            }

        }

    });


    /* =================================================
       GRADE DISTRIBUTION DOUGHNUT CHART
    ================================================= */

    const gradeCanvas =
        document.getElementById("gradeChart");

    new Chart(gradeCanvas, {

        type: "doughnut",

        data: {

            labels: [
                "A Grade",
                "B Grade",
                "C Grade",
                "D Grade"
            ],

            datasets: [{

                data: [
                    35,
                    40,
                    20,
                    5
                ],

                backgroundColor: [

                    "#4f46e5",

                    "#14b8a6",

                    "#9333ea",

                    "#f59e0b"

                ],

                borderWidth: 3,

                borderColor: "#ffffff",

                hoverOffset: 8

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            cutout: "65%",

            plugins: {

                legend: {

                    position: "bottom",

                    labels: {

                        usePointStyle: true,

                        padding: 18,

                        color: "#475569"

                    }

                },

                tooltip: {

                    backgroundColor: "#172033",

                    padding: 12,

                    callbacks: {

                        label: function (context) {

                            return " "
                                + context.label
                                + ": "
                                + context.parsed
                                + "%";

                        }

                    }

                }

            }

        }

    });


    /* =================================================
       COURSE PERFORMANCE BAR CHART
    ================================================= */

    const courseCanvas =
        document.getElementById("courseChart");

    new Chart(courseCanvas, {

        type: "bar",

        data: {

            labels: [
                "AI",
                "Database",
                "Web Engineering",
                "WSN",
                "DIP"
            ],

            datasets: [{

                label: "Average Marks",

                data: [
                    88,
                    76,
                    82,
                    79,
                    72
                ],

                backgroundColor: [

                    "#4f46e5",
                    "#6366f1",
                    "#14b8a6",
                    "#0d9488",
                    "#9333ea"

                ],

                borderRadius: 7,

                borderSkipped: false

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                },

                tooltip: {

                    backgroundColor: "#172033",

                    padding: 12,

                    callbacks: {

                        label: function (context) {

                            return " Average Marks: "
                                + context.parsed.y
                                + "%";

                        }

                    }

                }

            },

            scales: {

                x: {

                    grid: {
                        display: false
                    },

                    ticks: {
                        color: "#64748b"
                    }

                },

                y: {

                    beginAtZero: true,

                    max: 100,

                    grid: {
                        color: "#eef1f5"
                    },

                    ticks: {

                        color: "#64748b",

                        callback: function (value) {

                            return value + "%";

                        }

                    }

                }

            }

        }

    });


    /* =================================================
       PERFORMANCE TREND LINE CHART
    ================================================= */

    const performanceCanvas =
        document.getElementById("performanceChart");

    new Chart(performanceCanvas, {

        type: "line",

        data: {

            labels: [
                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4",
                "Week 5",
                "Week 6"
            ],

            datasets: [{

                label: "Average Performance",

                data: [
                    65,
                    70,
                    74,
                    72,
                    80,
                    85
                ],

                borderColor: "#14b8a6",

                backgroundColor: "rgba(20, 184, 166, 0.12)",

                borderWidth: 3,

                fill: true,

                tension: 0.4,

                pointRadius: 4,

                pointHoverRadius: 6,

                pointBackgroundColor: "#14b8a6",

                pointBorderColor: "#ffffff",

                pointBorderWidth: 2

            }]

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

                    display: true,

                    labels: {

                        usePointStyle: true,

                        padding: 20

                    }

                },

                tooltip: {

                    backgroundColor: "#172033",

                    padding: 12,

                    callbacks: {

                        label: function (context) {

                            return " Performance: "
                                + context.parsed.y
                                + "%";

                        }

                    }

                }

            },

            scales: {

                x: {

                    grid: {
                        display: false
                    },

                    ticks: {
                        color: "#64748b"
                    }

                },

                y: {

                    min: 50,

                    max: 100,

                    grid: {
                        color: "#eef1f5"
                    },

                    ticks: {

                        color: "#64748b",

                        callback: function (value) {

                            return value + "%";

                        }

                    }

                }

            }

        }

    });


});