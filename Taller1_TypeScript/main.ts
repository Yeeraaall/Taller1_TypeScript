import { series } from './data';

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('series-table') as HTMLTableSectionElement;

    console.log(series);
    series.forEach((serie) => {
        const row = tableBody.insertRow();
        row.innerHTML = 
        `   <th scope="row">${serie.id}</th>
            <td>${serie.nombre}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
    });
});

