import { useState } from 'react'
import SliderInput from '../SliderInput/SliderInput'

function ModalSetting() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <div>
            <button
                className="px-4 py-2 bg-linkedin text-white rounded-md"
                onClick={openModal}
            >
                Setting
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-md w-96">
                        <h2 className="text-2xl font-semibold mb-4">Setting</h2>
                        <SliderInput />
                        <div className="flex justify-end mt-6">
                            <button
                                className="px-4 py-2 bg-blue-400 text-white rounded-md mr-3"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalSetting
