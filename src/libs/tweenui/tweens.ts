interface Tween {
    target: HTMLDivElement;
    start(): void;
    stop(): void;
}

const tweens: Tween[] = [];

export function addTween(tween: Tween) {
    tweens.push(tween);
}

export function removeTween(tween: Tween) {
    let i = tweens.findIndex(v => v === tween);
    if (i > -1) tweens.splice(i, 1);
}

export function killTweenOf(target: HTMLDivElement) {
    for (let i = tweens.length; i--;) {
        if (tweens[i].target === target) {
            tweens[i].stop();
            tweens.splice(i, 1);
        }
    }
}