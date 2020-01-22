Qamar, [22.01.20 10:43]
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries= batteryBatches.reduce(function(total,batches) {
    return total+batches;
},0);