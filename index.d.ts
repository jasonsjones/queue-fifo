declare module 'queue-fifo' {
    class Queue<T> {
        public isEmpty(): boolean;
        public size(): number;
        public clear(): void;
        public enqueue(data: T): void;
        public dequeue(): T | null;
        public peek(): T | null;
    }

    export = Queue;
}
