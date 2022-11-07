var vakiot = {
  kelvin: 273.15,
  "R_j": 8.31451,
  "R_b": 0.0831451,
   u: 1.661e-27,
   "V_m": 22.41,
   "N_A": 6.022e23,
   c: 2.99792458e8,
   "h_j": 6.6260755e10-34,
   "h_e": 4.135669e-15,

}

var funktiot = {
  sina: function (x) {
    return Math.sin(x*(Math.PI/180));
  },
  cosa: function (x) {
    return Math.cos(x*(Math.PI/180));
  },
  tana: function (x) {
    return Math.tan(x*(Math.PI/180));
  },

  asina: function (x){
    return Math.asin(x)*(180/Math.PI);
  },
  acosa: function (x){
    return Math.acos(x)*(180/Math.PI);
  },
  atana: function (x){
    return Math.atan(x)*(180/Math.PI);
  },
  ln: function (x){
    return Math.log(x);
  }
}

var funktioData={
  sina: "sina\\left(x\\right)=sin\\left(x\\cdot\\frac{\\pi}{180}\\right)",
  cosa: "cosa\\left(x\\right)=cos\\left(x\\cdot\\frac{\\pi}{180}\\right)",
  tana: "tana\\left(x\\right)=tan\\left(x\\cdot\\frac{\\pi}{180}\\right)",

  asina: "a\\sin a\\left(x\\right)=a\\cos\\left(x\\right)\\cdot\\frac{180}{\\pi}",
  acosa: "a\\sin a\\left(x\\right)=a\\cos\\left(x\\right)\\cdot\\frac{180}{\\pi}",
  atana: "a\\sin a\\left(x\\right)=a\\cos\\left(x\\right)\\cdot\\frac{180}{\\pi}",
  ln: "ln\\left(x\\right)=log\\left(x\\right)"
}