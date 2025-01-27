import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import "regenerator-runtime/runtime";

import Keyboard from './keyboard';
import { presets, default_settings } from './settings/preset_values';
import { parseScale, scalaToCents, scalaToLabels, parsedScaleToLabels } from './settings/scale/parse-scale.js';
import { create_sample_synth } from './sample_synth';
import { instruments } from './sample_synth/instruments';
import { create_midi_synth} from './midi_synth';
import keyCodeToCoords from './settings/keycodes';
import { useQuery, Extract, ExtractInt, ExtractString, ExtractFloat, ExtractBool, ExtractJoinedString } from './use-query';
import Settings from './settings';
import Blurb from './blurb';

import PropTypes from 'prop-types';

import "normalize.css";
import "./hex-style.css";
import LoadingIcon from './hex.svg';
import './loader.css';

export const Loading = () => <LoadingIcon />;

let notChrome = !/Chrome/.test(navigator.userAgent);
let alertMessage = "Please use a desktop version of Google Chrome or Microsoft Edge to fully access this site.\nSome key features of the Web MIDI API do not currently work on phones or in other browsers. For Apple devices a recent version of iOS is required."
if (notChrome) alert(alertMessage);

const findPreset = (preset) => {
  for (let g of presets) {
    for (let p of g.settings) {
      if (p.name === preset) {
        return p;
      }
    }
  }
  console.log("Unable to find preset");
  return default_settings;
};

const normalize = (settings) => {
  const fundamental_color = (settings.fundamental_color || "").replace(/#/, '');
  const note_colors = settings.note_colors.map(c => c ? c.replace(/#/, '') : "ffffff");
  const rotation = settings.rotation * Math.PI / 180.0; // convert to radians
  const result = { ...settings, fundamental_color, keyCodeToCoords, note_colors, rotation };
  
  if (settings.key_labels === "enumerate") {
    result["degree"] = true; // if true label scale with degree numbers, else use names
  } else if (settings.key_labels === "note_names") {
    result["note"] = true;
  } else if (settings.key_labels === "scala_names") {
    result["scala"] = true;
  } else if (settings.key_labels === "cents") {
    result["cents"] = true;
  } else if (settings.key_labels === "no_labels") {
    result["no_labels"] = true;
  };

  if (settings.scale) {
    const scala_names = settings.scale.map(i => scalaToLabels(i)); // convert Scala file data to possible key labels
    const scale = settings.scale.map(i => scalaToCents(i)); // convert Scala file to cents
    const equivInterval = scale.pop(); // determine equave
    scale.unshift(0); // add the implicit fundamental to the scale
    scala_names.pop(); // drop equave
    scala_names.unshift("1/1"); // add implicit fundamental
    result["scala_names"] = scala_names;
    result["scale"] = scale;
    result["equivInterval"] = equivInterval;
  }
  return result;
};

//var counter = 0; //TODO why is the App() called so many times?

const App = () => {
  //counter += 1;
  //console.log("counter", counter);
  const [loading, setLoading] = useState(0);

  const [settings, setSettings] = useQuery({
    name: ExtractString,
    description: ExtractString,

    // Input
    midiin_device: ExtractString,
    midiin_channel: ExtractInt,
    midiin_degree0: ExtractInt,

    // Output
    output: ExtractString,
    instrument: ExtractString,
    fundamental: ExtractFloat,
    reference_degree: ExtractInt,
    midi_mapping: ExtractString,
    midi_device: ExtractString,
    midi_channel: ExtractInt,
    midi_velocity: ExtractInt,
    sysex_auto: ExtractBool,
    sysex_type: ExtractInt,
    device_id: ExtractInt,
    tuning_map_number: ExtractInt,
    tuning_map_degree0: ExtractInt,

    // Layout
    rSteps: ExtractInt,
    urSteps: ExtractInt,
    hexSize: ExtractInt,
    rotation: ExtractInt,
    // Scale
    scale: ExtractJoinedString,
    key_labels: ExtractString,
    equivSteps: ExtractInt,
    note_names: ExtractJoinedString,
    spectrum_colors: ExtractBool,
    fundamental_color: ExtractString,
    note_colors: ExtractJoinedString
  }, default_settings);

  const [active, setActive] = useState(false);
  const [synth, setSynth] = useState(null);
  const [midi, setMidi] = useState(null); // global const "midi" will store MIDIAccess
  const wait = l => l + 1;
  const signal = l => l - 1;

  useEffect(() => {
    if (navigator.requestMIDIAccess) {
      setLoading(wait);
      navigator.requestMIDIAccess( { sysex: true } ).then 
        (m => {
        setLoading(signal);
          onMIDISuccess(m);
      }, onMIDIFailure); 
    }
  }, []);

  function onMIDISuccess(midiAccess) {
    console.log("Web MIDI API with sysex for MTS messages is ready!"); // post success    
    setMidi(midiAccess); // MIDIAccess stored
    /*midiAccess.onstatechange = (e) => {
      console.log(e.port.name, e.port.id, e.port.state, "MIDI IO reset!");
      settings.midiin_device = "OFF";
      settings.midi_device = "OFF";
      sessionStorage.removeItem("midiin_device");
      sessionStorage.removeItem("midi_device");
    };*/
  };

  function onMIDIFailure() {
    console.log('Web MIDI API could not initialise!');
  }; // MIDI failure error

  // if sessionStorage values have been set for preferred output (sample/MIDI) and settings, use them

  if (sessionStorage.getItem("output")) {
   // console.log("sessionStorage output", sessionStorage.getItem("output"))
    settings.output = sessionStorage.getItem("output");
  } else {
    settings.output = "sample";
  };

  if (sessionStorage.getItem("instrument")) {
   // console.log("sessionStorage instrument", sessionStorage.getItem("instrument"))
    settings.instrument = sessionStorage.getItem("instrument");
  } else {
    settings.instrument = "WMRIByzantineST";
  };
  
  if (sessionStorage.getItem("midiin_device")) {
   // console.log("sessionStorage midiin_device", sessionStorage.getItem("midiin_device"))
    settings.midiin_device = sessionStorage.getItem("midiin_device");
  } else {
    settings.midiin_device = "OFF";
  };

  if (sessionStorage.getItem("midiin_channel")) {
   // console.log("sessionStorage midiin_channel", sessionStorage.getItem("midiin_channel"))
    settings.midiin_channel = parseInt(sessionStorage.getItem("midiin_channel"));
  } else {
    settings.midiin_channel = 0;
  };

  /* if (sessionStorage.getItem("midiin_degree0")) {
    // console.log("sessionStorage midiin_degree0", sessionStorage.getItem("midiin_degree0"))
    settings.midiin_degree0 = parseInt(sessionStorage.getItem("midiin_degree0"));
  } else {
      settings.midiin_degree0 = 60;
  }; */

  if (sessionStorage.getItem("midi_device")) {
   // console.log("sessionStorage midi_device", sessionStorage.getItem("midi_device"))
    settings.midi_device = sessionStorage.getItem("midi_device");
  } else {
    settings.midi_device = "OFF";
  };

  if (sessionStorage.getItem("midi_channel")) {
   // console.log("sessionStorage midi_channel", sessionStorage.getItem("midi_channel"))
    settings.midi_channel = parseInt(sessionStorage.getItem("midi_channel"));
  } else {
    settings.midi_channel = 0;
  };
  
  if (sessionStorage.getItem("midi_mapping")) {
   // console.log("sessionStorage midi_mapping", sessionStorage.getItem("midi_mapping"))
    settings.midi_mapping = sessionStorage.getItem("midi_mapping");
  } else {
    settings.midi_mapping = "sequential";
  };

  if (sessionStorage.getItem("midi_velocity")) {
  // console.log("sessionStorage midi_velocity", sessionStorage.getItem("midi_velocity"))
    settings.midi_velocity = parseInt(sessionStorage.getItem("midi_velocity"));
  } else {
    settings.midi_velocity = 72;
  };

  if (!settings.reference_degree) {
    settings.reference_degree = 0;
  };
  
  if (sessionStorage.getItem("sysex_type")) {
    settings.sysex_type = parseInt(sessionStorage.getItem("sysex_type"));
  } else {
    settings.sysex_type = 127;
  };

  if (sessionStorage.getItem("device_id")) {
    settings.device_id = parseInt(sessionStorage.getItem("device_id"));
  } else {
    settings.device_id = 127;
  };

  if (sessionStorage.getItem("tuning_map_number")) {
    settings.tuning_map_number = parseInt(sessionStorage.getItem("tuning_map_number"));
  } else {
    settings.tuning_map_number = 0;
  };
  
  if (sessionStorage.getItem("tuning_map_degree0")) {
    settings.tuning_map_degree0 = parseInt(sessionStorage.getItem("tuning_map_degree0"));
  } else {
    settings.tuning_map_degree0 = 60;
  };

  useEffect(() => {
    if (settings.output === "sample"
        && settings.instrument && settings.fundamental) {
      setLoading(wait);
      create_sample_synth(settings.instrument, settings.fundamental, settings.reference_degree, settings.scale)
        .then(s => {
          setLoading(signal);
          setSynth(s);
        }); // todo error handling
    }
    if (midi && settings.output === "midi" && (settings.midi_device !== "OFF") &&
      (settings.midi_channel >= 0) && settings.midi_mapping &&
      typeof settings.midi_velocity === "number") {
      setLoading(wait);

      create_midi_synth(settings.midiin_device, settings.midiin_degree0, midi.outputs.get(settings.midi_device), settings.midi_channel, settings.midi_mapping, settings.midi_velocity, settings.fundamental)
        .then(s => { 
          setLoading(signal);
          setSynth(s);
        }); // todo error handling
    }
  }, [settings.instrument, settings.fundamental, settings.reference_degree, settings.scale,
    settings.midi_device, settings.midi_channel, settings.midi_mapping, settings.midi_velocity,
    settings.output, midi]);

  const onChange = (key, value) => {
    setSettings(s => ({...s, [key]: value}));
  };

  const presetChanged = e => {
    setSettings(_ => findPreset(e.target.value));
  };

  const onImport = () => {
    setSettings(s => {
      if (s.scale_import) {
        const { filename, description, equivSteps, scale, labels, colors } = parseScale(s.scale_import);
        const scala_names = parsedScaleToLabels(scale);
        var f_color = colors.pop(); // deals with 1/1, missing in scala file
        //console.log("f_color", f_color)
        if (f_color == "null") {
          colors.unshift("#ffffff"); 
        } else {
          colors.unshift(f_color); 
        };
        var f_name = labels.pop(); // deals with 1/1
       // console.log("f_name", f_name)
        if (f_name == "null") {
          labels.unshift(""); 
        } else {
          labels.unshift(f_name); 
        };
           
        return {...s, name: filename, description, equivSteps, scale, scala_names, note_names: labels, note_colors: colors, key_labels: "scala_names" };
      } else {
        return s;
      }
    });
  };

  const valid = s => (
    (((s.output === "midi") && (s.midi_device !== "OFF") && (s.midi_channel >= 0) && s.midi_mapping &&
      (typeof s.midi_velocity === "number") && (s.midi_velocity > 0)) ||
     (s.output === "sample" && (s.fundamental >= 0.015625) && s.instrument)) &&
      s.rSteps && s.urSteps &&
      s.hexSize && s.hexSize >= 20 && typeof s.rotation === "number" &&
      s.scale && s.equivSteps &&
      (s.no_labels || s.degree && s.note_names || !s.degree) &&
      ((s.spectrum_colors && s.fundamental_color) || s.note_colors)
  );

  return (
    <div className={active ? "hide" : "show"}>
      {loading === 0 && valid(settings) && synth && (
        <Keyboard synth={synth} settings={normalize(settings)}
                  active={active} />
      )}

      {loading > 0 && <Loading/>}
      <button id="sidebar-button" onClick={() => setActive(s => !s)}>
        <div>&gt;</div>
      </button>
	  <nav id="sidebar">
        <h1>
          Plainsound Hexatone
        </h1>
        <p>
          <em>To play: click on notes, use a touchscreen, attach a MIDI keyboard or a Lumatone. When this sidebar is minimised, a computer keyboard may also be used as an input device. The H key is mapped to scale degree 0 and the spacebar acts as a sustain pedal, allowing chords to be played.</em>
        </p>
        <Settings presetChanged={presetChanged}
                    presets={presets}
                    onChange={onChange}
                    onImport={onImport}
                    settings={settings}
                    midi={midi}
                    instruments={instruments}/>
        <Blurb />
	  </nav>
    </div>
  );
};

export default App;
