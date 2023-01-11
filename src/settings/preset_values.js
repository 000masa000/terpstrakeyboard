//import the built-in Scala files
import scale_12_edo from 'scales/12-edo.scl';
import scale_12_mt_1_4_SC from 'scales/12-MT-1_4-SC.scl';
import scale_12_ji_3l from 'scales/12-JI-3L.scl';
import scale_12_ji_5l from 'scales/12-JI-5L.scl';
import scale_12_ji_7l from 'scales/12-JI-7L.scl';
import scale_12_combined from 'scales/12-tone-combined.scl';

import scale_17_ji_3l from 'scales/17-JI-3L-Ormavi.scl';
import scale_17_ji_13l from 'scales/17-JI-13L-Sina.scl';
import scale_22_ji_17l from 'scales/22-JI-17L-Farabi.scl';
import scale_22_ji_5l from 'scales/22-JI-5L-Indian.scl';
import scale_43_ji_11l_partch from 'scales/43-JI-11L-Partch.scl';
import scale_43_ji_11l_partchG from 'scales/43-JI-11L-Partch_on_G.scl';
import scale_31_ji_7l_fokker from 'scales/31-JI-7L-Fokker.scl';
import scale_17_ji_11l_wilson from 'scales/17-JI-11L-Wilson.scl';
import scale_53_ri_3l from 'scales/53-RI-3L.scl';
import scale_53_ji_13l_ct from 'scales/53-JI-13L-CT.scl';
import scale_41_ji_7l from 'scales/41-JI-7L-Sabat-Young.scl';
import scale_55_ji_5l from 'scales/55-JI-5L-Sabat-Euler.scl';
import scale_112_hs_16to128 from 'scales/112-HS-16to128.scl';
import scale_96_hss_16to64 from 'scales/96-HSS-16to64.scl';
import scale_19_hs_34to51 from 'scales/19-HS-34to51.scl';

import scale_31_mt_vicentino from 'scales/31-MT-Vicentino.scl';
import scale_19_19P5_amt_vicentino from 'scales/19+19P5-AdaptiveMT-Vicentino.scl';
import scale_35_mt_sabat_helmholtz from 'scales/35-MT-Sabat-Helmholtz.scl';
import scale_43_mt from 'scales/43-MT-1_5-Comma.scl';
import scale_55_mt from 'scales/55-MT-1_6-Comma.scl';

import scale_19_edo from 'scales/19-edo.scl';
import scale_31_edo from 'scales/31-edo.scl';
import scale_41_edo from 'scales/41-edo.scl';
import scale_43_edo from 'scales/43-edo.scl';
import scale_53_edo from 'scales/53-edo.scl';
import scale_55_edo from 'scales/55-edo.scl';
import scale_72_edo from 'scales/72-edo.scl';

import scale_1cent from 'scales/1cent.scl';

//import the Scala file parser, which can output scale: [], colors: [], labels: [], errors: [],
import { parseScale } from './scale/parse-scale';

//define the standard 12-edo equal tempered scale 
const scale_12_edo_parsed = parseScale(scale_12_edo).scale;

//define the presets which appear in the sidebar menu

export const presets = [
  {
    "name": "12-tone",
    settings: [
      {
        "name": "Equal Temperament",
        "description": "12-edo (\"equal divisions of an octave\"): 12-tone equal tempered scale consisting of 12 sonically equal divisions per octave, mapped on a tilted Paul Jankó layout, which approximates the 7-white/5-black piano keyboard. Notated using HEJI accidentals (Helmholtz-Ellis JI Pitch Notation, devised by Marc Sabat and Wolfgang von Schweinitz, 2000-2005, revised by Marc Sabat and Thomas Nicholson in 2020 with special thanks to M.O. Abbott, Catherine Lamb, and Wolfgang von Schweinitz.",
        "scale": scale_12_edo_parsed,        
        "equivSteps": 12,
        "note_names": [
          "C", "C D",
          "D", "D E",
          "E",
          "F", "F G",
          "G", "G A",
          "A", "A B",
          "B"],
        "key_labels": "note_names",
        "note_colors": [
          "#ededf7", "#c3c3d5",
          "#ededf7", "#c3c3d5",
          "#ededf7",
          "#ededf7", "#c3c3d5",
          "#ededf7", "#c3c3d5",
          "#ededf7", "#c3c3d5",
          "#ededf7"],
        "spectrum_colors": false,
        "rSteps": 2,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 261.6255653,
        "short_description": "12-edo"
      },
      {
        "name": "Pure Fifths: Pythagorean / Ancient Mesopotamian",
        "description": "12-tone 3-Limit Rational Intonation scale, consisting of 12 notes per octave derived from harmonic series intervals up to a prime limit of 3, mapped on a layout that approximates the 7-white/5-black piano keyboard. Traditionally attributed to Pythagoras and the Pythagoreans, this tuning is also described in Ancient Mesopotamian / Akkadian and Chinese music texts, and remains in use today. A series of eleven perfect fifths - from D♭ through F♯ - are pure 3/2 ratios. The missing 13th note C♯ would lie one Pythagorean Comma (ca. 23.5 cents) higher than the D♭. Four diminished fourths - A-D♭, E-A♭, B-E♭, F♯-B♭ - are nearly pure - one schisma (ca. 2 cents) less than 5/4 ratios.",
        "scale": parseScale(scale_12_ji_3l).scale,
        "equivSteps": 12,
        "note_names": [
          "C", "D",
          "D", "E",
          "E",
          "F", "F",
          "G", "A",
          "A", "B",
          "B"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#d0d0d7",
          "#ffffff", "#d0d0d7",
          "#ffffff",
          "#ffffff", "#d0d0d7",
          "#ffffff", "#d0d0d7",
          "#ffffff", "#d0d0d7",
          "#ffffff"],
        "spectrum_colors": false,
        "rSteps": 2,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,        
        "fundamental": 260.740740,   
        "short_description": "12-RI-3L"
      },
      {
        "name": "Pure Thirds: Quarter-Comma Meantone",
        "description": "12-tone Quarter Comma Meantone: in the range from E♭ to G♯ each fifth is narrowed by 1/4 of a Syntonic Comma (dividing the ratio 81/80), mapped on a layout that approximates the 7-white/5-black piano keyboard. Eight major thirds - E♭-G, B♭-D, F-A, C-E, G-B, D-F♯, A-C♯, E-G♯ - are pure 5/4 ratios. Notated using small letter-names to distinguish that the fifths are tempered.",
        "scale": parseScale(scale_12_mt_1_4_SC).scale,
        "equivSteps": 12,
        "note_names": [
          "c", "♯c",
          "d", "♭e",
          "e",
          "f", "♯f",
          "g", "♯g",
          "a", "♭b",
          "b"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffe5e5", "#e2caca",
          "#ffe5e5", "#e2caca",
          "#ffe5e5",
          "#ffe5e5", "#e2caca",
          "#ffe5e5", "#e2caca",
          "#ffe5e5", "#e2caca",
          "#ffe5e5"],
        "spectrum_colors": false,
        "rSteps": 2,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,        
        "fundamental": 263.181385,
        "short_description": "12-MT"
      },
      {
        "name": "5-limit Just Intonation",
        "description": "12-tone 5-Limit Rational Intonation scale, consisting of 12 notes per octave derived from harmonic series intervals up to a prime limit of 5, mapped on a layout that approximates the 7-white/5-black piano keyboard. The three major and minor triads on F, C, and G are tuned pure, as 4:5:6 or 10:12:15 ratios. The fifth between D (from the triad G major) and A (from the triad F major) is one Syntonic Comma (81/80) smaller than a pure 3/2 ratio.",
        "scale": parseScale(scale_12_ji_5l).scale,
        "equivSteps": 12,
        "note_names": [
          "C", "D",
          "D", "E",
          "E",
          "F", "F",
          "G", "A",
          "A", "B",
          "B"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#dee2da",
          "#ffffff", "#dee2da",
          "#fffae5",
          "#ffffff", "#dee2da",
          "#ffffff", "#dee2da",
          "#fffae5", "#dee2da",
          "#fffae5"],
        "spectrum_colors": false,
        "rSteps": 2,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,        
        "fundamental": 264,
        "short_description": "12-RI-5L"
      },
      {
        "name": "7-limit Just Intonation",
        "description": "12-tone 7-Limit Rational Intonation scale, consisting of 12 notes per octave derived from harmonic series intervals up to a prime limit of 7, mapped on a layout that approximates the 7-white/5-black piano keyboard. The 7° partial over C produces a harmonic series 9th chord over fundamental C: 4:5:6:7:9 and the 7/5 ratio diminished fifth above C produces a more consonant interval than the 5-Limit ratio 45/32 used in the previous scale.",
        "scale": parseScale(scale_12_ji_7l).scale,
        "equivSteps": 12,
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
          "#ffffff", "#dee2da",
          "#ffffff", "#dee2da",
          "#fffae5",
          "#ffffff", "#ece6df",
          "#ffffff", "#dee2da",
          "#fffae5", "#e2caca",
          "#fffae5"],
        "spectrum_colors": false,
        "rSteps": 2,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,        
        "fundamental": 264,
        "short_description": "12-RI-7L",
      },
      {
        "name": "Equal, Pythagorean, Meantone, and 5-limit JI combined",
        "description": "Four common tunings of the chromatic 12-tone scale combined in one 48-tone layout (pitches which are the same in different tunings are repeated): 12-edo (tempered HEJI accidentals), Pythagorean (uninflected accidentals), 1/4-Syntonic Comma Meantone (notated with small letters), and 5-limit JI (with additional arrows indicating the Syntonic Comma alterations).",
        "scale": parseScale(scale_12_combined).scale,
        "equivSteps": 48,
        "note_names": [
          "c", "C", "C", "C",
          "♯c", "D", "C D", "D",

          "D", "d", "D", "D",
          "E", "D E", "♭e", "E",

          "e", "E", "E", "E",

          "F", "F", "F", "f",
          "♯f", "F", "F G", "F",

          "g", "G", "G", "G",
          "♯g", "A", "G A", "A",

          "A", "a", "A", "A",
          "B", "A B", "♭b", "B",

          "b", "B", "B", "B"],
        
        "key_labels": "note_names",

        "note_colors": [
          "#ffe5e5", "#ffffff", "#ededf7", "#ffffff",
          "#e2caca", "#d0d0d7", "#c3c3d5", "#dee2da",

          "#fffae5", "#ffe5e5", "#ededf7", "#ffffff",
          "#d0d0d7", "#c3c3d5", "#e2caca", "#dee2da",

          "#ffe5e5", "#fffae5", "#ededf7", "#ffffff",

          "#ffffff", "#ffffff", "#ededf7", "#ffe5e5",
          "#e2caca", "#dee2da", "#c3c3d5", "#dee2da",

          "#ffe5e5", "#ffffff", "#ededf7", "#ffffff",
          "#e2caca", "#d0d0d7", "#c3c3d5", "#dee2da",

          "#fffae5", "#ffe5e5", "#ededf7", "#ffffff",
          "#d0d0d7", "#c3c3d5", "#e2caca", "#dee2da",

          "#ffe5e5", "#fffae5", "#ededf7", "#ffffff"
          ],
        "spectrum_colors": false,
        "rSteps": 4,
        "urSteps": -1,
        "hexSize": 42,
        "rotation": 40.9,        
        "fundamental": 260.74074074,
        "short_description": "12-tone-combined"
      },
      {
        "name": "B-System Button Layout",
        "description": "12-tone equal tempered scale consisting of 12 sonically equal divisions per octave, mapped on a chromatic button accordion Type-B system.",
        "scale": scale_12_edo_parsed,
        "equivSteps": 12,
        "note_names": [
          "C", "D C",
          "D", "E D",
          "E",
          "F", "G F",
          "G", "A G",
          "A", "B A",
          "B"],
        "key_labels": "note_names",
        "note_colors": ["#ededf7", "#c3c3d5", "#ededf7", "#c3c3d5", "#ededf7", "#ededf7", "#c3c3d5", "#ededf7", "#c3c3d5", "#ededf7", "#c3c3d5", "#ededf7"],
        "spectrum_colors": false,
        "rSteps": 3,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": 0,
        "fundamental": 261.6255653,
        "short_description": "12-edo B-System Chromatic Button"
      },
      {
        "name": "C-System Button Layout",
        "description": "12-tone equal tempered scale consisting of 12 sonically equal divisions per octave, mapped on a chromatic button accordion Type-C system.",
        "scale": scale_12_edo_parsed,
        "equivSteps": 12,
        "note_names": [
          "C", "D C",
          "D", "E D",
          "E",
          "F", "G F",
          "G", "A G",
          "A", "B A",
          "B"],
        "key_labels": "note_names",
        "note_colors": ["#ededf7", "#c3c3d5", "#ededf7", "#c3c3d5", "#ededf7", "#ededf7", "#c3c3d5", "#ededf7", "#c3c3d5", "#ededf7", "#c3c3d5", "#ededf7"],
        "spectrum_colors": false,
        "rSteps": 3,
        "urSteps": 2,
        "hexSize": 42,
        "rotation": 0,
        "fundamental": 261.6255653,
        "short_description": "12-edo C-System Chromatic Button"       
      }
    ]
  },
  {
    "name": "Arabic and Persian",
    settings: [
      {
        "name": "al-Farabi",
        "description": "22-tone 17-Limit Rational Intonation gamut, proposed by Abu Nasr Farabi (872-950), also known as al-Farabi, in his book Kitab al-Musiqa al-Kabir (\"The Great Book of Music\"). This maps a theoretical fretting of the oud, obtaining several commonly used divisions of the tetrachord. The gamut combines divisions (intervals) derived by combining primes 2, 3, 11, and 17. The chain of 9 subharmonic perfect fifths tuned below the fundamental also ends in four pitches one schisma lower than common 5-limit ratios (45/32, 15/8, 5/4, 5/3). Thanks to Idin Samimi Mofakham for translation, analysis, and documentation.",        
        "scale": parseScale(scale_22_ji_17l).scale,
        "equivSteps": 22,
        "note_names": [
          "C", "D", "D", "D",
          "D", "E", "E", "E",
          "E",
          "F", "F", "G", "G",
          "G", "A", "A", "A",
          "A", "B", "B", "C",
          "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#d0d0d7", "#c3c3e9", "#cee3e2",
          "#ffffff", "#d0d0d7", "#cee3e2", "#fffae5",
          "#ffffff",
          "#ffffff", "#dee2da", "#c3c3e9", "#cee3e2",
          "#ffffff", "#d0d0d7", "#cee3e2", "#fffae5",
          "#ffffff", "#d0d0d7", "#fffae5", "#c3c3e9",
          "#cee3e2"],
        "spectrum_colors": false,
        "rSteps": 4,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.740740,
        "short_description": "22-JI-17L Farabi"
      },
      {
        "name": "Ibn Sina",
        "description": "17-tone 13-Limit Rational Intonation gamut, proposed by Ibn Sina (980-1037), also known as Avicenna, in the encyclopaedia Kitab al-Shifa, as a fretting of the oud as used in his time. The gamut combines divisions (intervals) derived by combining primes 2, 3, 7, and 13. Thanks to Idin Samimi Mofakham for translation, analysis, and documentation.",
        "scale": parseScale(scale_17_ji_13l).scale,
        "equivSteps": 17,
        "note_names": [
          "C", "D", "D",
          "D", "E",
          "E", "E",
          "F", "G", "G",
          "G", "A",
          "A", "A", "B",
          "C", "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#e2caca", "#e1d0e1",
          "#ffffff", "#d0d0d7",
          "#e1d0e1", "#ffffff",
          "#ffffff", "#e2caca", "#e1d0e1",
          "#ffffff", "#d0d0d7",
          "#e1d0e1", "#ffffff", "#d0d0d7",
          "#e2caca", "#e1d0e1"],
        "spectrum_colors": false,
        "rSteps": 3,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.740740,
        "short_description": "17-JI-13L Ibn Sina"
      },
      {
        "name": "Safiaddin Ormavi",
        "description": "17-tone 3-Limit Rational Intonation gamut, proposed by Safiaddin Ormavi (1216-1294), generated from 12 perfect fifths descending and 4 ascending plus the fundamental, producing 17 notes per octave derived from harmonic series intervals up to a prime limit of 3 (Pythagorean tuning). Thanks to Idin Samimi Mofakham for translation, analysis, and documentation.",
        "scale": parseScale(scale_17_ji_3l).scale,
        "equivSteps": 17,
        "note_names": [
          "C", "D", "D",
          "D", "E",
          "E", "E",
          "F", "F G", "G",
          "G", "A",
          "A", "A", "B",
          "B", "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#d0d0d7", "#fffae5",
          "#ffffff", "#d0d0d7",
          "#fffae5", "#ffffff",
          "#ffffff", "#dee2da", "#fffae5",
          "#ffffff", "#d0d0d7",
          "#fffae5", "#ffffff", "#d0d0d7",
          "#fffae5", "#fffae5"],
        "spectrum_colors": false,
        "rSteps": 3,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.740740,
        "short_description": "17-JI-3L Ormavi"
      }  
    ]
  },
  {
    "name": "Indian",
    settings: [
      {
        "name": "Śruti (Sambamurthy/Daniélou)",
        "description": "22-tone 5-Limit Rational Intonation Indian śruti gamut, according to Sambamurthy/Daniélou, consisting of 22 notes per octave derived from harmonic series intervals up to a prime limit of 5. Derived by schisma-alteration from a 22-tone 3-Limit scale generated from 11 perfect fifths ascending and 10 descending plus the fundamental. Notated with Indian syllable names.",        
        "scale": parseScale(scale_22_ji_5l).scale,
        "equivSteps": 22,
        "note_names": [
          " Sa ", " ReL- ", " ReL+ ", " Re- ",
          " Re ", " GaL ", " Ga♭ ", " Ga ",
          " Ga+ ",
          " Ma ", " Ma+ ", " MaL- ", " MaL+ ",
          " Pa ", " DhaL ", " Dha♭ ", "Dha",
          " Dha+ ", " NiL ", " Ni♭ ", " Ni ",
          " Ni+ "],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#d0d0d7", "#dee2da", "#fffae5",
          "#ffffff", "#d0d0d7", "#dee2da", "#fffae5",
          "#ffffff",
          "#ffffff", "#fffae5", "#e1e1e0", "#e1e1e0",
          "#ffffff", "#d0d0d7", "#dee2da", "#fffae5",
          "#ffffff", "#d0d0d7", "#dee2da", "#fffae5",
          "#ffffff"],
        "spectrum_colors": false,
        "rSteps": 4,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.740740,
        "short_description": "22-JI-5L Śrutis (Sambamurthy/Daniélou)"
      },
      {
        "name": "Śruti (HEJI Notation)",
        "description": "22-tone 5-Limit Rational Intonation Indian śruti gamut, according to Sambamurthy/Daniélou, consisting of 22 notes per octave derived from harmonic series intervals up to a prime limit of 5. Derived by schisma-alteration from a 22-tone 3-Limit scale generated from 11 perfect fifths ascending and 10 descending plus the fundamental.",
        "scale": parseScale(scale_22_ji_5l).scale,
        "equivSteps": 22,
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
          "#ffffff", "#d0d0d7", "#dee2da", "#fffae5",
          "#ffffff", "#d0d0d7", "#dee2da", "#fffae5",
          "#ffffff",
          "#ffffff", "#fffae5", "#e1e1e0", "#e1e1e0",
          "#ffffff", "#d0d0d7", "#dee2da", "#fffae5",
          "#ffffff", "#d0d0d7", "#dee2da", "#fffae5",
          "#ffffff"],
        "spectrum_colors": false,
        "rSteps": 4,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.740740,
        "short_description": "22-JI-5L Śrutis (Sambamurthy/Daniélou)"
      }      
    ]
  },
  {
    "name": "Rational Intonation",
    settings: [
      {
        "name": "Harry Partch 43-tone 11-limit (C = 1/1, HEJI)",
        "description": "43-tone 11-Limit Rational Intonation scale by Harry Partch, consisting of 43 divisions per octave derived symmetrically from both harmonic and subharmonic series (otonalities and utonalities) up to a prime limit of 11. Partch’s original tuning was based in 1/1 = G, while this version sets 1/1 = C, using the same frequency ratios.",
        "scale": parseScale(scale_43_ji_11l_partch).scale,
        "equivSteps": 43,
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
          "#ffffff", "#fffae5", "#d0d6e1", "#ece6df", "#dee2da", "#cee3e2", "#e1d0e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1",
          "#fffae5", "#e4fbe6", "#ffe5e5", "#ffe5e5",
          "#ffffff", "#fffae5", "#d0d6e1", "#ece6df", "#e7e7ca", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#e2caca", "#e4fbe6", "#dee2da", "#d0d6e1",
          "#fffae5", "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#d0d6e1",
          "#fffae5", "#f8ffeb", "#cee3e2", "#fffae5",
        ],
        "spectrum_colors": false,
        "rSteps": 7,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.74074074,
        "short_description": "43-JI-11L Partch (C)"
      },
      {
        "name": "Harry Partch (G = 1/1, in Partch’s original ratio notation)",
        "description": "43-tone 11-Limit Rational Intonation scale by Harry Partch, consisting of 43 divisions per octave derived symmetrically from both harmonic and subharmonic series (otonalities and utonalities) up to a prime limit of 11. Partch’s original tuning was based on 1/1 = G (392 Hz), while this scala file uses the standard reference tone C. Therefore, each of Partch’s ratios have been multiplied by 3/2 and normalised, so that the original pitch-heights are retained.",
        "scale": parseScale(scale_43_ji_11l_partchG).scale,
        "equivSteps": 43,
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
          "#ffffff", "#fffae5", "#d0d6e1", "#ece6df", "#e7e7ca", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#e2caca", "#e4fbe6", "#dee2da", "#d0d6e1",
          "#fffae5", "#ffffff", "#ffe5e5", "#ffe5e5", "#ffffff", "#fffae5", "#e1d0e1", "#d0d6e1",
          "#dee2da", "#f8ffeb", "#cee3e2", "#fffae5",
          "#ffffff", "#fffae5", "#d0d6e1", "#ece6df", "#dee2da", "#cee3e2", "#e1d0e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1",
          "#fffae5", "#e4fbe6", "#ffe5e5", "#ffe5e5"],
        "spectrum_colors": false,
        "rSteps": 7,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 261.333333,
        "short_description": "43-JI-11L Partch (G)"
      },
      {
        "name": "31-tone 7-limit",
        "description": "31-tone 7-Limit Rational Intonation scale by Adriaan Fokker, consisting of 31 notes per octave derived from harmonic series intervals up to a prime limit of 7.",
        "scale": parseScale(scale_31_ji_7l_fokker).scale,
        "equivSteps": 31,
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
          "#ffffff", "#ffe5e5", "#dee2da", "#e7e7ca", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#e2caca", "#e7e7ca", "#f8ffeb",
          "#fffae5", "#ffe5e5", "#e2caca",
          "#ffffff", "#d8e3ce", "#dee2da", "#e7e7ca", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#e2caca", "#e7e7ca", "#f8ffeb",
          "#fffae5", "#ffe5e5", "#e2caca", "#d0d0d7", "#f8ffeb",
          "#fffae5", "#ffe5e5", "#e2caca"],
        "spectrum_colors": false,
        "rSteps": 5,
        "urSteps": 3,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 264,
        "short_description": "31-JI-7L Fokker"
      },
      {
        "name": "17-tone 11-limit",
        "description": "17-tone 11-Limit Rational Intonation scale by Erv Wilson, consisting of 17 notes per octave derived from harmonic series intervals up to a prime limit of 11.",
        "scale": parseScale(scale_17_ji_11l_wilson).scale,
        "equivSteps": 17,
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
          "#ffffff", "#e4fbe6", "#e1d0e1",
          "#ffffff", "#ffe5e5", "#d0d6e1",
          "#fffae5",
          "#ffffff", "#d0d6e1", "#e1d0e1",
          "#ffffff", "#e4fbe6", "#d0d6e1",
          "#fffae5", "#ffe5e5", "#d0d6e1",
          "#fffae5"],
        "spectrum_colors": false,
        "rSteps": 3,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 264,
        "short_description": "17-JI-11L Wilson"
      },
      // ADD a version in flats and sharps!
      {
        "name": "53-tone Extended Pythagorean",
        "description": "53-tone 3-Limit Rational Intonation scale, consisting of 53 notes per octave derived by tuning a chain of 53 3/2 perfect fifths: 26 are harmonics (above C) and 26 are subharmonics (below C). Notes are enharmonically respelled to produce a rising scale by combining two HEJI symbols: tilde and arrow indicate a combined alteration by a Schisma and a Syntonic Comma, which is equal to a Pythagorean Comma. Jing Fang (78–37 BCE), a Chinese music theorist, observed that a series of 53 just fifths is very nearly equal to 31 octaves.",
        "scale": parseScale(scale_53_ri_3l).scale,
        "equivSteps": 53,
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
          "#ffffff", "#ffe5e5", "#d0d6e1", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#d0d6e1", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#d0d6e1", "#e2caca", "#e1e1e0", "#e1e1e0", "#e1d0e1", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#d0d6e1", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#becbc3", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#f8ffeb", "#fffae5"],
        "spectrum_colors": false,
        "rSteps": 9,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.74074074,
        "short_description": "53-JI-3L Extended Pythagorean"
      },
      {
        "name": "55-tone Ptolemaic Euler Lattice", 
        "description": "55-tone 5-Limit Rational Intonation scale, based on Marc Sabat’s \"Euler Lattice Spirals Scenery\". The Pythagorean diatonic tones are each divided in the same symmetric pattern of 9 \"commas\". To divide the interval C 1/1 - D 9/8 add two notes above C: 81/80 and 25/24, then add two more notes one Syntonic Comma above each of these. Similarly, add two notes below D: 10/9 and 27/25; then, add two more notes a Syntonic Comma below each of these. To divide the diatonic limmas E-F and B-C, add two successive Syntonic Commas upward from the lower note and two commas downward from the higher note, reaching a point of enharmonic near-equivalence between E and F.",
        "scale": parseScale(scale_55_ji_5l).scale,
        "equivSteps": 55,
        "note_names": [
          "C", "C", "C", "C", "C", "D", "D", "D", "D",
          "D", "D", "D", "D", "D", "E", "E", "E", "E",
          "E", "E", "E", "F", "F",
          "F", "F", "F", "F", "F", "G", "G", "G", "G",
          "G", "G", "G", "G", "G", "A", "A", "A", "A",
          "A", "A", "A", "A", "A", "B", "B", "B", "B",
          "B", "B", "B", "C", "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#ffe5e5", "#dee2da", "#e2caca", "#dee2da", "#d0d0d7", "#dce1d0", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#dee2da", "#e2caca", "#dee2da", "#d0d0d7", "#dce1d0", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#dee2da", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#dee2da", "#e2caca", "#dee2da", "#d0d0d7", "#dce1d0", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#dee2da", "#e2caca", "#dee2da", "#d0d0d7", "#dce1d0", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#dee2da", "#e2caca", "#dee2da", "#d0d0d7", "#dce1d0", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#dee2da", "#f8ffeb", "#fffae5"],
        "spectrum_colors": false,
        "rSteps": 9,
        "urSteps": 5,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 262.451161,
        "short_description": "55-JI-5L Ptolemaic Euler Lattice"
      },
      {
        "name": "41-tone Septimal-Pythagorean",
        "description": "41-tone 7-Limit Rational Intonation scale, based on La Monte Young’s Well-Tuned-Piano 12-note tuning. The Pythagorean diatonic tones (C-D, D-E, F-G, G-A, A-B) are each divided Limma-Comma-Limma (i.e., C, D♭, C♯, D), producing a division of the octave into 5 Pythagorean Commas and 12 limmas (including E-F and B-C). Each Limma is divided further into three septimal intervals with sizes 64/63, 49/48, 64/63. The resulting 41 note scale consists of 5 Pythagorean Commas (24c), 12 49/48’s (35c), and 24 Septimal Commas (27c).",
        "scale": parseScale(scale_41_ji_7l).scale,
        "equivSteps": 41,
        "note_names": [
          "C", "C", "D", "D", "C", "C", "D",
          "D", "D", "E", "E", "D", "D", "E",
          "E", "E", "F",
          "F", "F", "G", "G", "F", "F", "G",
          "G", "G", "A", "A", "G", "G", "A",
          "A", "A", "B", "B", "A", "A", "B",
          "B", "B", "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#fffae5",
          "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#fffae5"],
        "spectrum_colors": false,
        "rSteps": 7,
        "urSteps": 3,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.740740,
        "short_description": "41-JI-7L Sabat-Young"
      },
      {
        "name": "53-tone 13-limit",
        "description": "Cam Taylor’s 53-tone 13-Limit Rational Intonation scale, consisting of 53 symmetrically derived notes per octave derived from harmonic series intervals up to a prime limit of 13.",
        "scale": parseScale(scale_53_ji_13l_ct).scale,
        "equivSteps": 53,
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
          "#ffffff", "#fffae5", "#d0d6e1", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#e1d0e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#ffe5e5",
          "#ffffff", "#fffae5", "#d0d6e1", "#e1d0e1", "#e1e1e0", "#e1e1e0", "#e1d0e1", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#e1d0e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1", "#e1d0e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#cee3e2", "#fffae5"],
        "spectrum_colors": false,
        "rSteps": 9,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.74074074,
        "short_description": "53-RI-13L Cam Taylor"
      }
    ]
  },
  {
    "name": "Extended Meantone Temperaments",
    settings: [
      {
        "name": "Vicentino I (1555) 31-tone Extended Meantone (g♭-a♯♯♯)",
        "description": "31-tone scale in extended 1/4 Comma meantone (probably the tuning used for Nicola Vicentino’s instruments, following his description). Each fifth in the range g♭-a♯♯♯ is narrowed from its JI ratio (3/2) by 1/4 of a Syntonic Comma, so that four successive fifths produce a major third (5/4). Standard 12-tone meantone usually ranges from e♭ to g♯, leaving a so-called \"wolf\" fifth. By extending the tuning to 31 notes, a circulating well-temperament is produced: the missing c may be replaced by the enharmonically nearly-equivalent pitch b. Note that b *is* equivalent to c!",
        "scale": parseScale(scale_31_mt_vicentino).scale,
        "equivSteps": 31,
        "note_names": [
          "c", "c", "c", "d", "d",
          "d", "d", "d", "e", "e",
          "e", "e", "e",
          "f", "f", "f", "g", "g",
          "g", "g", "g", "a", "a",
          "a", "a", "a", "b", "b",
          "b", "b", "b"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da",
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da"],
        "spectrum_colors": false,
        "rSteps": 5,
        "urSteps": 3,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 263.1813855, 
        "short_description": "31-Extended-Meantone (g♭-a♯♯♯) - Vicentino I"
      },
      {
        "name": "Vicentino II (1555) 38-tone Adaptive Just Intonation",
        "description": "19 tones from Extended 1/4 Syntonic Comma Meantone (g♭-b♯) combined with another tuning of the same 19 notes, raised by 1/4 of a Syntonic Comma, to produce perfect fifths. An example of \"adaptive\" Rational Intonation, this tuning allows triads to be played with 3/2 fifths and 5/4 major thirds or 6/5 minor thirds.",
        "scale": parseScale(scale_19_19P5_amt_vicentino).scale,
        "equivSteps": 38,
        "note_names": [
          "c", "c", "c", "c", "d", "d",
          "d", "d", "d", "d", "e", "e",
          "e", "e", "e", "e",
          "f", "f", "f", "f", "g", "g",
          "g", "g", "g", "g", "a", "a",
          "a", "a", "a", "a", "b", "b",
          "b", "b", "b", "b"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#ffe5e5", "#dee2da", "#fffae5", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#fffae5", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#fffae5",
          "#ffffff", "#ffe5e5", "#dee2da", "#fffae5", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#fffae5", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#fffae5", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#fffae5"],
        "spectrum_colors": false,
        "rSteps": 6,
        "urSteps": 5,
        "hexSize": 42,
        "rotation": -34.5,
        "fundamental": 263.0921203,
        "short_description": "19 from Extended Meantone with P5s - Vicentino II"
      },
      {
        "name": "2/17-Schisma Extended Meantone (Helmholtz)",
        "description": "35-tone scale tempering the perfect fifth narrow by 2/17 Schisma (by dividing the ratio 32805/32768, or ca. 2 cents, representing the difference between 8 3/2 perfect fifths and a 5/4, into very small parts). 8 perfect fifths produce a 5/4 major third less 1/17 schisma and nine perfect fifths produce a 6/5 minor third less 1/17 schisma. Based on Hermann von Helmholtz’s 24-note harmonium tuning and Gioseffo Zarlino’s 2/7 Syntonic Comma Meantone.",
        "scale": parseScale(scale_35_mt_sabat_helmholtz).scale,
        "equivSteps": 35,
        "note_names": [
            "C", "C", "C", "C", "D", "D",
            "D", "D", "D", "D", "E", "E",
            "E", "E", "F",
            "F", "F", "F", "F", "G", "G",
            "G", "G", "G", "G", "A", "A",
            "A", "A", "A", "A", "B", "B",
            "B", "B", "C"],          
        "key_labels": "note_names",
        "note_colors": [
            "#ffffff", "#ffe5e5", "#e2caca", "#dee2da", "#d0d0d7", "#fffae5",
            "#ffffff", "#ffe5e5", "#e2caca", "#dee2da", "#d0d0d7", "#fffae5",
            "#ffffff", "#ffe5e5", "#fffae5",
            "#ffffff", "#ffe5e5", "#e2caca", "#dee2da", "#d0d0d7", "#fffae5",
            "#ffffff", "#ffe5e5", "#e2caca", "#dee2da", "#d0d0d7", "#fffae5",
            "#ffffff", "#ffe5e5", "#e2caca", "#dee2da", "#d0d0d7", "#fffae5",
            "#ffffff", "#ffe5e5", "#fffae5"],
        "spectrum_colors": false,
        "rSteps": 6,
        "urSteps": 5,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.740740,
        "short_description": "35-MT Helmholtz"
      },
      {
        "name": "43-tone Extended 1/5-Syntonic Comma Meantone (d♭♭♭-d♯♯♯)",
        "description": "43-tone scale in extended 1/5 Syntonic Comma meantone. Each fifth in the range d♭♭♭-d♯♯♯ is narrowed from its JI ratio (3/2) by 1/5 of a Syntonic Comma (81/80 = ca. 21.5c), so that five successive fifths produce a major seventh (15/8). Standard 12-tone meantone usually ranges from E♭ to G♯, leaving a so-called \"wolf\" fifth. By extending the tuning to 43 notes, a circulating well-temperament is produced.",
        "scale": parseScale(scale_43_mt).scale,
        "equivSteps": 43,
        "note_names": [
          "c", "♭♭d", "♯♯b", "♯c", "♭d", "♭♭♭e", "♯♯c",
          "d", "♭♭e", "♯♯♯c", "♯d", "♭e", "♭♭f", "♯♯d",
          "e", "♭f", "♯♯♯d", "♯e",
          "f", "♭♭g", "♯♯e", "♯f", "♭g", "♭♭♭a", "♯♯f",
          "g", "♭♭a", "♯♯♯f", "♯g", "♭a", "♭♭♭b", "♯♯g",
          "a", "♭♭b", "♯♯♯g", "♯a", "♭b", "♭♭c", "♯♯a",
          "b", "♭c", "♭♭♭d", "♯b"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#ffe5e5", "#fffae5", "#dee2da", "#d0d0d7", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#dee2da", "#d0d0d7", "#ffe5e5", "#fffae5",
          "#ffffff", "#d0d0d7", "#e4fbe6", "#dee2da",
          "#ffffff", "#ffe5e5", "#fffae5", "#dee2da", "#d0d0d7", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#dee2da", "#d0d0d7", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#dee2da", "#d0d0d7", "#ffe5e5", "#fffae5",
          "#ffffff", "#d0d0d7", "#cee3e2", "#dee2da"],
        "spectrum_colors": false,
        "rSteps": 7,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 262.682024,
        "short_description": "43-mt, D♭♭♭-D♯♯♯"
      },
      {
        "name": "55-tone Extended 1/6-Pythagorean Comma Meantone (a♭♭♭♭-g♯♯♯♯)", 
        "description": "55-tone scale in extended 1/6 Pythagorean Comma meantone. Each fifth in the range A♭♭♭♭-G♯♯♯♯ is narrowed from its JI ratio (3/2) by 1/6 of a Pythagorean Comma (531441/524288 = ca. 23.5c), so that six successive fifths produce a Pythagorean tritone (729/512). Standard 12-tone meantone usually ranges from E♭ to G♯, leaving a so-called \"wolf\" fifth. By extending the tuning to 55 notes, a circulating well-temperament is produced.",
        "scale": parseScale(scale_55_mt).scale,
        "equivSteps": 55,
        "note_names": [
          "c", "♭♭d", "♭♭♭♭e", "♯♯b", "♯c", "♭d", "♭♭♭e", "♯♯♯b", "♯♯c",
          "d", "♭♭e", "♭♭♭f", "♯♯♯c", "♯d", "♭e", "♭♭f", "♯♯♯♯c", "♯♯d",
          "e", "♭f", "♭♭♭g", "♯♯♯d", "♯e",
          "f", "♭♭g", "♭♭♭♭a", "♯♯e", "♯f", "♭g", "♭♭♭a", "♯♯♯e", "♯♯f",
          "g", "♭♭a", "♭♭♭♭b", "♯♯♯f", "♯g", "♭a", "♭♭♭b", "♯♯♯♯f", "♯♯g",
          "a", "♭♭b", "♭♭♭c", "♯♯♯g", "♯a", "♭b", "♭♭c", "♯♯♯♯g", "♯♯a",
          "b", "♭c", "♭♭♭d", "♯♯♯a", "♯b"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#ffe5e5", "#e4fbe6", "#fffae5", "#dee2da", "#d0d0d7", "#dce1d0", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#dce1d0", "#f8ffeb", "#dee2da", "#d0d0d7", "#ffe5e5", "#cee3e2", "#fffae5",
          "#ffffff", "#d0d0d7", "#dce1d0", "#f8ffeb", "#dee2da",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#fffae5", "#dee2da", "#d0d0d7", "#dce1d0", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#f8ffeb", "#dee2da", "#d0d0d7", "#dce1d0", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#dce1d0", "#f8ffeb", "#dee2da", "#d0d0d7", "#ffe5e5", "#cee3e2", "#fffae5",
          "#ffffff", "#d0d0d7", "#dce1d0", "#f8ffeb", "#dee2da"],
        "spectrum_colors": false,
        "rSteps": 9,
        "urSteps": 5,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 262.451161,
        "short_description": "55-mt, a♭♭♭♭-g♯♯♯♯"
      }
    ]
  },
  {
    "name": "Equal Division Temperaments",
    settings: [
      {
        "name": "19-edo (Salinas 1577)",
        "description": "19-tone equal tempered scale consisting of 19 sonically equal divisions per octave, similar to 1/3-Syntonic Comma meantone. System was first described by Francisco de Salinas in 1577. Step-size is 63.2 cents.",
        "scale": parseScale(scale_19_edo).scale,
        "equivSteps": 19,
        "note_names": [
          "c", "♯c", "♭d",
          "d", "♯d", "♭e",
          "e", "♯e ♭f",
          "f", "♯f", "♭g",
          "g", "♯g", "♭a",
          "a", "♯a", "♭b",
          "b", "♯b ♭c"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#dee2da", "#d0d0d7",
          "#ffffff", "#dee2da", "#d0d0d7",
          "#ffffff", "#e1e1e0",
          "#ffffff", "#dee2da", "#d0d0d7",
          "#ffffff", "#dee2da", "#d0d0d7",
          "#ffffff", "#dee2da", "#d0d0d7",
          "#ffffff", "#e1e1e0"],
        "spectrum_colors": false,
        "rSteps": 3,
        "urSteps": 2,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 264.022598,
        "short_description": "19-edo (Salinas)"
      },
      {
        "name": "19-edo (in enharmonic Septimal notation)",
        "description": "19-tone equal tempered scale consisting of 19 sonically equal divisions per octave, similar to 1/3-Syntonic Comma meantone. System was first described by francisco de Salinas in 1577. Step-size is 63.2 cents.",
        "scale": parseScale(scale_19_edo).scale,
        "equivSteps": 19,
        "note_names": [
          "c", "c d", "c d",
          "d", "d e", "d e",
          "e", "e f",
          "f", "f g", "f g",
          "g", "g a", "g a",
          "a", "a b", "a b",
          "b", "b c"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#dee2da", "#d0d0d7",
          "#ffffff", "#dee2da", "#d0d0d7",
          "#ffffff", "#e1e1e0",
          "#ffffff", "#dee2da", "#d0d0d7",
          "#ffffff", "#dee2da", "#d0d0d7",
          "#ffffff", "#dee2da", "#d0d0d7",
          "#ffffff", "#e1e1e0"],
        "spectrum_colors": false,
        "rSteps": 3,
        "urSteps": 2,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 264.022598,
        "short_description": "19-edo (Salinas, Septimal Notation)"
      },
      {
        "name": "31-edo (g♭♭-a♯♯)",
        "description": "31-tone equal tempered scale consisting of 31 sonically equal divisions per octave. Similar to 1/4-Syntonic Comma meantone, the system was first described by Lemme Rossi in 1666, although Vicentino effectively proposed it in 1555. Step-size is 38.7 cents.",
        "scale": parseScale(scale_31_edo).scale,
        "equivSteps": 31,
        "note_names": [
          "c", "♭♭d", "♯c", "♭d", "♯♯c",
          "d", "♭♭e", "♯d", "♭e", "♯♯d",
          "e", "♭f", "♯e",
          "f", "♭♭g", "♯f", "♭g", "♯♯f",
          "g", "♭♭a", "♯g", "♭a", "♯♯g",
          "a", "♭♭b", "♯a", "♭b", "♯♯a",
          "b", "♭c", "♯b"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da",
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da"],
        "spectrum_colors": false,
        "rSteps": 5,
        "urSteps": 3,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 263.0921203,
        "short_description": "31-edo (g♭♭-a♯♯)"
      },
      {
        "name": "31-edo (in Vicentino’s Notation, 1555)",
        "description": "31-tone equal tempered scale consisting of 31 sonically equal divisions per octave. Similar to 1/4-Syntonic Comma meantone, the system was first described by Lemme Rossi in 1666, although Vicentino effectively proposed it in 1555. Using a notation invented by Nicola Vicentino.",
        "scale": parseScale(scale_31_edo).scale,
        "equivSteps": 31,
        "note_names": [
          "c", "c", "c", "d", "d",
          "d", "d", "d", "e", "e",
          "e", "e", "e",
          "f", "f", "f", "g", "g",
          "g", "g", "g", "a", "a",
          "a", "a", "a", "b", "b",
          "b", "b", "b"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da",
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da", "#d0d0d7", "#f8ffeb",
          "#ffffff", "#ffe5e5", "#dee2da"],
        "spectrum_colors": false,
        "rSteps": 5,
        "urSteps": 3,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 263.0921203,
        "short_description": "31-edo (Vicentino Notation)"
      },
      {
        "name": "41-edo (Septimal-Pythagorean Notation)",
        "description": "41-tone equal tempered scale consisting of 41 sonically equal divisions per octave. Step-size is 29.3 cents.",
        "scale": parseScale(scale_41_edo).scale,
        "equivSteps": 41,
        "note_names": [
          "C", "C", "D", "D", "C", "C", "D",
          "D", "D", "E", "E", "D", "D", "E",
          "E", "E", "F",
          "F", "F", "G", "G", "F", "F", "G",
          "G", "G", "A", "A", "G", "G", "A",
          "A", "A", "B", "B", "A", "A", "B",
          "B", "B", "C"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#fffae5",
          "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#e2caca", "#d0d0d7", "#dee2da", "#d0d6e1", "#fffae5",
          "#ffffff", "#ffe5e5", "#fffae5"],
        "spectrum_colors": false,
        "rSteps": 7,
        "urSteps": 3,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.5221364,
        "short_description": "41-edo (Septimal-Pythagorean Notation)"
      },
      {
        "name": "43-edo (Sauveur 1696, d♭♭♭-d♯♯♯)",
        "description": "43-tone equal tempered scale consisting of 43 sonically equal divisions per octave. Similar to 1/5-Syntonic Comma Meantone, the system was described by Joseph Sauveur in 1696. Step-size (named méride by Sauveur) is 27.9 cents.",
        "scale": parseScale(scale_43_edo).scale,
        "equivSteps": 43,
        "note_names": [
          "c", "♭♭d", "♯♯b", "♯c", "♭d", "♭♭♭e", "♯♯c",
          "d", "♭♭e", "♯♯♯c", "♯d", "♭e", "♭♭f", "♯♯d",
          "e", "♭f", "♯♯♯d", "♯e",
          "f", "♭♭g", "♯♯e", "♯f", "♭g", "♭♭♭a", "♯♯f",
          "g", "♭♭a", "♯♯♯f", "♯g", "♭a", "♭♭♭b", "♯♯g",
          "a", "♭♭b", "♯♯♯g", "♯a", "♭b", "♭♭c", "♯♯a",
          "b", "♭c", "♭♭♭d", "♯b"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#ffe5e5", "#fffae5", "#dee2da", "#d0d0d7", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#dee2da", "#d0d0d7", "#ffe5e5", "#fffae5",
          "#ffffff", "#d0d0d7", "#e4fbe6", "#dee2da",
          "#ffffff", "#ffe5e5", "#fffae5", "#dee2da", "#d0d0d7", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#dee2da", "#d0d0d7", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#dee2da", "#d0d0d7", "#ffe5e5", "#fffae5",
          "#ffffff", "#d0d0d7", "#cee3e2", "#dee2da"],
        "spectrum_colors": false,
        "rSteps": 7,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 262.682024,
        "short_description": "43-edo (Sauveur, D♭♭♭-D♯♯♯)"
      },
      // add more info about early version of 53?
      {
        "name": "53-edo (Mercator/Newton, Syntonic-Pythagorean Notation)",
        "description": "53-tone equal tempered scale consisting of 53 sonically equal divisions per octave. Step-size is 22.6 cents (Holdrian or Mercator Comma).",
        "scale": parseScale(scale_53_edo).scale,
        "equivSteps": 53,
        "note_names": [
          "C", "C", "C", "C", "C", "C D", "D", "D", "D",
          "D", "D", "D", "D", "D", "E", "E", "E", "E",
          "E", "E F", "E F", "E F",
          "F", "F", "F", "F", "F", "F G", "G", "G", "G",
          "G", "G", "G", "G", "G", "A", "A", "A", "A",
          "A", "A", "A", "A", "A B", "B", "B", "B", "B",
          "B", "B C", "B C", "B C"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#ffe5e5", "#d0d6e1", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#d0d6e1", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#d0d6e1", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#d0d6e1", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#d0d6e1", "#e2caca", "#d0d0d7", "#dee2da", "#e1d0e1", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#cee3e2", "#fffae5"],
        "spectrum_colors": false,
        "rSteps": 9,
        "urSteps": 4,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.771561,
        "short_description": "53-edo (Mercator/Newton, Syntonic-Pythagorean Notation)"
      },
      {
        "name": "55-edo (Telemann 1767, a♭♭♭♭-g♯♯♯♯)", 
        "description": "55-tone equal tempered scale consisting of 55 sonically equal divisions per octave. Similar to 1/6-Pythagorean Comma meantone. Step-size is 21.8 cents.",
        "scale": parseScale(scale_55_edo).scale,
        "equivSteps": 55,
        "note_names": [
          "c", "♭♭d", "♭♭♭♭e", "♯♯b", "♯c", "♭d", "♭♭♭e", "♯♯♯b", "♯♯c",
          "d", "♭♭e", "♭♭♭f", "♯♯♯c", "♯d", "♭e", "♭♭f", "♯♯♯♯c", "♯♯d",
          "e", "♭f", "♭♭♭g", "♯♯♯d", "♯e",
          "f", "♭♭g", "♭♭♭♭a", "♯♯e", "♯f", "♭g", "♭♭♭a", "♯♯♯e", "♯♯f",
          "g", "♭♭a", "♭♭♭♭b", "♯♯♯f", "♯g", "♭a", "♭♭♭b", "♯♯♯♯f", "♯♯g",
          "a", "♭♭b", "♭♭♭c", "♯♯♯g", "♯a", "♭b", "♭♭c", "♯♯♯♯g", "♯♯a",
          "b", "♭c", "♭♭♭d", "♯♯♯a", "♯b"],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#ffe5e5", "#e4fbe6", "#fffae5", "#dee2da", "#d0d0d7", "#dce1d0", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#dce1d0", "#f8ffeb", "#dee2da", "#d0d0d7", "#ffe5e5", "#cee3e2", "#fffae5",
          "#ffffff", "#d0d0d7", "#dce1d0", "#f8ffeb", "#dee2da",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#fffae5", "#dee2da", "#d0d0d7", "#dce1d0", "#f8ffeb", "#fffae5",
          "#ffffff", "#ffe5e5", "#e4fbe6", "#f8ffeb", "#dee2da", "#d0d0d7", "#dce1d0", "#cee3e2", "#fffae5",
          "#ffffff", "#ffe5e5", "#dce1d0", "#f8ffeb", "#dee2da", "#d0d0d7", "#ffe5e5", "#cee3e2", "#fffae5",
          "#ffffff", "#d0d0d7", "#dce1d0", "#f8ffeb", "#dee2da"],
        "spectrum_colors": false,
        "rSteps": 9,
        "urSteps": 5,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 262.451161,
        "short_description": "55-edo (Telemann, a♭♭♭♭-g♯♯♯♯)"
      },
      {
        "name": "72-edo (Sims/Tenney)", 
        "description": "72-tone equal tempered scale consisting of 72 sonically equal divisions per octave, multiple of 12-edo closely approximating 11-limit JI. Step-size is 16 2/3 cents.",
        "scale": parseScale(scale_72_edo).scale,
        "equivSteps": 72,
        "note_names": [
          "C", "C", "C", "C", "C", "C",
          "C D", "D", "D", "D", "D", "D",
          "D", "D", "D", "D", "D", "D",
          "D E", "E", "E", "E", "E", "E",
          "E", "E", "E", "E F", "F", "F",
          "F", "F", "F", "F", "F", "F",
          "F G", "G", "G", "G", "G", "G", 
          "G", "G", "G", "G", "G", "G",
          "G A", "A", "A", "A", "A", "A",
          "A", "A", "A", "A", "A", "A",
          "A B", "B", "B", "B", "B", "B",
          "B", "B", "B", "B C", "C", "C"
        ],
        "key_labels": "note_names",
        "note_colors": [
          "#ffffff", "#fffae5", "#ffe5e5", "#e4fbe6", "#d0d6e1", "#e7e7ca",
          "#d0d0d7", "#dee2da", "#e2caca", "#cee3e2", "#e1d0e1", "#f8ffeb",
          "#ffffff", "#fffae5", "#ffe5e5", "#e4fbe6", "#d0d6e1", "#e7e7ca",
          "#d0d0d7", "#dee2da", "#e2caca", "#cee3e2", "#e1d0e1", "#f8ffeb",
          "#ffffff", "#fffae5", "#ffe5e5", "#e4fbe6", "#e1d0e1", "#f8ffeb", 
          "#ffffff", "#fffae5", "#ffe5e5", "#e4fbe6", "#d0d6e1", "#e7e7ca",
          "#d0d0d7", "#dee2da", "#e2caca", "#cee3e2", "#e1d0e1", "#f8ffeb",
          "#ffffff", "#fffae5", "#ffe5e5", "#e4fbe6", "#d0d6e1", "#e7e7ca",
          "#d0d0d7", "#dee2da", "#e2caca", "#cee3e2", "#e1d0e1", "#f8ffeb",
          "#ffffff", "#fffae5", "#ffe5e5", "#e4fbe6", "#d0d6e1", "#e7e7ca",
          "#d0d0d7", "#dee2da", "#e2caca", "#cee3e2", "#e1d0e1", "#f8ffeb",
          "#ffffff", "#fffae5", "#ffe5e5", "#cee3e2", "#e1d0e1", "#f8ffeb",
        ],
        "spectrum_colors": false,
        "rSteps": 12,
        "urSteps": 5,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 262.451161,
        "short_description": "72-edo (Sims/Tenney)"
      }
    ]
  },
  {
    "name": "Harmonic and Subharmonic Series",
    settings: [
      {
        "name": "Harmonic Series partials from 16° to 128°",
        "description": "A three octave cycle comprising Harmonic Series partials 16° to 128°.",
        "scale": parseScale(scale_112_hs_16to128).scale,
        "equivSteps": 112,
        "note_names": [
          "16°", "17°", "18°", "19°", "20°", "21°", "22°", "23°", "24°", "25°", "26°", "27°", "28°", "29°", "30°", "31°",
          "32°", "33°", "34°", "35°", "36°", "37°", "38°", "39°", "40°", "41°", "42°", "43°", "44°", "45°", "46°", "47°",
          "48°", "49°", "50°", "51°", "52°", "53°", "54°", "55°", "56°", "57°", "58°", "59°", "60°", "61°", "62°", "63°",
          "64°", "65°", "66°", "67°", "68°", "69°", "70°", "71°", "72°", "73°", "74°", "75°", "76°", "77°", "78°", "79°",
          "80°", "81°", "82°", "83°", "84°", "85°", "86°", "87°", "88°", "89°", "90°", "91°", "92°", "93°", "94°", "95°",
          "96°", "97°", "98°", "99°", "100°", "101°", "102°", "103°", "104°", "105°", "106°", "107°", "108°", "109°", "110°", "111°",
          "112°", "113°", "114°", "115°", "116°", "117°", "118°", "119°", "120°", "121°", "122°", "123°", "124°", "125°", "126°", "127°", "128°"],
        "key_labels": "note_names",
        "note_colors": [],
        "spectrum_colors": true,
        "fundamental_color": "#f5fbff",
        "rSteps": 8,
        "urSteps": 1,
        "hexSize": 34,
        "rotation": -16.102113751,
        "fundamental": 260.74074074,
        "short_description": "112-HS 16° to 128°"
      },
      {
        "name": "Harmonic and Subharmonic Series 16 to 64 combined",
        "description": "Harmonic and Subharmonic Series partials from 16 to 64 mapped onto a four octave cycle.",
        "scale": parseScale(scale_96_hss_16to64).scale,
        "equivSteps": 96,
        "note_names": [
          "16", "17°", "18°", "19°", "20°", "21°", "22°", "23°", "24°", "25°", "26°", "27°", "28°", "29°", "30°", "31°", "32°", "33°", "34°", "35°", "36°", "37°", "38°", "39°", "40°", "41°", "42°", "43°", "44°", "45°", "46°", "47°", "48°", "49°", "50°", "51°", "52°", "53°", "54°", "55°", "56°", "57°", "58°", "59°", "60°", "61°", "62°", "63°", "64", "u63", "u62", "u61", "u60", "u59", "u58", "u57", "u56", "u55", "u54", "u53", "u52", "u51", "u50", "u49", "u48", "u47", "u46", "u45", "u44", "u43", "u42", "u41", "u40", "u39", "u38", "u37", "u36", "u35", "u34", "u33", "u32", "u31", "u30", "u29", "u28", "u27", "u26", "u25", "u24", "u23", "u22", "u21", "u20", "u19", "u18", "u17", "16",
        ],
        "key_labels": "note_names",
        "note_colors": [],
        "spectrum_colors": true,
        "fundamental_color": "#f5fbff",
        "rSteps": 8,
        "urSteps": 1,
        "hexSize": 42,
        "rotation": -16.102113751,
        "fundamental": 260.74074074,
        "short_description": "96-HSS 16 to 64"
      },
      {
        "name": "19-tone modulating pattern (harmonic partials 32°-52°)",
        "description": "A cycle of Harmonic Series partials (32° 33°) 34° to 51° (52°), repeating at the perfect fifth over changing fundamentals. Partial 48° is reinterpreted as 32° (and 51° = 34°); the fundamental shifts up a perfect fifth.",
        "scale": parseScale(scale_19_hs_34to51).scale,
        "equivSteps": 19,
        "note_names": [
          "34°51°", "52°", "35°", "36°", "37°", "38°", "39°", "40°", "41°",
          "42°", "43°", "44°", "45°", "46°", "47°", "32°48°", "49°", "33°",
          "50°"],
        "key_labels": "note_names",
        "note_colors": [],
        "spectrum_colors": true,
        "fundamental_color": "#f5fbff",
        "rSteps": 3,
        "urSteps": 2,
        "hexSize": 40,
        "rotation": -16.102113751,
        "fundamental": 260.74074074,
        "short_description": "19-HS 34 to 51"
      }
    ]
  },
  {
    "name": "Interval Testing",
    settings: [
      {
        "name": "By Syntonic Commas (22 cents)", 
        "description": "One step = 1 cent, right-up moves in commas, right-down in cents.",
        "scale": parseScale(scale_1cent).scale,
        "equivSteps": 1,
        "note_names": ["-"],
        "key_labels": "none",
        "note_colors": [],
        "spectrum_colors": true,
        "fundamental_color": "#f5fbff",
        "rSteps": 22,
        "urSteps": 1,
        "hexSize": 28,
        "rotation": -29.3577535,
        "fundamental": 261.6255653,
        "short_description": "Interval Tester by Syntonic Commas (22 cents)"
      },
      {
        "name": "By Lesser Dieses (41 cents)", 
        "description": "One step = 1 cent, right-up moves in dieses, right-down in cents.",
        "scale": parseScale(scale_1cent).scale,
        "equivSteps": 1,
        "note_names": ["-"],
        "key_labels": "none",
        "note_colors": [],
        "spectrum_colors": true,
        "fundamental_color": "#f5fbff",
        "rSteps": 41,
        "urSteps": 1,
        "hexSize": 28,
        "rotation": -29.3577535,
        "fundamental": 261.6255653,
        "short_description": "Interval Tester by Diesis (41 cents)"
      },
      {
        "name": "By 24-edo Quarter-Tones (50 cents)", 
        "description": "One step = 1 cent, right-up moves in equal quarter-tones, right-down in cents.",
        "scale": parseScale(scale_1cent).scale,
        "equivSteps": 1,
        "note_names": ["-"],
        "key_labels": "none",
        "note_colors": [],
        "spectrum_colors": true,
        "fundamental_color": "#f5fbff",        
        "rSteps": 50,
        "urSteps": 1,
        "hexSize": 28,
        "rotation": -29.3577535,
        "fundamental": 261.6255653,
        "short_description": "Interval Tester by 24-edo Quarter-Tones (50 cents)"
      }      
    ]
  }
];

export default presets;

export const default_settings = presets[0].settings[0];
