document.addEventListener('DOMContentLoaded', function() {
    const flipCard = document.getElementById('flipCard');
    const flipButton = document.getElementById('flipBtn');
    const flipButtonBack = document.getElementById('flipBackBtn');
    const cardBack = document.getElementById('cardBack');
    
    // Kártya fordítás funkció
    flipButton.addEventListener('click', function(e) {
        e.stopPropagation();
        flipCard.classList.add('flipped');
    });
    
    // Vissza gomb funkció
    flipButtonBack.addEventListener('click', function(e) {
        e.stopPropagation();
        flipCard.classList.remove('flipped');
    });
    
    // FONTOS ÚJ FUNKCIÓ: A kártya hátsó oldalára kattintva vissza fordul
    cardBack.addEventListener('click', function(e) {
        // Csak akkor fordítjuk vissza a kártyát, ha nem a gombra kattintottak
        if (!flipButtonBack.contains(e.target)) {
            flipCard.classList.remove('flipped');
        }
    });
    
    // Kártyán kívüli kattintás kezelése
    document.addEventListener('click', function(e) {
        if (!flipCard.contains(e.target)) {
            flipCard.classList.remove('flipped');
        }
    });
    
    // VCF letöltés funkció
    const downloadButton = document.querySelector('.download-vcf');
    downloadButton.addEventListener('click', function(e) {
        e.stopPropagation();
        const vCardData = 
            'BEGIN:VCARD\r\n' +
            'VERSION:3.0\r\n' +
            'FN:Balogh Balázs\r\n' +
            'TITLE:Könyvelő és adótanácsadó\r\n' +
            'TEL:+36 30 157 88 55\r\n' +
            'EMAIL:iroda.baloghkft@gmail.com\r\n' +
            'END:VCARD';
        
        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Balogh_Balazs_konyvelo.vcf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
    
    // WhatsApp link
    const whatsappButton = document.querySelector('.whatsapp-button');
    whatsappButton.addEventListener('click', function(e) {
        e.stopPropagation();
        const phoneNumber = '+36301578855'; // Magyar formátum: +36 + telefon
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    });
});
