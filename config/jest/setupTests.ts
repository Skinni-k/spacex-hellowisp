import '@testing-library/jest-dom/extend-expect'

global.open = jest.fn()
// eslint-disable-next-line @typescript-eslint/no-empty-function
window.HTMLElement.prototype.scrollIntoView = function () {}
