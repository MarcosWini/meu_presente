const startDate = new Date('2024-08-25T00:00:00');

export function updateCounter() {
    const endDate = new Date();
    
    // Cálculo do total de dias
    const timeDiff = endDate - startDate;
    const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Cálculo da diferença detalhada (anos, meses, dias)
    let years = endDate.getUTCFullYear() - startDate.getUTCFullYear();
    let months = endDate.getUTCMonth() - startDate.getUTCMonth();
    let days = endDate.getUTCDate() - startDate.getUTCDate();

    // Ajustar meses negativos
    if (months < 0) {
        years--;
        months += 12;
    }

    // Ajustar dias negativos
    if (days < 0) {
        months--;
        days += new Date(endDate.getUTCFullYear(), endDate.getUTCMonth(), 0).getUTCDate();
        if (months < 0) {
            years--;
            months += 12;
        }
    }

    // Atualizar exibição
    $('#totalDays').text(`Total de ${totalDays} dias`);
    $('#monthsDaysYears').text(
        `${years} ano(s), ${months} mês(es) e ${days} dia(s)`
    );
}