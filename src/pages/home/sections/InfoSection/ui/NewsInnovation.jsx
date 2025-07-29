import { useState } from 'react';
import iconScaner from '../../../../../shared/assets/img/iconScaner.png';
import imgScaner from '../../../../../shared/assets/img/imgScaner.png';
import ModalWrapper from '../../../../../shared/ui/ModalWrapper/ModalWrapper';
import OffersSection from '../../OffersSection/OffersSection';

const NewsInnovation = () => {
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
                        V naší ordinaci nově
                    </h4>

                    <p className="text-[24px] font-bold color-primary-dark mb-[6px]">
                        digitální otisky bez<br /> nepříjemných dojmů!
                    </p>

                    <p
                        onClick={openModal}
                        className="text-[20px] font-semibold underline cursor-pointer"
                    >
                        Zjistit podrobnosti »
                    </p>
                </div>

                <img
                    src={iconScaner}
                    alt=""
                    className="flex absolute right-[0px] bottom-[-24px] w-[180px] z-100"
                />

            </div>

            {isModalOpen && (
                <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className='w-[1040px] p-[20px]'>
                        <p className='text-[28px] mb-10'>
                            Zavedli jsme moderní intraorální skener, který umožňuje získat přesný 3D model zubů během několika minut.
                        </p>
                        <OffersSection offersData={innovationData} img={imgScaner} />
                    </div>
                </ModalWrapper>
            )}
        </div>
    )
}

export default NewsInnovation