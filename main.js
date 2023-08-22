// Data uji 1
const massaUdin1 = 78
const tinggiUdin1 = 1.69
const bmiUdin1 = massaUdin1 / (tinggiUdin1 ** 2)

const massaNanang1 = 92
const tinggiNanang1 = 1.95
const bmiNanang1 = massaNanang1 / (tinggiNanang1 ** 2)

const udinLebihTinggi1 = bmiUdin1 > bmiNanang1
console.log(`BMI Udin (${bmiUdin1.toFixed(1)}) ${udinLebihTinggi1 ? "lebih tinggi dari" : "tidak lebih tinggi dari"} Nanang (${bmiNanang1.toFixed(1)})!`)

// Data uji 2
const massaUdin2 = 95
const tinggiUdin2 = 1.88
const bmiUdin2 = massaUdin1 / (tinggiUdin1 ** 2)

const massaNanang2 = 85
const tinggiNanang2 = 1.76
const bmiNanang2 = massaNanang2 / (tinggiNanang2 ** 2)

const udinLebihTinggi2 = bmiUdin2 > bmiNanang2
console.log(`BMI Udin (${bmiUdin2.toFixed(1)}) ${udinLebihTinggi2 ? "lebih tinggi dari" : "tidak lebih tinggi dari"} Nanang (${bmiNanang2.toFixed(1)})!`)
