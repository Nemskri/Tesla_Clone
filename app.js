// let hideSide = document.getElementById('hideSide')

// hideSide.addEventListener('click', function () {
//     document.getElementById('sideIcon').classList.remove('d-none')
//     document.getElementById('sidebar').classList.add('d-none')
// })

// let showSide = document.getElementById('showSide')
// console.log(showSide);
// showSide.addEventListener('click', function () {

//     document.getElementById('sideIcon').classList.add('d-none')
//     document.getElementById('sidebar').classList.remove('d-none')
// })

// Script to Hide/Show Pages Modal


let pagesModal = document.getElementById('pagesModal')
let pagesModalShow = document.getElementById('pagesModalShow')

pagesModal.addEventListener('mouseover', function (e) {
    pagesModalShow.classList.remove('d-none')
    pagesModalShow.addEventListener('mouseleave', function (e) {
        pagesModalShow.classList.add('d-none')
    })
})

// Script to Hide/Show Sidebar

let sideBarBtn = document.getElementById('sideBarBtn')
let sidebarModal = document.getElementById('sidebarModal')

sideBarBtn.addEventListener('mouseover', function () {
    sidebarModal.classList.remove('d-none')
    sidebarModal.addEventListener('mouseleave', function () {
        sidebarModal.classList.add('d-none')
    })
})

sideBarBtn.addEventListener('click', function () {
    if (sidebarModal.classList.contains('d-none')) {
        sidebarModal.classList.remove('d-none')
        // console.log("log")
    } else {
        sidebarModal.classList.add('d-none')
        // console.log("log")
    }

})


//  Apex Charts

let options = {
    series: [{
        name: 'KW vs RPM',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'KN vs RPM',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: '',
        categories: ["1000", "5000", "8000", "10000", "15000", "20000", "35000"]
    },
    tooltip: {
        x: {
            format: 'rmp'
        },
    },
};

let chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

// Animation for Background

