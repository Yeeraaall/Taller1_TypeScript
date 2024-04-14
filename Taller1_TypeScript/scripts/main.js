import { series } from './data';
document.addEventListener('DOMContentLoaded', function () {
    var tableBody = document.getElementById('series-table');
    console.log(series);
    series.forEach(function (serie) {
        var row = tableBody.insertRow();
        row.innerHTML =
            "   <th scope=\"row\">".concat(serie.id, "</th>\n            <td>").concat(serie.nombre, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
    });
});
