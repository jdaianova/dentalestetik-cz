import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import Button from '../Button/Button';

const ModalWrapper = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center px-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.3, rotateX: -60 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
                }}
                className={`bg-white rounded-xl max-w-[90%] max-h-[90%] p-10 relative shadow-2xl 
                            flex flex-col flex-none justify-center`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}

                <Button
                    textBtn='Vrátit se na web'
                    onClick={onClose}
                    className="self-center mt-10"
                />
            </motion.div>
        </motion.div>,
        document.getElementById('modal-root')
    );
};

export default ModalWrapper;
