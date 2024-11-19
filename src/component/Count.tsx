type CountProps = {
    count: number;
    setCount: (value: number) => void;
};

export default function Count({ count, setCount }: CountProps) {
    return (
        <div className="card">
            <button onClick={() => setCount(count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
    );
}
