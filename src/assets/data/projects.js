import { v4 as uuidv4 } from 'uuid';
import appImg from '../images/appImg.png';
import puzzleflexImg from '../images/puzzleflexImg.png';
import p2pImg from '../images/p2pImg.png';
import panoImg from '../images/panoImg.png';
import websiteImg from '../images/websiteImg.png';

const projects = [
  {
    id: uuidv4(),
    name: 'P2P Blockchain Network',
    desc:
      'Peer to Peer blockchain network with application of distributed voting. (Python) (Contact me to gain access)',
    img: p2pImg,
    link: 'https://github.com/karimitani00/distributed_voting_blockchain.git',
  },
  {
    id: uuidv4(),
    name: 'Automated Image Stitching',
    desc:
      'Feature detection using Harris Corners, feature matching using RANSAC. (C++) (Contact me to gain access)',
    img: panoImg,
    link: 'https://github.com/karimitani00/automatic_image_stitching.git',
  },
  {
    id: uuidv4(),
    name: 'AR Gift App',
    desc:
      'Send and receive AR gifts of different media types. (Java, Android Programming)',
    img: appImg,
    link: 'https://github.com/ray-hc/AR-Gift-App.git',
  },
  {
    id: uuidv4(),
    name: 'Website Portfolio',
    desc: 'My website portfolio. (Javascript, React, HTML/CSS)',
    img: websiteImg,
    link: 'https://github.com/karimitani00/karim-website-portfolio.git',
  },
  {
    id: uuidv4(),
    name: 'PuzzleFlex',
    desc:
      'Kinematic motion of chains with loose joints. Published in IEEE Robotics, 9/15/2020. (Julia)',
    img: puzzleflexImg,
    link: 'https://gitlab.com/dartmouthrobotics/PuzzleFlex.jl.git',
  },
];

export default projects;
