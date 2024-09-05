import { ComponentProps } from "@app/core/Component.d";

export interface ColorProps extends ComponentProps {
  r?: number;
  g?: number;
  b?: number;
  a?: number;
  h?: number;
  s?: number;
  l?: number;
}
export const Color = function (this: ColorProps) {
  this.r = this.g = this.b = 0;
  this.h = this.s = this.l = 0;
  this.a = 1;
};
/** RGB */
Color.prototype.cssRGB = function () {
  return `rgb(${this.r},${this.g},${this.b})`;
};
Color.prototype.cssRGBA = function () {
  return `rgba(${this.r},${this.g},${this.b},${this.a})`;
};
Color.prototype.red = function () {
  return this.r;
};
Color.prototype.green = function () {
  return this.g;
};
Color.prototype.blue = function () {
  return this.b;
};
/** HSL */
Color.prototype.cssHSL = function () {
  return `hsl(${Math.round(360 * this.h)},${Math.round(
    100 * this.s,
  )}%,${Math.round(100 * this.l)}%)`;
};
Color.prototype.cssHSLA = function () {
  return `hsla(${Math.round(360 * this.h)},${Math.round(
    100 * this.s,
  )}%,${Math.round(100 * this.l)}%,${Math.round(this.a)})`;
};
Color.prototype.hue = function () {
  return this.h;
};
Color.prototype.saturation = function () {
  return this.s;
};
Color.prototype.lightness = function () {
  return this.l;
};
/** HEX */
Color.prototype.cssHEX = function () {
  return `#${`000${(
    this.r * 0x10000 +
    this.g * 0x100 +
    this.b
  ).toString(16)}`.substr(-6)}`;
};
/** Transparency */
Color.prototype.alpha = function () {
  return this.a;
};
/** Modifiers */
Color.prototype.saturate = function (v: string | number) {
  if (
    'string' == typeof v &&
    v.indexOf('%') > -1 &&
    !Number.isNaN((v = parseInt(v)))
  )
    this.s += v / 100;
  else if ('number' == typeof v)
    // range 255
    this.s += v / 255;
  else
    throw new Error('error: bad modifier format (percent or number)');
  if (this.s > 1) this.s = 1;
  else if (this.s < 0) this.s = 0;
  Color.prototype.Convertor.HSLToRGB.apply(this);
};
Color.prototype.desaturate = function (v: string | number) {
  this.saturate(`-${v}`);
};
Color.prototype.lighten = function (v: string | number) {
  if (
    'string' == typeof v &&
    v.indexOf('%') > -1 &&
    !Number.isNaN((v = parseInt(v)))
  )
    this.l += v / 100;
  else if ('number' == typeof v)
    // range 255
    this.l += v / 255;
  else
    throw new Error('error: bad modifier format (percent or number)');
  if (this.l > 1) this.l = 1;
  else if (this.l < 0) this.l = 0;
  Color.prototype.Convertor.HSLToRGB.apply(this);
};
Color.prototype.darken = function (v: string | number) {
  this.ligthen(`-${v}`);
};
Color.prototype.fadein = function (v: string | number) {
  if (
    'string' == typeof v &&
    v.indexOf('%') > -1 &&
    !Number.isNaN((v = parseInt(v)))
  )
    this.a += v / 100;
  else if ('number' == typeof v)
    // range 255
    this.a += v / 255;
  else
    throw new Error('error: bad modifier format (percent or number)');
  if (this.a > 1) this.a = 1;
  else if (this.a < 0) this.a = 0;
  Color.prototype.Convertor.HSLToRGB.apply(this);
};
Color.prototype.fadeout = function (v: string | number) {
  this.fadein(`-${v}`);
};
Color.prototype.spin = function (v: string | number) {
  if (
    'string' == typeof v &&
    v.indexOf('%') > -1 &&
    !Number.isNaN((v = parseInt(v)))
  )
    this.h += v / 100;
  else if ('number' == typeof v)
    // range 360
    this.h += v / 360;
  else
    throw new Error('error: bad modifier format (percent or number)');
  if (this.h > 1) this.h = 1;
  else if (this.h < 0) this.h = 0;
  Color.prototype.Convertor.HSLToRGB.apply(this);
};
/** Debug * /
Color.prototype.toString = function() {
  return "<span style=\"color: " + this.cssRGB() + "\">" + this.cssRGB() + "</span> / <span style=\"color: " + this.cssHSL() + "\">" + this.cssHSL() + "</span> / <span style=\"color: " + this.cssHEX() + "\">" + this.cssHEX() + "</span> / alpha: " + this.a + "";
};*/

Color.prototype.makeRGB = function () {
  // @ts-ignore
  var c = new Color(),
    sanitized;
  if (arguments.length < 3 || arguments.length > 4)
    throw new Error('error: 3 or 4 arguments');
  sanitized = Color.prototype.Sanitizer.RGB(
    arguments[0],
    arguments[1],
    arguments[2],
  );
  c.r = sanitized[0];
  c.g = sanitized[1];
  c.b = sanitized[2];
  if (arguments.length == 4) c.a = arguments[3];
  Color.prototype.Convertor.RGBToHSL.apply(c);
  return c;
};

Color.prototype.makeHSL = function () {
  // @ts-ignore
  var c = new Color(),
    sanitized;
  if (arguments.length < 3 || arguments.length > 4)
    throw new Error('error: 3 or 4 arguments');
  sanitized = Color.prototype.Sanitizer.HSL(
    arguments[0],
    arguments[1],
    arguments[2],
  );
  c.h = sanitized[0];
  c.s = sanitized[1];
  c.l = sanitized[2];
  if (arguments.length == 4) c.a = arguments[3];
  Color.prototype.Convertor.HSLToRGB.apply(c);
  return c;
};

Color.prototype.makeHEX = function (value: string) {
  // @ts-ignore
  var c = new Color(),
    sanitized;
  Color.prototype.Validator.checkHEX(value);
  if (value.length == 3) {
    sanitized = Color.prototype.Sanitizer.RGB(
      parseInt(value.substr(0, 1) + value.substr(0, 1), 16),
      parseInt(value.substr(1, 1) + value.substr(1, 1), 16),
      parseInt(value.substr(2, 1) + value.substr(2, 1), 16),
    );
  } else if (value.length == 6) {
    sanitized = Color.prototype.Sanitizer.RGB(
      parseInt(value.substr(0, 2), 16),
      parseInt(value.substr(2, 2), 16),
      parseInt(value.substr(4, 2), 16),
    );
  } else if (value.length == 8) {
    sanitized = Color.prototype.Sanitizer.RGB(
      parseInt(value.substr(0, 2), 16),
      parseInt(value.substr(2, 2), 16),
      parseInt(value.substr(4, 2), 16),
      parseInt(value.substr(4, 2), 16),
    );
  } else throw new Error('error: 3 or 6 arguments');
  c.r = sanitized[0];
  c.g = sanitized[1];
  c.b = sanitized[2];
  c.a = sanitized[3];
  Color.prototype.Convertor.RGBToHSL.apply(c);
  return c;
};

Color.prototype.Sanitizer = {
  RGB: function () {
    var o = [];
    if (arguments.length == 0) return;
    for (var i = 0; i < arguments.length; i++) {
      var c = arguments[i];
      if ('string' == typeof c && c.indexOf('%') > -1) {
        if (Number.isNaN((c = parseInt(c))))
          throw new Error('Bad format');
        if (c < 0 || c > 100) throw new Error('Bad format');
        o[i] = c / 100;
      } else {
        if ('string' == typeof c && Number.isNaN((c = parseInt(c))))
          throw new Error('Bad format');
        if (c < 0) throw new Error('Bad format');
        else if (c >= 0 && c < 1) o[i] = c;
        else if (c >= 1 && c < 256) o[i] = c / 255;
        else throw new Error('Bad format');
      }
    }
    return o;
  },
  HSL: function () {
    if (arguments.length < 3 || arguments.length > 4)
      throw new Error('3 or 4 arguments required');
    var h = arguments[0],
      s = arguments[1],
      l = arguments[2];
    if ('string' == typeof h && Number.isNaN((h = parseFloat(h))))
      throw new Error('Bad format for hue');
    if (h < 0 || h > 360)
      throw new Error('Hue out of range (0..360)');
    else if (
      (`${h}`.indexOf('.') > -1 && h > 1) ||
      `${h}`.indexOf('.') == -1
    )
      h /= 360;
    if ('string' == typeof s && s.indexOf('%') > -1) {
      if (Number.isNaN((s = parseInt(s))))
        throw new Error('Bad format for saturation');
      if (s < 0 || s > 100)
        throw new Error('Bad format for saturation');
      s /= 100;
    } else if (s < 0 || s > 1)
      throw new Error('Bad format for saturation');
    if ('string' == typeof l && l.indexOf('%') > -1) {
      if (Number.isNaN((l = parseInt(l))))
        throw new Error('Bad format for lightness');
      if (l < 0 || l > 100)
        throw new Error('Bad format for lightness');
      l /= 100;
    } else if (l < 0 || l > 1)
      throw new Error('Bad format for lightness');
    return [h, s, l];
  },
};

Color.prototype.Validator = {
  /**
   * Check a hexa color (without #)
   */
  checkHEX: function (value: any) {
    if (value.length != 6) throw new Error('Hexa color: bad length');
    value = value.toLowerCase();
    for (let i in value) {
      var c = value.charCodeAt(i);
      if (!((c >= 48 && c <= 57) || (c >= 97 && c <= 102)))
        throw new Error(
          `Hexa color: out of range for ${value} at position ${i}`,
        );
    }
  },
};

Color.prototype.Convertor = {
  /**
   * Calculates HSL Color
   * RGB must be normalized
   * Must be executed in a Color object context
   * http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
   */
  RGBToHSL: function () {
    //
    var r = this.r,
      g = this.g,
      b = this.b,
      max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    this.l = (max + min) / 2;
    if (max == min) {
      this.h = this.s = 0; // achromatic
    } else {
      var d = max - min;
      this.s = this.l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          this.h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          this.h = (b - r) / d + 2;
          break;
        case b:
          this.h = (r - g) / d + 4;
          break;
      }
      this.h /= 6;
    }
  },

  /**
   * Calculates RGB color (normalized)
   * HSL must be normalized
   * Must be executed in a Color object context
   * http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
   */
  HSLToRGB: function () {
    var h = this.h,
      s = this.s,
      l = this.l,
      hue2rgb = function (p: number, q: number, t: number) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
    if (s == 0) {
      this.r = this.g = this.b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      this.r = hue2rgb(p, q, h + 1 / 3);
      this.g = hue2rgb(p, q, h);
      this.b = hue2rgb(p, q, h - 1 / 3);
    }
  },
};

// // HTMLInputElement
// // HTMLInputColorElement
// class HTMLInputColorElement extends HTMLInputElement {
//   constructor() {
//     super();
//     Color.apply(this, arguments);
//     this.setAttribute('type', 'color');
//   }
// }
// HTMLInputColorElement.prototype = Object.assign(HTMLInputColorElement.prototype, Color.prototype);
// customElements.define('x-color', HTMLInputColorElement, { extends: 'input' });

/*
// document.querySelectorAll('x-color:unresolved').forEach((el)=>el.outerHTML=(new HTMLInputColorElement()).outerHTML);

// 2.
var myColorElement = new HTMLInputColorElement();
var myColor = new Color();
myColor.r = 128;
myColor.g = 128;
myColor.b = 128;
myColorElement.value = myColor.cssHEX();
document.body.appendChild(myColorElement);

// 3.
var myColorElement3 = document.createElement('input','x-color')
document.body.appendChild(myColorElement3);
*/
