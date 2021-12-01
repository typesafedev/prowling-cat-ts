import { cats } from './cat-art'
var animation = require('ascii-animation')

const prowlingCat = (condition: any, callback: any): void => {
    animation.animate(cats, condition, callback).bold().colorize()
}

export { prowlingCat }