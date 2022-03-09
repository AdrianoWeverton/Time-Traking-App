import { v4 } from "uuid";

export const newTimer = (attrs = {}) => {
    const timer = {
        title: attrs.title || 'Timer',
        project: attrs.project || 'Project',
        id: v4(),
        elapsed: 0,
    };

    return timer;
}

export const findById = (array, id, cb) => {
    array.forEach((el) => {
        if (el.id === id) {
            cb(el);
            return;
        }
    });
}

export const renderElapsedString = (elapsed, runningSince) => {
    let totalElapse = elapsed;
    if (runningSince) {
        totalElapse += Date.now() - runningSince;
    }
    return millisecondsToHuman(totalElapse);
}

const millisecondsToHuman = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / 1000 / 60 / 60));

    const humanized = [
        pad(hours.toString(), 2),
        pad(minutes.toString(), 2),
        pad(seconds.toString(), 2),
    ].join(':');
    console.log(humanized);
    return humanized
    
}

const pad = (numberString, size) => {
    let padded = numberString;
    while (padded.length < size ) padded = `0${padded}`;
    return padded;
}