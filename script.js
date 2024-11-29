const batteryLevel = document.getElementById('batteryLevel');
const batteryPercentage = document.getElementById('batteryPercentage');
const batteryPercentageDisplay = document.getElementById('batteryPercentageDisplay');

navigator.getBattery().then(battery => {
    const updateBattery = () => {
        const level = Math.round(battery.level * 100);
        batteryPercentage.textContent = `${level}%`;
        batteryPercentageDisplay.textContent = `${level}%`;
        batteryLevel.style.width = `${level}%`;

        // Change color based on battery level
        if (level > 90) {
            batteryLevel.style.backgroundColor = 'green';
        } else if (level > 75) {
            batteryLevel.style.backgroundColor = 'yellow';
        } else if(level > 50) {
            batteryLevel.style.backgroundColor = 'orange';
        }
        else if(level >25){
            batteryLevel.style.backgroundColor = 'red';
        }
        else{
            batteryLevel.style.backgroundColor = 'darkred';
        }
    }

    updateBattery();
    battery.addEventListener('levelchange', updateBattery);
});