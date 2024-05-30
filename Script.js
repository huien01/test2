document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'AIzaSyDH965YdC94Ui-PfBKPrlUIG23DTPD2h0g';
    const spreadsheetId = '1GCli0BLG_CVdjj84U258AEB77GIeBmAp_1AMO6ewoBQ';
    const range = 'Sheet1!E:G, I';

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#data-table tbody');
            data.values.forEach(row => {
                const tr = document.createElement('tr');
                row.forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell;
                    tr.appendChild(td);
                });
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    document.getElementById('offer-food').addEventListener('click', function() {
        showForm('https://forms.gle/4Mav1cXWved77ANZ8');
    });

    document.getElementById('get-food').addEventListener('click', function() {
        showForm('https://forms.gle/CYJsGodHkLC93qTu6');
    });

    function showForm(url) {
        const formEmbed = document.getElementById('form-embed');
        const iframe = document.getElementById('embedded-form');
        iframe.src = url;
        formEmbed.style.display = 'block';
    }
});
