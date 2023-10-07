import { StateHandler } from "./StateHandler";

export const StateResolve = Promise.resolve();

export class StateMachine<T extends Object = Object>{
    private _state: string = "";
    private _states: string[] = [];
    private _handlers: { [k: string]: StateHandler } = {};
    private _promise: Promise<void> = Promise.resolve();

    constructor(
        public target: T
    ) { }

    public reset() {
        this._state = "";
        this._states = [];
        this._handlers = {};
    }

    public getState() {
        return this._state;
    }

    public setState(newState: string) {
        if (this._state === newState) {
            return false;
        }
        if (this._state) {
            let handler = this._handlers[this._state];
            if (handler === undefined || (handler.canTransfer && !handler.canTransfer(newState))) {
                return false;
            }
        }
        this._states.push(newState);
        this._states.length == 1 && this._transferState();
        return true;
    }

    private _transferState() {
        let leaveState = async () => {
            let handler = this._handlers[this._state];
            if (handler) {
                handler.onLeave && await this._promise.then(() => handler.onLeave());
                handler.active = false;
            }
        }
        let enterState = async () => {
            if (!this._states.length) return;
            let state = this._state = this._states.shift();
            let handler = this._handlers[state];
            if (handler) {
                handler.onEnter && await this._promise.then(() => handler.onEnter());
                handler.active = true;
            }
            if (this._states.length > 0) {
                this._transferState();
            }
        }
        this._promise
            .then(leaveState)
            .then(enterState)
            .catch(console.error);
    }

    public registState(Handler: { new(): StateHandler }) {
        let handler = new Handler();
        let state = handler.name || handler.constructor.name;
        if (this._handlers[state]) {
            console.warn(`state: ${state} duplicate registered`);
        }
        handler.SM = this;
        handler.target = this.target;
        this._handlers[state] = handler;
    }

    public updateState(dt: number) {
        for (let k in this._handlers) {
            let handler = this._handlers[k];
            if (handler.active) {
                handler.onUpdate && handler.onUpdate(dt);
            }
        }
    }
}