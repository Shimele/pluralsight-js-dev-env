import numeral from 'numeral'

const courseValue = numeral(1000).format('$0,0.00')
alert(`i will pay ${courseValue} for this awesome course!`)
