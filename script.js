const form = document.getElementById('wakalahinput');

form.addEventListener('submit', (event)=> {
    event.preventDefault();

    const jenis = document.getElementById('jenis').value;
    const nama = document.getElementById('nama').value;
    const nric = document.getElementById('nric').value;

     // Create CSV content with proper escaping
    //const csvContent = `${jenis}|${nama.replace(/\s/g, '_')}|${nric}\n`; // Replace spaces with underscores
    const csvContent = `${jenis}|${nama}|${nric}\n`; 


    // Create filename with proper escaping
    //const filename = `${nama.replace(/\s/g, '_')}_${nric}.csv`;
    const filename = `${nama}_${nric}.csv`;

    const blob = new Blob([csvContent], {type: 'text/csv'});
    const url   = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();

    form.reset(); // Reset form after download
    event.stopPropagation(); // Stop propagation if needed
    


});





