



const reportData = {
    "cta": [
        { "Label": "MODELLI", "Link": "https://www.fiat.it/clienti/garanzia-qualita-fiat/ultime-offerte#", "Note": "" },
        { "Label": "VEICOLI FIAT PROFESSIONAL", "Link": "https://www.fiat.it/clienti/garanzia-qualita-fiat/ultime-offerte#", "Note": "" },
        { "Label": "TESTO MANCANTE", "Link": "https://www.fiat.it/", "Note": "" },
        { "Label": "CONFIGURA E ORDINA", "Link": "https://www.fiat.it/clienti/garanzia-qualita-fiat/ultime-offerte#", "Note": "" },
        { "Label": "CONTATTI", "Link": "https://www.fiat.it/clienti/garanzia-qualita-fiat/ultime-offerte#", "Note": "" },
        { "Label": "TESTO MANCANTE", "Link": "https://www.fiat.it/clienti/garanzia-qualita-fiat/ultime-offerte#", "Note": "" },
        { "Label": "TESTO MANCANTE", "Link": "https://www.fiat.it/clienti/garanzia-qualita-fiat/ultime-offerte#", "Note": "" },
        { "Label": "SkiptoContentText", "Link": "https://www.fiat.it/clienti/garanzia-qualita-fiat/ultime-offerte#", "Note": "Nascosto o non visibile a schermo" },
        { "Label": "SkiptoNavigationText", "Link": "https://www.fiat.it/clienti/garanzia-qualita-fiat/ultime-offerte#", "Note": "Nascosto o non visibile a schermo" },
        { "Label": "CONFIGURA E ORDINA", "Link": "https://www.fiat.it/clienti/garanzia-qualita-fiat/ultime-offerte#", "Note": "Nascosto o non visibile a schermo" }
    ],
    "immagini": [
        { "Link Immagine": "SORGENTE MANCANTE", "Alt Tag": "ALT MANCANTE" },
        { "Link Immagine": "SORGENTE MANCANTE", "Alt Tag": "ALT MANCANTE" },
        { "Link Immagine": "SORGENTE MANCANTE", "Alt Tag": "ALT MANCANTE" },
        { "Link Immagine": "SORGENTE MANCANTE", "Alt Tag": "ALT MANCANTE" },
        { "Link Immagine": "SORGENTE MANCANTE", "Alt Tag": "ALT MANCANTE" },
        { "Link Immagine": "SORGENTE MANCANTE", "Alt Tag": "ALT MANCANTE" },
        { "Link Immagine": "SORGENTE MANCANTE", "Alt Tag": "ALT MANCANTE" },
        { "Link Immagine": "SORGENTE MANCANTE", "Alt Tag": "ALT MANCANTE" },
        { "Link Immagine": "SORGENTE MANCANTE", "Alt Tag": "ALT MANCANTE" },
        { "Link Immagine": "SORGENTE MANCANTE", "Alt Tag": "ALT MANCANTE" }
    ],
    "seo": [
        { "Analisi": "Sezione riservata a metriche o dati SEO aggiuntivi esportati dal report." }
    ]
};

function showCategory(categoryId) {
    document.querySelectorAll('.category-list li').forEach(li => li.classList.remove('active'));
    document.getElementById('nav-' + categoryId).classList.add('active');

    const container = document.getElementById('dynamic-content');
    let html = '<div class="data-grid">';

    if (categoryId === 'cta') {
        html = '<h1>CTA and links</h1><p class="subtitle">Analysis of the calls to action found on the target website</p><div class="data-grid">';
        reportData.cta.forEach(item => {
            let noteHtml = item.Note ? `<span class="badge-error">⚠️ ${item.Note}</span>` : '';
            let errorStyle = item.Label === "TESTO MANCANTE" ? 'color: #c81e1e; font-weight: bold;' : '';
            
            html += `
            <div class="data-item">
                <div class="data-row">
                    <span class="data-label">CTA label</span>
                    <span class="data-value" style="${errorStyle}">${item.Label}</span>
                </div>
                <div class="data-row" style="margin-top: 12px;">
                    <span class="data-label">CTA link</span>
                    <span class="data-value"><a href="${item.Link}" target="_blank">${item.Link}</a></span>
                </div>
                ${noteHtml}
            </div>`;
        });
    } else if (categoryId === 'immagini') {
        html = '<h1>Images</h1><p class="subtitle">Alternative tags and source links</p><div class="data-grid">';
        reportData.immagini.forEach(item => {
            html += `
            <div class="data-item">
                <div class="data-row">
                    <span class="data-label">Source</span>
                    <span class="data-value" style="color: #c81e1e;">${item["Link Immagine"]}</span>
                </div>
                <div class="data-row" style="margin-top: 12px;">
                    <span class="data-label">Alt Tag</span>
                    <span class="data-value" style="color: #c81e1e; font-weight: bold;">${item["Alt Tag"]}</span>
                </div>
            </div>`;
        });
    } else if (categoryId === 'seo') {
        html = '<h1>Google Data</h1><p class="subtitle">Analisi aggiuntive (Sezione in costruzione)</p><div class="data-grid">';
        reportData.seo.forEach(item => {
            html += `<div class="data-item"><div class="data-value">${item.Analisi}</div></div>`;
        });
    }

    html += '</div>';
    container.innerHTML = html;
}

window.onload = () => showCategory('cta');