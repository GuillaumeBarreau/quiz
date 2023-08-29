import { useState } from 'react'

function SliderInput() {
    const [value, setValue] = useState(0)
    const handleChange = (value: string | number) => setValue(Number(value))

    return (
        <div className="flex">
            <div className="w-max mr-8">
                <input
                    type="number"
                    className="w-16 px-2 py-1 border rounded"
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <button
                    className="px-2 py-1 border rounded ml-2"
                    onClick={() => handleChange(Number(value) + 1)}
                >
                    +
                </button>
                <button
                    className="px-2 py-1 border rounded ml-2"
                    onClick={() => handleChange(Number(value) - 1)}
                >
                    -
                </button>
            </div>
            <div className="flex flex-1">
                <input
                    type="range"
                    className="w-full h-2 appearance-none bg-gray-300 rounded-full"
                    min={0}
                    max={100}
                    step={1}
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SliderInput
