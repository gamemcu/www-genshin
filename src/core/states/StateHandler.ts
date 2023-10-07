import { StateMachine } from "./StateMachine";

export class StateHandler<T extends Object = Object> {
    public name: string = "";
    public active: boolean = false;
    public canTransfer?(state: string): boolean;
    public onEnter?(...args: any[]): void | Promise<any>;
    public onLeave?(): void | Promise<any>;
    public onUpdate?(dt: number): void;
    public target!: T;
    public SM!: StateMachine;
}
