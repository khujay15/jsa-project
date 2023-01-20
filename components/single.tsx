import * as React from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'

const images = [
  'photo-1520517601640-32ec514e4a15',
  'photo-1518780535463-bc357fa46e64',
  'photo-1555068178-89125fb6356d',
  'photo-1553503359-d4ff2537a6ea',
  'photo-1585211751845-37663b4ab614',
  'photo-1496467115032-c504ef76521b',
]
const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
}

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
}

const SingleImage = ({ index }) => (
  <>
    <motion.div className="single" initial="exit" animate="enter" exit="exit">
      <motion.img
        variants={imageVariants}
        src={`https://images.unsplash.com/${images[index]}?auto=format&fit=crop&w=1500`}
        alt="The Barbican"
      />
      <motion.div className="back" variants={backVariants}>
        <Link href="/">← Back</Link>
      </motion.div>
    </motion.div>
    <style>
      {`
        .single {
            overflow: hidden;
            height: 100vh;
        }
        .single img {
            max-width: 100%;
            max-height: 100vh;
        }
        .back {
            position: fixed;
            top: 50px;
            right: 50px;
            font-size: 54px;
            z-index: 1;
        }
        .back a {
            text-decoration: none;
        }
`}
    </style>
  </>
)

export default SingleImage
