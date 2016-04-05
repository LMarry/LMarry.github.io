var startBtn = document.getElementById('start_btn');
var splitBtn = document.getElementById('split_btn');
var resetBtn = document.getElementById('reset_btn');

var stopSplitBox = document.getElementById('stop_split');

var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var milSeconds = document.getElementById('mil_seconds');

var delay = 4;
var timeout;
var h = 0;
var m = 0;
var s = 0;
var ms = 0;

var splitAmount = 0;
var stopAmount = 0;

function startTime() {
    if (startBtn.innerHTML === 'Start') {
        counting();
        startBtn.innerHTML = 'Stop';
    } else {
        splitTime('Stop');
        startBtn.innerHTML = 'Start';
        clearTimeout(timeout);
    }
}

function counting() {
    msCount();
    timeout = setTimeout(counting, delay);
}

function msCount() {
    if (ms > 999 - delay) {
        ms = 0;
        sCount();
    } else
        ms += delay;

    switch (true) {
    case ms < 10:
        milSeconds.innerHTML = '00' + ms;
        break;
    case ms < 100:
        milSeconds.innerHTML = '0' + ms;
        break;
    default:
        milSeconds.innerHTML = ms;
        break;
    }
}

function sCount() {
    if (s >= 59) {
        s = 0;
        mCount();
    } else
        s++;
    if (s < 10)
        seconds.innerHTML = '0' + s;
    else
        seconds.innerHTML = s;
}

function mCount() {
    if (m >= 59) {
        m = 0;
        hCount();
    } else
        m++;
    if (m < 10)
        minutes.innerHTML = '0' + m;
    else
        minutes.innerHTML = m;
}

function hCount() {
    (h >= 99) ? h = 0: h++;
    if (hh < 10)
        hours.innerHTML = '0' + h;
    else
        hours.innerHTML = h;
}

function splitTime(split_or_stop) {
    var call = split_or_stop;
    var amount;

    if (startBtn.innerHTML === 'Stop') {
        if (call === 'Split') {
            stopAmount++;
            amount = stopAmount;
        } else {
            splitAmount++;
            amount = splitAmount;
        }

        var splitStopSpan = document.createElement('span');
        splitStopSpan.classList.add('split_stop_span');
        splitStopSpan.innerHTML = (split_or_stop + '_' + amount + '_ ' + hours.innerHTML + ':' + minutes.innerHTML + ':' +
                                    seconds.innerHTML + '.' + milSeconds.innerHTML);
        stopSplitBox.appendChild(splitStopSpan);
    }
}

function resetTime() {
    startBtn.innerHTML = 'Start';
    clearTimeout(timeout);
    h = m = s = ms = 0;
    splitAmount = 0;
    stopAmount = 0;
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    milSeconds.innerHTML = '000';

    while (stopSplitBox.lastChild) {
        stopSplitBox.removeChild(stopSplitBox.lastChild);
    }
}


startBtn.addEventListener('click', startTime);
splitBtn.addEventListener('click', function () {
    splitTime('Split')
});
resetBtn.addEventListener('click', resetTime);