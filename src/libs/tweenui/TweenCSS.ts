import { eases } from "./eases";
import { addTween, removeTween } from "./tweens";

const translateEasing = function (easing = "linear") {
    return eases[easing] ? `cubic-bezier(${eases[easing].join(",")})` : easing;
};

export interface TweenCSSProperties {
    target?: HTMLDivElement,
    name?: string;
    easing?: string;
    delay?: number;
    duration?: number;
    fillMode?: string;
    direction?: string;
}

export class TweenCSS {
    private _target!: HTMLDivElement;
    private _animation: string = "";
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

    constructor(props: TweenCSSProperties) {
        const duration = props.duration ?? 1000;
        const delay = props.delay ?? 0;

        this._target = props.target;
        this._timeout = Math.max(0, duration + delay);

        this._animation = [
            props.name,
            duration + "ms",
            translateEasing(props.easing),
            delay > 0 ? delay + "ms" : null, 1,
            props.direction ?? "normal",
            props.fillMode ?? "forwards",
        ].join(" ");
    }

    public start = () => {
        if (this._playing == false) {
            this._playing = true;
            this._target.addEventListener("animationend", this.stop);
            this._target.addEventListener("webkitAnimationEnd", this.stop);
            this._target.style.animation = "";
            this._target.getBoundingClientRect();
            this._target.style.animation = this._animation || "";
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
            this._target.style.animation = "";
            this._target.removeEventListener("animationend", this.stop);
            this._target.removeEventListener("webkitAnimationEnd", this.stop);
            clearTimeout(this._handle);
            this._resolve(this._target);
            removeTween(this);
        }
        return this;
    }
}