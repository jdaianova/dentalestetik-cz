import { useState } from 'react';
import iconScaner from '../../../../../shared/assets/img/iconScaner.png';
import imgSmile from '../../../../../shared/assets/img/imgSmile.png';
import ModalWrapper from '../../../../../shared/ui/ModalWrapper/ModalWrapper';
import OffersSection from '../../OffersSection/OffersSection';

const NewsSmileFact = () => {
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
                    <h4 className="text-[22px] font-bold uppercase z-20">
                        Úsměv – váš nejlepší antistres
                    </h4>

                    <p className="text-[18px] mt-3 w-[82%]">
                        Když se usmíváte, mozek produkuje endorfiny – hormony štěstí.
                        To pomáhá snížit hladinu stresu a zlepšit náladu. I lehký úsměv
                        může snížit krevní tlak a udělat vás pro okolí přitažlivějšími.
                    </p>

                </div>

                <img
                    src={imgSmile}
                    alt=""
                    className="flex absolute right-[10px] bottom-[-10px] w-[100px] z-10"
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

export default NewsSmileFact