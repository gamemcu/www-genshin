import { DependencyList, useCallback, useEffect, useState } from "react";
import { Scheduler } from "../libs/xviewer";

let scheduler = new Scheduler();

let time = null;
function frame() {
    let now = performance.now();
    if (time !== null) {
        let deltaTime = now - time;
        scheduler.update(deltaTime * 0.001);
    }
    time = now;
    requestAnimationFrame(frame);
}
frame();

let uid = 1;
const delayTarget = { uuid: "" + uid++ }

export function scheduleDelay(s: number) {
    return new Promise<any>(resolve => scheduler.schedule(delayTarget, resolve, s, 1));
}

export function unscheduleDelay() {
    scheduler.unscheduleAll(delayTarget);
}

export function useScheduler(
    callback: (dt: number) => void,
    deps: DependencyList = [],
    interval: number = 0,
    repeat: number = -1,
) {
    const [target] = useState(() => ({ uuid: "" + uid++ }));
    const cb = useCallback(callback, deps);
    useEffect(() => {
        scheduler.schedule(target, cb, interval, repeat);
        return () => scheduler.unshedule(target, cb);
    }, [cb, interval, repeat]);
}