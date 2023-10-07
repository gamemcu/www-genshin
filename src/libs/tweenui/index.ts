import { TweenCSS, TweenCSSProperties } from "./TweenCSS";
import { TweenTransition, TweenTransitionProperties } from "./TweenTransition";
import { killTweenOf } from "./tweens";

export class TweenUI {

    public static KillTweensOf(target: HTMLDivElement) {
        killTweenOf(target);
    }

    public static CSS(props: TweenCSSProperties) {
        return new TweenCSS(props);
    }

    public static Transition(props: TweenTransitionProperties) {
        return new TweenTransition(props);
    }
}