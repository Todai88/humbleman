import RogueDungeon from "../../assets/RogueDungeon.png";
import RoguePlayer from "../../assets/RoguePlayer.png";
import Util from "../../assets/Util.png";

interface Frames {
  [name: string]: { start: number; end: number };
}

export default class Graphics {
  static readonly dungeon = {
    width: 16,
    height: 16,
    file: RogueDungeon,
    indices: {
      floor: {
        outer: [0x0, 0x08, 0x10]
      },
      block: 0x17,
      walls: {
        enclosed: 0x21,
        alone: 0x34,
        edges: {
          outer: {
            nw: 0x18,
            n: 0x19,
            ne: 0x1a,
            w: 0x20,
            e: 0x22,
            sw: 0x28,
            s: 0x29,
            se: 0x2a
          },
          inner: {
            se: 0x1b,
            sw: 0x1c,
            ne: 0x23,
            nw: 0x24
          }
        },
        intersections: {
          e_s: 0x30,
          n_e_s_w: 0x31,
          e_w: 0x32,
          s_w: 0x33,
          n_e_s: 0x38,
          w: 0x39,
          e: 0x3a,
          n_s_w: 0x3b,
          n_s: 0x40,
          s: 0x41,
          e_s_w: 0x42,
          n_e: 0x48,
          n_e_w: 0x49,
          n: 0x4a,
          n_w: 0x4b
        }
      }
    }
  };

  static readonly player = {
    width: 32,
    height: 32,
    file: RoguePlayer,
    frames: {
      idle: { start: 0x01, end: 0x07 },
      walk: { start: 0x08, end: 0x0d },
      walkBack: { start: 0x10, end: 0x15 },
      slash: { start: 0x18, end: 0x1c },
      slashUp: { start: 0x20, end: 0x25 },
      slashDown: { start: 0x28, end: 0x2d },
      hit: { start: 0x30, end: 0x34 },
      death: { start: 0x38, end: 0x3d }
    } as Frames
  };

  static readonly util = {
    width: 16,
    height: 16,
    file: Util,
    indices: {
      black: 0x00
    }
  };

  static randomIndex = (indices: Array<number>): number => {
    return indices[Math.floor(Math.random() * indices.length)];
  };
}