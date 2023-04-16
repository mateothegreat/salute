export class SaluteTimer {
    timeoutId: number | undefined;
    intervalId: number | undefined;
    delay: number = 0;
    start: number = 0;
    remaining: number = 0;
    remainingPercentage: number = 100;
    callback: any;

    constructor(callback: any, delay: number) {
        this.delay = delay;
        this.remaining = delay;
        this.callback = callback;
        this.resume();
    }

    pause() {
        window.clearTimeout(this.timeoutId);
        this.timeoutId = undefined;
        window.clearInterval(this.intervalId);
        this.intervalId = undefined;
    }

    resume() {
        if (this.timeoutId && this.intervalId) {
            return;
        }

        this.start = Date.now();
        this.timeoutId = window.setTimeout(this.callback, this.remaining);
        this.intervalId = window.setInterval(() => {
            if (this.remaining <= 0) window.clearInterval(this.intervalId);
            this.remaining -= 10;
            this.remainingPercentage = (this.remaining * 100) / this.delay;
        }, 100);
    }

    public end(): void {
        this.remaining = 0;
        this.remainingPercentage = 0;
    }
}
