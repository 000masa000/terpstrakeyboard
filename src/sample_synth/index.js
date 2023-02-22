import axios from 'axios';
import { instruments } from './instruments';

// Three concepts:
// Coordinates -> Scale degree -> Pitch/midi
export const create_sample_synth = async (fileName, fundamental) => {
  try {
    const sampleGain = findGain(fileName);
    const sampleAttack = findAttack(fileName);
    const sampleRelease = findRelease(fileName);
    const sampleLoop = findLoop(fileName);
    const sampleLoopPoints = findLoopPoints(fileName);
    const audioContext = new AudioContext();
    const s110 = await loadSample(audioContext, fileName, "110");
    const s220 = await loadSample(audioContext, fileName, "220");
    const s440 = await loadSample(audioContext, fileName, "440");
    const s880 = await loadSample(audioContext, fileName, "880");

    const samples = [s110, s220, s440, s880];
    return {
      makeHex: (coords, cents) => {
        return new ActiveHex(coords, cents, fundamental, sampleGain, sampleAttack, sampleRelease, sampleLoop, sampleLoopPoints, samples, audioContext);
      },
    };
  } catch (e) {
    console.error(e);
  }
};

const loadSample = async (audioContext, name, freq) => {
  const file = await axios.get(`sounds/${name}${freq}.mp3`, {responseType: "arraybuffer"});
  const sample = await audioContext.decodeAudioData(file.data);
  return sample;
}

function ActiveHex(coords, cents, fundamental, sampleGain, sampleAttack, sampleRelease, sampleLoop, sampleLoopPoints, sampleBuffer, audioContext) {
  this.coords = coords;// these end up being used by the keys class
  this.release = false;

  this.cents = cents;
  this.fundamental = fundamental;
  this.sampleGain = sampleGain;
  this.sampleAttack = sampleAttack;
  this.sampleRelease = sampleRelease;
  this.sampleLoop = sampleLoop;
  this.sampleLoopPoints = sampleLoopPoints;
  this.sampleBuffer = sampleBuffer;
  this.audioContext = audioContext;
}

// Does this need to be a param or is it constant for the hex? i think constant
ActiveHex.prototype.noteOn = function() {
  var freq = this.fundamental * Math.pow(2, this.cents / 1200);
  var source = this.audioContext.createBufferSource(); // creates a sound source
  // choose sample
  var sampleFreq = 110;
  var sampleNumber = 0;
  if (freq > 155) {
    if (freq > 311) {
      if (freq > 622) {
        sampleFreq = 880;
        sampleNumber = 3;
      } else {
        sampleFreq = 440;
        sampleNumber = 2;
      }
    } else {
      sampleFreq = 220;
      sampleNumber = 1;
    }
  }

  if (!(this.sampleBuffer[sampleNumber])) return; // Sample not yet loaded

  source.buffer = this.sampleBuffer[sampleNumber]; // tell the source which sound to play
  source.loop = this.sampleLoop; // tell it to loop if needed

  if (this.sampleLoopPoints[sampleNumber * 2] > 0) { // find the loop start
    source.loopStart = this.sampleLoopPoints[sampleNumber * 2];
  } else {
    source.loopStart = 0;
  };

  if (this.sampleLoopPoints[(sampleNumber * 2) + 1] > 0) { // find the loop end
    source.loopEnd = this.sampleLoopPoints[(sampleNumber * 2) + 1];
  } else {
    source.loopEnd = 0;
  };

  console.log("current loop:", source.loopStart, source.loopEnd);
  
  source.playbackRate.value = freq / sampleFreq;
  // Create a gain node.
  var gainNode = this.audioContext.createGain();
  // Connect the source to the gain node.
  source.connect(gainNode);
  // Connect the gain node to the destination.
  gainNode.connect(this.audioContext.destination);
  source.connect(gainNode); // connect the source to the context's destination (the speakers)
  gainNode.gain.value = 0;
  source.start(0); // play the source now
  gainNode.gain.setTargetAtTime(this.sampleGain * 0.5, this.audioContext.currentTime, this.sampleAttack);
  this.source = source;
  this.gainNode = gainNode;
};

ActiveHex.prototype.noteOff = function () {
  var fadeout = this.audioContext.currentTime + this.sampleRelease;
  if (this.gainNode) {
    this.gainNode.gain.setTargetAtTime(0, this.audioContext.currentTime, this.sampleRelease);
  }
  if (this.source) {
    this.source.stop(fadeout + 1);
  }
};

const findGain = (fileName) => {
  for (let g of instruments) {
    for (let i of g.instruments) { 
      if (i.fileName === fileName) {
        return i.gain;
      }
    }
  }
  console.error("Unable to find configured instrument");
  return 0;
};

const findAttack = (fileName) => {
  for (let g of instruments) {
    for (let i of g.instruments) { 
      if (i.fileName === fileName) {
        return i.attack;
      }
    }
  }
  console.error("Unable to find configured instrument");
  return 0;
};

const findRelease = (fileName) => {
  for (let g of instruments) {
    for (let i of g.instruments) { 
      if (i.fileName === fileName) {
        return i.release;
      }
    }
  }
  console.error("Unable to find configured instrument");
  return 0.1;
};

const findLoop = (fileName) => {
  for (let g of instruments) {
    for (let i of g.instruments) { 
      if (i.fileName === fileName) {
        return i.loop;
      }
    }
  }
  console.error("Unable to find configured instrument");
  return 0.1;
};

const findLoopPoints = (fileName) => {
  for (let g of instruments) {
    for (let i of g.instruments) { 
      if (i.fileName === fileName) {
        if (i.loopPoints) {
          return i.loopPoints;
        } else {
          return [0, 0, 0, 0, 0, 0, 0, 0];
        }
      }
    }
  }
  console.error("Unable to find configured instrument");
};

export default create_sample_synth;
