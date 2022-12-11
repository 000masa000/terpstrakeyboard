//import the built-in Scala files
import scale_12_ed2 from 'scales/12-ed2.scl';
import scale_31_mt_vicentino_alt from 'scales/31-MT-Vicentino_alt.scl';
import scale_12_ji_7l from 'scales/12-JI-7L.scl';
import scale_7_ji_rast_maqam from 'scales/7-JI Rast Maqam (Arabic) —  Eight Echos (Fourth Plagal, Byzantine).scl';
import scale_17_ji_5l from 'scales/17-JI-5L-Arabic-theoretical.scl';
import scale_17_ji_11l_wilson from 'scales/17-JI-11L-Wilson.scl';
import scale_22_ji_5l from 'scales/22-JI-5L-Indian.scl';
import scale_31_ji_7l_fokker from 'scales/31-JI-7L-Fokker.scl';
import scale_43_ji_11l_partch from 'scales/43-JI-11L-Partch.scl';
import scale_43_ji_11l_partchG from 'scales/43-JI-11L-Partch_on_G.scl';
import scale_53_ri_3l from 'scales/53-RI-3L.scl';
import scale_53_ri_3l_mirrored from 'scales/53-RI-3L-mirrored.scl';
import scale_19_ed2 from 'scales/19-ed2.scl';
import scale_31_ed2 from 'scales/31-ed2.scl';
import scale_41_ed2 from 'scales/41-ed2.scl';
import scale_43_ed2 from 'scales/43-ed2.scl';
import scale_53_ed2 from 'scales/53-ed2.scl';
import scale_55_ed2 from 'scales/55-ed2.scl';
import scale_53_ji_13l_ct from 'scales/53-JI-13L-CT.scl';
import scale_1cent from 'scales/1cent.scl';

//import the Scala file parser, which can output scale: [], colors: [], labels: [], errors: [],
import { parseScale, parsedScaleToLabels } from './scale/parse-scale';

//define the standard 12-edo equal tempered scale and its names
const scale_12_ed2_names = ["C", "C♯ D♭", "D", "D♯ E♭", "E", "F", "F♯ G♭", "G", "G♯ A♭", "A", "A♯ B♭", "B"];
const scale_12_ed2_parsed = parseScale(scale_12_ed2).scale;
const scale_12_ed2_scala = parsedScaleToLabels(scale_12_ed2_parsed);

//define the presets which appear in the sidebar menu
//TO DO eliminate equivSteps where they should be parsed from Scala file
export const presets = [
  {
    "name": "Isomorphic Layouts for 12-edo",
    settings: [
      {
        "name": "12-edo Jankó",
        "description": "12-tone equal tempered scale consisting of 12 sonically equal divisions per octave, mapped on a tilted Paul Jankó layout, which approximates the 7-white/5-black Halberstadt organ layout or the classic piano keyboard.",
        "scale": scale_12_ed2_parsed,        
        "equivSteps": 12,
        "note_names": scale_12_ed2_names,
        "key_labels": "note_names",
        "note_colors": ["#fafafa", "#cdcdcb", "#fafafa", "#cdcdcb", "#fafafa", "#fafafa", "#cdcdcb", "#fafafa", "#cdcdcb", "#fafafa", "#cdcdcb", "#fafafa"],
        "spectrum_colors": false,
        "rSteps": 2,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 261.6255653,
        "instrument": "vibes",
        "short_description": "12-edo Jankó"
      },
      {
        "name": "12-edo B-System Chromatic Button",
        "description": "12-tone equal tempered scale consisting of 12 sonically equal divisions per octave, mapped on a tilted Chromatic Button System Type-B used on some button accordions.",
        "scale": scale_12_ed2_parsed,
        "equivSteps": 12,
        "note_names": scale_12_ed2_names,
        "key_labels": "note_names",
        "note_colors": ["#fafafa", "#cdcdcb", "#fafafa", "#cdcdcb", "#fafafa", "#fafafa", "#cdcdcb", "#fafafa", "#cdcdcb", "#fafafa", "#cdcdcb", "#fafafa"],
        "spectrum_colors": false,
        "rSteps": 3,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": 0,
        "output": "sample",
        "fundamental": 261.6255653,
        "instrument": "WMRI3LST",
        "short_description": "12-edo B-System Chromatic Button"
      },
      {
        "name": "12-edo C-System Chromatic Button",
        "description": "12-tone equal tempered scale consisting of 12 sonically equal divisions per octave, mapped on a tilted Chromatic Button System Type-C used on some button accordions.",
        "scale": scale_12_ed2_parsed,
        "equivSteps": 12,
        "note_names": scale_12_ed2_names,
        "key_labels": "note_names",
        "note_colors": ["#fafafa", "#cdcdcb", "#fafafa", "#cdcdcb", "#fafafa", "#fafafa", "#cdcdcb", "#fafafa", "#cdcdcb", "#fafafa", "#cdcdcb", "#fafafa"],
        "spectrum_colors": false,
        "rSteps": 3,
        "urSteps": 2,
        "hexSize": 42,
        "rotation": 0,
        "output": "sample",
        "fundamental": 261.6255653,
        "instrument": "WMRI7LST",
        "short_description": "12-edo C-System Chromatic Button"       
      },
    ]
  },
  {
    "name": "Meantone",
    settings: [
      {
        "name": "31-Extended-Meantone (G♭♭-A♯♯)",
        "description": "31-tone scale in extended 1/4 comma meantone: an alternate tuning for Nicola Vicentino’s Archicembalo or Arciorgano. Each fifth in the range G♭♭-A♯♯ is narrowed from its just intonation ratio (3/2) by 1/4 of a syntonic comma, so that four successive fifths produce a major third with ratio 5/4. Standard 12-tone meantone ranges from E♭ to G♯, ending in a wolf-fifth. By extending the tuning to 31 notes, a circulating well-temperament is produced: the missing note C♭♭ may be replaced by the enharmonically nearly-equivalent pitch A♯♯.",
        "scale": parseScale(scale_31_mt_vicentino_alt).scale,
        "equivSteps": 31,
        "note_names": [
          "C", "D♭♭", "C♯", "D♭", "C♯♯",
          "D", "E♭♭", "D♯", "E♭", "D♯♯",
          "E", "F♭", "E♯",
          "F", "G♭♭", "F♯", "G♭", "F♯♯",
          "G", "A♭♭", "G♯", "A♭", "G♯♯",
          "A", "B♭♭", "A♯", "B♭", "A♯♯",
          "B", "C♭", "B♯"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#ffe5e5", "#c8d0c8", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8"],
        "spectrum_colors": false,
        "rSteps": 5,
        "urSteps": 3,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 263.1813855,        
        "instrument": "harpsichord",
        "short_description": "31-Extended-Meantone (G♭♭-A♯♯)"
      }
    ]
  },
  {
    "name": "Just Intonation",
    settings: [
      {
        "name": "7-JI-11L Rast Maqam / Eight Echos",
        "description": "7-tone Just Intonation 11-Limit mode combining two disjunct Rast tetrachords according to Mansour Zalzal’s lute tuning as described by al-Farabi, where the ratios including prime number 11 are alterations of 3-Limit versions, coinciding with the Eight Echos or Fourth Plagal of Byzantine Psaltic Chant.",
        "scale": parseScale(scale_7_ji_rast_maqam).scale,
        "equivSteps": 7,
        //"ratios": ["1/1", "9/8", "27/22", "4/3", "3/2", "27/16", "81/44"],
        "note_names": ["C", "D", "E", "F", "G", "A", "B"],
        "key_labels": "note_names",
        "note_colors": ["#fafafa", "#fafafa", "#d0d6e1", "#fafafa", "#fafafa", "#fafafa", "#d0d6e1"],
        "spectrum_colors": false,
        "rSteps": 1,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 260.740740,       
        "instrument": "qanun",
        "short_description": "7-JI-11L Rast Maqam / Eight Echos"
      },
      {
        "name": "12-JI-7L Piano",
        "description": "12-tone Just Intonation 7-Limit scale, consisting of 12 rational divisions per octave derived from the harmonic series up to a prime limit of 7, mapped on a layout that approximates the 7-white/5-black Halberstadt organ layout or the classic piano keyboard.",
        "scale": parseScale(scale_12_ji_7l).scale,
        "equivSteps": 12,
        /*"ratios": [
          "1/1", "16/15",
          "9/8", "6/5",
          "5/4",
          "4/3", "7/5",
          "3/2", "8/5",
          "5/3", "7/4",
          "15/8"],*/
        "note_names": [
          "C", "D",
          "D", "E",
          "E",
          "F", "G",
          "G", "A",
          "A", "B",
          "B"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#c8d0c8",
          "#fafafa", "#c8d0c8",
          "#fff8db",
          "#fafafa", "#d0e1e1",
          "#fafafa", "#c8d0c8",
          "#fff8db", "#ffe5e5",
          "#fff8db"],
        "spectrum_colors": false,
        "rSteps": 2,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,        
        "output": "sample",
        "fundamental": 264,        
        "instrument": "rhodes",
        "short_description": "12-JI-7L Piano"
      },
      {
        "name": "17-JI-5L Arabic-theoretical",
        "description": "17-tone Just Intonation 5-Limit Arabic theoretical gamut, which is schismatically equivalent to a 17-tone 3-Limit scale generated from 12 perfect fifths descending and 4 ascending plus the fundamental, producing 17 rational divisions per octave derived from the harmonic series up to a prime limit of 5.",
        "scale": parseScale(scale_17_ji_5l).scale,
        "equivSteps": 17,
       /* "ratios": [
          "1/1", "256/243", "10/9",
          "9/8", "32/27",
          "5/4", "81/64",
          "4/3", "45/32", "40/27",
          "3/2", "128/81",
          "5/3", "27/16", "16/9",
          "15/8", "160/81"],*/
        "note_names": [
          "C", "D", "D",
          "D", "E",
          "E", "E",
          "F", "F", "G",
          "G", "A",
          "A", "A", "B",
          "B", "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#c8c8d0", "#fff8db",
          "#fafafa", "#c8c8d0",
          "#fff8db", "#fafafa",
          "#fafafa", "#c8d0c8", "#fff8db",
          "#fafafa", "#c8c8d0",
          "#fff8db", "#fafafa", "#c8c8d0",
          "#fff8db", "#fff8db"],
        "spectrum_colors": false,
        "rSteps": 3,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 260.740740,       
        "instrument": "qanun",
        "short_description": "17-JI-5L Arabic-theoretical"       
      },
      {
        "name": "17-JI-11L Wilson",
        "description": "17-tone Just Intonation 11-Limit scale by Erv Wilson, consisting of 17 rational divisions per octave derived from the harmonic series up to a prime limit of 11.",
        "scale": parseScale(scale_17_ji_11l_wilson).scale,
        "equivSteps": 17,
        /*"ratios": [
          "1/1", "22/21", "11/10",
          "9/8", "7/6", "11/9",
          "5/4",
          "4/3", "11/8", "22/15",
          "3/2", "11/7", "44/27",
          "5/3", "7/4", "11/6",
          "15/8"],*/
        "note_names": [
          "C", "C", "D",
          "D", "E", "E",
          "E",
          "F", "F", "G",
          "G", "G", "A",
          "A", "B", "B",
          "B"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#e1d0e1", "#dddad4",
          "#fafafa", "#ffe5e5", "#d0d6e1",
          "#fff8db",
          "#fafafa", "#d0d6e1", "#dddad4",
          "#fafafa", "#e1d0e1", "#d0d6e1",
          "#fff8db", "#ffe5e5", "#d0d6e1",
          "#fff8db"],
        "spectrum_colors": false,
        "rSteps": 3,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 264,
        "instrument": "harp",
        "short_description": "17-JI-11L Wilson"
      },
      {
        "name": "22-JI-5L Indian (Sambamurthy/Daniélou)",
        "description": "Indian 22-tone Just Intonation 5-Limit śruti gamut, consisting of 22 rational divisions per octave derived from the harmonic series up to a prime limit of 5, which is schismatically equivalent to a 22-tone 3-Limit scale generated from 11 perfect fifths ascending and 10 descending plus the fundamental.",        
        "scale": parseScale(scale_22_ji_5l).scale,
        "equivSteps": 22,
       /* "solfege": [
          "Sa", "ReL-", "ReL+", "Re-",
          "Re", "GaL", "Gab", "Ga",
          "Ga+",
          "Ma", "Ma+", "MaL-", "MaL+",
          "Pa", "DhaL", "Dhab", "Dha",
          "Dha+", "NiL", "Nib", "Ni",
          "Ni+"],*/
        "note_names": [
          "C", "D", "D", "D",
          "D", "E", "E", "E",
          "E",
          "F", "F", "F", "G",
          "G", "A", "A", "A",
          "A", "B", "B", "B",
          "B"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#c8c8d0", "#c8d0c8", "#fff8db",
          "#fafafa", "#c8c8d0", "#c8d0c8", "#fff8db",
          "#fafafa",
          "#fafafa", "#fff8db", "#e1e1e0", "#e1e1e0",
          "#fafafa", "#c8c8d0", "#c8d0c8", "#fff8db",
          "#fafafa", "#c8c8d0", "#c8d0c8", "#fff8db",
          "#fafafa"],
        "spectrum_colors": false,
        "rSteps": 4,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 260.740740,
        "instrument": "WMRI5LST",
        "short_description": "22-JI-5L Indian (Sambamurthy/Daniélou)"
      },
      {
        "name": "31-JI-7L Fokker",
        "description": "31-tone Just Intonation 7-Limit scale by Adriaan Fokker, consisting of 31 rational divisions per octave derived from the harmonic series up to a prime limit of 7.",
        "scale": parseScale(scale_31_ji_7l_fokker).scale,
        "equivSteps": 31,
        /*"ratios": [
          "1/1", "64/63", "135/128", "15/14", "35/32",
          "9/8", "8/7", "7/6", "135/112", "315/256",
          "5/4", "9/7", "21/16",
          "4/3", "175/128", "45/32", "10/7", "35/24",
          "3/2", "32/21", "14/9", "45/28", "105/64",
          "5/3", "12/7", "7/4", "16/9", "945/512",
          "15/8", "40/21", "63/32"],*/
        "note_names": [
          "C", "C", "C", "C", "D",
          "D", "D", "E", "D", "E",
          "E", "E", "F",
          "F", "F", "F", "F", "G",
          "G", "G", "A", "G", "A",
          "A", "A", "B", "B", "B",
          "B", "B", "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#ffe5e5", "#e1e1e0", "#c8d0c8", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#d0c8c8", "#c8d0c8", "#f8ffeb",
          "#fff8db", "#ffe5e5", "#ffe5e5",
          "#fafafa", "#dddad4", "#e1e1e0", "#c8d0c8", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#d0c8c8", "#c8d0c8", "#f8ffeb",
          "#fff8db", "#ffe5e5", "#d0c8c8", "#e1e1e0", "#f8ffeb",
          "#fff8db", "#fafefa", "#ffe5e5"],
        "spectrum_colors": false,
        "rSteps": 5,
        "urSteps": 3,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 264,        
        "instrument": "hammond",
        "short_description": "31-JI-7L Fokker"
      },
      {
        "name": "43-JI-11L Partch (C = 1/1)",
        "description": "43-tone Just Intonation 11-Limit scale by Harry Partch, consisting of 43 divisions per octave derived symmetrically from both harmonic and subharmonic series (otonalities and utonalities) up to a prime limit of 11. Partch's original tuning was based in 1/1 = G, while this version sets 1/1 = C, using the same frequency ratios.",
        "scale": parseScale(scale_43_ji_11l_partch).scale,
        "equivSteps": 43,
        /*"ratios": [
          "1/1", "81/80", "33/32", "21/20", "16/15", "12/11", "11/10", "10/9",
          "9/8", "8/7", "7/6", "32/27", "6/5", "11/9",
          "5/4", "14/11", "9/7", "21/16",
          "4/3", "27/20", "11/8", "7/5", "10/7", "16/11", "40/27",
          "3/2", "32/21", "14/9", "11/7", "8/5", "18/11",
          "5/3", "27/16", "12/7", "7/4", "16/9", "9/5", "20/11", "11/6",
          "15/8", "40/21", "64/33", "160/81"],*/
        "note_names": [
          "C", "C", "C", "D", "D", "D", "D", "D",
          "D", "D", "E", "E", "E", "E",
          "E", "F", "E", "F",
          "F", "F", "F", "G", "F", "G", "G",
          "G", "G", "A", "G", "A", "A",
          "A", "A", "A", "B", "B", "B", "B", "B",
          "B", "B", "C", "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#fff8db", "#d0d6e1", "#d0e1e1", "#c8d0c8", "#d0d6e1", "#dddad4", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#d0d6e1",
          "#fff8db", "#dce1d0", "#ffe5e5", "#ffe5e5",
          "#fafafa", "#fff8db", "#d0d6e1", "#d0e1e1", "#d0e1e1", "#d0d6e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0c8c8", "#f8ffeb", "#c8d0c8", "#d0d6e1",
          "#fff8db", "#fafafa", "#ffe5e5", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#dddad4", "#d0d6e1",
          "#fff8db", "#d0e1e1", "#d0d6e1", "#fff8db"],
        "spectrum_colors": false,
        "rSteps": 7,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 260.74074074,        
        "instrument": "WMRI11LST",
        "short_description": "43-JI-11L Partch (C)"        
      },
      {
        "name": "43-JI-11L Partch (G = 1/1)",
        "description": "43-tone Just Intonation 11-Limit scale by Harry Partch, consisting of 43 divisions per octave derived symmetrically from both harmonic and subharmonic series (otonalities and utonalities) up to a prime limit of 11. Partch's original tuning was based on 1/1 = G (392 Hz), while this scala file uses the standard reference tone C. Therefore, each of Partch's ratios have been multiplied by 3/2 and normalised, so that the original pitch-heights are retained.",
        "scale": parseScale(scale_43_ji_11l_partchG).scale,
        "equivSteps": 43,
        /*"ratios": [
          "4/3", "27/20", "11/8", "7/5", "10/7", "16/11", "40/27",
          "3/2", "32/21", "14/9", "11/7", "8/5", "18/11",
          "5/3", "27/16", "12/7", "7/4", "16/9", "9/5", "20/11", "11/6",
          "15/8", "40/21", "64/33", "160/81",
          "1/1", "81/80", "33/32", "21/20", "16/15", "12/11", "11/10", "10/9",
          "9/8", "8/7", "7/6", "32/27", "6/5", "11/9",
          "5/4", "14/11", "9/7", "21/16"],*/
        "note_names": [
          "4/3", "27/20", "11/8", "7/5", "10/7", "16/11", "40/27",
          "3/2", "32/21", "14/9", "11/7", "8/5", "18/11",
          "5/3", "27/16", "12/7", "7/4", "16/9", "9/5", "20/11", "11/6",
          "15/8", "40/21", "64/33", "160/81",
          "1/1", "81/80", "33/32", "21/20", "16/15", "12/11", "11/10", "10/9",
          "9/8", "8/7", "7/6", "32/27", "6/5", "11/9",
          "5/4", "14/11", "9/7", "21/16"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#fff8db", "#d0d6e1", "#d0e1e1", "#d0e1e1", "#d0d6e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0c8c8", "#f8ffeb", "#c8d0c8", "#d0d6e1",
          "#fff8db", "#fafafa", "#ffe5e5", "#ffe5e5", "#fafafa", "#fff8db", "#abb7c3", "#d0d6e1",
          "#fff8db", "#d0e1e1", "#d0d6e1", "#fff8db",
          "#fafafa", "#fff8db", "#d0d6e1", "#d0e1e1", "#c8d0c8", "#d0d6e1", "#abb7c3", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#d0d6e1",
          "#fff8db", "#dce1d0", "#ffe5e5", "#ffe5e5"],
        "spectrum_colors": false,
        "rSteps": 7,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 261.333333,        
        "instrument": "gayageum",
        "short_description": "43-JI-11L Partch (G)"        
      },
      {
        "name": "53-RI-3L Extended Pythagorean",
        "description": "53-tone Rational Intonation 3-Limit scale, consisting of 53 rational divisions per octave derived solely from partials 2 and 3 by tuning a chain of 53 perfect fifths: 26 are harmonics (above C) and 26 are subharmonics (below C).",
        "scale": parseScale(scale_53_ri_3l).scale,
        "equivSteps": 53,
        /*"powers_of_3": [
          "0", "^12", "^24", "^-17", "^-5", "^7", "^19", "^-22", "^-10",
          "^2", "^14", "^26", "^-15", "^-3", "^9", "^21", "^-20", "^-8",
          "^4", "^16", "^-25", "^-13",
          "^-1", "^11", "^23", "^-18", "^-6", "^6", "^18", "^-23", "^-11",
          "^1", "^13", "^25", "^-16", "-4", "^8", "^20", "^-21", "-9",
          "^3", "^15", "-26", "^-14", "^-2", "^10", "^22", "^-19", "^-7",
          "^5", "^17", "^-24", "-12"],*/
        "note_names": [
          "C", "C", "C", "C", "C", "D", "D", "D", "D",
          "D", "D", "D", "D", "D", "E", "E", "E", "E",
          "E", "E", "F", "F",
          "F", "F", "F", "F", "F", "G", "G", "G", "G",
          "G", "G", "G", "G", "G", "A", "A", "A", "A",
          "A", "A", "B", "A", "A", "B", "B", "B", "B",
          "B", "B", "C", "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#ffe5e5", "#d0d6e1", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0d6e1", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0d6e1", "#d0c8c8", "#e1e1e0", "#e1e1e0", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0d6e1", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#becbc3", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#f8ffeb", "#fff8db"],
        "spectrum_colors": false,
        "rSteps": 9,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 260.74074074,
        "instrument": "rhodes",
        "short_description": "53-RI-3L Extended Pythagorean"
      },      
      {
        "name": "53-RI-3L Mirrored",
        "description": "53-tone Rational Intonation 3-Limit scale, consisting of 53 rational divisions per octave derived solely from partials 2 and 3 by tuning a chain of 53 perfect fifths: 26 are harmonics (above C) and 26 are subharmonics (below C). Tones are mapped on a mirrored Bosanquet / Wilson / Terpstra layout.",
        "scale": parseScale(scale_53_ri_3l_mirrored).scale,
        "equivSteps": 53,
        "scala_names": [
          "0", "^12", "^24", "^-17", "^-5", "^7", "^19", "^-22", "^-10",
          "^2", "^14", "^26", "^-15", "^-3", "^9", "^21", "^-20", "^-8",
          "^4", "^16", "^-25", "^-13",
          "^-1", "^11", "^23", "^-18", "^-6", "^6", "^18", "^-23", "^-11",
          "^1", "^13", "^25", "^-16", "-4", "^8", "^20", "^-21", "-9",
          "^3", "^15", "-26", "^-14", "^-2", "^10", "^22", "^-19", "^-7",
          "^5", "^17", "^-24", "-12"],
        "note_names": [
          "C", "C", "C", "C", "C", "D", "D", "D", "D",
          "D", "D", "D", "D", "D", "E", "E", "E", "E",
          "E", "E", "F", "F",
          "F", "F", "F", "F", "F", "G", "G", "G", "G",
          "G", "G", "G", "G", "G", "A", "A", "A", "A",
          "A", "A", "B", "A", "A", "B", "B", "B", "B",
          "B", "B", "C", "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#ffe5e5", "#d0d6e1", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0d6e1", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0d6e1", "#d0c8c8", "#e1e1e0", "#e1e1e0", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0d6e1", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#becbc3", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#f8ffeb", "#fff8db"],
        "spectrum_colors": false,
        "rSteps": 9,
        "urSteps": 5,
        "hexSize": 42,
        "rotation": 16.102113751,
        "output": "sample",
        "fundamental": 260.74074074,
        "instrument": "cello-viola",
        "short_description": "53-RI-3L Mirrored"        
      },
      {
        "name": "53-JI-13L Cam Taylor",
        "description": "Cam Taylor's 53-tone Just Intonation 13-Limit scale, consisting of 53 symmetrically derived rational divisions per octave.",
        "scale": parseScale(scale_53_ji_13l_ct).scale,
        "equivSteps": 53,
        "scala_names": [
          "1/1", "81/80", "33/32", "28/27", "256/243", "16/15", "13/12", "12/11", "10/9",
          "9/8", "8/7", "15/13", "7/6", "32/27", "6/5", "39/32", "16/13", "5/4",
          "81/64", "9/7", "13/10", "21/16",
          "4/3", "27/20", "11/8", "18/13", "45/32", "64/45", "13/9", "16/11", "40/27",
          "3/2", "32/21", "20/13", "14/9", "128/81", "8/5", "13/8", "64/39", "5/3",
          "27/16", "12/7", "26/15", "7/4", "16/9", "9/5", "11/6", "24/13", "15/8",
          "243/128", "27/14", "64/33", "160/81"],
        "note_names": [
          "C", "C", "C", "D", "D", "D", "D", "D", "D",
          "D", "D", "D", "E", "E", "E", "E", "E", "E",
          "E", "E", "E", "F",
          "F", "F", "F", "F", "F", "G", "G", "G", "G",
          "G", "G", "G", "A", "A", "A", "A", "A", "A",
          "A", "A", "A", "B", "B", "B", "B", "B", "B",
          "B", "B", "C", "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#fff8db", "#d0d6e1", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#d0d6e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#dce1d0", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#e1d0e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#f8ffeb", "#ffe5e5",
          "#fafafa", "#fff8db", "#d0d6e1", "#e1d0e1", "#e1e1e0", "#e1e1e0", "#e1d0e1", "#d0d6e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#dce1d0", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#e1d0e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#f8ffeb", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#d0d6e1", "#e1d0e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0d6e1", "#fff8db"],
        "spectrum_colors": false,
        "rSteps": 9,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 260.74074074,
        "instrument": "WMRI13LST",
        "short_description": "53-RI-13L Cam Taylor"
      },
    ]
  },
  {
    "name": "Equal Temperaments",
    settings: [
      {
        "name": "19-edo (Salinas)",
        "description": "19-tone equal tempered scale consisting of 19 sonically equal divisions per octave.",
        "scale": parseScale(scale_19_ed2).scale,
        "equivSteps": 19,
        "note_names": [
          "C", "C♯", "D♭",
          "D", "D♯", "E♭",
          "E", "E♯ F♭",
          "F", "F♯", "G♭",
          "G", "G♯", "A♭",
          "A", "A♯", "B♭",
          "B", "B♯ C♭"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#c8d0c8", "#c8c8d0",
          "#fafafa", "#c8d0c8", "#c8c8d0",
          "#fafafa", "#e1e1e0",
          "#fafafa", "#c8d0c8", "#c8c8d0",
          "#fafafa", "#c8d0c8", "#c8c8d0",
          "#fafafa", "#c8d0c8", "#c8c8d0",
          "#fafafa", "#e1e1e0"],
        "spectrum_colors": false,
        "rSteps": 3,
        "urSteps": 2,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 264.022598,
        "instrument": "lute",
        "short_description": "19-edo (Salinas)"       
      },
      {
        "name": "31-edo (Vicentino)",
        "description": "31-tone equal tempered scale consisting of 31 sonically equal divisions per octave in standard meantone notation. Similar to 1/4-comma meantone.",
        "scale": parseScale(scale_31_ed2).scale,
        "equivSteps": 31,
        "note_names": [
          "C", "C", "C", "D", "D",
          "D", "D", "D", "E", "E",
          "E", "E", "E",
          "F", "F", "F", "G", "G",
          "G", "G", "G", "A", "A",
          "A", "A", "A", "B", "B",
          "B", "B", "B"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#ffe5e5", "#c8d0c8", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8"],
        "spectrum_colors": false,
        "rSteps": 5,
        "urSteps": 3,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 263.0921203,
        "instrument": "harpsichord",
        "short_description": "31-edo (Vicentino)"
      },
      {
        "name": "19 from 31-edo + P5s (Vicentino II)",
        "description": "19 tones from 31-edo and 19 perfect fifths",
        "scale": [
          "5.180807317", "2\\31", "82.60016216", "3\\31", "121.3098396",
          "5\\31", "198.7291944", "7\\31", "276.1485493", "8\\31", "314.8582267",
          "10\\31", "392.2775815", "12\\31", "469.6969363",
          "13\\31", "508.4066138", "15\\31", "585.8259686", "16\\31", "624.535646",
          "18\\31", "3/2", "20\\31", "779.3743557", "21\\31", "818.0840331",
          "23\\31", "895.503388", "25\\31", "972.9227428", "26\\31", "1011.63242",
          "28\\31", "1089.051775", "30\\31", "1166.47113",
          "2/1"
        ],
        "equivSteps": 31,
        "note_names": [
          "C", "C", "C", "C", "D", "D",
          "D", "D", "D", "D", "E", "E",
          "E", "E", "E", "E",
          "F", "F", "F", "F", "G", "G",
          "G", "G", "G", "G", "A", "A",
          "A", "A", "A", "A", "B", "B",
          "B", "B", "B", "B"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#ffe5e5", "#c8d0c8", "#fff8db", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#fff8db", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#fff8db",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#fff8db", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#fff8db", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#fff8db", "#c8c8d0", "#f8ffeb",
          "#fafafa", "#ffe5e5", "#c8d0c8", "#fff8db"],
        "spectrum_colors": false,
        "rSteps": 6,
        "urSteps": 5,
        "hexSize": 42,
        "rotation": -34.5,
        "output": "sample",
        "fundamental": 263.0921203,
        "instrument": "harpsichord",
        "short_description": "19+P5s (Vicentino II)"
      },
      {
        "name": "41-edo",
        "description": "41-tone equal tempered scale consisting of 41 sonically equal divisions per octave.",
        "scale": parseScale(scale_41_ed2).scale,
        "equivSteps": 41,
        "note_names": [
          "0", "^12", "^-17", "^-5", "^7", "^19", "^-10",
          "^2", "^14", "^-15", "^-3", "^9", "^-20", "^-8",
          "^4", "^16", "^-13",
          "^-1", "^11", "^-18", "^-6", "^6", "^18", "^-11",
          "^1", "^13", "^-16", "-4", "^8", "^20", "-9",
          "^3", "^15", "^-14", "^-2", "^10", "^-19", "^-7",
          "^5", "^17", "-12"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#ffe5e5", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#d0d6e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#d0d6e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0c8c8", "#e1e1e0", "#e1e1e0", "#d0d6e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#d0d6e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#d0d6e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#fff8db"],
        "spectrum_colors": false,
        "rSteps": 7,
        "urSteps": 3,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 260.5221364,
        "instrument": "hammond",
        "short_description": "41-edo"  
      },
      {
        "name": "43-edo (Sauveur)",
        "description": "43-tone equal tempered scale consisting of 43 sonically equal divisions per octave. Similar to 1/5-comma Meantone.",
        "scale": parseScale(scale_43_ed2).scale,
        "equivSteps": 43,
        "note_names": [
          "C", "D♭♭", "B♯♯", "C♯", "D♭", "E♭♭♭", "C♯♯",
          "D", "E♭♭", "C♯♯♯", "D♯", "E♭", "F♭♭", "D♯♯",
          "E", "F♭", "D♯♯♯", "E♯",
          "F", "G♭♭", "E♯♯", "F♯", "G♭", "A♭♭♭", "F♯♯",
          "G", "A♭♭", "F♯♯♯", "G♯", "A♭", "B♭♭♭", "G♯♯",
          "A", "B♭♭", "G♯♯♯", "A♯", "B♭", "C♭♭", "A♯♯",
          "B", "C♭", "D♭♭♭", "B♯"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#ffe5e5", "#fff8db", "#c8d0c8", "#c8c8d0", "#dce1d0", "#fff8db",
          "#fafafa", "#ffe5e5", "#f8ffeb", "#c8d0c8", "#c8c8d0", "#ffe5e5", "#fff8db",
          "#fafafa", "#c8c8d0", "#f8ffeb", "#c8d0c8",
          "#fafafa", "#ffe5e5", "#fff8db", "#c8d0c8", "#c8c8d0", "#dce1d0", "#fff8db",
          "#fafafa", "#ffe5e5", "#f8ffeb", "#c8d0c8", "#c8c8d0", "#dce1d0", "#fff8db",
          "#fafafa", "#ffe5e5", "#f8ffeb", "#c8d0c8", "#c8c8d0", "#ffe5e5", "#fff8db",
          "#fafafa", "#c8c8d0", "#dce1d0", "#c8d0c8"],
        "spectrum_colors": false,
        "rSteps": 7,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 262.682024,
        "instrument": "rhodes",
        "short_description": "43-edo (Sauveur)"  
      },
      {
        "name": "53-edo (Mercator/Newton)",
        "description": "53-tone equal tempered scale consisting of 53 sonically equal divisions per octave.",
        "scale": parseScale(scale_53_ed2).scale,
        "equivSteps": 53,
        "note_names": [
          "C", "C", "C", "C", "C", "D", "D", "D", "D",
          "D", "D", "D", "D", "D", "E", "E", "E", "E",
          "E", "E", "F", "F",
          "F", "F", "F", "F", "F", "G", "G", "G", "G",
          "G", "G", "G", "G", "G", "A", "A", "A", "A",
          "A", "A", "A B", "A", "A", "B", "B", "B", "B",
          "B", "B", "C", "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#ffe5e5", "#d0d6e1", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0d6e1", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0d6e1", "#d0c8c8", "#e1e1e0", "#e1e1e0", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0d6e1", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#becbc3", "#d0c8c8", "#c8c8d0", "#c8d0c8", "#e1d0e1", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#f8ffeb", "#fff8db"],
        "spectrum_colors": false,
        "rSteps": 9,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 260.771561,
        "instrument": "hammond",
        "short_description": "53-edo (Mercator/Newton)"  
      },
      {
        "name": "55-edo (Telemann)", 
        "description": "55-tone equal tempered scale consisting of 55 sonically equal divisions per octave. Similar to 1/6-comma meantone.",
        "scale": parseScale(scale_55_ed2).scale,
        "equivSteps": 55,
        "note_names": [
          "C", "D♭♭", "E♭♭♭♭", "B♯♯", "C♯", "D♭", "E♭♭♭", "B♯♯♯", "C♯♯",
          "D", "E♭♭", "F♭♭♭", "C♯♯♯", "D♯", "E♭", "F♭♭", "C♯♯♯♯", "D♯♯",
          "E", "F♭", "G♭♭♭", "D♯♯♯", "E♯",
          "F", "G♭♭", "A♭♭♭♭", "E♯♯", "F♯", "G♭", "A♭♭♭", "E♯♯♯", "F♯♯",
          "G", "A♭♭", "B♭♭♭♭", "F♯♯♯", "G♯", "A♭", "B♭♭♭", "F♯♯♯♯", "G♯♯",
          "A", "B♭♭", "C♭♭♭", "G♯♯♯", "A♯", "B♭", "C♭♭", "G♯♯♯♯", "A♯♯",
          "B", "C♭", "D♭♭♭", "A♯♯♯", "B♯"],
        "key_labels": "note_names",
        "note_colors": [
          "#fafafa", "#ffe5e5", "#d0e1e1", "#fff8db", "#c8d0c8", "#c8c8d0", "#dce1d0", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#dce1d0", "#f8ffeb", "#c8d0c8", "#c8c8d0", "#ffe5e5", "#d0d6e1", "#fff8db",
          "#fafafa", "#c8c8d0", "#dce1d0", "#f8ffeb", "#c8d0c8",
          "#fafafa", "#ffe5e5", "#d0e1e1", "#fff8db", "#c8d0c8", "#c8c8d0", "#dce1d0", "#f8ffeb", "#fff8db",
          "#fafafa", "#ffe5e5", "#d0e1e1", "#f8ffeb", "#c8d0c8", "#c8c8d0", "#dce1d0", "#d0d6e1", "#fff8db",
          "#fafafa", "#ffe5e5", "#dce1d0", "#f8ffeb", "#c8d0c8", "#c8c8d0", "#ffe5e5", "#d0d6e1", "#fff8db",
          "#fafafa", "#c8c8d0", "#dce1d0", "#f8ffeb", "#c8d0c8"],
        "spectrum_colors": false,
        "rSteps": 9,
        "urSteps": 5,
        "hexSize": 42,
        "rotation": -16.102113751,
        "output": "sample",
        "fundamental": 262.451161,
        "instrument": "WMRIByzantineST",
        "short_description": "55-edo (Telemann)"  
      }
    ]
  },
  {
    "name": "Interval Testing",
    settings: [
      {
        "name": "Interval Tester by Syntonic Commas (22 cents)", 
        "description": "One step = 1 cent, right-up in commas, right-down in cents.",
        "scale": parseScale(scale_1cent).scale,
        "equivSteps": 1,
        "note_names": [],
        "key_labels": "none",
        "note_colors": [],
        "spectrum_colors": true,
        "fundamental_color": "#f0fcff",
        "rSteps": 22,
        "urSteps": 1,
        "hexSize": 20,
        "rotation": -29.3577535,
        "output": "sample",
        "fundamental": 261.6255653,
        "instrument": "WMRI3LST",
        "short_description": "Interval Tester by Syntonic Commas (22 cents)" 
      },
      {
        "name": "Interval Tester by Diesis (41 cents)", 
        "description": "One step = 1 cent, right-up in dieses, right-down in cents.",
        "scale": parseScale(scale_1cent).scale,
        "equivSteps": 1,
        "note_names": [],
        "key_labels": "none",
        "note_colors": [],
        "spectrum_colors": true,
        "fundamental_color": "#f0fcff",
        "rSteps": 41,
        "urSteps": 1,
        "hexSize": 20,
        "rotation": -29.3577535,
        "output": "sample",
        "fundamental": 261.6255653,
        "instrument": "WMRI5LST",
        "short_description": "Interval Tester by Diesis (41 cents)" 
      },
      {
        "name": "Interval Tester by 24-edo Quarter-Tones (50 cents)", 
        "description": "One step = 1 cent, right-up in quarter-tones, right-down in cents.",
        "scale": parseScale(scale_1cent).scale,
        "equivSteps": 1,
        "note_names": [],
        "key_labels": "none",
        "note_colors": [],
        "spectrum_colors": true,
        "fundamental_color": "#dbffdf",        
        "rSteps": 50,
        "urSteps": 1,
        "hexSize": 20,
        "rotation": -29.3577535,
        "output": "sample",
        "fundamental": 261.6255653,
        "instrument": "WMRI7LST",
        "short_description": "Interval Tester by 24-edo Quarter-Tones (50 cents)" 
      }      
    ]
  }/*,
  {
    "name": "MIDI",
    settings: [
      {
      }
    ]
  }*/
];

export default presets;

export const default_settings = presets[0].settings[0];
