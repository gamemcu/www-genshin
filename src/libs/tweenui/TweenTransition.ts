import { eases } from "./eases";
import { addTween, removeTween } from "./tweens";

const translateEasing = function (easing = "linear") {
    return eases[easing] ? `cubic-bezier(${eases[easing].join(",")})` : easing;
};

const transitionKeys = ["transform", "opacity"];

export interface TweenTransitionProperties {
    target: HTMLDivElement;
    easing?: string;
    delay?: number;
    duration?: number;
    transform?: string;
    opacity?: number;
}

export class TweenTransition {
    private _target!: HTMLDivElement;
    private _transition: string = "";
    private _willChange: string = "";
    private _styles: { [k: string]: any } = {};
    private _stylesClear: { [k: string]: any } = {};
    private _timeout: number = 0;
    private _handle: any = -1;
    private _playing: boolean = false;
    private _finished!: Promise<any>;
    private _resolve!: (value: HTMLDivElement) => void;

    public get target() {
        return this._target;
    }

    public get playing() {
        return this._playing;
    }

    public get finished() {
        return this._finished;
    }

    constructor(props: TweenTransitionProperties) {
        const duration = props.duration ?? 1000;
        const delay = props.delay ?? 0;

        this._target = props.target;
        this._timeout = Math.max(0, duration + delay);

        const keys = [];
        for (let k of transitionKeys) {
            if (props[k] == undefined)
                continue;
            this._styles[k] = props[k];
            this._stylesClear[k] = "";
            keys.push(k);
        }

        this._willChange = keys.join(",");
        this._transition = keys.map(v => `${v} ${duration}ms ${translateEasing(props.easing)} ${delay.toFixed(3)}ms`).join(",");
    }

    public start = () => {
        if (this._playing == false) {
            this._playing = true;
            this._target.addEventListener("transitionend", this.stop);
            this._target.addEventListener("webkitTransitionEnd", this.stop);
            Object.assign(this._target.style, this._styles);
            this._target.style.willChange = this._willChange;
            this._target.style.transition = "";
            this._target.getBoundingClientRect();
            this._target.style.transition = this._transition || "";
            Object.assign(this._target.style, this._stylesClear);
            this._handle = setTimeout(this.stop, 1.1 * this._timeout + 200);
            this._finished = new Promise(resolve => this._resolve = resolve);
            addTween(this);
        }
        return this;
    }

    public stop = () => {
        if (this._playing) {
            this._playing = false;
            this._target.style.willChange = "";
            this._target.style.transition = "";
            this._target.removeEventListener("transitionend", this.stop);
            this._target.removeEventListener("webkitTransitionEnd", this.stop);
            clearTimeout(this._handle);
            this._resolve(this._target);
            removeTween(this);
        }
        return this;
    }
}