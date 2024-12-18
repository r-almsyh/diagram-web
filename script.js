const ctx = document.getElementById("salesChart").getContext("2d");

const salesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    datasets: [
      {
        label: "2023",
        data: [
          4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207,
          5945,
        ],
        backgroundColor: "rgba(5, 5, 5, 0.7)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
      },
      {
        label: "2024",
        data: [
          2416, 4136, 7395, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287,
          8689,
        ],
        backgroundColor: "rgba(99, 206, 255, 0.7)",
        borderColor: "rgba(99, 206, 255, 0.7)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Laporan Penjualan 2022 vs 2023",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
