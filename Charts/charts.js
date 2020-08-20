/*var values = [{
    name: 'Google Chrome',
    y: 10.5
}, {
    name: 'Opera',
    y: 12.5
}]
*/
const serveurSource = "http://localhost:8083";
//candidatureParStatut()
//nombreCandidatureParDate()
//nombreProfilParDate()

var dateDebut = $("#date1").val();
var dateFin = $("#date2").val();
var periode = $(".periode").val();

$("#date1").click(function() {
    var dateDebut = $("#date1").val();
    var dateFin = $("#date2").val();

    if ((dateDebut != "") && (dateFin != "")) {
        nombreCandidatureParJour(dateDebut, dateFin);
    } else {
        nombreCandidatureParJour();
    }

});

$(".periode").unbind('change').change(function() {
    var dateDebut = $(".date1").val();
    var dateFin = $(".date2").val();

    if ((dateDebut != "") && (dateFin != "")) {
        candidaturesParPeriodeEtParIntervale(formContainer.data['var-periode'], dateDebut, dateFin)
    } else {
        candidaturesParPeriodeEtParIntervale();
    }

});

$("#date2").click(function() {
    var dateDebut = $("#date1").val();
    var dateFin = $("#date2").val();
    nombreCandidatureParJour(dateDebut, dateFin)
});
//var periode=0;
candidaturesParPeriodeEtParIntervale()

function candidaturesParPeriodeEtParIntervale(periode = 1, dateDebut = "2010-02", dateFin = "2030-02") {

    switch (periode) {
        case 1:
            nombreCandidatureParJour(dateDebut, dateFin);
            break;
        case 2:
            nombreCandidatureParMois(dateDebut, dateFin);
            break;
        case 3:
            nombreCandidatureParAnne(dateDebut, dateFin);
            break;
        default:
            break;
    }

}

function nombreCandidatureParJour(dateDebut = "2010-02-07", dateFin = "2030-02-15") {

    if (document.getElementById('ex2') != null) {
        var dates = Array()
        var values = Array()
        $.ajax({

            url: serveurSource + "/candidatures/nombreAnddatedecandidatureParIntervalle?dateDebut=" +
                dateDebut + "&dateFin=" + dateFin,
            method: "get",
            dataType: "json",
            success: function(data) {

                for (var k in data) {
                    dates.push(data[k].dateDeCandidature);
                    values.push(data[k].nbreCandidature);
                }
                console.log(data);
                console.log(dates);
                console.log(values);

                Highcharts.chart('ex2', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Nombre de Candidatures par jour'
                    },
                    subtitle: {
                        text: 'Source: Vneuron.com'
                    },
                    xAxis: {
                        name: 'dates',
                        categories: dates
                    },
                    yAxis: {
                        title: {
                            text: 'Nombre de Candidature'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true
                            },
                            enableMouseTracking: true
                        }
                    },
                    series: [{
                        name: 'Candidatures',
                        data: values
                    }]
                });
            },
            error: function(errMsg) {
                console.log(errMsg);
            }
        });
    }
}

function nombreCandidatureParMois(dateDebut = "2010-02-07", dateFin = "2030-02-15") {

    if (document.getElementById('ex2') != null) {
        var dates = Array()
        var values = Array()
        $.ajax({

            url: serveurSource + "/candidatures/datedecandidatureMois?dateDebut=" +
                dateDebut + "&dateFin=" + dateFin,
            method: "get",
            dataType: "json",
            success: function(data) {

                for (var k in data) {
                    dates.push(data[k].anne);
                    values.push(data[k].nbreCandidature);
                }
                console.log(data);
                console.log(dates);
                console.log(values);

                Highcharts.chart('ex2', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Nombre de Candidatures par Mois'
                    },
                    subtitle: {
                        text: 'Source: Vneuron.com'
                    },
                    xAxis: {
                        name: 'dates',
                        categories: dates
                    },
                    yAxis: {
                        title: {
                            text: 'Nombre de Candidature'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true
                            },
                            enableMouseTracking: true
                        }
                    },
                    series: [{
                        name: 'Candidatures',
                        data: values
                    }]
                });
            },
            error: function(errMsg) {
                console.log(errMsg);
            }
        });
    }
}


function nombreCandidatureParAnne(dateDebut = "2010-02-07", dateFin = "2030-02-15") {

    if (document.getElementById('ex2') != null) {
        var dates = Array()
        var values = Array()
        $.ajax({

            url: serveurSource + "/candidatures/datedecandidatureAnne?dateDebut=" +
                dateDebut + "&dateFin=" + dateFin,
            method: "get",
            dataType: "json",
            success: function(data) {

                for (var k in data) {
                    dates.push(data[k].anne);
                    values.push(data[k].nbreCandidature);
                }
                console.log(data);
                console.log(dates);
                console.log(values);

                Highcharts.chart('ex2', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Nombre de Candidatures par Année'
                    },
                    subtitle: {
                        text: 'Source: Vneuron.com'
                    },
                    xAxis: {
                        name: 'dates',
                        categories: dates
                    },
                    yAxis: {
                        title: {
                            text: 'Nombre de Candidature'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true
                            },
                            enableMouseTracking: true
                        }
                    },
                    series: [{
                        name: 'Candidatures',
                        data: values
                    }]
                });
            },
            error: function(errMsg) {
                console.log(errMsg);
            }
        });
    }
}





/*
Highcharts.chart('ex2', {

    title: {
        text: 'Logarithmic axis demo'
    },

    xAxis: {
        tickInterval: 1,
        type: 'logarithmic',
        accessibility: {
            rangeDescription: 'Range: 1 to 10'
        }
    },

    yAxis: {
        type: 'logarithmic',
        minorTickInterval: 0.1,
        accessibility: {
            rangeDescription: 'Range: 0.1 to 1000'
        }
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: 'x = {point.x}, y = {point.y}'
    },

    series: [{
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 1000],
        pointStart: 1
    }]
});
*/

/*
Highcharts.chart("exple", {

    tooltip: {
        pointFormat: "Value: {point.y:,.1f} mm"
    },

    xAxis: {
        type: 'datetime',
        labels: {
            format: '{value:%Y-%m-%d}',
            rotation: 45,
            align: 'left'
        }
    },

    series: [{
        data: [1029.9, 1071.5, 1106.4, 1129.2, 1144.0, 1176.0, 1135.6, 1148.5, 1216.4, 1194.1, 1095.6, 1054.4],
        pointStart: Date.UTC(2013, 0, 1),
        pointInterval: 24 * 36e5
    }]

});

*/

function nombreCandidatureParDate() {

    if (document.getElementById('ex2') != null) {
        var dates = Array()
        var values = Array()
        $.ajax({

            url: serveurSource + "/candidatures/datedecandidature",
            method: "get",
            dataType: "json",
            success: function(data) {

                for (var k in data) {
                    dates.push(data[k].dateDeCandidature);
                    values.push(data[k].nbreCandidature);
                }
                console.log(data);
                console.log(dates);
                console.log(values);

                Highcharts.chart('ex2', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Nombre de Candidatures par jour'
                    },
                    subtitle: {
                        text: 'Source: Vneuron.com'
                    },
                    xAxis: {
                        name: 'dates',
                        categories: dates
                    },
                    yAxis: {
                        title: {
                            text: 'Nombre de Candidature'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true
                            },
                            enableMouseTracking: true
                        }
                    },
                    series: [{
                        name: 'Candidatures',
                        data: values
                    }]
                });
            },
            error: function(errMsg) {
                console.log(errMsg);
            }
        });
    }
}






function nombreProfilParDate() {

    if (document.getElementById('exple') != null) {
        var dates = Array()
        var values = Array()
        $.ajax({

            url: serveurSource + "/profil/datedecreation",
            method: "get",
            dataType: "json",
            success: function(data) {

                for (var k in data) {
                    dates.push(data[k].dateDeCreation);
                    values.push(data[k].nbreProfil);
                }
                console.log(data);
                console.log(dates);
                console.log(values);

                Highcharts.chart('exple', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Nombre de Profil par jour'
                    },
                    subtitle: {
                        text: 'Source: Vneuron.com'
                    },
                    xAxis: {
                        name: 'dates',
                        categories: dates
                    },
                    yAxis: {
                        title: {
                            text: 'Nombre de Profil'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true
                            },
                            enableMouseTracking: true
                        }
                    },
                    series: [{
                        name: 'Candidatures',
                        data: values
                    }]
                });
            },
            error: function(errMsg) {
                console.log(errMsg);
            }
        });
    }
}









































function candidatureParStatut() {

    if (document.getElementById('ex1') != null) {
        var values = Array()
        $.ajax({

            url: serveurSource + "/candidatures/statut",
            method: "get",
            dataType: "json",
            success: function(data) {

                for (var k in data) {
                    var json = {
                        name: data[k].statut,
                        y: data[k].nbreCandidature
                    }
                    values.push(json);
                }
                Highcharts.chart('ex1', {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: 'Candidatures par Statu des candidatures'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    accessibility: {
                        point: {
                            valueSuffix: '%'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                            }
                        }
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: values
                    }]
                });
            },
            error: function(errMsg) {
                console.log(errMsg);
            }
        });
    }
}