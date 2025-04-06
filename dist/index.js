// src/index.ts
import { series } from './data.js'; // Ensure `.js` extension
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('seriesTableBody');
    const seasonsAverage = document.getElementById('seasonsAverage');
    const serieDetail = document.getElementById('serieDetail');
    // Renderizar la tabla
    series.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <th scope="row">${serie.id}</th>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => showSerieDetail(serie));
        tableBody.appendChild(row);
    });
    // Calcular y mostrar el promedio de temporadas
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const average = totalSeasons / series.length;
    seasonsAverage.textContent = `Seasons average: ${average.toFixed(1)}`;
    // Función para mostrar el detalle de la serie
    function showSerieDetail(serie) {
        serieDetail.innerHTML = `
      <div class="card shadow-sm">
        <img src="${serie.imageUrl}" class="card-img-top" alt="${serie.name}">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <a href="${serie.webLink}" target="_blank" class="btn btn-primary">Visit Website</a>
        </div>
      </div>
    `;
    }
});
