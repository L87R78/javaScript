function  attachEventsListeners() {
    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMinutes = document.getElementById('minutes');
    let inputSeconds = document.getElementById('seconds');


    document.getElementById("daysBtn").addEventListener('click', converteDays);
    document.getElementById('hoursBtn').addEventListener('click', converteHours);
    document.getElementById('minutesBtn').addEventListener('click', converteMinutes);
    document.getElementById('secondsBtn').addEventListener('click', converteSeconds);

    function converteDays() {
        let days = Number(inputDays.value);
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        inputHours.value = hours;
        inputMinutes.value = minutes;
        inputSeconds.value = seconds;
    }

    function converteHours() {
        let hours = Number(inputHours.value);
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        inputDays.value = days;
        inputMinutes.value = minutes;
        inputSeconds.value = seconds;
    }
    function converteMinutes() {
        let minutes = Number(inputMinutes.value);

        inputDays.value = minutes/60/24;
        inputHours.value = minutes / 60;
        inputSeconds.value = minutes * 60;

    }
    function converteSeconds() {
        let seconds = Number(inputSeconds.value);

        inputDays.value = seconds /60/24;
        inputHours.value = seconds / 60 / 60;
        inputMinutes.value = seconds / 60;

    }

}