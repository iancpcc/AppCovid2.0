function init_widgets(){
$(function() {
    $('#datetimepicker-dashboard').datetimepicker(

{
        inline: true,
        sideBySide: false,
format: 'L'
    });
});

$(function() {
    // Pie chart
    new Chart(document.getElementById("chartjs-dashboard-pie"), {
        type: 'pie',
        data: {
            labels: ["Recuperados", "Enfermos", "Fallecidos"],
            datasets: [{
                data: [500, 1200, 1500],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.warning,
                    window.theme.danger
                ],
                borderWidth: 5
            }]
        },
        options: {
            responsive: !window.MSInputMethodContext,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            cutoutPercentage: 75
        }
    });
});
}