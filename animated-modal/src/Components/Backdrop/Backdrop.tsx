import {motion} from 'framer-motion';

const Backdrop = ({children, onClick}) => {
    // children allows to embed additional compoentns
    // onclick -> pass custom event handler to update 
    return(
        <motion.div
        className='backdrop'
        onClick={onClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop;