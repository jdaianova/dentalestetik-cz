import { useState } from 'react';
import iconToothpaste from '../../../../../shared/assets/img/iconToothpaste.png';
import ModalWrapper from '../../../../../shared/ui/ModalWrapper/ModalWrapper';
import { typesPaste } from '../lib/typesPaste';
import ModalInfoCard from '../../../../../shared/ui/ModalInfoCard/ModalInfoCard';

const NewsToothpasteTips = () => {
    const innovationData = [
        'Bez nepříjemných otisků',
        'Bez dávivého reflexu',
        'Rychlejší výroba korunek, fazet a rovnátek',
        'Větší komfort pro pacienty',
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <div className="flex">
            <div className={`flex w-full justify-center flex-col bg-primary-light h-[220px] p-[40px]
                            rounded-xl
                            `}>

                <div className='flex flex-col'>
                    <h4 className="text-[28px] font-bold uppercase z-20">
                        Jak si vybrat správnou zubní pastu?
                    </h4>

                    <p className="text-[24px] font-bold color-primary-dark mb-[6px]">
                        Výběr pasty má velký vliv<br />na zdraví vašich zubů i dásní
                    </p>

                    <p
                        onClick={openModal}
                        className="text-[20px] font-semibold underline cursor-pointer"
                    >
                        Číst více »
                    </p>
                </div>

                <img
                    src={iconToothpaste}
                    alt=""
                    className="flex absolute right-[-15px] bottom-[-20px] w-[130px] z-10"
                />

            </div>

            {isModalOpen && (
                <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className='w-[1040px] p-[20px]'>
                        <p className='text-[28px] mb-10 text-center uppercase font-bold color-primary-dark'>
                            Typy zubních past
                        </p>

                        <p className='text-[20px] mb-[20px]'>
                            <span className='color-primary'>Tip: </span>
                            Konzultujte s vaším zubařem, která pasta je pro vás nejvhodnější
                        </p>

                        <div className='flex gap-4'>
                            {typesPaste.map((paste) => (
                                <ModalInfoCard
                                    key={paste.id}
                                    service={paste}
                                    imgSize='120px'
                                />
                            ))}
                        </div>

                    </div>
                </ModalWrapper>
            )}
        </div>
    )
}

export default NewsToothpasteTips