// Data do evento
const startDate = new Date('2024-08-25T00:00:00');

export function updateCounter() {
    const endDate = new Date(); // Substitua pela sua data final
    const elapsedTime = endDate - startDate;

    // Total de segundos
    const totalSeconds = Math.floor(elapsedTime / 1000);
    // Total de minutos
    const totalMinutes = Math.floor(totalSeconds / 60);
    // Total de horas
    const totalHours = Math.floor(totalMinutes / 60);
    // Total de dias
    const totalDays = Math.floor(totalHours / 24);

    // Cálculo de semanas e dias
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;

    // Cálculo de anos, meses e dias restantes
    const years = Math.floor(totalDays / 365);
    const remainingDaysAfterYears = totalDays % 365;
    const months = Math.floor(remainingDaysAfterYears / 30);
    const daysInMonth = remainingDaysAfterYears % 31;

    // Horas, minutos e segundos restantes
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    // Atualizar o HTML usando jQuery
    $('#totalDays').text(`Total de ${totalDays} dias`);
    $('#weeksDays').text(`${weeks} semana(s) e ${days} dia(s)`);
    $('#monthsDaysYears').text(`${daysInMonth} dia(s) ${months} mês(es) ${years} ano(s)`);
    // $('#hoursMinutesSeconds').text(`${hours} hr(s) ${minutes} min(s) ${seconds} s`);
}
