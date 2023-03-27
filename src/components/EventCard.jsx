import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import pylogo from "../assets/images/pylogo.png";

function EventCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      key={1}
      className="w-[300px] mb-36 mx-4 h-card  relative max-h-max bg-black"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ rotate: 5, scale: 0.9 }}
      style={{
        background: `url('${pylogo}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white scrollDiv h-full bg-black bg-opacity-90  p-2  overflow-y-scroll"
          >
            {}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -bottom-16 left-2"
          >
            <React.Fragment>
              <hr className="border-white w-16" />
              <h2 className="text-white uppercase text-2xl font-bold">
                {event.name}
              </h2>
              <p className="text-white text-lg font-bold mt-2">Blah blah</p>
            </React.Fragment>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default EventCard;
