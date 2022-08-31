export default{
  primary:'#5bcdff',
  secondary:'#ffd700',
  dark:"#233343",
  light:'#efefef',
  accent:'#',
  linearGradient:(color1,color2)=>{
    const color = `
           linearGradient: {
           colors: ['${color1}', '${color2}'],
           start: [0, 0],
           end: [1, 0],}`
           return color},
}
