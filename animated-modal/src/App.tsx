import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AnimatePresence, motion } from "framer-motion";
import Modal from './Components/Modal/Modal';

export default function App() {
  const [modalOpen,setModalOpen] = useState(false); // useState reference lookup

  const close = () =>  setModalOpen(false)
  const open = () => setModalOpen(true)

  return(
    <>
    {
      //using motion components is cleaner than using custom css
    }
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>
      <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    exitBeforeEnter={true}
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => null}
>
    {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} text="Hi" />}
</AnimatePresence>
    </>
  )
}

