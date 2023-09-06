import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Body = ({ setStep }) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setStep('2/2');
    };

    const handleBack = () => {
        setSelectedOption(null);
        setStep('1/2');
    };

    return (
        <div className="flex justify-center bg-stone-100 text-gray-600 font-semibold">
            <div className="py-6 w-6/12 h-screen">
                <div className="bg-white drop-shadow-md p-6 w-full">
                    {selectedOption ? (
                        <div>
                            <p>{selectedOption}</p>
                            <button className='border-2 rounded w-14 h-8 mt-6 text-sm cursor-pointer' onClick={handleBack}>Back</button>
                        </div>
                    ) : (
                        <div>
                            <div
                                className="flex items-center border-2 rounded h-12 px-4 my-2  gap-4 cursor-pointer"
                                onClick={() => handleOptionSelect('Anti Wrinkle Treatment')}
                            >
                                <img src="img/letter-a.png" alt="Anti Wrinkle Treatment" height={30} width={30}></img>
                                <h4>Anti Wrinkle Treatment</h4>
                                <FontAwesomeIcon icon={faAngleRight} className="ml-auto text-gray-400" />
                            </div>

                            <div className="flex items-center border-2 rounded h-12 px-4 my-2  gap-4 cursor-pointer"
                                onClick={() => handleOptionSelect('Dermal Fillers')}
                            >
                                <img src='img/letter-d.png' alt='Dermal Fillers' height={30} width={30}></img>
                                <h4>Dermal Fillers</h4>
                                <FontAwesomeIcon icon={faAngleRight} className="ml-auto text-gray-400" />
                            </div>

                            <div className="flex items-center border-2 rounded h-12 px-4 my-2  gap-4 cursor-pointer"
                                onClick={() => handleOptionSelect('Secret RF')}
                            >
                                <img src='img/letter-s.png' alt='Secret RF' height={30} width={30}></img>
                                <h4>Secret RF</h4>
                                <FontAwesomeIcon icon={faAngleRight} className='ml-auto text-gray-400' />
                            </div>

                            <div className="flex items-center border-2 rounded h-12 px-4 my-2  gap-4 cursor-pointer"
                                onClick={() => handleOptionSelect('HArmonyCA')}
                            >
                                <img src='img/letter-h.png' alt='HArmonyCA' height={30} width={30}></img>
                                <h4>HArmonyCA</h4>
                                <FontAwesomeIcon icon={faAngleRight} className='ml-auto text-gray-400' />
                            </div>

                            <div className="flex items-center border-2 rounded h-12 px-4 my-2  gap-4 cursor-pointer"
                                onClick={() => handleOptionSelect('Profhilo')}
                            >
                                <img src='img/letter-p.png' alt='Profhilo' height={30} width={30}></img>
                                <h4>Profhilo</h4>
                                <FontAwesomeIcon icon={faAngleRight} className='ml-auto text-gray-400' />
                            </div>

                            <div className="flex items-center border-2 rounded h-12 px-4 my-2  gap-4 cursor-pointer"
                                onClick={() => handleOptionSelect('Facials')}
                            >
                                <img src='img/letter-f.png' alt='Facials' height={30} width={30}></img>
                                <h4>Facials</h4>
                                <FontAwesomeIcon icon={faAngleRight} className="ml-auto text-gray-400" />
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex justify-center items-center bg-white drop-shadow-md py-5 px-8 w-full mt-6">
                    <p className='text-sm text-gray-400'>Not Sure about consultation type? Please, call <span className='text-blue-400 cursor-pointer'>0203 7959063</span></p>
                </div>
            </div>
        </div>
    );
};

export default Body;
